// Back to Top functionality
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

$('.back-to-top').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

// Dog information modal
$('.dog-info-btn').click(function() {
    var dogId = $(this).data('dog-id');
    $('#dogModal' + dogId).modal('show');
});

// Form submission
$('form').submit(function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Form submitted successfully!');
    this.reset();
});
