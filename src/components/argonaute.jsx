import React from 'react';

const Argonaute = (props) => {
    return (
    <div className="member-item">
        <p>{props.name}</p>
        <button className="button"
         onClick={() => props.supprimerArgonaute(props.id)}>x</button>
    </div>
    );
};

export default Argonaute;