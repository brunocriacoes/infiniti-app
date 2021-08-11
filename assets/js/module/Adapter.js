import cache from './Cache.js'

const path_host = 'http://191.243.198.108/adm'


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