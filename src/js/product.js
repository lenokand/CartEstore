import Storage from './_storage'

const Product = {
    name: 'Product',
    render: (prod) => 
    `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 product">
            <div class="product-image" style="background-image: url('/products/${prod.image}')"></div>
            <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">$${prod.price.toLocaleString('ru-RU')}</p>
                <button class="btn btn-primary add-to-cart-button" ${Storage.isInCart(prod.id) ? 'disabled' : ''} data-id="${prod.id}" data-title="${prod.title}" data-image="${prod.image}" data-price="${prod.price}"></button>
            </div>
        </div>
    </div>`
}

export default Product