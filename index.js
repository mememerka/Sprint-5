

const reportjokes = [];
var actualjoke;
var date = new Date();
var fulldate = date.toISOString();

const getClima = async () => {
    try {
        const climaresponse = await fetch ("https://api.openweathermap.org/data/2.5/weather?id=3128760&appid=8b4676e3c9e7ee5b46fd7dafda511340");
        const postclima = await climaresponse.json();
        let climafinal = postclima['weather'][0]['icon'];
        document.getElementById("clima").innerHTML = `<img src=http://openweathermap.org/img/wn/${climafinal}@2x.png>`
        console.log(postclima)
    } catch (error) {
        console.log(error)
    }
}

const getjoke = async () => {
    try {
        const respost = await fetch ('https://icanhazdadjoke.com/',{
            headers:{
            'Accept': 'application/json',
            }
         });
        const post = await respost.json();
        //console.log(post);
        document.getElementById("joke").innerHTML = post.joke;
        actualjoke = post;
        //console.log(actualjoke);
    } catch (error) {
        console.log(error);
    }
}


// Puntuacio

const score1 = () => {
    var joke = {
        joke: (actualjoke.joke),
        score: 1,
        date: fulldate,
    }
    reportjokes.push(joke);
    console.log(reportjokes);
    getjoke();
}

const score2 = () => {
    var joke = {
        joke: (actualjoke.joke),
        score: 2,
        date: fulldate,
    }
    reportjokes.push(joke);
    console.log(reportjokes);
    getjoke();
}

const score3 = () => {
    var joke = {
        joke: (actualjoke.joke),
        score: 3,
        date: fulldate,
    }
    reportjokes.push(joke);
    console.log(reportjokes);
    getjoke();
}

