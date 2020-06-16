$(document).ready(
    function() {
        $('.form_messaggio').val('');
        $(document).on('click', '.invio_text',
            function() {
            var messaggioInserito = $('.form_messaggio').val();
            console.log($('.form_messaggio').val());
            // $('.messaggio_verde span').append(messaggioInserito);
            // $('.messaggio_utente').show();
            // $('.form_messaggio').val('');
            aggiungiMessaggio(messaggioInserito);
            $('.messaggio_utente').show();
        });
        $('.form_messaggio').keypress(
            function(event) {
            if(event.which === 13 || event.keycode === 13) {
                var messaggioInserito = $('.form_messaggio').val();
                console.log($('.form_messaggio').val());
                // $('.messaggio_verde span').append(messaggioInserito);
                // $('.form_messaggio').val('');
                aggiungiMessaggio(messaggioInserito);
                $('.messaggio_utente').addClass('active');
            }
        });
        function aggiungiMessaggio(messaggioDaAggiungere) {
            var cloneMessaggio = $('.template li').clone();
            cloneMessaggio.prepend(messaggioDaAggiungere);
            $('.messaggio_verde').append(cloneMessaggio);
            $('.form_messaggio').val('');
        };
});
