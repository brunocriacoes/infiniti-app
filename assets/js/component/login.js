export default {
    render(el) {
        return `
            <div id="login">
                <div class="login">
                    <form action="">
                        <img src="./assets/logo/logo-box-white.png">
                        <label for="">Localizador</label>
                        <input type="text" required>                
                        <label for="">Nome Usuário</label>
                        <input type="text" required>                
                        <label for="">Senha</label>
                        <input type="password" required>
                        <button type="submit">ENTRAR</button>
                    </form>
                </div>
            </div>
        `
    }
}