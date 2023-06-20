const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};

const productos = [
	{
	  nombre: "Zapatos Nike",
	  imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	  precio: "$80"
	},
	{
		nombre: "Zapatos Adidas",
		imagen: "img/Prod7.jpg",
		precio: "$120"
	  },
	
  ];

  /*
mongoose.connect('mongodb://localhost:27017/BaseDeDatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión exitosa a la base de datos');
}).catch(error => {
  console.error('Error al conectar a la base de datos:', error);
});

// Definir un esquema para el modelo de productos
const productoSchema = new mongoose.Schema({
  nombre: String,
  imagen: String,
  precio: String
});

// Crear el modelo de productos utilizando el esquema definido
const Producto = mongoose.model('Producto', productoSchema);

// Obtener los productos de la base de datos
Producto.find({}, (error, productos) => {
  if (error) {
    console.error('Error al obtener los productos:', error);
    return;
  }
  */


  
 
  const container = document.querySelector(".container-items");
  
 
  productos.forEach(producto => {
	
	const item = document.createElement("div");
	item.classList.add("item");
  
	const figure = document.createElement("figure");
	const img = document.createElement("img");
	img.src = producto.imagen;
	img.alt = "producto";
	figure.appendChild(img);
  
	const infoProduct = document.createElement("div");
	infoProduct.classList.add("info-product");
	const h2 = document.createElement("h2");
	h2.textContent = producto.nombre;
	const p = document.createElement("p");
	p.classList.add("price");
	p.textContent = producto.precio;
	const button = document.createElement("button");
	button.classList.add("btn-add-cart");
	button.textContent = "Añadir al carrito";
	infoProduct.appendChild(h2);
	infoProduct.appendChild(p);
	infoProduct.appendChild(button);
  
	
	item.appendChild(figure);
	item.appendChild(infoProduct);
	container.appendChild(item);
  });
