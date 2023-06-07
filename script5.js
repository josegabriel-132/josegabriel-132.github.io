const itemList = document.getElementById('item-list');
const priceFilter = document.getElementById('price-filter');

// Lista de artículos (puedes reemplazarla con tus propios datos)
const items = [
    { name: 'Pulseras de mujer plateadas o rosadas personalizadas con inicial.', price: 220, image: 'pulseras/image01.jpg' },
    { name: 'Pulsera Hombre Hacha y Bolitas Negras y Plateadas, Pulsera para Hombre', price:189, image: 'pulseras/image02.jpg' },
    { name: 'Pulseras Hombre de Infinito, Pulsera Cuero Hombre Cerradura Magnética', price:240, image: 'pulseras/image03.jpg' },
    { name: 'Pulsera de Plata Esterlina 925 para Mujer', price: 349, image: 'pulseras/image04.jpg' },
    { name: 'Pulsera Mujer con Cierre Magnético', price: 269, image: 'pulseras/image05.jpg' },
    { name: '4 juegos de pulseras bohemias apilables de cuentas multicapa', price: 380, image: 'pulseras/image06.jpg' },
    { name: 'Rose y Oro Blanco Plateó Las Pulseras Mujer Coloreadas Brazalete ', price: 249, image: 'pulseras/image07.jpg' },
    { name: 'Pulsera Serpiente Ajustable de Hombre | Piedra Hematita 4mm', price:190, image: 'pulseras/image08.jpg' },
    { name: '2PIEZA Pulsera 7 Chakras Yoga Piedra Volcánica Reiki Meditacion', price: 199, image: 'pulseras/image09.jpg' },
    { name: 'Paquete de Dos Pulseras Trenzadas Rojas Pulsera de Protección de La Suerte', price:180, image: 'pulseras/image10.jpg' },
    { name: '3 Pulseras Mujer Acero Inoxidable Arbol de la Vida Tree of Life Set', price: 239, image: 'pulseras/image11.jpg' },
    { name: 'Pulsera Atrapasueños para Mujer Con un Par de Aretes de Plumas', price: 249, image: 'pulseras/image12.jpg' },
    { name: 'Pulsera de triple protección de hematita de obsidiana negra con cuentas de ojo de tigre', price: 99, image: 'pulseras/image13.jpg' },
    { name: 'Pulsera Tobillera Contra Mal De Ojo de protección Ojo Turco Acero Inoxidable para dama', price: 170, image: 'pulseras/image14.jpg' },
    { name: 'Synata Pulsera Lapislázuli Acero Inoxidable', price: 299, image: 'pulseras/image16.jpg' },
    { name: 'Pulseras Mujer con Trebol Acero Inoxidable, Pulseras para Mujer de Buena Suerte para Mujer, Regalos para Mujer', price: 256, image: 'pulseras/image17.jpg' },
    { name: 'Pulsera de piel para mujer, pulsera de abalorio con decoración en forma de corazón', price: 402, image: 'pulseras/image18.jpg' },
    { name: 'Pulsera Personalizada para Hombre Pulseras de Cuero Trenzadas Personalizadas', price: 149, image: 'pulseras/image19.jpg' },
    { name: '2 Pulseras a juego para parejas para mujer hombre, rojo y negro', price: 299, image: 'pulseras/image20.jpg' },
    { name: 'Pulsera de eslabones de corazón con Logotipo', price: 260, image: 'pulseras/image22.jpg' },
    { name: 'Pulsera de acero inoxidable Titanio Oro Acero Oro rosa', price: 298, image: 'pulseras/image23.jpg' },
    { name: 'Pulseras Corazón con Circonio Cúbico para Las Mujeres', price: 329, image: 'pulseras/image24.jpg' },
    { name: 'Pulsera Pulsera de Pareja ,Par Distancia Pulseras para lovers ,2 Piezas Pulseras de Amor', price: 189, image: 'pulseras/image25.jpg' },
    { name: 'AUGUSTYUE Pulseras Mujer Ajustable, Brazalete Elegante Joyeria para Mujer', price: 229, image: 'pulseras/image27.jpg' },
    { name: '2PIEZA Juego de Joyas Pulsera Unisex de Zircón Piedra Natural ', price: 199, image: 'pulseras/image28.jpg' },
    { name: 'Pulsera Acero Inoxidable Titanio Oro Rosa con Colgante Estrella en Forma Capa Doble Moda Mujer', price: 238, image: 'pulseras/image29.jpg' },
    
    
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
