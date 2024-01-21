// sortArticles.js

document.addEventListener("DOMContentLoaded", function () {
    var mainPosts = document.getElementById('mainPosts');
    var articles = Array.from(mainPosts.querySelectorAll('article'));

    articles.sort(function (a, b) {
        var dateA = new Date(a.querySelector('.date').textContent);
        var dateB = new Date(b.querySelector('.date').textContent);
        return dateB - dateA;
    });

    // Limpiar el contenedor de artículos
    mainPosts.innerHTML = '';

    // Agregar los artículos ordenados al contenedor
    articles.forEach(function (article) {
        mainPosts.appendChild(article);
    });
});
