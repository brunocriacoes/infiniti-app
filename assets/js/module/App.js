export default class {
    el = null
    hash = null
    router = []
    model = null
    component = {}
    template = null
    constructor({ el, router, component }) {
        this.el = el
        this.router = router
        this.component = component
        this.maker_custon_elements()
        this.render()
        window.addEventListener("hashchange", () => this.render())
    }
    corruent_hash() {
        this.hash = window.location.hash || '#/'
    }
    corruent_model() {
        this.model = this.router.find(router => router.path == this.hash)?.model
    }
    live() {
        let el = document.querySelector(this.el)
        let is_router = this.router.find(post => post.path == this.hash)
        if (el && is_router) {
            let keys = Object.keys(this.component)
            el.innerHTML = this.template
        } else {
            // el.innerHTML = ""
        }
    }
    set_template() {
        this.template = this.router.find(route => route.path == this.hash)?.model
        this.template = this.template
    }
    maker_custon_elements() {
        let names_elements = Object.keys(this.component)
        names_elements.forEach(element_name => {
            let component = this.component[element_name]
            window.customElements.define(`c-${element_name}`, class extends HTMLElement {
                constructor() {
                    super();
                    this.innerHTML = component.render( this )
                }
            })
        })
    }
    render() {
        this.corruent_hash()
        this.corruent_model()
        this.set_template()
        this.live()
    }
}