import { Component } from 'react'
import ContactoRender from './ContactoRender'

export default class Contacto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: props.contacto.nombre,
            apellido: props.contacto.apellido,
            email: props.contacto.email,
            conectado: props.contacto.conectado
        }
        this.updateConectado = this.updateConectado.bind(this)
    }

    updateConectado() {
        this.setState({ conectado: !this.state.conectado })
    }

    render() {
        return (
            <ContactoRender
                nombre={this.state.nombre}
                apellido={this.state.apellido}
                email={this.state.email}
                conectado={this.state.conectado}
                update={this.updateConectado}
            />
        )
    }
}
