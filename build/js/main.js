// Definir la URL de la API
const apiUrl = 'https://dolarapi.com/v1/dolares/blue';
let precioDolarVenta = 0;

fetch(apiUrl)
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    // Asumiendo que quieres usar el precio de venta del dólar para la conversión
    precioDolarVenta = parseFloat(data.venta);
    console.log(precioDolarVenta);
    //Mostrar precio de dolar en pantalla

    let dolarPantalla = document.getElementsByClassName('dolar_pantalla');
    dolarPantalla[0].textContent = `$${precioDolarVenta}`;
    
    // Calcular el precio en dólares y mostrarlo en la página
    let cantidadDeMonto = document.querySelectorAll('p.monto').length;


for(let i=0; i<cantidadDeMonto; i++){
    // Obtener el precio en moneda local desde tu página web
    let precioDolar = document.getElementsByClassName('preciodolar');
    precioDolar = precioDolar[i].textContent;
    precioDolar = parseInt(precioDolar);

    let precioEnPesos = precioDolar * precioDolarVenta;

    let elementoMonto = document.querySelectorAll('p.monto')[i];

    elementoMonto.textContent = `A$S ${precioEnPesos}`;
}

})
.catch(error => {
    console.error('Error al obtener los datos de la API:', error);
});

//CARGAR PRODUCTOS

const productosAll = document.querySelector('#productos-all');
const carritoTotal = document.querySelector('#caja-carrito');
const cantidadTotal = document.querySelector('#cantidad');
const precioTotal = document.querySelector('#precioTotal');
let totalCantidad = 0;
let totalPrecio = 0;

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
})

function mostrarProductos(productos){

    productos.forEach(producto => {
        const productoHTML = document.createElement('div');

        productoHTML.innerHTML = `
            <div class="productos">
                <div>
                    <h2 class="h2titulo">${producto.modelo}</h2>
                </div>
                <div>     
                    <img src="${producto.img}" class="imagen_producto">
                </div>
                <div class="precio_info">    
                    <div class="precio">
                        <p class="oferta"></p>
                        <p class="monto"></p>
                        <p class="montoUSD">U$D</p>
                        <p class="montoUSD preciodolar">${producto.precio}</p>
                    </div>            
                    <div class="btn_comprarinfo">
                        <a class="boton_comprar" 
                           data-modelo="${producto.modelo}" 
                           data-precio="${producto.precio}" 
                           data-id="${producto.id}">Añadir al carrito</a>                                         
                    </div>
                </div>
            </div>           
        `;

        productosAll.append(productoHTML);
    })

    document.querySelectorAll('.boton_comprar').forEach(boton => {
        boton.addEventListener('click', () => {
            const modelo = boton.dataset.modelo;
            const precio = parseFloat(boton.dataset.precio);
            const id = boton.dataset.id;

    
            totalCantidad++;
            totalPrecio += precio * precioDolarVenta;

            // Actualizar la cantidad y el precio total en el carrito
            cantidadTotal.textContent = totalCantidad;
            precioTotal.textContent = `$${totalPrecio.toFixed(2)}`;

            agregarAlCarrito(modelo, precio);
        });
    });
}

function agregarAlCarrito(modelo, precio) {
    // Crear un nuevo elemento de carrito
    const itemCarrito = document.createElement('div');
    itemCarrito.classList.add('item-carrito');

    // Construir el contenido del elemento de carrito
    itemCarrito.innerHTML = `
        <p>${modelo}</p>
        <p>Precio: $${precio}</p>
    `;

    // Agregar el elemento de carrito al contenedor del carrito
    const carrito = document.querySelector('#info-carrito');
}










