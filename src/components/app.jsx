import React, { Component } from 'react';
import Form from './form';
import ArgoList from './argo_list';
// import argonautes from '../argonautes';
import base from '../base';

class App extends Component {
    state = {
        argonautes: []
    }

    componentDidMount () {
        this.ref = base.syncState(`/`, {
          context: this,
          state: 'argonautes'
        })
      }

    ajouterArgonaute = (argonaute) => {
        const argonautes = { ...this.state.argonautes }
        argonautes[`argonaute-${Date.now()}`] = argonaute
        this.setState({ argonautes })
    }

    supprimerArgonaute = (key) => {
        const argonautes = {...this.state.argonautes}
        argonautes[key] = null
        this.setState({ argonautes })
      }

    render () {     
        return (  
            <div className="main">
                <Form ajouterArgonaute={this.ajouterArgonaute}/>
                <ArgoList supprimerArgonaute={this.supprimerArgonaute} argonautes={this.state.argonautes}/>
            </div>
        )
    }
}

export default App;