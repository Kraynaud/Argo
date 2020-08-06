import React, { Component } from 'react';


class Form extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const argonaute = {...this.state}
        this.props.ajouterArgonaute(argonaute)
        //reset
        Object.keys(argonaute).forEach(item => {
            argonaute[item] = ''
        })
        this.setState({ ...argonaute })
    }

    render () {
        return (
            <div>
                <h2>Ajouter un(e) Argonaute</h2>
                <form className="new-member-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Nom de l&apos;Argonaute</label>
                    <input value={this.state.name} onChange={this.handleChange} name="name" type="text" placeholder="Charalampos" />
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        )
    }
}

export default Form;