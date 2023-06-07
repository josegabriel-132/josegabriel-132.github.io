const itemList = document.getElementById('item-list');
const priceFilter = document.getElementById('price-filter');

// Lista de artículos (puedes reemplazarla con tus propios datos)
const items = [
    { name: 'Richapex Aretes Mujer Aretes arracadas oro mujer Piedras preciosas Oro 18k Laminado Mujer Arete Redondo', price:589, image: 'aretes/image03.jpg' },
    { name: 'GUESS arete de aro pequeños con logotipo ovalado', price: 369, image: 'aretes/image04.jpg' },
    { name: 'Aretes arracadas oro mujer elegantes cuadradas pendientes Regalos para Mujer ', price:589, image: 'aretes/image05.jpg' },
    { name: 'Pendientes con puños y envolturas para mujer, plata S925 con aguja de plata con circonita y circonita dorada', price: 170, image: 'aretes/image06.jpg' },
    { name: 'CARSINEL Mona Lisa Elementos Multicolores Zirconia Cúbica Aretes Pulsera Collar Conjunto de Joyas clásicas', price: 360, image: 'aretes/image07.jpg' },
    { name: 'HORHEAR Pin de Plata Esterlina 925 Con Aretes Colgantes Chapados en Oro, Juego de Aretes Planetarios Asimétricos de Estrella y Luna', price:180, image: 'aretes/image08.jpg' },
    { name: 'Aretes Plata .925 con Circonias - Incluye Caja de Regalo ', price: 299, image: 'aretes/image09.jpg' },
    { name: 'Paquete de 3 pendientes Huggie de 18 quilates (8 mm, 10 mm y 12 mm)', price:220, image: 'aretes/image10.jpg' },
    { name: 'Aretes de Gato Gatito en Chapa de Oro de 22K ', price: 195, image: 'aretes/image11.jpg' },
    { name: 'Paquete de aretes de titanio con circonita cúbica para mujeres y hombres', price: 120, image: 'aretes/image12.jpg' },
    { name: 'Aretes Perla Cultivada Natural Tamaño 10 mm Blanco Poste Plata de Ley .925', price: 399, image: 'aretes/image13.jpg' },
    { name: 'Finas Arracadas Oro 18K Laminado con Brillantes Swarovski', price: 99, image: 'aretes/image14.jpg' },
    { name: 'Aretes Carisma Suerte Trebol Plata', price: 795, image: 'aretes/image15.jpg' },
    { name: 'Aretes de Mujer Plata de Ley 925 con para Regalo Cadena 45cm Longitud', price: 299, image: 'aretes/image16.jpg' },
    { name: 'EONLINE Aretes de perlas de tulipán chapados en oro de 14 quilates con gota de aceite y flor rosa para mujer, Latón, Circón', price: 256, image: 'aretes/image17.jpg' },
    { name: 'Luxfancy 2 Set de Aretes bañados en Oro Amarillo, Oro Rosa y Oro Blanco', price: 396, image: 'aretes/image18.jpg' },
    { name: 'aretes de aro de plata de ley 925, aretes de gota étnica esmaltados, aretes vintage para el día de la madre', price: 167, image: 'aretes/image19.jpg' },
    { name: 'ANTHONY VINCENT - Aretes Perla Cultivada Natural Tamaño 10 mm Blanco Poste Plata de Ley .925', price: 399, image: 'aretes/image20.jpg' },
    { name: 'Juego Collar Aretes de Girasol Chapado Oro 14K de Mujer con Regalo Cadena 45cm Longitud', price: 344, image: 'aretes/image21.jpg' },
    { name: 'AV Anthony Vincent Aretes Oro 14 K Blanco Perla Cultivada Natural 8 mm Diámetro- Regalo para Mujer!', price: 599, image: 'aretes/image22.jpg' },
    { name: 'Aretes Plata Circonia con Piedra Estilo Perla Blanca - Joyería Soho - Accesorio para Mujer -', price: 399, image: 'aretes/image23.jpg' },
    { name: 'arete de aro pequeños de plata de ley chapados en oro de 14 quilates', price: 318, image: 'aretes/image24.jpg' },
    { name: 'arete de aro de runas vikingas nórdicas para hombres y mujeres', price: 428, image: 'aretes/image25.jpg' },
    { name: 'Aretes tipo broquel para mujer en forma de colibri decorados con cristales austriacos', price: 1020, image: 'aretes/image26.jpg' },
    { name: 'arete de tuerca chapados en oro de 14 quilates con triple ilusión', price: 367, image: 'aretes/image27.jpg' },
    { name: 'Pendientes de Mujer TREE NEST Aretes de Mujer Pendientes de Aro para Mujer Elegantes', price: 1510, image: 'aretes/image29.jpg' },
    { name: 'Aretes Perla Cultivada Natural Tamaño 8 mm Blanco', price: 220, image: 'aretes/image30.jpg' },
    
    // ... Agrega los 30 artículos restantes aquí
];

// Función para generar los elementos del inventario
function generateItems() {
    itemList.innerHTML = '';
    const sortedItems = sortItems(items, priceFilter.value);
    sortedItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <center><img src="${item.image}" alt="${item.name}"></center>
            <h3>${item.name}</h3>
            <p>Precio: $${item.price}<a href="pago.html">pagar</a></p>
        `;
        itemList.appendChild(itemElement);
    });
}

// Función para ordenar los artículos por precio
function sortItems(items, order) {
    return items.sort((a, b) => {
        if (order === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
}

// Función para filtrar y generar los elementos nuevamente cuando cambia el filtro
function filterItems() {
    generateItems();
}

// Generar los elementos del inventario al cargar la página
generateItems();
