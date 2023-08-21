// Creamos una clase que gestione una serie de productos
class ProductManager {
    constructor() {
        // Creamos un array vacío para almacenar los productos
        this.products = [];
    }
    
    static id = 0; // Variable estática para asignar IDs únicos a los productos
    
    // Método para agregar un producto al array
    addProduct(title, description, price, img) {
        ProductManager.id++; // Incrementamos el ID estático
        // Agregamos un objeto con los detalles del producto al array
        this.products.push({
            id: ProductManager.id,
            title,
            description,
            price,
            img
        });
    }
    
    // Método para obtener la lista de productos
    getProducts() {
        return this.products;
    }
}

// Creamos una instancia de ProductManager para gestionar los productos
const productManager = new ProductManager();

// Agregamos algunos productos a través del método addProduct
productManager.addProduct('Producto 1', 'Descripción del producto 1', 100, 'imagen1.jpg');
productManager.addProduct('Producto 2', 'Descripción del producto 2', 150, 'imagen2.jpg');

// Obtenemos la lista de productos y la mostramos en la consola
console.log(productManager.getProducts());
