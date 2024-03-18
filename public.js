document.addEventListener("DOMContentLoaded", function() {
    const appForm = document.getElementById('app-form');
    const installButton = document.getElementById('installButton');

    appForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(appForm);

        // Simular o envio do arquivo (apenas para exemplo)
        setTimeout(() => {
            console.log('App uploaded successfully');
            installButton.style.display = 'block';
        }, 2000);
    });

    installButton.addEventListener('click', function() {
        // Aqui você pode implementar a lógica para baixar o aplicativo escolhido
        console.log('Downloading selected app...');
        // Por exemplo, redirecionar para o link de download do aplicativo
        window.location.href = 'app-selected.apk';
    });
});
