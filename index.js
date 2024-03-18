document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar e exibir os aplicativos
    function loadApps() {
        fetch('conf.json')
            .then(response => response.json())
            .then(conf => {
                fetch(`${conf.appDirectory}/${conf.appsFile}`)
                    .then(response => response.json())
                    .then(data => {
                        const sortedApps = data.apps.sort((a, b) => b.downloads - a.downloads);
                        const topAppsContainer = document.getElementById('top-apps');
                        const allAppsContainer = document.getElementById('all-apps');

                        topAppsContainer.innerHTML = ''; // Limpar o conteúdo anterior
                        allAppsContainer.innerHTML = ''; // Limpar o conteúdo anterior

                        sortedApps.slice(0, 5).forEach(app => {
                            const appDiv = createAppDiv(app, conf);
                            topAppsContainer.appendChild(appDiv);
                        });

                        sortedApps.forEach(app => {
                            const appDiv = createAppDiv(app, conf);
                            allAppsContainer.appendChild(appDiv);
                        });
                    })
                    .catch(error => console.error('Error fetching apps:', error));
            })
            .catch(error => console.error('Error fetching configuration:', error));
    }

    // Função auxiliar para criar a div de aplicativo
    function createAppDiv(app, conf) {
        const appDiv = document.createElement('div');
        appDiv.classList.add('app-item');

        const appName = document.createElement('h2');
        appName.textContent = app.name;
        appDiv.appendChild(appName);

        const appImage = document.createElement('img');
        appImage.src = `${conf.appDirectory}/${conf.logoDirectory}/${app.id}.jpg`;
        appImage.alt = `${app.name} logo`;
        appDiv.appendChild(appImage);

        const appDescription = document.createElement('p');
        appDescription.textContent = app.description;
        appDiv.appendChild(appDescription);

        const installButton = document.createElement('button');
        installButton.textContent = 'Instalar';
        installButton.addEventListener('click', function() {
            // Aqui você pode implementar a lógica para baixar o aplicativo escolhido
            console.log(`Downloading ${app.name}...`);
            // Por exemplo, redirecionar para o link de download do aplicativo
            window.location.href = `${conf.appDirectory}/${app.file}`;
        });
        appDiv.appendChild(installButton);

        return appDiv;
    }

    // Carregar e exibir os aplicativos ao carregar a página
    loadApps();
});
