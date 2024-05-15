document.addEventListener('DOMContentLoaded', function() {
    axios.get('http://localhost:3000/api/productos/getproductos')
        .then(response => {
            const data = response.data;
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                const productImage = document.createElement('img');
                productImage.src = product.imagenUrl;
                productImage.alt = product.nombre;

                const productName = document.createElement('h2');
                productName.textContent = product.nombre;

                const productDescription = document.createElement('p');
                productDescription.textContent = product.descripcion;

                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.precio.toFixed(2)}`;

                const productUnits = document.createElement('p');
                productUnits.textContent = `Unidades: ${product.unidades}`;

                productDiv.appendChild(productImage);
                productDiv.appendChild(productName);
                productDiv.appendChild(productDescription);
                productDiv.appendChild(productPrice);
                productDiv.appendChild(productUnits);

                productList.appendChild(productDiv);
            });

            console.log('Productos agregados a la cuadrícula.');  // Mensaje de depuración
        })
        .catch(error => console.error('Error al obtener los productos:', error));
});
