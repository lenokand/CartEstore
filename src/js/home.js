import Product from "./product"

const products = [
    {
        id: 1,
        title: 'Macbook',
        image: 'macbook.jpg',
        price: 1500,
    },
    {
        id: 2,
        title: 'Samsung',
        image: 'samsung.jpg',
        price: 1700,
    },
    {
        id: 3,
        title: 'Huawei',
        image: 'huawei.jpg',
        price: 1300,
    },
    {
        id: 4,
        title: 'Asus',
        image: 'asus.jpg',
        price: 2500,
    },
]

const Home = {
    name: 'Главная',
    render: () => {
        let html = `<h1>Products</h1>`
        products.forEach((prod, index) => {
            html += Product.render(prod)
        })
        return html
    }
}

export default Home