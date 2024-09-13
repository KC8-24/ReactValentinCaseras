const misProductos = [
    { id: "1", nombre: "Pantalon", stock: 5, precio: 990, img: "../img/Captura3.PNG", idCat: "pantalonshort" },
    { id: "2", nombre: "Short", stock: 7, precio: 750, img: "../img/Captura2.PNG", idCat:"pantalonshort" },
    { id: "3", nombre: "Remera", stock: 3, precio: 800, img: "../img/Captura.PNG", idCat:"remera" }, 
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}