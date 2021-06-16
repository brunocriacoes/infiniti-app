export default {
    get form_login() {
        let form = document.form_login
        return {
            localizador: form.localizador.value ,
            login: form.login.value,
            password: form.password.value 
        }
    },
    set error(status) {
        if( status ) {
            document.querySelector('.error').removeAttribute('hidden')
        }else {
            document.querySelector('.error').setAttribute('hidden')
        }
    },
}