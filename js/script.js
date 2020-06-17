$(document).ready(
    function() {
        $('.form_messaggio').val('');
        $(document).on('click', '.invio_text',
            function() {
            aggiungiMessaggio();
        });
        $('.form_messaggio').keypress(
            function(event) {
            if(event.which === 13 || event.keycode === 13) {
                aggiungiMessaggio();
            }
        });
        // function aggiungiMessaggio(messaggioDaAggiungere) {
        //     var cloneMessaggio = $('.template2 .message_text').clone();
        //     cloneMessaggio.prepend(messaggioDaAggiungere);
        //     $('.messaggio_verde').append(cloneMessaggio);
        //     $('.form_messaggio').val('');
        // };

        function aggiungiMessaggio() {
            var testoMessaggio = $('.form_messaggio').val();
            if(testoMessaggio != '') {
                var nuovoMessaggio = $('.templete .messaggio').clone();
                nuovoMessaggio.children('.message_text').text(testoMessaggio);
                nuovoMessaggio.addClass('inviato');

                var data = new Date();
                var oraCorrente = data.getHours();
                var minutoCorrente = data.getMinutes();
                var oraEsatta = aggiungiLoZero(oraCorrente) + ':' + aggiungiLoZero(minutoCorrente);

                nuovoMessaggio.children('.message_time').text(oraEsatta);

                $('.finestra_messaggio').append(nuovoMessaggio);
                $('.form_messaggio').val('');
            }
        }

        function aggiungiLoZero(numero) {
            if(numero < 10) {
                return '0' + numero;
            }
            return numero;
        }
});
