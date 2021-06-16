globalThis.reload = () => {
    window.location.reload()
}
globalThis.back = () => {
    window.history.back()
}
export default {
    render( el ) {
        return `
            <div class="full azul">
                <div class="container">
                    <div class="menu">
                        <div>
                            <a href="javascript:void(back())">
                                <img src="./assets/ico/arrow.svg">
                            </a>
                        </div>
                        <div>
                            Resumo Atual do Balcão
                        </div>
                        <div>
                            <a href="javascript:void(reload())">
                                <img src="./assets/ico/reload.svg">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}