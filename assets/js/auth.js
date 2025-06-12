// Funcionalidades para login y registro
document.addEventListener('DOMContentLoaded', function() {
    // Solo ejecutar en páginas de login/registro
    if (document.querySelector('.auth-form')) {
        configurarFormulariosAuth();
    }
});

function configurarFormulariosAuth() {
    const formularioLogin = document.getElementById('login-form');
    const formularioRegistro = document.getElementById('register-form');
    
    if (formularioLogin) {
        formularioLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('#email').value;
            const password = this.querySelector('#password').value;
            
            // Validación simple
            if (!email || !password) {
                mostrarAlerta('Por favor complete todos los campos', 'error');
                return;
            }
            
            // Simular login (en un caso real sería una petición AJAX)
            mostrarAlerta('Inicio de sesión exitoso', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }
    
    if (formularioRegistro) {
        formularioRegistro.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const password = this.querySelector('#password').value;
            const confirmarPassword = this.querySelector('#confirm-password').value;
            
            // Validaciones
            if (!nombre || !email || !password || !confirmarPassword) {
                mostrarAlerta('Por favor complete todos los campos', 'error');
                return;
            }
            
            if (password !== confirmarPassword) {
                mostrarAlerta('Las contraseñas no coinciden', 'error');
                return;
            }
            
            if (password.length < 6) {
                mostrarAlerta('La contraseña debe tener al menos 6 caracteres', 'error');
                return;
            }
            
            // Simular registro
            mostrarAlerta('Registro exitoso. Redirigiendo...', 'success');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        });
    }
}

function mostrarAlerta(mensaje, tipo) {
    const alertaDiv = document.createElement('div');
    alertaDiv.className = `alert alert-${tipo}`;
    alertaDiv.textContent = mensaje;
    
    const contenedor = document.querySelector('.auth-container') || document.body;
    contenedor.prepend(alertaDiv);
    
    setTimeout(() => {
        alertaDiv.remove();
    }, 3000);
}