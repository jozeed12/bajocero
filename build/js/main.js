// Definir la URL de la API
const apiUrl = 'https://dolarapi.com/v1/dolares/blue';

fetch(apiUrl)
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    // Asumiendo que quieres usar el precio de venta del dólar para la conversión
    const precioDolarVenta = parseFloat(data.venta);
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

