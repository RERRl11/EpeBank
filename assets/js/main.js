// Configurar funcionalidades del navbar
function configurarNavbar() {
    const botonMenuMovil = document.querySelector('.mobile-menu-button');
    const menuNavbar = document.querySelector('.navbar-menu');

    if (botonMenuMovil && menuNavbar) {
        botonMenuMovil.addEventListener('click', () => {
            botonMenuMovil.classList.toggle('active');
            menuNavbar.classList.toggle('active');
            document.body.classList.toggle('no-scroll');

            // Animación del botón hamburguesa
            const spans = botonMenuMovil.querySelectorAll('span');
            if (botonMenuMovil.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.navbar-menu .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                botonMenuMovil.classList.remove('active');
                menuNavbar.classList.remove('active');
                document.body.classList.remove('no-scroll');

                const spans = botonMenuMovil.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            });
        });
    }

    // Actualizar clases activas
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
    const enlacesNav = document.querySelectorAll('.nav-link');

    enlacesNav.forEach(link => {
        const paginaLink = link.getAttribute('href').split('/').pop();
        if (paginaActual === paginaLink ||
            (paginaActual === 'servicios.html' && paginaLink === 'servicios.html')) {
            link.classList.add('active');
        }
    });

    // Configurar dropdowns
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-menu').style.opacity = '1';
            dropdown.querySelector('.dropdown-menu').style.visibility = 'visible';
            dropdown.querySelector('.dropdown-menu').style.transform = 'translateY(0)';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-menu').style.opacity = '0';
            dropdown.querySelector('.dropdown-menu').style.visibility = 'hidden';
            dropdown.querySelector('.dropdown-menu').style.transform = 'translateY(-10px)';
        });
    });
}

// Selector de idioma
function configurarSelectorIdioma() {
    const selectorIdioma = document.getElementById('language-selector');
    if (selectorIdioma) {
        const idiomaGuardado = localStorage.getItem('epebank-language') || 'es';
        selectorIdioma.value = idiomaGuardado;
        
        selectorIdioma.addEventListener('change', async (e) => {
            const idiomaSeleccionado = e.target.value;
            localStorage.setItem('epebank-language', idiomaSeleccionado);

            mostrarAlerta(`Idioma cambiado a: ${traducirNombreIdioma(idiomaSeleccionado)}`, 'success');

            if (window.traductor) {
                await window.traductor.cargarTraducciones(idiomaSeleccionado);
            }
        });
    }
}

// Función para obtener nombre legible del idioma
function traducirNombreIdioma(codigo) {
    const idiomas = {
        'es': 'Español',
        'en': 'Inglés',
        'qu': 'Quechua'
    };
    return idiomas[codigo] || codigo;
}

// Funcionalidad para los modales legales
function configurarModalesLegales() {
    const disparadoresModales = document.querySelectorAll('[data-modal]');
    const modales = document.querySelectorAll('.modal');
    const botonesCerrar = document.querySelectorAll('.close-modal');

    disparadoresModales.forEach(disparador => {
        disparador.addEventListener('click', function (e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal') + '-modal';
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.classList.add('modal-open');
            }
        });
    });

    botonesCerrar.forEach(boton => {
        boton.addEventListener('click', function () {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.classList.remove('modal-open');
        });
    });

    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.classList.remove('modal-open');
        }
    });
}

// Mostrar alertas centradas
function mostrarAlerta(mensaje, tipo) {
    // Crear alerta
    const alertaDiv = document.createElement('div');
    alertaDiv.className = `alert alert-${tipo}`;
    alertaDiv.textContent = mensaje;

    // Agregar al body para mostrar centrada y con z-index alto
    document.body.appendChild(alertaDiv);

    // Timeout para desaparición con transición
    setTimeout(() => {
        alertaDiv.classList.add('fade-out');
        alertaDiv.addEventListener('transitionend', () => {
            if (alertaDiv.parentNode) {
                alertaDiv.parentNode.removeChild(alertaDiv);
            }
        });
    }, 3000);
}

// Alerta persistente para estado offline
let alertaOffline = null;
function mostrarAlertaOffline() {
    if (!alertaOffline) {
        alertaOffline = document.createElement('div');
        alertaOffline.className = 'alert alert-error';
        alertaOffline.textContent = 'No se tiene conexión.';
        document.body.appendChild(alertaOffline);
    }
}

function ocultarAlertaOffline() {
    if (alertaOffline) {
        alertaOffline.classList.add('fade-out');
        alertaOffline.addEventListener('transitionend', () => {
            if (alertaOffline && alertaOffline.parentNode) {
                alertaOffline.parentNode.removeChild(alertaOffline);
                alertaOffline = null;
            }
        });
    }
}

// Detectar cambios en la conexión
window.addEventListener('offline', () => {
    mostrarAlertaOffline();
});

window.addEventListener('online', () => {
    ocultarAlertaOffline();
    mostrarAlerta('Conexión restaurada', 'success');
});

// Función para activar modo claro (variables CSS)
function activarModoClaro() {
    const raiz = document.documentElement.style;
    raiz.setProperty('--color-fondo', '#f5f7fa');
    raiz.setProperty('--color-texto', '#212529');
    raiz.setProperty('--color-primario', '#0056b3');
    raiz.setProperty('--color-secundario', '#003366');
    raiz.setProperty('--color-acento', '#ff6b00');
    raiz.setProperty('--color-texto-titulos','#1a3a8f');

    cambiarIconoModo(false);
    cambiarLogo(false);
    localStorage.setItem('modo-oscuro', 'false');
}

// Función para activar modo oscuro (variables CSS)
function activarModoOscuro() {
    const raiz = document.documentElement.style;
    raiz.setProperty('--color-fondo', '#121212');
    raiz.setProperty('--color-texto', '#f0f0f0');
    raiz.setProperty('--color-primario', '#4fc3f7');
    raiz.setProperty('--color-secundario', '#3399ff');
    raiz.setProperty('--color-acento', '#ffa65c');
    raiz.setProperty('--color-texto-titulos','#4fc3f7');
    
    cambiarLogo(true);
    cambiarIconoModo(true);
    localStorage.setItem('modo-oscuro', 'true');

}

// Cambia ícono del botón dependiendo si está activo el modo oscuro (true=oscuro)
function cambiarIconoModo(oscuroActivo) {
    const icono = document.getElementById('icono-modo-oscuro');
    if (!icono) return;
    if (oscuroActivo) {
        icono.classList.remove('fa-moon');
        icono.classList.add('fa-sun');
    } else {
        icono.classList.remove('fa-sun');
        icono.classList.add('fa-moon');
    }
}

// Cambiar logo según modo oscuro
function cambiarLogo(oscuroActivo) {
    const logo = document.getElementById('logo');
    if (logo) {
        if (oscuroActivo) {
            logo.src = 'assets/imagenes/LOGO2-EPEBANK-white.png';
        } else {
            logo.src = 'assets/imagenes/LOGO2-EPEBANK-.png';
        }
    }
}

// Función para alternar entre modo oscuro y claro
function alternarModoOscuro() {
    const modoOscuroGuardado = localStorage.getItem('modo-oscuro');
    if (modoOscuroGuardado === 'true') {
        activarModoClaro();
    } else {
        activarModoOscuro();
    }
}

// Inicializar al cargar la página (usar valor guardado o modo claro por defecto)
function inicializarModoOscuro() {
    const modoOscuroGuardado = localStorage.getItem('modo-oscuro');
    if (modoOscuroGuardado === 'true') {
        activarModoOscuro();
    } else {
        activarModoClaro();
    }
    // Configurar evento clic del botón solo si existe
    const boton = document.getElementById('btn-modo-oscuro');
    if (boton) {
        boton.addEventListener('click', alternarModoOscuro);
    }
}

function animateNumbers() {
    const numberElements = document.querySelectorAll('.number');
            
    numberElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-count'));
        const suffix = element.textContent.includes('%') ? '%' : '';
        const duration = 2000; // 2 segundos
        const step = target / (duration / 16); // 60fps
                
        let current = 0;
        const interval = setInterval(() => {
        current += step;
            if (current >= target) {
                clearInterval(interval);
                current = target;
            }
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    });
}
// Ejecutar cuando el elemento esté visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.numbers-grid').forEach(grid => {
    observer.observe(grid);
});

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
    configurarSelectorIdioma();
    animateNumbers();
    configurarNavbar();
    inicializarModoOscuro();
    // Revisar el estado inicial de conexión
    if (!navigator.onLine) {
        mostrarAlertaOffline();
    }
    configurarModalesLegales();
    // Aplicar traducciones después de cargar el footer
    if (window.traductor) {
        window.traductor.aplicarTraducciones();
    }
    // Aplicar traducciones después de cargar el navbar
    if (window.traductor) {
        window.traductor.aplicarTraducciones();
    }
});