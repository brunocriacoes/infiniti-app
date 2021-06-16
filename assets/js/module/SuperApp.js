import Adapter from "./Adapter.js"
import data from "./Data.js"
import cache from "./Cache.js"

function maker_token( { localizador, login, password } ) {
    return btoa( JSON.stringify( { localizador, login, password } ) )
}

async function logar() {
    cache.token = maker_token( data.form_login )
    let res = await Adapter.login()
    if( res.status ) {
        window.location.href = "#/dash"
    }else {
        cache.token = null
        data.error = true
    }
}

async function resumo () {
    return (await Adapter.resumo())?.valor?.[0]
}


export default {
    resumo,
    maker_token,
    logar
}