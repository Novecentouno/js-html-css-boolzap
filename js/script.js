$(document).ready(
    function() {
        $('.form_messaggio').val('');
        $(document).on('click', '.invio_text',
            function() {
            aggiungiMessaggio();
            $('.messaggio_utente').show();
        });
        $('.form_messaggio').keypress(
            function(event) {
            if(event.which === 13 || event.keycode === 13) {
                aggiungiMessaggio();
                $('.messaggio_utente').addClass('active');
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
            console.log(testoMessaggio);
            if(testoMessaggio != '') {
                var nuovoMessaggio = $('.templete .messaggio_verde').clone();
                nuovoMessaggio.children('.message_text').text(testoMessaggio);


                var data = new Date();
                var oraCorrente = data.getHours();
                var minutoCorrente = data.getMinutes();
                var oraEsatta = aggiungiLoZero(oraCorrente) + ':' + aggiungiLoZero(minutoCorrente);

                nuovoMessaggio.children('.message_time').text(oraEsatta);

                $('.messaggio_verde').append(nuovoMessaggio);
                $('.form_messaggio').val('');
            }
        }

        function aggiungiLoZero(numero) {
            if(numero < 10) {
                return '0' + numero;
            }
            return numero;
        }
        $('.form_ricerca').val('');
        $('.form_ricerca').keypress(
            function(event) {
            if(event.which === 13 || event.keycode === 13) {
                $('.scheda_contatto').each();

            }
        });

        // $('.scheda_contatto').each(function () {
        //     $('.info_messaggio > h5').val();
        //     console.log($('.info_messaggio > h5').val());
        // });






});
