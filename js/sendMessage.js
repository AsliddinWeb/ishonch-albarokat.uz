$(document).ready(function() {
    $('#consultationForm').on('submit', function(event) {
        event.preventDefault();

        var name = $('#name').val();
        var phone = $('#phone').val();

        var telegramBotToken = '1329941600:AAHd-JMC0bvqhGQPHrjwHcKtVAhGeuTTyhE';
        var chatId = '788079734';
        var message = `🙂 <b>Ism:</b> ${name}\n📞 <b>Telefon raqam:</b> ${phone}`;

        var url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
        var data = {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        };

        $.ajax({
            url: url,
            method: 'POST',
            data: data,
            success: function(response) {
                if (response.ok) {
                    // Show success modal
                    var successModal = new bootstrap.Modal(document.getElementById('successModal'));
                    successModal.show();

                    // Clear input fields
                    $('#name').val('');
                    $('#phone').val('');

                    // Close the modal after 3 seconds
                    setTimeout(function() {
                        successModal.hide();
                    }, 5000);
                } else {
                    alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
                }
            },
            error: function(error) {
                console.error('Error:', error);
                alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
            }
        });
    });
});
