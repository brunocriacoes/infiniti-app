import SuperApp from '../module/SuperApp.js'

function valor_real(valor_fload) {
    return valor_fload.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export default {
    async render(el) {

        let total = {
            caixa_mes_ant: 120,
            caixa_mes_atual: 0,
            fat_ant_pecas: 2667,
            fat_ant_rols: 0,
            fat_ant_valor: 33093.91,
            fat_atual_pecas: 0,
            fat_atual_rols: 0,
            fat_atual_valor: 0,
            novos_cli_ant: 42,
            novos_cli_atual: 0,
            pacotes_ant: 120,
            pacotes_atual: 0,
            pecas_aberto: 702,
            pecas_atraso: 702,
            pecas_pacotes: 41,
            quant_pacotes: 3,
            rols_aberto: 136,
            rols_atraso: 136,
            ticket_medio: 0,
            tickets_dia: 0,
            valor_aberto: 9862.57,
            valor_atraso: 9862.57,
            valor_caixa: 86,
        }

        total = await SuperApp.resumo()

        const MES_ATUAL = [
            {
                ico: "clipboards.svg",
                title: "Rols",
                subtitle: "Mês Anterior",
                atual: total.fat_atual_rols,
                anterior: total.fat_ant_rols,
            },
            {
                ico: "bag.svg",
                title: "Preços",
                subtitle: "Mês Anterior",
                atual: valor_real(0),
                anterior: valor_real(0),
            },
            {
                ico: "money.svg",
                title: "Valor",
                subtitle: "Mês Anterior",
                atual: valor_real(total.fat_atual_valor),
                anterior: valor_real(total.fat_ant_valor),
            },
            {
                ico: "user.svg",
                title: "Clientes Novos",
                subtitle: "Mês Anterior",
                atual: total.novos_cli_atual,
                anterior: total.novos_cli_ant,
            },
            {
                ico: "box.svg",
                title: "Pacotes Vendidos",
                subtitle: "Mês Anterior",
                atual: total.pacotes_atual,
                anterior: total.pacotes_ant,
            },
            {
                ico: "card.png",
                title: "Recebimento Mês Atual",
                subtitle: "Mês Anterior",
                atual: valor_real(total.tickets_dia),
                anterior: valor_real(total.ticket_medio,)
            }
        ]

        const ACOMPANHAMENTO = [
            {
                ico: "clipboards.svg",
                title: "Rols em Aberto",
                subtitle: "Em Atraso",
                atual: total.rols_aberto,
                anterior: total.rols_atraso,

            },
            {
                ico: "bag.svg",
                title: "Peças em Aberto",
                subtitle: "Em Atraso",
                atual: total.pecas_aberto,
                anterior: total.pecas_atraso,


            },
            {
                ico: "money.svg",
                title: "Valor em Aberto",
                subtitle: "Em Atraso",
                atual: valor_real(total.valor_aberto),
                anterior: valor_real(total.valor_atraso),
            },
            {
                ico: "box.svg",
                title: "Pacotes em Aberto",
                subtitle: "Em Atraso",
                atual: total.quant_pacotes,
                anterior: total.pecas_pacotes,
            },
            {
                ico: "shirt.svg",
                title: "Caixa Atual",
                subtitle: "Em Atraso",
                atual: valor_real(total.caixa_mes_atual),
                anterior: valor_real(total.caixa_mes_ant),
            }

        ]


        let tpl_mes_atual = MES_ATUAL.map(post => `<c-cardresumo 
            ico="${post.ico}" 
            title="${post.title}" 
            subtitle="${post.subtitle}" 
            atual="${post.atual}" 
            anterior="${post.anterior}" 
            ></c-cardresumo>` ).join('\n')

        let tpl_acompanhamento = ACOMPANHAMENTO.map(post => `<c-cardresumo 
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