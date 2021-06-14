import App from './module/App.js'
import menu from './component/menu.js'
import cardresumo from './component/card-resumo.js'
import login from './component/login.js'
import dash from './component/dash.js'

const Aplication = new App( {
    el: "#app",
    router: [
        { path: "#/", model: "<c-login></c-login>" },
        { path: "#/dash", model: "<c-dash></c-dash>" },
    ],
    component: {
        menu,
        login,
        cardresumo,
        dash
    }
} )
