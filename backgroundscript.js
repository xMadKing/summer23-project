const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numbers = '0123456789';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}/'

const alphabet = numbers + letters;
const font_size = 24;
const columns = canvas.width/font_size;

const rain_drops = [];

for (let x = 0; x < columns; x++)
{
    rain_drops[x] = 0; 
}

const draw = () => {
    context.fillStyle = 'rgba(30, 30, 30, 0.2)';
    context.fillRect(0, 0, canvas.width, canvas.height); 

    const colors = ['#00b33a', '#0F0', '#00bc4a', '#00c063', '#006847']
    const font = ['Courier New', 'Courier', 'monospace', 'Impact', 'Ariel']


    context.fillStyle = colors[parseInt(Math.random()*colors.length)];
    context.font = font_size + 'px ' + font[parseInt(Math.random()*font.length)]; 

    for(let i = 0; i < rain_drops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length)); 
        context.fillText(text, i*font_size, rain_drops[i]*font_size);

        if(rain_drops[i] * font_size > canvas.height && Math.random() > 0.99){
            rain_drops[i] = 0; 
        }

        rain_drops[i] = rain_drops[i] + (Math.random()*2);
    }
}; 

setInterval(draw, 40); 

