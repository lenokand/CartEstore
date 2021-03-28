const Storage = {
    getCart: function() {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    isInCart: function(id) {
        const cart = this.getCart()
        return cart.findIndex(item => item.id == id) !== -1
    },
    getTotalQuantity: function() {
        let tq = 0
        const cart = this.getCart()
        cart.forEach(item => {
            tq += +item.quantity
        })
        return tq
    },
    getTotalPrice: function() {
        let tp = 0
        const cart = this.getCart()
        cart.forEach(item => {
            tp += item.quantity * item.price
        })
        return tp
    },
    fetchCart: function() {
        const cart = this.getCart()
        const cartInformerBadge = document.querySelector('#cart-informer span.badge')
        const cartInformerList = document.querySelector('#cart-informer ul')

        cartInformerBadge.textContent = this.getTotalQuantity()

        cartInformerList.innerHTML = ''

        if(this.getTotalQuantity() === 0) {
            cartInformerList.innerHTML += `<li class="px-3">The cart is empty</li>`
        } else {
            cart.forEach(item => {
                cartInformerList.innerHTML += `<li class="px-3 d-flex justify-content-between text-nowrap">
                    <span>${item.title}</span>
                    <span class="ms-5">
                        ${item.quantity}pc
                        <b class="ms-1">
                            $${item.price.toLocaleString('ru-RU')}
                        </b>
                    </span>
                </li>`
            })
            cartInformerList.innerHTML += `<li class="px-3 mt-2 border-top pt-2 h4 d-flex justify-content-between">
                <span>Total:</span>
                <span>
                    <b class="ms-2">
                        $${this.getTotalPrice().toLocaleString('ru-RU')}
                    </b>
                </span>
            </li>`
        }
    },
    fetchBigCart() {
        const cart = this.getCart()
        const bigCartTable = document.querySelector('#big-cart tbody')
        const bigCartSummary = document.querySelector('#big-cart-summary')

        bigCartTable.innerHTML = ''
        bigCartSummary.innerHTML = ''

        if(this.getTotalQuantity() === 0) {
            bigCartTable.innerHTML += `<tr><td colspan="5" class="text-center display-3">The Cart is empty</td></tr>`
        } else {
            cart.forEach(item => {
                bigCartTable.innerHTML += `
                <tr>
                    <td>
                        <img src="/products/${item.image}" alt="${item.title}" style="width: 80px">
                    </td>
                    <td>${item.title}</td>
                    <td>
                        <input type="number" value="${item.quantity}" data-id="${item.id}" min="1" step="1" class="form-control change-product-quantity">
                    </td>
                    <td>${item.price}</td>
                    <td>
                        <button class="btn remove-from-cart-button" data-id="${item.id}"></button>
                    </td>
                </tr>
                `
            })
            bigCartSummary.innerHTML += `Total ${this.getTotalQuantity()} products in ammount of $${this.getTotalPrice()}`
        }
    },
    addToCart: function(product) {
        const cart = this.getCart()
        let i = cart.findIndex(item => item.id === product.id)
        if(i !== -1) {
            cart[i].quantity = cart[i].quantity + 1
        } else {
            product.quantity = 1
            cart.push(product)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        this.fetchCart()
    },
    removeFromCart: function(id) {
        const cart = this.getCart()
        cart.splice(cart.findIndex(item => item.id == id), 1)
        localStorage.setItem('cart', JSON.stringify(cart))
        this.fetchCart()
        this.fetchBigCart()
    },
    changeQuantity: function (id, quantity) {
        const cart = this.getCart()
        cart[cart.findIndex(item => item.id == id)].quantity = quantity
        localStorage.setItem('cart', JSON.stringify(cart))
        this.fetchCart()
        this.fetchBigCart()
    }
}

export default Storage