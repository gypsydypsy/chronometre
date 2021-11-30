// ---- VARIABLES DU DOM 
const canvas        = document.querySelector('#chrono canvas');
const closeBtn      = document.getElementById('closeBtn');
const colorRadios   = document.getElementsByName('colorInput');
const durationInput = document.getElementById('durationInput');
const fontRadios    = document.getElementsByName('fontInput');
const modal         = document.getElementById('modal-settings')
const pauseBtn      = document.getElementById('pause');
const ringtoneInput = document.getElementById('ringtoneInput');
const settingsBtn   = document.getElementById('settingsBtn');
const startBtn      = document.getElementById('start');
const stopBtn       = document.getElementById('stop');
const submitBtn     = document.querySelector('form button');
const timeLeft      = document.getElementById('timeLeft')

// ---- INIT CHRONOMETRE 
let ch         = canvas.height;
let counter    = 0; 
const ctx      = canvas.getContext('2d');
let cw         = canvas.width;
let duration   = 5; // Durée du chronomètre en minutes, par défaut 5 minutes
let startPoint = 1.5*Math.PI;
let timer;

// ---- FICHERS AUDIO
let ringtone = new Audio('../sound/classic.mp3');
let preview = new Audio();

