import React from 'react';
import Argonaute from './argonaute';

const ArgoList = (props) => {
    const crew = Object.keys(props.argonautes)
        .map((key) => <Argonaute key={key} id={key} supprimerArgonaute={props.supprimerArgonaute} name={props.argonautes[key].name}/>) ;
    return (
      <div className="member-list">
        {crew}
      </div>
    );
  };

export default ArgoList;