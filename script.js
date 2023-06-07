const itemList = document.getElementById('item-list');
const priceFilter = document.getElementById('price-filter');

// Lista de artículos (puedes reemplazarla con tus propios datos)
const items = [
    { name: '2 Anillos Duo Promesa Plata Fina 925 Amor Parejas', price: 412, image: 'anillos/Artículo17.jpg' },
    { name: 'Anillo Pareja Ajustable, Plata de Ley 925 Anillos de Compromiso, Bodas, Regalos, Aniversario para Hombre Mujer,Conjuntos de Novios Para San Valentín 2 Pack', price: 519, image: 'anillos/Artículo18.jpg' },
    { name: 'BONLAVIE Anillo de compromiso de plata de ley 925 con esmeralda verde de 5,3 quilates para mujer', price: 570, image: 'anillos/Artículo02.jpg' },
    { name: 'Orumlio Anillo de Boda de 925 Plata Esterlina con Brillante Cubic-Zirconia, Compromiso de Boda, Cristales de Corte Redondo', price: 362, image: 'anillos/Artículo04.jpg' },
    { name: 'Anillo de compromiso con diseño Kate Middleton de plata esterlina con circonita cúbica de color azul, zafiro simulado', price: 629, image: 'anillos/Artículo05.jpg' },
    { name: 'BONLAVIE Anillo de plata de ley 925 con zafiro azul para mujer, para cumpleaños, aniversario, día de San Valentín', price: 525, image: 'anillos/Artículo06.jpg' },
    { name: 'King Will Classic Anillo de boda de carburo de tungsteno negro, 8 mm, Acabado pulido, Centro Acanalado, ajuste cómodo', price: 446, image: 'anillos/Artículo08.jpg' },
    { name: 'Jewever Anillo de plata de ley 925 con circonita cúbica azul para mujer, ajustable, talla 6-9', price: 625, image: 'anillos/Artículo09.jpg' },
    { name: 'Compre GLAMIRA Anillos para hombre Heroic', price: 578, image: 'anillos/Artículo10.jpg' },
    { name: 'Anillo de plata de ley 925 con estrella de luna creciente, anillo abierto, anillo ajustable, regalo para mujeres', price: 505, image: 'anillos/Artículo11.jpg' },
    { name: 'Anillo de Thor de plata 925, 3 unidades, diseño de Loki, regalo creativo para mujer', price: 458, image: 'anillos/Artículo12.jpg' },
    { name: '2 Anillos Promesa Plata Fina 925 Corazon Parejas Compromiso', price: 402, image: 'anillos/Artículo13.jpg' },
    { name: 'Silvershake Anillo de plata de ley 925 con amatista africana natural y topacio blanco', price: 601, image: 'anillos/Artículo14.jpg' },
    { name: 'Anillo de Oro 14K Nro. 7-7.5', price: 638, image: 'anillos/Artículo15.jpg' },
    { name: 'Yifnny Juego de anillos a juego para parejas,anillos de promesa a juego para ella y ella, anillo de compromiso de boda', price: 582, image: 'anillos/Artículo16.jpg' },
    { name: 'Anillo Hombre Plano Tipo Sello Rectangular Plateado', price: 389, image: 'anillos/Artículo21.jpg' },
    { name: 'ANILLO DE COMPROMISO DE ORO CON DIAMANTE CENTRAL DE: 0.1 CT COLOR- G CLARIDAD- SI1', price: 595, image: 'anillos/Artículo22.jpg' },
    { name: '1 Pieza Retro Geométrico Luna Aleación Embutido Piedra De Luna Unisexo Anillos', price: 511, image: 'anillos/Artículo23.jpg' },
    { name: 'Set de 2 anillos de matrimonio en Oro 13k', price: 506, image: 'anillos/Artículo24.jpg' },
    { name: 'Jeulia Anillo de compromiso rosa para mujer de plata en forma de corazón', price: 552, image: 'anillos/Artículo07.jpg' },
    { name: 'ANILLOS DE RODIO CON DIJE DE PEZ', price: 625, image: 'anillos/Artículo26.jpg' },
    { name: 'King Will Intertwine - Anillo de Acero Inoxidable para Hombre, 8 mm, Color Negro', price: 505, image: 'anillos/Artículo27.jpg' },
    { name: 'BORUO Anillo de compromiso, plata esterlina 925, circonita cúbica, eternidad', price: 398, image: 'anillos/Artículo28.jpg' },
    { name: 'Anillo Negro Puro - Titanio', price: 639, image: 'anillos/Artículo29.jpg' },
    { name: 'King Will clásico para Hombre 6 mm Anillo de Tungsteno Negro Uno de Tono Acabado Mate Centro Cepillado Boda Banda Borde Biselado', price: 457, image: 'anillos/Artículo30.jpg' },
    { name: 'ANILLOS DE COMPROMISO - ORO BLANCO Y ORO ROSA 18 QUILATES - DIAMANTE', price: 572, image: 'anillos/Artículo19.jpg' },
    { name: ' Anillos de Promesa para Parejas | GOLD SHIELD', price: 527, image: 'anillos/Artículo20.jpg' },
    { name: 'CARSINEL Anillo de Corazón/Ovalado de Plata de Ley.925 con Zirconia Cúbica Anillo de Compromiso Boda Brillante para Mujeres Tamaño Ajustable', price: 364, image: 'anillos/Artículo01.jpg' },
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
