<<<<<<< HEAD

document.getElementById("formulario_producto").addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe por defecto

            // Obtener los valores del formulario
            var nombre = document.getElementById("nombre_producto").value;
            var precio = document.getElementById("precio_producto").value;
            var descripcion = document.getElementById("descripcion_producto").value;
            var imagen = document.getElementById("imagen_producto").files[0];

            // Crear una referencia a la base de datos de Firebase
            var database = firebase.database();
            var productosRef = database.ref("productos");

            // Subir la imagen a Firebase Storage
            var storageRef = firebase.storage().ref('imagenes_productos/' + imagen.name);
            var task = storageRef.put(imagen);

            task.then(function(snapshot) {
                // Obtener la URL de la imagen subida
                return snapshot.ref.getDownloadURL();
            }).then(function(url) {
                // Crear un objeto con los datos del producto
                var nuevoProducto = {
                    nombre: nombre,
                    precio: precio,
                    descripcion: descripcion,
                    urlImagen: url // Guardar la URL de la imagen en la base de datos
                };

                // Añadir el nuevo producto a la base de datos
                productosRef.push(nuevoProducto)
                    .then(function() {
                        // Éxito al guardar el producto
                        alert("Producto guardado exitosamente");
                        // Limpiar el formulario después de guardar
                        document.getElementById("formulario_producto").reset();
                    })
                    .catch(function(error) {
                        // Error al guardar el producto
                        alert("Error al guardar el producto: " + error.message);
                    });
            }).catch(function(error) {
                // Error al subir la imagen
                alert("Error al subir la imagen: " + error.message);
            });
        });

        // Función para mostrar los productos guardados en la base de datos
        function mostrarProductos() {
            var database = firebase.database();
            var productosRef = database.ref("productos");

            productosRef.on("value", function(snapshot) {
                // Limpiar cualquier contenido previo
                document.getElementById("productos_list").innerHTML = "";

                snapshot.forEach(function(childSnapshot) {
                    var producto = childSnapshot.val();
                    var nombre = producto.nombre;
                    var precio = producto.precio;
                    var descripcion = producto.descripcion;
                    var urlImagen = producto.urlImagen; // Obtener la URL de la imagen

                    // Crear un elemento para mostrar el producto
                    var productoElement = document.createElement("div");
                    productoElement.innerHTML = "<strong>Nombre:</strong> " + nombre + "<br>" +
                                                "<strong>Precio:</strong> $" + precio + "<br>" +
                                                "<strong>Descripción:</strong> " + descripcion + "<br>" +
                                                "<img src='" + urlImagen + "' width='100'><br><br>"; // Mostrar la imagen

                    document.getElementById("productos_list").appendChild(productoElement);
                });
            });
        }

        // Llamar a la función para mostrar los productos al cargar la página
=======
document.getElementById("formulario_producto").addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe por defecto

            // Obtener los valores del formulario
            var nombre = document.getElementById("nombre_producto").value;
            var precio = document.getElementById("precio_producto").value;
            var descripcion = document.getElementById("descripcion_producto").value;
            var imagen = document.getElementById("imagen_producto").files[0];

            // Crear una referencia a la base de datos de Firebase
            var database = firebase.database();
            var productosRef = database.ref("productos");

            // Subir la imagen a Firebase Storage
            var storageRef = firebase.storage().ref('imagenes_productos/' + imagen.name);
            var task = storageRef.put(imagen);

            task.then(function(snapshot) {
                // Obtener la URL de la imagen subida
                return snapshot.ref.getDownloadURL();
            }).then(function(url) {
                // Crear un objeto con los datos del producto
                var nuevoProducto = {
                    nombre: nombre,
                    precio: precio,
                    descripcion: descripcion,
                    urlImagen: url // Guardar la URL de la imagen en la base de datos
                };

                // Añadir el nuevo producto a la base de datos
                productosRef.push(nuevoProducto)
                    .then(function() {
                        // Éxito al guardar el producto
                        alert("Producto guardado exitosamente");
                        // Limpiar el formulario después de guardar
                        document.getElementById("formulario_producto").reset();
                    })
                    .catch(function(error) {
                        // Error al guardar el producto
                        alert("Error al guardar el producto: " + error.message);
                    });
            }).catch(function(error) {
                // Error al subir la imagen
                alert("Error al subir la imagen: " + error.message);
            });
        });

        // Función para mostrar los productos guardados en la base de datos
        function mostrarProductos() {
            var database = firebase.database();
            var productosRef = database.ref("productos");

            productosRef.on("value", function(snapshot) {
                // Limpiar cualquier contenido previo
                document.getElementById("productos_list").innerHTML = "";

                snapshot.forEach(function(childSnapshot) {
                    var producto = childSnapshot.val();
                    var nombre = producto.nombre;
                    var precio = producto.precio;
                    var descripcion = producto.descripcion;
                    var urlImagen = producto.urlImagen; // Obtener la URL de la imagen

                    // Crear un elemento para mostrar el producto
                    var productoElement = document.createElement("div");
                    productoElement.innerHTML = "<strong>Nombre:</strong> " + nombre + "<br>" +
                                                "<strong>Precio:</strong> $" + precio + "<br>" +
                                                "<strong>Descripción:</strong> " + descripcion + "<br>" +
                                                "<img src='" + urlImagen + "' width='100'><br><br>"; // Mostrar la imagen

                    document.getElementById("productos_list").appendChild(productoElement);
                });
            });
        }

        // Llamar a la función para mostrar los productos al cargar la página
>>>>>>> 86cfbaeeaf3e82fd3b382e940721c0b849cb9832
        window.onload = mostrarProductos;