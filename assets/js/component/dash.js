const MES_ATUAL = [
    { 
        ico: "clipboards.svg",
        title:"Rols",
        subtitle: "Mês Anterior",
        atual: "",
        anterior: "",
    },
    { 
        ico: "bag.svg",
        title:"Preços",
        subtitle: "Mês Anterior",
        atual: "",
        anterior: "",
    },
    { 
        ico: "money.svg",
        title:"Valor",
        subtitle: "Mês Anterior",
        atual: "",
        anterior: "",
    },
    { 
        ico: "user.svg",
        title:"Clientes Novos",
        subtitle: "Mês Anterior",
        atual: "",
        anterior: "",
    },
    { 
        ico: "box.svg",
        title:"Pacotes Vendidos",
        subtitle: "Mês Anterior",
        atual: "",
        anterior: "",
    },
    { 
        ico: "card.png",
        title:"Recebimento Mês Atual",
        subtitle: "Mês Anterior",
        atual: "",
        anterior: "",
    }    
]

const ACOMPANHAMENTO = [
    { 
        ico: "clipboards.svg",
        title:"Rols em Aberto",
        subtitle: "Em Atraso",
        atual: "",
        anterior: "",
    },
    { 
        ico: "bag.svg",
        title:"Peças em Aberto",
        subtitle: "Em Atraso",
        atual: "",
        anterior: "",
    },
    { 
        ico: "money.svg",
        title:"Valor em Aberto",
        subtitle: "Em Atraso",
        atual: "",
        anterior: "",
    },
    { 
        ico: "box.svg",
        title:"Pacotes em Aberto",
        subtitle: "Em Atraso",
        atual: "",
        anterior: "",
    },
    { 
        ico: "shirt.svg",
        title:"Caixa Atual",
        subtitle: "Em Atraso",
        atual: "",
        anterior: "",
    }
    
]

export default {
    render(el) {
        let tpl_mes_atual = MES_ATUAL.map( post => `<c-cardresumo 
            ico="${post.ico}" 
            title="${post.title}" 
            subtitle="${post.subtitle}" 
            atual="${post.atual}" 
            anterior="${post.anterior}" 
            ></c-cardresumo>` ).join('\n')
            
        let tpl_acompanhamento = ACOMPANHAMENTO.map( post => `<c-cardresumo 
            ico="${post.ico}" 
            title="${post.title}" 
            subtitle="${post.subtitle}" 
            atual="${post.atual}" 
            anterior="${post.anterior}" 
            ></c-cardresumo>` ).join('\n')

        return `
            <div id="dash">
                <div>            
                    <c-menu></c-menu>
                    <div class="full gray-100 p-1">
                        <div class="container">
                            <h1 class="title azul-200-text">mês atual - faturamento</h1>
                            <div class="grid grid-3 g-1">
                                ${tpl_mes_atual}
                            </div>
                            <h2 class="title red-100-text">acompanhamento</h2>
                            <div class="grid grid-3 g-1">
                                ${tpl_acompanhamento}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}