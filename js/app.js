window.onload = function() {
    var containerHeight = document.querySelector('.col-md-4').offsetHeight;
    var image = document.querySelector('.col-md-4 img');
    image.style.height = containerHeight + 'px';
};


window.onload = function() {
    function updateImageHeight() {
        var containerHeight = document.querySelector('.col-md-4').offsetHeight;
        var image = document.querySelector('.col-md-4 img');
        image.style.height = containerHeight + 'px';
    }

    // Atualiza a altura da imagem quando a página é carregada
    updateImageHeight();

    // Atualiza a altura da imagem quando a janela do navegador é redimensionada
    window.onresize = updateImageHeight;
};
