import requests
from bs4 import BeautifulSoup

def obtener_valor_dolar_blue():
    url = 'https://dolarhoy.com/cotizaciondolarblue'
    respuesta = requests.get(url)
    soup = BeautifulSoup(respuesta.text, 'html.parser')

    # Encuentra todos los elementos con la clase 'value'
    valores = soup.find_all('div', class_='value')
    
    # Asume que el primer 'value' es compra y el segundo es venta
    # Ajusta los índices según sea necesario
    if len(valores) >= 2:
        valor_compra = valores[0].text
        valor_venta = valores[1].text
        return valor_compra, valor_venta
    else:
        return None, None

valor_compra, valor_venta = obtener_valor_dolar_blue()
if valor_compra and valor_venta:
    print(f"Valor de compra del dólar blue: {valor_compra}")
    print(f"Valor de venta del dólar blue: {valor_venta}")
else:
    print("No se pudo obtener la cotización del dólar blue.")
