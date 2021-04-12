var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var extension = ['.com', '.net', '.us', '.io'];

const generadorDominios = (a, b, c, d) => {

    for (let i = 0; i < a.length; i++)
    {
        for (let j = 0; j < b.length; j++)
        {
            for(let k = 0; k < c.length; k++){
                console.log(a[Math.floor(Math.random() * 2)] + b[Math.floor(Math.random() * 2)] + c[Math.floor(Math.random() * 2)] 
                + d[Math.floor(Math.random() * 4)]);
            }
        }
    }
}

generadorDominios(pronoun, adj, noun, extension); 
