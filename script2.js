const itemList = document.getElementById('item-list');
const priceFilter = document.getElementById('price-filter');

// Lista de artículos (puedes reemplazarla con tus propios datos)
const items = [
    { name: 'Juego Collar Aretes de Mujer Plata de Ley 925 con para Regalo Cadena 45cm Longitud', price: 865, image: 'collares/image01.jpg' },
    { name: 'Juego Collar Aretes de Girasol Chapado Oro 14K de Mujer', price: 2101, image: 'collares/image02.jpg' },
    { name: 'Collar ajustable con cadena tipo serpiente y fígaro, chapado en oro de 14 quilates, cuentas circulares', price: 1754, image: 'collares/image03.jpg' },
    { name: 'ésika - Collar Chains Level Bañado en Oro 24K', price: 2307, image: 'collares/image04.jpg' },
    { name: 'Collar Mujer Plata de Ley 925 con para Regalo Cadena 45cm Longitud ', price: 2065, image: 'collares/image05.jpg' },
    { name: 'Collares de Mujer de Corazón con Iniciales, Acero Inoxidable con Baño de Oro Rosa 18k ', price: 1152, image: 'collares/image06.jpg' },
    { name: 'Collares con iniciales para mujeres y niñas, chapados en oro real de 14 quilates', price: 1245, image: 'collares/image07.jpg' },
    { name: 'Collar de Corazón en Chapa de Oro 22K, Collares de moda', price: 1987, image: 'collares/image08.jpg' },
    { name: 'Collares de Mujer Arbol de la Vida, Regalos para Mujer Graduación 2023, Collar con Colgante de Arbol de la Vida para Mujeres', price: 1350, image: 'collares/image09.jpg' },
    { name: 'Collar de Mujer Corazón e Infinito con Zirconia Cúbica, Acero Inoxidable con Baño de Oro Rosa 18k', price:1723, image: 'collares/image10.jpg' },
    { name: 'Collar de ópalo blanco chapado en oro de 14 quilates | Collares de ópalo para mujer', price: 2116, image: 'collares/image11.jpg' },
    { name: 'Layered Gold Necklaces for Women', price: 2439, image: 'collares/image12.jpg' },
    { name: 'Collar con Colgante de Corazón para Mujer, Colgante Ala de Ángel de la Guarda', price: 1496, image: 'collares/image13.jpg' },
    { name: 'Collares de Mujer, Collar Corazón te Amo en 100 idiomas, Regalos para Mujer Novia, Pareja, Esposa', price: 1213, image: 'collares/image14.jpg' },
    { name: 'Collar Inicial Letra Olga – Collares de Mujer Acero Inoxidable Baño de Oro 18k y Zirconia Cúbica', price: 2387, image: 'collares/image15.jpg' },
    { name: 'Collar con Colgante de Trebol para Mujeres', price: 2179, image: 'collares/image16.jpg' },
    { name: 'Collar de Corazón Magnético,regalo para Cumpleaños,San Valentín, Navidad,Collares de Mejor Amigo', price: 1634, image: 'collares/image17.jpg' },
    { name: 'Collar con Colgante de Mariposa para Mujer, Collar de Mariposas de Cristal', price: 2280, image: 'collares/image18.jpg' },
    { name: 'Collares Hombre Vikingo, Regalos para Papa Dia del Padre Originales, Collar Nordico Vegvisir Dje Acero Inoxidable para Hombre', price: 1825, image: 'collares/image19.jpg' },
    { name: 'Collares de Mujer,Plata de Ley 925 Cristal Azul con Dije Corazón, Día de la Madre, Aniversario', price: 2069, image: 'collares/image20.jpg' },
    { name: 'Collar de cadena de clip de papel de oro para mujer, chapado en oro de 14 quilates', price: 1923, image: 'collares/image21.jpg' },
    { name: 'Collar en capas de oro con dije de estrella de luna y luna, collar de revestimiento múltiple para mujer', price: 1557, image: 'collares/image22.jpg' },
    { name: 'Collar Inicial para Mujer,Collares con Letras Acero Inoxidable,Dije Inicial de Oro 18K', price: 1401, image: 'collares/image23.jpg' },
    { name: 'Collar de Doble Capa para Hombre, Collar de Cuadrado/Pendulo de Acero Titanio En Capas', price: 2225, image: 'collares/image24.jpg' },
    { name: 'Collares para Parejas,Collar te Amo en 100 Idiomas,Collar sol y luna', price: 1736, image: 'collares/image25.jpg' },
    { name: 'Collar Colgante de Mariposa para Mujer, Collar de Mariposa de Cristal', price: 2264, image: 'collares/image26.jpg' },
    { name: 'Collar de Elefante/Niña y Perro/Colibrí y Loto/Fénix/Delfín/Zorro/Unicornio/Alce con Colgante', price: 1376, image: 'collares/image27.jpg' },
    { name: 'Collar con Colgante de Bolas Pequeñas y Cuadrados de Doble Capa para Mujer', price: 1185, image: 'collares/image28.jpg' },
    { name: 'Dije Collar en Corazón de Plata con Zirconia de Colores para Mujer', price: 920, image: 'collares/image30.jpg' },

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
