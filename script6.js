const itemList = document.getElementById('item-list');
const priceFilter = document.getElementById('price-filter');

// Lista de artículos (puedes reemplazarla con tus propios datos)
const items = [
    { name: "ARISTOCRAZY Dije Chapa Inicial 'M' Mujer", price: 720, image: 'broches/image01.jpg' },
    { name: 'MACKECH Dije en plata Origen Mujer', price:920, image: 'broches/image02.jpg' },
    { name: 'MACKECH Dije en plata Lotos Mujer', price:870, image: 'broches/image03.jpg' },
    { name: 'MACKECH Dije en plata .925 Mujer', price: 981, image: 'broches/image04.jpg' },
    { name: 'MACKECH Dije hoja en plata Lotos Mujer', price: 1179, image: 'broches/image05.jpg' },
    { name: 'MACKECH Dije en plata Mini Aire Mujer', price: 982, image: 'broches/image06.jpg' },
    { name: 'Dije Daniel Espinosa de la colección Pure Love Pure elaborado en bronce con baño de oro', price:900, image: 'broches/image08.jpg' },
    { name: "DANIEL ESPINOSA STUDIO Dije Sweet Dreams 'X' Mujer", price: 928, image: 'broches/image09.jpg' },
    { name: 'DANIEL ESPINOSA STUDIO Prendedor Las Niñas Bien, Mujer', price:874, image: 'broches/image10.jpg' },
    { name: 'bronce con baño de oro de 22 Kts, círculo entrelazado y dije en forma de “S”', price: 846, image: 'broches/image11.jpg' },
    { name: 'Dije Cuzan, de la colección Luna, elaborado en plata con baño de rodio.', price: 854, image: 'broches/image12.jpg' },
    { name: 'Dije Cuzán Jess elaborado en plata 0.925 bañada en oro con diseño de líneas onduladas', price: 799, image: 'broches/image13.jpg' },
    { name: 'Dije Cuzán de la Colección Lucero elaborado en plata .925 con chapa de oro', price: 1370, image: 'broches/image14.jpg' },
    { name: 'Dije Cuzan de la colección Regalo de Bodas elaborado en plata con baño de rodio y perla de abulón decorativa.', price: 1098, image: 'broches/image15.jpg' },
    { name: 'Dije Cuzan elaborado en plata con forma de hoja y detalles calados', price: 935, image: 'broches/image16.jpg' },
    { name: 'Dije Cuzan de la Colección Lucero elaborado en plata con recubrimiento en baño de oro.', price: 865, image: 'broches/image17.jpg' },
    { name: 'Dije Cuzan elaborado en plata con baño en oro de 18 Kilates y forma de corazón', price: 1243, image: 'broches/image18.jpg' },
    { name: 'Dije Cuzan de la colección Alas de Ángel elaborado en plata con recubrimiento en baño de oro', price: 1107, image: 'broches/image19.jpg' },
    { name: 'Dije Cuzan, de la colección Regalo de Bodas, elaborado en plata con recubrimiento de rodio', price: 973, image: 'broches/image20.jpg' },
    { name: "elaborado en plata con baño de oro de 18 Kts con forma circular y detalle de letra 'N'.", price: 958, image: 'broches/image22.jpg' },
    { name: 'Dije Cuzan, de la colección Espejo de Agua, elaborado en plata .', price: 999, image: 'broches/image23.jpg' },
    { name: 'Broche Bow-Tique elaborado en metal y plástico color café con diseño tipo carey. ', price: 927, image: 'broches/image24.jpg' },
    { name: 'Dije Cuzan de la colección Espejo de Agua, elaborado en plata .925 ', price: 888, image: 'broches/image25.jpg' },
    { name: 'CUZAN Dije en plata Espejo de Agua con cristal genuino facetado Mujer', price: 909, image: 'broches/image26.jpg' },
   
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
