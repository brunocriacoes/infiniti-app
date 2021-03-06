
import SuperApp from '../module/SuperApp.js'

globalThis.logar = async () => {
    SuperApp.logar()
}

export default {
    async render(el) {
        return `
            <div id="login">
                <div class="login">
                    <form action="javascript:void(0)" name="form_login" onsubmit="logar()" >
                        <img src="./assets/logo/logo-box-white.png">
                        <label for="">Localizador</label>
                        <input type="text" name="localizador" autocomplete="" value="" required>                
                        <label for="">Nome Usuário</label>
                        <input type="text"  name="login" autocomplete="" value="" required>                
                        <label for="">Senha</label>
                        <input type="password" name="password" autocomplete="" value="" required>
                        <button type="submit">ENTRAR</button>
                        <div class="error" hidden>Usuário ou Senha errados</div>
                    </form>
                </div>
            </div>
        `
    }
}