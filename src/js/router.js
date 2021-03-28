import Home from './home'
import Cart from './cart'
import Storage from "./_storage";

const routeView = document.querySelector('#route-view')
const routerLinks = document.querySelectorAll('a[data-route]')

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    }
]

routerLinks.forEach((link, index) => {
    link.onclick = function(e) {
        e.preventDefault()
        const match = routes.find((route, index) => route.path === this.getAttribute('href'))
        renderComponent(match.component.render(), match.component.name)
        if(match.component === Cart) {
            Storage.fetchBigCart()
        }
        setActiveLink(this)
    }
})

function setActiveLink(link) {
    document.querySelector('a[data-route].active').classList.remove('active')
    link.classList.add('active')
}

function renderComponent(html, name) {
    document.querySelector('title').textContent = name
    routeView.innerHTML = html
}

renderComponent(routes[0].component.render(), routes[0].component.name)