class Translator {
    constructor() {
        this.translations = {};
        this.currentLanguage = null; // Cambiado a null para forzar primera carga
        this.placeholders = {
            terms: '<a href="#" data-modal="terms">',
            privacy: '<a href="#" data-modal="privacy">'
        };
    }

    // Cargar traducciones
    async loadTranslations(lang) {
        try {
            const response = await fetch(`/assets/traducciones/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${lang} translations`);
            }
            this.translations = await response.json();
            this.currentLanguage = lang;
            localStorage.setItem('epebank-language', lang);
            this.applyTranslations();
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback al español si hay error
            if (lang !== 'es') {
                await this.loadTranslations('es');
            }
        }
    }

    // Aplicar traducciones a la página
    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const keys = element.getAttribute('data-i18n').split('.');
            let translation = this.getTranslation(keys);

            if (translation) {
                translation = this.replacePlaceholders(translation);

                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else if (element.tagName === 'IMG' && element.hasAttribute('alt')) {
                    element.alt = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            languageSelector.value = this.currentLanguage;
        }

        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }

    // Obtener traducción anidada
    getTranslation(keys) {
        return keys.reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : null, this.translations);
    }

    // Reemplazar placeholders con HTML
    replacePlaceholders(text) {
        if (!text) return text;

        return text.replace(/\{(\w+)\}/g, (match, placeholder) => {
            return this.placeholders[placeholder] ?
                this.placeholders[placeholder] + this.translate(placeholder) + '</a>' :
                match;
        });
    }

    // Traducir texto directamente (para uso en JS)
    translate(key) {
        const keys = key.split('.');
        return this.getTranslation(keys) || key;
    }
}

// Instancia global del traductor
const translator = new Translator();

// Inicializar traducciones y configurar selector idioma
document.addEventListener('DOMContentLoaded', async () => {
    const savedLanguage = localStorage.getItem('epebank-language');
    const browserLanguage = navigator.language.split('-')[0];
    const defaultLanguage = ['es', 'en', 'qu'].includes(browserLanguage) ? browserLanguage : 'es';

    await translator.loadTranslations(savedLanguage || defaultLanguage);

    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = translator.currentLanguage;

        languageSelector.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem('epebank-language', selectedLang);
            // Recargar la página para aplicar el idioma seleccionado
            location.reload();
        });
    }
});

function traducirNombreIdioma(codigo) {
    const idiomas = {
        'es': 'Español',
        'en': 'Inglés',
        'qu': 'Quechua'
    };
    return idiomas[codigo] || codigo;
}

window.translator = translator;
