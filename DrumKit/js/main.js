const clap = document.querySelector('#clap').addEventListener('click', clapSound)
const hihat = document.querySelector('#hihat').addEventListener('click', hihatSound)
const kick = document.querySelector('#kick').addEventListener('click', kickSound)
const openhat = document.querySelector('#openhat').addEventListener('click', openhatSound)
const boom = document.querySelector('#boom').addEventListener('click', boomSound)
const ride = document.querySelector('#ride').addEventListener('click', rideSound)
const snare = document.querySelector('#snare').addEventListener('click', snareSound)
const tom = document.querySelector('#tom').addEventListener('click', tomSound)
const tink = document.querySelector('#tink').addEventListener('click', tinkSound)

function clapSound(){
    document.querySelector('#clapAudio').play();
    
}
function hihatSound(){
    document.querySelector('#hihatAudio').play();
}
function kickSound(){
    document.querySelector('#kickAudio').play();
}
function openhatSound(){
    document.querySelector('#openhatAudio').play();
    audio.CurrentTime = 0;
}
function boomSound(){
    document.querySelector('#boomAudio').play();
    

}function rideSound(){
    document.querySelector('#rideAudio').play();
  

}function snareSound(){
    document.querySelector('#snareAudio').play();
   

}function tomSound(){
    document.querySelector('#tomAudio').play();
    

}
function tinkSound(){
    document.querySelector('#tinkAudio').play();
}