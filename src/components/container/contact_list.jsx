import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {
    const defaultContact = new Contact('Sara', 'Chao', 'sarachaotizon@gmail.com', false);
    
    const [connected, setcon] = useState(false);

    const changeStatus = () => setcon(!connected);

    return (
        <div>
            <h1>Your Contacts</h1>
            <ContactComponent contact={defaultContact}></ContactComponent>
            <div>
                <button onClick={changeStatus}>
                    Change Status
                </button>
            </div>
        </div>
    );
};


// ContactList.propTypes = {
    
// };


export default ContactList;
