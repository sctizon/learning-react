import React from 'react'
import PropTypes from 'prop-types'

function ContactoRender({ nombre, apellido, email, conectado, update }) {
    return (
        <>
            <p>{nombre}</p>
            <p>{apellido}</p>
            <p>{email}</p>
            <p>{conectado ? 'Contacto En Linea' : 'Contacto No Disponible'}</p>
            <button onClick={() => update()}>Cambiar Estado</button>
        </>
    )
}

ContactoRender.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool,
    update: PropTypes.func
}

export default ContactoRender
