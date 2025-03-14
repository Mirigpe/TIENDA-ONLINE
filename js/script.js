//SLIDER 1//
const initSlider = () => {
    const slider = document.querySelector(".slider-container .slider");
    const slideButtons = document.querySelectorAll(".btns .slider-btn");
    const sliderItems = document.querySelectorAll(".slider .slider-item");
    
    const itemWidth = sliderItems[0].clientWidth
    
    let isScrolling = false;
    // Define la función de animación personalizada
    const smoothScroll = (slider, scrollAmount) => {
        if (isScrolling) return;
        isScrolling = true;

        const startPosition = slider.scrollLeft;
        const targetPosition = startPosition + scrollAmount;
        const duration = 500; // Duración en milisegundos (0.5 segundos)
        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // Máximo progreso es 1
            const easedProgress = progress < 0.5
                ? 2 * progress ** 2 // Aceleración
                : 1 - Math.pow(-2 * progress + 2, 2) / 2; // Desaceleración

            slider.scrollLeft = startPosition + (targetPosition - startPosition) * easedProgress;

            if (progress < 1) {
                requestAnimationFrame(step); // Continúa la animación hasta completarse
            } else {
                isScrolling = false; // Libera la bandera al terminar
            }
        };

        requestAnimationFrame(step);
    };

    // Agrega eventos a los botones
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = itemWidth * direction;
            smoothScroll(slider, scrollAmount);
        });
    });    
};

// Ejecuta la función cuando la página cargue
window.addEventListener("load", initSlider);


//SLIDER 2//
const initSliderTwo = () => {
    const slider = document.querySelector(".slider-container-2 .slider-2");
    const slideButtons = document.querySelectorAll(".btns-2 .slider-btn-2");
    const sliderItems = document.querySelectorAll(".slider-2 .slider-item-2");

    const itemWidth = sliderItems[0].clientWidth;

    let isScrolling = false;

    const smoothScroll = (slider, scrollAmount) => {
        if (isScrolling) return;
        isScrolling = true;

        const startPosition = slider.scrollLeft;
        const targetPosition = startPosition + scrollAmount;
        const duration = 500;
        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = progress < 0.5
                ? 2 * progress ** 2
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            slider.scrollLeft = startPosition + (targetPosition - startPosition) * easedProgress;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                isScrolling = false;
            }
        };

        requestAnimationFrame(step);
    };

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id.includes("prev") ? -1 : 1; // Evalúa por 'prev' o 'next'
            const scrollAmount = itemWidth * direction;
            smoothScroll(slider, scrollAmount);
        });
    });
};

// Ejecuta ambas funciones cuando cargue la página
window.addEventListener("load", () => {
    initSlider();
    initSliderTwo();
});