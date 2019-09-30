window.addEventListener('load', ()=>{
    let long;
    let lat;
})
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        long = position.coords.longitude;
        lat=position.coords.latitude;
        const skycons = new Skycons({color:'white'})

        const proxy="https://cors-anywhere.herokuapp.com/";
        let api=`${proxy}https://api.darksky.net/forecast/99a44d950dbd3b29d1d8f8ebed16b7a8/${lat},${long}`;
        

        let locationM = document.querySelector('.location');
        let description = document.querySelector('.description-content');
        let degree=document.querySelector('.degree');
        let iconContent = document.querySelector('#icon');


fetch(api).then(response=>response.json()).then(data=>{
    locationM.innerHTML = data.timezone;
    description.innerHTML=data.currently.summary;
    const {temperature,icon} = data.currently;
    degree.textContent = temperature;
    skycons.add(iconContent,icon);
    skycons.play();
    let degreeSection = document.querySelector('.degree-section');
const degreeSymbol = document.querySelector('.degree-symbol')
degreeSection.onclick= ()=>{
    if (degreeSymbol.innerHTML==='F'){
        degreeSymbol.innerHTML='C';
        degree.innerHTML=Math.floor((temperature-32)*(5/9));
    }else{
        degreeSymbol.innerHTML='F';
        degree.innerHTML=temperature;
    }
}
})})}

