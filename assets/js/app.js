const horas = document.getElementById('horas');
const minutos = document.getElementById('min');
const segundos = document.getElementById('sec');

const relogio = setInterval( function time(){
    let datetoday = new Date();
    let hour = datetoday.getHours();
    let min = datetoday.getMinutes();
    let sec = datetoday.getSeconds();

    if(hour < 10){
        horas.textContent = '0' + hour;
    }else{
        horas.textContent = hour;
    }

    if(min < 10){
        minutos.textContent = '0' + min;
    }else{
        minutos.textContent = min;
    }

    if(sec < 10){
        segundos.textContent = '0' + sec;
    }else{
        segundos.textContent = sec;
    }

    
    
    
});