$(document).ready(
    function() {
        $(document).on('click', '.invio_text',
            function() {
            aggiungiMessaggio();
            setTimeout(computerMessaggio , 1000);

        });
        $('.form_messaggio').keypress(
            function(event) {
            if(event.which === 13 || event.keycode === 13) {
                aggiungiMessaggio();
                setTimeout(computerMessaggio , 1000);
            }
        });
        // Funzione messaggio inserito utente
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
                $('.area_message').scrollTop($('.area_message').height());
            }
        }
        // Funzione messaggio computer dopo 1 secondo
        function computerMessaggio() {
            var testoMessaggio = 'Ok va bene!';

                var nuovoMessaggio = $('.template .messaggio').clone();
                nuovoMessaggio.children('.message_text').text(testoMessaggio);
                nuovoMessaggio.addClass('ricevuto');

                var data = new Date();
                var oraCorrente = data.getHours();
                var minutoCorrente = data.getMinutes();
                var oraEsatta = aggiungiLoZero(oraCorrente) + ':' + aggiungiLoZero(minutoCorrente);

                nuovoMessaggio.children('.message_time').text(oraEsatta);

                $('.finestra_messaggio').append(nuovoMessaggio);
                $('.form_messaggio').val('');
                $('.area_message').scrollTop($('.area_message').height());

        }
        // Normalizzare ora corrente
        function aggiungiLoZero(numero) {
            if(numero < 10) {
                return '0' + numero;
            }
            return numero;
        }
        // Ricerca Contatti
        var ricercaVuota = $('.form_ricerca').val('');
        $('.form_ricerca').click(function(){
            $('.scheda_contatto').each(function() {
                $('h5').text();
            })
        });

});
