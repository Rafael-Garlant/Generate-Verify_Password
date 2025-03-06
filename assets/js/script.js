function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar a página: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;

            // 🔹 Criar e adicionar o novo CSS dinamicamente
            const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = `${page.split('/')[0]}/assets/css/style.css`; // 🔥 Agora o caminho está correto
            cssLink.setAttribute('data-dynamic', 'true');
            document.head.appendChild(cssLink);

            // 🔹 Criar e adicionar o novo script dinamicamente
            const script = document.createElement('script');
            script.src = `${page.split('/')[0]}/assets/js/script.js`; // 🔥 Corrigido o caminho
            script.setAttribute('data-dynamic', 'true');
            script.defer = true;
            document.body.appendChild(script);
        })
        .catch(error => console.error(error));
}
