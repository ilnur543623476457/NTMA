const butO = document.querySelector('.list_MA')
const but1 = document.querySelector('.block_two')
const but3 = document.querySelector('.obh_sa_vid')
const but4 = document.querySelector('.txtfut')
const but5 = document.querySelector('.ttgjd')

function te() {
    butO.classList.remove('offCS')
    butO.classList.remove('offCS2')

    butO.classList.add('an')
    setTimeout(() => {
        // but1.classList.add('vr')
        but3.classList.add('sa_vid_on')
    }, 500);
    setTimeout(() => {
        butO.classList.add('anOne')
    }, 1000);
    setTimeout(() => {
        but4.classList.add('txtfutOn')
    }, 900);
}


function back(){
    butO.classList.add('offCS')
    but4.classList.add('offscene')

    setTimeout(() => {
        butO.classList.remove('an')
        butO.classList.remove('anOne')
        but4.classList.remove('txtfutOn')
        but4.classList.remove('offscene')
    }, 1000);
    setTimeout(() => {
        but3.classList.remove('sa_vid_on')
        butO.classList.add('offCS2')
    }, 500);

    







}