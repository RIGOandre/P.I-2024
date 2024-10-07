document.addEventListener('DOMContentLoaded', function () {
    const slides = [
        {
            title: "Inclusão na Educação",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: "../static/images/slider1.png"
        },
        {
            title: "Realidade Aumentada",
            text: "RA é uma das tecnologias fundamentais para o desenvolvimento do metaverso.",
            image: "../static/images/slider2.png"
        },
        {
            title: "Trabalho no Metaverso",
            text: "O metaverso cria novos modelos de trabalho colaborativo e interações profissionais.",
            image: "../static/images/slider3.png"
        },
        {
            title: "Entretenimento Imersivo",
            text: "Experiências de entretenimento interativas e imersivas estão no centro do metaverso.",
            image: "../static/images/slider4.png"
        }
    ];

    let currentSlide = 0;

    const subtitleElement = document.getElementById('slider-subtitle');
    const textElement = document.getElementById('slider-text');
    const imageElement = document.getElementById('slider-image');
    const dots = document.querySelectorAll('.dot');

    document.getElementById('next-btn').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.dataset.slide);
            updateSlide();
        });
    });

    function updateSlide() {
        const slide = slides[currentSlide];
        subtitleElement.textContent = slide.title;
        textElement.textContent = slide.text;
        imageElement.src = slide.image;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    updateSlide();  
});
