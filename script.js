let currentIndex = 0;

const testimonials = document.querySelectorAll('.testimonial-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

// Initialize the first testimonial to show
showTestimonial(currentIndex);
