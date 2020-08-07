import React from 'react';

const Argonaute = (props) => {
    return (
    <div className="member-item">
        <img src="https://res.cloudinary.com/dkrtmft3y/image/upload/v1596809141/casque_qhbuv1.png" alt=""/>
        <p>{props.name}</p>
        <button className="button"
         onClick={() => props.supprimerArgonaute(props.id)}>x</button>
    </div>
    );
};

export default Argonaute;