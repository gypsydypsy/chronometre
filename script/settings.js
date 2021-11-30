'use strict';

// ---- FONCTIONS

function getCurrentColor(){
    return getComputedStyle(submitBtn).backgroundColor;
}

function saveSettings(e){

    e.preventDefault();
    let colorTheme; 
    let fontTheme;

    //Duration 
    if (durationInput.value){
        duration = durationInput.value;
        timeLeft.textContent = (duration < 10) ? `0${duration}:00` : `${duration}:00`;
        localStorage.setItem('duration', durationInput.value );
    }

    //Color
    for (let radio of colorRadios) {
        if (radio.checked){
            colorTheme = 'theme-' + radio.value;
            break;
        }
    }
    localStorage.setItem('color', colorTheme);

    //Font
    for (let radio of fontRadios) {
        if (radio.checked){
            fontTheme = 'font-' + radio.value;
            break;
        }
    }
    localStorage.setItem('font', fontTheme);

    // Audio
    localStorage.setItem('audio', ringtoneInput.value);
    ringtone.src = `../sound/${ringtoneInput.value}.mp3`

    // Mise à jour du thème
    document.body.removeAttribute('class');
    document.body.classList.add(colorTheme, fontTheme);

    //Fermeture de la modale
    closeModal();

    //Arrêt audio
    preview.pause();
}

function setTheme(){
    if (localStorage.getItem('font') && localStorage.getItem('color') && localStorage.getItem('duration') && localStorage.getItem('audio'))
    {
        // Changement du theme
        document.body.removeAttribute('class');
        document.body.classList.add(localStorage.getItem('font'), localStorage.getItem('color'));

        // Changement de la durée du chrono
        duration = localStorage.getItem('duration');
        timeLeft.textContent = timeLeft.textContent = (duration < 10) ? `0${duration}:00` : `${duration}:00`;

        // Changement de la sonnerie
        ringtone.src = `../sound/${localStorage.getItem('audio')}.mp3`

        // Mise à jour du formulaire settings 
        durationInput.value = duration;

        for (let radio of fontRadios) {
            radio.removeAttribute('checked')
            if (localStorage.getItem('font').includes(radio.value)){
                radio.setAttribute('checked', 'true');
            }
        }

        for (let radio of colorRadios) {
            radio.removeAttribute('checked')            
            if (localStorage.getItem('color').includes(radio.value)){
                radio.setAttribute('checked', 'true');
            }
        }

        for (let option of ringtoneInput.options)
        {
            option.removeAttribute('selected')
            if (localStorage.getItem('audio') == option.value){
                option.setAttribute('selected', 'true');
            }
        }
    }
}

function soundPreview (e){
    preview.pause()
    preview.currentTime = 0;
    let file = e.target.value + '.mp3';
    preview.src = `../sound/${file}`;
    preview.play();
}

// --- EVENEMENTS
submitBtn.addEventListener('click', saveSettings);
ringtoneInput.addEventListener('change', soundPreview);
window.addEventListener('load', setTheme);
