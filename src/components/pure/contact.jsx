import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Name: {contact.name}
            </h2>
            <h2>
                Surname: {contact.surname}
            </h2>
            <h3>
                Email: {contact.email}
            </h3>
            <h4>
                Status: {contact.connected ? 'ONLINE':'OFFLINE'}
            </h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
