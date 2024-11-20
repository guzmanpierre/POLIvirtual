// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas las animaciones y funcionalidades
    initializeDashboard();
});

// Función principal de inicialización
function initializeDashboard() {
    // Inicializar diferentes componentes
    initializeCards();
    initializeProgressBars();
    initializeStatCards();
    initializeUserMenu();
    initializeNotifications();
}

// Inicialización de las tarjetas de cursos
function initializeCards() {
    // Seleccionar todas las tarjetas de cursos
    const cards = document.querySelectorAll('.course-card-container');
    
    // Aplicar animación de entrada a cada tarjeta
    cards.forEach((card, index) => {
        // Retrasar la animación de cada tarjeta
        setTimeout(() => {
            // Hacer visible la tarjeta con animación
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // 100ms de retraso entre cada tarjeta
    });

    // Agregar eventos de interacción a las tarjetas
    cards.forEach(card => {
        // Evento para el botón de entrada al curso
        const enterButton = card.querySelector('.enter-course');
        if (enterButton) {
            enterButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Evitar que el clic propague a la tarjeta
                handleCourseEnter(card);
            });
        }
    });
}

// Inicialización de las barras de progreso
function initializeProgressBars() {
    // Seleccionar todas las barras de progreso
    const progressBars = document.querySelectorAll('.progress-fill');
    
    // Animar cada barra de progreso
    progressBars.forEach(bar => {
        // Obtener el ancho final de la barra
        const targetWidth = bar.style.width;
        // Comenzar desde 0
        bar.style.width = '0';
        
        // Animar hasta el ancho objetivo
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
}

// Inicialización de las tarjetas de estadísticas
function initializeStatCards() {
    // Seleccionar todos los números de estadísticas
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Animar cada número
    statNumbers.forEach(stat => {
        animateNumber(stat);
    });
}

// Función para animar números
function animateNumber(element) {
    // Obtener el valor final
    const finalValue = parseFloat(element.textContent);
    let currentValue = 0;
    const duration = 2000; // Duración de la animación en ms
    const steps = 60; // Pasos de la animación
    const increment = finalValue / steps;
    
    // Función de animación
    const updateNumber = () => {
        currentValue += increment;
        if (currentValue <= finalValue) {
            element.textContent = currentValue.toFixed(1);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = finalValue;
        }
    };

    requestAnimationFrame(updateNumber);
}

// Inicialización del menú de usuario
function initializeUserMenu() {
    const userAvatar = document.querySelector('.user-avatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', toggleUserMenu);
    }
}

// Función para mostrar/ocultar menú de usuario
function toggleUserMenu() {
    // Aquí puedes agregar la lógica para mostrar un menú desplegable
    console.log('Toggle user menu');
}

// Inicialización de notificaciones
function initializeNotifications() {
    const notificationIcon = document.querySelector('.notification-icon');
    if (notificationIcon) {
        notificationIcon.addEventListener('click', showNotifications);
    }
}

// Función para mostrar notificaciones
function showNotifications() {
    // Aquí puedes agregar la lógica para mostrar las notificaciones
    console.log('Show notifications');
}

// Función para manejar la entrada a un curso
function handleCourseEnter(card) {
    // Obtener el título del curso
    const courseTitle = card.querySelector('h3').textContent;
    
    // Aquí puedes agregar la lógica de navegación al curso
    console.log(`Entering course: ${courseTitle}`);
    // window.location.href = `/course/${courseId}`;
}

// Función para manejar errores
function handleError(error) {
    console.error('Error in dashboard:', error);
    // Aquí puedes agregar lógica para mostrar errores al usuario
}

// Detectar cambios en el tamaño de la ventana
window.addEventListener('resize', () => {
    // Ajustar elementos según el nuevo tamaño
    handleResize();
});

// Función para manejar cambios de tamaño
function handleResize() {
    // Aquí puedes agregar lógica para ajustes responsive
    const width = window.innerWidth;
    
    // Ejemplo de ajuste según el ancho
    if (width < 768) {
        // Ajustes para móvil
    } else {
        // Ajustes para desktop
    }
}

// Función para actualizar datos en tiempo real (si es necesario)
function updateDashboardData() {
    // Aquí puedes agregar lógica para actualizar datos periódicamente
    // Por ejemplo, actualizaciones cada cierto tiempo
    setInterval(() => {
        // Actualizar datos
        fetchUpdatedData();
    }, 60000); // Actualizar cada minuto
}

// Función para obtener datos actualizados
function fetchUpdatedData() {
    // Aquí puedes agregar llamadas a API o actualizaciones
    // fetch('/api/dashboard-data')
    //     .then(response => response.json())
    //     .then(data => updateUI(data))
    //     .catch(handleError);
}

// Función para actualizar la interfaz
function updateUI(data) {
    // Aquí puedes agregar lógica para actualizar la UI con nuevos datos
    // Por ejemplo, actualizar estadísticas, progreso, etc.
}

// Iniciar actualización de datos si es necesario
// updateDashboardData();