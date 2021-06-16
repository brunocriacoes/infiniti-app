import cache from './Cache.js'

const path_host = 'http://201.73.0.78:9192'

async function login() {
    let path = `${path_host}/adm/login?dwwelcomemessage`
    path += `?dwwelcomemessage=${cache.token}`
    return await (await fetch(path)).json()
}
async function resumo() {
    let path = `${path_host}/adm/Ler_Resumo_Lav_Balcao?dwwelcomemessage`
    path += `?dwwelcomemessage=${cache.token}`
    return await (await fetch(path)).json()
}

export default {
    login,
    resumo
}