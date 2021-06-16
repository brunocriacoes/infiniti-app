export default {
    set token(val) {
        if (val) {
            globalThis.localStorage.setItem('TOKEN_APP', val)
        } else {
            globalThis.localStorage.removeItem('TOKEN_APP')
        }
    },
    get token() {
        return globalThis.localStorage.getItem('TOKEN_APP')
    },
}