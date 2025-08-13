# 🏦 EPEBANK - Sistema de Banca Digital

Una aplicación web moderna de banca digital desarrollada con tecnologías web estándar (HTML5, CSS3, JavaScript) que ofrece servicios financieros completos con soporte multiidioma.

## 🚀 Características Principales

### 💳 Servicios Financieros
- **Cuentas Bancarias**: Gestión completa de cuentas corrientes y de ahorro
- **Tarjetas de Crédito/Débito**: Solicitud y administración de tarjetas
- **Préstamos**: Simulación y solicitud de préstamos personales
- **Inversiones**: Plataforma de inversión con diversas opciones de rentabilidad

### 🌐 Multiidioma
- **Español** (es)
- **English** (en) 
- **Quechua** (qu)

### 🔐 Seguridad
- Sistema de autenticación seguro
- Registro de usuarios con validación
- Sesiones protegidas

### 📱 Diseño Responsivo
- Interfaz adaptativa para dispositivos móviles
- Experiencia optimizada para tablets y desktop
- Diseño moderno con enfoque en usabilidad

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Estilos**: CSS Grid, Flexbox, Tailwind CSS, Animaciones modernas
- **Internacionalización**: Sistema de traducción dinámica multiidioma
- **Almacenamiento**: LocalStorage para persistencia de datos
- **Responsive**: Mobile-first design
- **Iconos**: Font Awesome
- **Fuentes**: Google Fonts (Roboto)

## 📁 Estructura del Proyecto

```
Practica/
├── index.html          # Página principal
├── login.html          # Inicio de sesión
├── registro.html       # Registro de nuevos usuarios
├── servicios.html      # Catálogo de servicios
├── nosotros.html       # Información de la empresa
├── contacto.html       # Formulario de contacto
├── assets/
│   ├── css/
│   │   └── styles.css  # Estilos principales
│   ├── js/
│   │   ├── main.js     # Lógica principal
│   │   ├── auth.js     # Autenticación
│   │   └── translations.js # Sistema de traducción
│   ├── imagenes/       # Recursos gráficos y logos
│   └── traducciones/   # Archivos de idioma
│       ├── es.json     # Español
│       ├── en.json     # Inglés
│       └── qu.json     # Quechua
├── .git/              # Control de versiones
└── .vscode/           # Configuración de VS Code
```

## 🎯 Páginas y Funcionalidades

### 🏠 Inicio (index.html)
- Hero section con llamado a la acción
- Presentación de servicios destacados
- Sección "¿Por qué elegirnos?"
- Integración con redes sociales
- WhatsApp flotante para soporte

### 🔐 Autenticación
- **login.html**: Acceso seguro para clientes con validación
- **registro.html**: Creación de nuevas cuentas con formularios validados

### 💼 Servicios (servicios.html)
- Descripción detallada de cada servicio financiero
- Tasas y condiciones actualizadas
- Comparativas de productos
- Secciones específicas:
  - Cuentas bancarias
  - Tarjetas de crédito/débito
  - Préstamos personales
  - Inversiones y rentabilidad

### 👥 Nosotros (nosotros.html)
- Misión y visión corporativa
- Historia de EPEBANK
- Equipo directivo
- Valores corporativos
- Logros y reconocimientos

### 📞 Contacto (contacto.html)
- Formulario de contacto interactivo
- Información de ubicación
- Horarios de atención
- Múltiples canales de comunicación

## 🌟 Características Avanzadas

### 🎨 Modo Oscuro
- Toggle de modo claro/oscuro
- Persistencia de preferencia del usuario

### 🗣️ Sistema de Traducción
- Cambio dinámico de idioma sin recargar la página
- Soporte completo para español, inglés y quechua
- Archivos JSON separados para cada idioma

### 📊 Responsive Design
- Breakpoints optimizados:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Menú hamburguesa en móvil
- Diseño adaptativo de componentes

### 🔒 Seguridad y Privacidad
- Modales legales integrados:
  - Términos y condiciones
  - Política de privacidad
  - Protección de datos personales
  - Información legal completa

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Practica
   ```

2. **Abrir en el navegador**:
   - Simplemente abrir `index.html` en cualquier navegador moderno
   - O usar un servidor local:
     ```bash
     # Con Python
     python -m http.server 8000
     
     # Con Node.js
     npx serve .
     ```

3. **Configuración**:
   - No requiere instalación de dependencias
   - Compatible con todos los navegadores modernos
   - Optimizado para Chrome, Firefox, Safari y Edge

## 🧪 Testing

### Pruebas de Responsividad
- Probar en dispositivos móviles (iOS/Android)
- Verificar en tablets (iPad/Android)
- Validar en desktop (Windows/macOS/Linux)

### Pruebas de Idioma
- Cambiar entre español, inglés y quechua
- Verificar que todas las etiquetas se traduzcan correctamente
- Validar textos largos en diferentes idiomas

### Pruebas de Funcionalidad
- Navegación entre páginas
- Modo oscuro

## 📋 Requisitos del Sistema

- **Navegadores soportados**:
  - Chrome 80+
  - Firefox 75+
  - Safari 13+
  - Edge 80+

- **Resolución mínima**: 320px (móvil)

## 🤝 Contribución

- **[RERRl11](https://github.com/RERRl11)**: Desarrollador principal del proyecto.
