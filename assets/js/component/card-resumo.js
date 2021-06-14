export default {
    render( el ) {
        let ico = el.getAttribute('ico')
        let title = el.getAttribute('title')
        let subtitle = el.getAttribute('subtitle')
        let atual = el.getAttribute('atual')
        let anterior = el.getAttribute('anterior')
        return `
        <div class="card-resumo">
            <img src="./assets/ico/${ico}">
            <b>${title}</b>
            <span class="card-resumo-title font-37 azul-200-text">${atual}</span>
            <span class="card-resumo-line"></span>
            <small>${subtitle}</small>
            <span class="card-resumo-title font-18">${anterior}</span>
        </div>
        `
    }
}