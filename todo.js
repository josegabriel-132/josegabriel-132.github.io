const itemList = document.getElementById('item-list');
const priceFilter = document.getElementById('price-filter');
const searchInput = document.getElementById('search-input');

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
    { name: 'Juego Collar Aretes de Mujer Plata de Ley 925 con para Regalo Cadena 45cm Longitud', price: 1865, image: 'collares/image01.jpg' },
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
    { name: 'Dije Collar en Corazón de Plata con Zirconia de Colores para Mujer', price: 1920, image: 'collares/image30.jpg' },
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

// Función para filtrar los artículos por nombre
function filterItemsByName(items, searchValue) {
    return items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
}

// Función para filtrar y generar los elementos nuevamente cuando cambia el filtro o el campo de búsqueda
function filterItems() {
    generateItems();
}

// Generar los elementos del inventario al cargar la página
generateItems();
