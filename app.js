// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    } else {
        alert('Por favor, ingrese un nombre válido que no esté repetido.');
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.dataset.index = index;
        const button = document.createElement('button');
       
        
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para sortear.');
        return;
    }
    const resultados = document.getElementById('resultado');
    resultados.innerHTML = '';
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.createElement('li');
    resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    resultados.appendChild(resultado);
}
