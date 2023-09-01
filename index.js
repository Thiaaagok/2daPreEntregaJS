const productos = [];

class Producto {
    constructor(nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}

while (true) {
    const indexOptions = ['1) Nuevo Producto', '2) Actualizar informacion del producto', '3) Ver inventario', '4) Eliminar producto del inventario' ];
    const respuesta = parseInt(prompt("----Index----\n" + indexOptions.join("\n") + "\nElija una opción"));

    switch (respuesta) {
        case 1:
            const nombre = prompt("Escriba el nombre de su producto gamer");
            const marca = prompt("Escriba la marca de su producto gamer");
            let precio;
            while (true) {
                const inputPrecio = prompt("Escriba el precio de su producto gamer");
                precio = parseFloat(inputPrecio);
                if (!isNaN(precio)) {
                break;
            } else {
            alert("Precio inválido. Ingrese un número válido.");
            }
    }
    const prod = new Producto(nombre, marca, precio); // Crear un nuevo producto
    productos.push(prod);
    alert("Tu producto fue cargado al sistema");
    break;

            const nuevoProducto = new Producto(nombre, marca, precio);
            productos.push(nuevoProducto);

            alert("Tu producto fue cargado al sistema");
            break;

            case 2:
                const prodIndex = parseInt(prompt("Ingrese el numero del producto a actualizar")) - 1;
                if (prodIndex >= 0 && prodIndex < productos.length) {
                    const product = productos[prodIndex];
                    const opcionModificar = parseInt(prompt("¿Qué desea modificar?\n1) Nombre\n2) Marca\n3) Precio"));
                    switch (opcionModificar) {
                        case 1:
                            product.nombre = prompt("Escriba el nuevo nombre del producto");
                            break;
                        case 2:
                            product.marca = prompt("Escriba la nueva marca del producto");
                            break;
                        case 3:
                            product.precio = parseFloat(prompt("Escriba el nuevo precio del producto"));
                            if (!isNaN(precio)) {
                                break;
                            } else {
                            alert("Precio inválido. Ingrese un número válido.");
                            }
                            break;
                        default:
                            alert("Opción no válida");
                    }
                    alert("Producto actualizado correctamente");
                } else {
                    alert(" de producto no válido");
                }
                break;
            case 3:
                let productosInv = "";
                
                for (let i = 0; i < productos.length; i++) {
                    const producto = productos[i];
                    productosInv += (i + 1) + ') ' + producto.nombre + ' (' + producto.marca + ') $' + producto.precio + '\n';
                }
                
                alert("Inventario de productos:\n" + productosInv);
                break;
        default:
            alert("Opción no válida");
            break;
        case 4: // Nuevo case para eliminar un producto
            const prodIndexToDelete = parseInt(prompt("Ingrese el numero del producto a eliminar")) - 1;
            if (prodIndexToDelete >= 0 && prodIndexToDelete < productos.length) {
                const deletedProduct = productos.splice(prodIndexToDelete, 1);
                alert(`El producto "${deletedProduct[0].nombre}" ha sido eliminado del inventario.`);
            } else {
                alert("numero de producto no válido");
            }
            break;
    }
}
