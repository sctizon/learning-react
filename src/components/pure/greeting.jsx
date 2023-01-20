import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props) {
        super(props); /* Información que se le pasa por atributos */
        this.state = { /* Información privada del componente. Propiedades de la clase */
            age : 22
        }
    }
    
    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name}
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick = {this.birthday}> {/* Importante que sea onClick. onclick no funciona */}
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
