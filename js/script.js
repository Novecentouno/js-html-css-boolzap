$(document).ready(
    function() {
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

        function aggiungiMessaggio() {
            var testoMessaggio = $('.form_messaggio').val();
            if(testoMessaggio != '') {
                var nuovoMessaggio = $('.template .messaggio').clone();
                nuovoMessaggio.children('.message_text').text(testoMessaggio);
                nuovoMessaggio.addClass('inviato');

                var data = new Date();
                var oraCorrente = data.getHours();
                var minutoCorrente = data.getMinutes();
                var oraEsatta = aggiungiLoZero(oraCorrente) + ':' + aggiungiLoZero(minutoCorrente);

                nuovoMessaggio.children('.message_time').text(oraEsatta);

                $('.finestra_messaggio').append(nuovoMessaggio);
                $('.form_messaggio').val('');
                $('.finestra_messaggio').scrollTop($('.finestra_messaggio').height());
            }
        }

        function aggiungiLoZero(numero) {
            if(numero < 10) {
                return '0' + numero;
            }
            return numero;
        }
});
