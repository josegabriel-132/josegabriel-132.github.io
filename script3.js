const itemList = document.getElementById('item-list');
const priceFilter = document.getElementById('price-filter');

// Lista de artículos (puedes reemplazarla con tus propios datos)
const items = [
    { name: 'Reloj Anne Klein para Mujer', price: 573, image: 'relojes/image01 (1).jpg' },
    { name: 'CUENA Reloj de Pulsera para Hombre, Análogo, Elegante, Formal, Ejecutivo, Exclusivo, Moderno de Acero Inoxidable', price: 359, image: 'relojes/image02 (1).jpg' },
    { name: 'Nine West Reloj con correa de esfera floral para mujer', price:379, image: 'relojes/image03 (1).jpg' },
    { name: 'Nine West NW1678WTWT Reloj de Diseñador para Mujer', price: 417, image: 'relojes/image04 (1).jpg' },
    { name: 'Relojes de lujo para hombre – Correa de cuero para hombre cronógrafo reloj de pulsera y pulsera de moda – Disponible azul o negro – Diseño militar – Impermeable reloj de pulsera analógico regalos', price: 739, image: 'relojes/image05 (1).jpg' },
    { name: 'Nine West Reloj clásico con correa para mujer', price: 398, image: 'relojes/image06 (1).jpg' },
    { name: 'anne klein para mujer con esfera de diamante h06104.4 reloj de pulsera pulido', price: 590, image: 'relojes/image07 (1).jpg' },
    { name: 'Timex Mens TW2R62400 Easy Reader 38mm Gray/Blue Leather Strap Watch', price:549, image: 'relojes/image08 (1).jpg' },
    { name: 'HANNAH MARTIN Reloj Análogo para Mujer con Diseño Minimalista, Maquinaria Japonesa, con Extensible de Malla de Acero Inoxidable, Sin Segundero, Carcasa de Resina, Con Broche Ajustable', price: 549, image: 'relojes/image09 (1).jpg' },
    { name: 'Anne Klein Reloj de pulsera para mujer', price:679, image: 'relojes/image10.jpg' },
    { name: 'Armani Exchange - Reloj de vestir con cronógrafo para hombre, correa de cuero, acero o silicona', price: 2450, image: 'relojes/image11 (1).jpg' },
    { name: 'Nine West Women Mesh Bracelet Watch', price: 384, image: 'relojes/image12 (1).jpg' },
    { name: "Women's Dress Watch", price: 547, image: 'relojes/image13 (1).jpg' },
    { name: 'anne klein h06104.4 abierto enlace con esfera de diamante reloj de pulsera', price: 531, image: 'relojes/image14.jpg' },
    { name: 'Nine West Reloj de pulsera de malla para mujer, NW/2515', price: 531, image: 'relojes/image15 (1).jpg' },
    { name: 'Timex Reloj moderno Easy Reader de 40 mm para hombre', price: 737, image: 'relojes/image16 (1).jpg' },
    { name: 'Reloj Anne Klein Crystal Accented para Mujer, pulsera de Piel', price: 587, image: 'relojes/image17 (1).jpg' },
    { name: 'Reloj de correa para mujer', price: 623, image: 'relojes/image18 (1).jpg' },
    { name: 'Invicta - Pro Diver para hombre, acero inoxidable, 43 mm', price: 697, image: 'relojes/image19 (1).jpg' },
    { name: 'Invicta Men Pro Diver Quartz Watch', price: 1017, image: 'relojes/image20 (1).jpg' },
    { name: 'Relojes de Pulsera, Reloj Militar Hombre, Reloj Digital para Deportes al Aire Libre, Reloj Deportivo Multifuncional de Cuero, con Cronómetro, Cuenta Regresiva, Gran Cara, Impermeable,Negro', price: 776, image: 'relojes/image21.jpg' },
    { name: 'Relojes de Pulsera para Hombre con Calendario, Caja Fina Minimalista Relojes Hombre Casual Reloj Hombre De Cuarzo Impermeable', price: 488, image: 'relojes/image22.jpg' },
    { name: 'Nine West Reloj de pulsera para mujer con detalles de cristal', price: 579, image: 'relojes/image23.jpg' },
    { name: 'Invicta Specialty - Reloj mecánico para hombre, acero inoxidable y cuero, 42 mm, plateado, dorado, negro', price: 800, image: 'relojes/image24 (1).jpg' },
    { name: 'Anne Klein Reloj de pulsera para mujer', price: 629, image: 'relojes/image29 (1).jpg' },
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
