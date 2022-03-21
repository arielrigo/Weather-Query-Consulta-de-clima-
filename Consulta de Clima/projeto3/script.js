document.querySelector('.busca').addEventListener('submit', async (ev) => {
    ev.preventDefault()

    let input = document.querySelector('#searchInput').value

    if (input !== '') {
        ShowWarn('Carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=
        ${encodeURI(input)}&units=metric&lang=pt_br&appid=d06cdb298fafc83c520d5ab677fc477e`
        let req = await fetch(url)
        let json = await req.json()
        

    
        if(json.cod === 200) {
            ShowWeather(json)
        } else {
            ShowWarn('Não encontramos essa cidade!')
        }
    } 
});

function ShowWeather(json) {

    console.log(json.cod)

    document.querySelector('.titulo').innerHTML = json.name
    document.querySelector('.ventoInfo').innerHTML = json.wind.speed + 'km/h'
    document.querySelector('.tempInfo').innerHTML = json.main.temp + 'ºC'
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.wind.deg}deg)`
    document.getElementById('image').src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
}

function ShowWarn(msg) {
    document.querySelector('.aviso').innerHTML = msg
}
