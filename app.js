$(document).ready( function() {
    $('#nextJoke').on('click', function() {
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            method: 'GET',
            dataType: 'JSON' 
        }).done( function(response) {
            $('#jokeDisplay').text(response.joke)
        }).fail( function(error) {
            alert(error.responseJSON.errors)
        })
    })
})