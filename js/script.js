$(document).ready(
    function() {
        // funzione che rende visibile la dropdown al click sulla '.freccina'
        $(document).on('click','.freccina', function() {
            // toglie la visibilità al dropdown non selezionato
            $(this).parent().siblings().find('.drop_down').removeClass('active');
            // da la visibilità al dropdown selezionato
            $(this).siblings('.drop_down').toggleClass('active');
        });
        // funzione che elimina la dropdown al click sul tasto elimina
        $(document).on('click','.elimina', function() {
            $(this).closest('.messaggio').remove();
        });

        // funzione che applica il background color alla scheda contatto sleezionata
        $('.scheda_contatto').click(function(){
            // rimuove la classe 'selected' alle schede contatto non selezionate
            $('.scheda_contatto').removeClass('selected');
            // aggiunge la classe 'selected' alla scheda contatto selezionata
            $(this).addClass('selected');
        });


        // RICERCA CONTATTI
        $('.form_ricerca').keyup(function(){
            // leggo il valore della input
            var userSearch = $(this).val().toLowerCase();
            // prendo tutti i contatti
            var allContact = $('.scheda_contatto');
            // per ogni contatto che il valore contenga la stringa inserita nell'input dall'utente
            // se la stringa dell'utente è compresa nel nome,visualizzo il contatto oppure lo nascondo
            allContact.each(function() {
                var contactName = $(this).find('h5').text().toLowerCase();
                // console.log(contactName);
                if(contactName.includes(userSearch)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            })
        })

        // Invio messaggio al click dell'aereoplanino
        $(document).on('click', '.invio_text',
            function() {
            aggiungiMessaggio();
            $('#sta_scrivendo').text('Sta scrivendo...');
            setTimeout(computerMessaggio , 3000);
            $('.doppia_spunta').show(3000);
        });
        // Invio messaggio al click 'INVIO'
        $('.form_messaggio').keypress(
            function(event) {
            if(event.which === 13 || event.keycode === 13) {
                aggiungiMessaggio();
                $('#sta_scrivendo').text('Sta scrivendo...');
                setTimeout(computerMessaggio , 3000);
                $('.doppia_spunta').show(3000);
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
                $('.finestra_messaggio.active').append(nuovoMessaggio);
                $('.form_messaggio').val('');
                $('.area_message').scrollTop($('.area_message').prop('scrollHeight'));
            } else if (testoMessaggio === '') {
                nuovoMessaggio.children('.message_text').text();
                nuovoMessaggio.addClass('inviato');
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
            $('.finestra_messaggio.active').append(nuovoMessaggio);
            $('.form_messaggio').val('');
            $('.area_message').scrollTop($('.area_message').prop('scrollHeight'));
            $('#sta_scrivendo').text('Ultimo accesso oggi alle ' + oraEsatta );
        }
        // Inseirire l'orario corrente
        var data = new Date();
        var oraCorrente = data.getHours();
        var minutoCorrente = data.getMinutes();
        var oraEsatta = aggiungiLoZero(oraCorrente) + ':' + aggiungiLoZero(minutoCorrente);
        $('.orario_corrente').text(oraEsatta);




        // Normalizzare ora corrente
        function aggiungiLoZero(numero) {
            if(numero < 10) {
                return '0' + numero;
            }
            return numero;
        }
        // Ricerca Contatti Alternativa
        // var ricercaVuota = $('.form_ricerca').val('');
        // $('.form_ricerca').keyup(function(){
        //     var cercaContatto = $(this).val().toLowerCase();
        //     $('.scheda_contatto').each(function(){
        //         var nomeFiltro = $(this).find('h5').text().toLowerCase();
        //         if (nomeFiltro.includes(cercaContatto)) {
        //             $(this).show();
        //         }else{
        //             $(this).hide();
        //         }
        //     });
        // });

        // Funzione per selezionare la singola finestra della chat
        $('.scheda_contatto').click(function() {
            var dataContatto = $(this).attr('data-contact');
            $('.finestra_messaggio').removeClass('active');
            var selettore = '.finestra_messaggio[data-message="' + dataContatto + '"]';
            $(selettore).addClass('active');
            var contactName = $(this).find('h5').text();
            $('.nome_corrente').text(contactName);
            var immagineCorrente = $(this).find('img').attr('src');
            $('.nav_img img').attr('src', immagineCorrente);
        });

});
