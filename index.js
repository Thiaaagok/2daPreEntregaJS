const productos = [];

class Producto {
    constructor(nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}

while (true) {
    const indexOptions = ['1) Nuevo Producto', '2) Actualizar informacion del producto', '3) Ver inventario'];
    const respuesta = parseInt(prompt("----Index----\n" + indexOptions.join("\n") + "\nElija una opción"));

    switch (respuesta) {
        case 1:
            const nombre = prompt("Escriba el nombre de su producto gamer");
            const marca = prompt("Escriba la marca de su producto gamer");
            const precio = parseFloat(prompt("Escriba el precio de su producto gamer"));

            const nuevoProducto = new Producto(nombre, marca, precio);
            productos.push(nuevoProducto);

            alert("Tu producto fue cargado al sistema");
            break;

            case 2:
                const prodIndex = parseInt(prompt("Ingrese el índice del producto a actualizar")) - 1;
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
                            break;
                        default:
                            alert("Opción no válida");
                    }
                    alert("Producto actualizado correctamente");
                } else {
                    alert("Índice de producto no válido");
                }
                break;
        case 3:
            let productosInv = "";

            for (let i = 0; i < productos.length; i++) {
                const producto = productos[i];
                productosInv += (i + 1) + ') ' + producto.nombre + ' $' + producto.precio + '\n';
            }

            alert("Inventario de productos:\n" + productosInv);
            break;

        default:
            alert("Opción no válida");
            break;
    }
}
