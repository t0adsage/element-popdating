$(document).ready(function () {
    setTimeout(function () {
        $('#new_user_alert').fadeIn('easy');
        setInterval(nextSlide, 7000);
    }, 5000);

    var slides = document.querySelectorAll('.new_user_alert_box--in .slide');
    var currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';

    }
    $('.new_user_alert_close').on('click', function () {
        $('#new_user_alert').remove();

    });
});