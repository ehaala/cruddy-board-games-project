$('.put-form').on('submit', function(e) {
    e.preventDefault();
    var element = $(this);
    var url = element.attr('action');
    var formData = element.serialize();
    $.ajax({
        method: 'put',
        url: url,
        data: formData
    }).done(function(data) {
        console.log(data);
    });
    window.location = '/';
});

$('.delete-link').on('click', function(e) {
    e.preventDefault();
    var element = $(this);
    var url = element.attr('href');
    $.ajax({
        method: 'delete',
        url: url
    }).done(function(data) {
        console.log(data);
    });
    window.location = '/';
});