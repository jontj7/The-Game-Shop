function search() {
    const query = document.getElementById('search-input').value.toLowerCase();

    // Redirigir a la página de resultados con la consulta como parámetro
    window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
    const resultsSection = document.getElementById('search-results');
    resultsSection.innerHTML = ''; // Limpiar resultados anteriores

    // Lista de páginas HTML a buscar
    const pages = ['home.html', 'plataformas.html', 'blog.html'];

    let resultsFound = false;

    // Realizar las búsquedas
    pages.forEach(page => {
        fetch(page)
            .then(response => response.text())
            .then(text => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');
                const body = doc.body;
                const content = body.innerText.toLowerCase();
                
                if (content.includes(query)) {
                    resultsFound = true;
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('search-result');
                    resultItem.innerHTML = `
                        <a href="${page}?q=${encodeURIComponent(query)}">
                            <p>Encontrado en: ${page}</p>
                            <p>Contenido relevante puede estar en esta página.</p>
                        </a>
                    `;
                    resultsSection.appendChild(resultItem);
                }
            })
            .catch(error => console.error('Error fetching page:', error))
            .finally(() => {
                // Mostrar mensaje si no se encuentran resultados después de procesar todas las páginas
                if (!resultsFound) {
                    resultsSection.innerHTML = '<p>No se encontraron resultados.</p>';
                }
            });
    });
}
