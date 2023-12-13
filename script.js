function openModal(title, description, imagePath){
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');

    modal.style.display = 'block';
    modalContent.innerHTML = `
    <h2> MEDIADORA CULTURAL NA 13ª BIENAL DE ARTES VISUAIS DO MERCOSUL (2022)
    </h2>
    <p> CURSO DE FORMAÇÃO EM MEDIAÇÃO "UM DIÁLOGO SINCERO"
    <br> O Educativo da 13ª Bienal de Artes Visuais do Mercosul promoveu, entre julho e setembro de 2022, o curso de formação em mediação cultural "Um diálogo Sincero". A participação no curso era pré-requisito para a posterior seleção para o trabalho de mediação cultural nos espaços expositivos da 13ª Bienal de Artes Visuais do Mercosul. </p>
    <img src="" alt="">
    `;
}

function closeModal(){
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

//para fechar o modal quando clicar fora da área

window.onclick = function (event) {
    var modal = document.getElementById('modal');

    if(event.target === modal) {
        modal.style.display = 'none';
    }
}