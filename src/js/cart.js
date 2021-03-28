const Cart = {
    name: 'Корзина',
    render: () => {
        return `
            <h1>Cart</h1>
            <div id="big-cart" class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th style="width: 100px">Image</th>
                            <th>Name</th>
                            <th style="width: 120px">Quantity</th>
                            <th style="width: 120px">Price</th>
                            <th style="width: 60px">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>                
            </div>
            <div class="text-end h3" id="big-cart-summary"></div>
        `
    }
}

export default Cart