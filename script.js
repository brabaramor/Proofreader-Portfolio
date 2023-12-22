function openModal(title, description, imagePath){
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');

    modal.style.display = 'block';
    modalContent.innerHTML = `${modal-content}`;
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