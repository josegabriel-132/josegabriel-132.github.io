const itemList = document.getElementById('item-list');
const priceFilter = document.getElementById('price-filter');

// Lista de artículos (puedes reemplazarla con tus propios datos)
const items = [
    { name: '2 Anillos Duo Promesa Plata Fina 925 Amor Parejas', price: 412, image: 'anillos/Artículo17.jpg',descuento:'10%<br>OFF' },
    { name: 'Juego Collar Aretes de Mujer Plata de Ley 925 con para Regalo Cadena 45cm Longitud', price: 865, image: 'collares/image01.jpg',descuento:'30%<br>OFF' },
    { name: 'Dije Collar en Corazón de Plata con Zirconia de Colores para Mujer', price: 920, image: 'collares/image30.jpg',descuento:'15%<br>OFF'  },
    { name: 'Nine West Reloj con correa de esfera floral para mujer', price:379, image: 'relojes/image03 (1).jpg',descuento:'5%<br>OFF'  },
    { name: 'Nine West Women Mesh Bracelet Watch', price: 384, image: 'relojes/image12 (1).jpg',descuento:'30%<br>OFF' },
    { name: 'arete de tuerca chapados en oro de 14 quilates con triple ilusión', price: 367, image: 'aretes/image27.jpg',descuento:'20%<br>OFF'   },
    { name: 'Pulseras de mujer plateadas o rosadas personalizadas con inicial.', price: 220, image: 'pulseras/image01.jpg',descuento:'10%<br>OFF'  },
    { name: 'Pulsera Hombre Hacha y Bolitas Negras y Plateadas, Pulsera para Hombre', price:189, image: 'pulseras/image02.jpg', descuento:'18%<br>OFF' },
    { name: "ARISTOCRAZY Dije Chapa Inicial 'M' Mujer", price: 720, image: 'broches/image01.jpg',descuento:'10%<br>OFF' },
    { name: 'MACKECH Dije en plata Origen Mujer', price:920, image: 'broches/image02.jpg',descuento:'10%<br>OFF' },
    { name: 'MACKECH Dije en plata Lotos Mujer', price:870, image: 'broches/image03.jpg' ,descuento:'25%<br>OFF'},
    { name: 'MACKECH Dije en plata .925 Mujer', price: 981, image: 'broches/image04.jpg' ,descuento:'20%<br>OFF'},
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
            <center>
            <img src="${item.image}" alt="${item.name}">
            <div class="circle">
            <span class="price">${item.descuento}</span>
            </div>
            </center>
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
