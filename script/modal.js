'use strict';

// ---- FUNCTIONS

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

// ---- EVENEMENTS

settingsBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', function(e){
    if (e.target == modal){
        closeModal();
    }
});
 