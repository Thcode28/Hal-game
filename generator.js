let gen = ['Guap@!', 'Hoy te ves genial!', 'Tu sonrisa es hemosa', 'Empezar el día es hermoso si lo empiezo a tu lado', 'Puede que no seas perfect@, pero tus defectos son encantadores.', 'Eres especial', 'Vales mucho más de lo que crees', 'No dejes que te digan que no importas', 'Tú puedes!', 'Eres precios@ tal como eres', 'Eres únic@', 'Lo estás haciendo muy bien!', 'Lo que importa es dar el mayor esfuerzo!', 'La ciencia avanza muy rápido por lo que veo, ahora los bombones caminan', 'Este día te irá de maravilla', 'No eres hermos@ por el cuadro de tu cuerpo, sino por la arquitectura de tu alma', 'Mis ojos se cautivan por tu sonrisa', 'Te ves genial tal como estás!'];

    
let btn = document.querySelector('#btn');

btn.onclick = () => {
    document.getElementById('cumplido').innerHTML = Generator(gen, gen.length);
}


function Generator(array, length) {        
    
    try {
        let ranNumber = Math.floor(Math.random() * length);
        return array[ranNumber];
    } catch (error) {
        //..
    }

}