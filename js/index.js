document.addEventListener('DOMContentLoaded', () => {
    const pages = [
        { url: 'home.html', content: document.querySelector('body').innerText },
        { url: 'playstation5.html', content: document.querySelector('body').innerText },
        // Agrega más páginas aquí si es necesario
    ];

    const siteIndex = {};
    pages.forEach(page => {
        siteIndex[page.url] = page.content;
    });

    localStorage.setItem('siteIndex', JSON.stringify(siteIndex));
});
