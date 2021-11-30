'use strict';

// ---- FONCTIONS

function chrono(){

    // Nettoyage du canvas
    ctx.clearRect(0,0,cw,ch);

    // Réglages esthétiques
    ctx.lineWidth = 8;
    ctx.strokeStyle = getCurrentColor();

    // Dessin
    ctx.beginPath();
    ctx.arc(150,150,138, startPoint,startPoint + counter*2*Math.PI/(duration*60), false);
    ctx.stroke();

    //Affichage du temps restant
    let t = duration*60 - counter;
    let secondes = t%60;
    let minutes = Math.floor(t/60);
    secondes = (secondes < 10 ) ?  '0' + secondes : secondes;
    minutes = (minutes < 10 ) ? '0' + minutes : minutes;
    timeLeft.textContent = `${minutes}:${secondes}`;

    // Incrémentation
    counter++;

    if (t == 0){
        reset();
    }
}

function start(){
    // Etat des boutons 
    pauseBtn.removeAttribute("disabled");
    stopBtn.removeAttribute("disabled");
    startBtn.setAttribute("disabled", true);

    // Réinitilisation si animation de reset() toujours en cours 
    endAnimation();
    
    counter= 0;
    timer = setInterval(chrono, 1000);
   
}

function pause(){

    //Etat des boutons
    startBtn.removeAttribute("disabled");
    stopBtn.removeAttribute("disabled");
    pauseBtn.setAttribute("disabled", true);

    clearInterval(timer);
    timeLeft.classList.add('clignote');
    setTimeout(endAnimation, 3000);
}

function reset(){

    // Etats des boutons
    startBtn.removeAttribute("disabled");
    pauseBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", true);


    clearInterval(timer);
    ctx.clearRect(0,0,cw,ch);
    timeLeft.textContent = '00:00';
    ringtone.play();

    timeLeft.classList.add('clignote');

    setTimeout(endAnimation, ringtone.duration * 1000);
}

function endAnimation () {
    timeLeft.classList.remove('clignote');
    ringtone.pause();
    ringtone.currentTime = 0;
}


// EVENEMENTS

startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', reset)

