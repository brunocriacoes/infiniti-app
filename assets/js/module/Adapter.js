import cache from './Cache.js'

const path_host = 'https://adm.infinitisistemas.com.br'


async function login() {
    let path = `${path_host}/api/login`
    path += `?dwwelcomemessage=${cache.token}`
    return await (await fetch(path)).json()
}
async function resumo() {
    let path = `${path_host}/api/resumo`
    path += `?dwwelcomemessage=${cache.token}`
    return await (await fetch(path)).json()
}

export default {
    login,
    resumo
}