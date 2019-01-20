import React, { Component } from 'react';

class Header extends Component {
    state = {
        title: "",
        description: "",
        quality: 1
    }

    resetForm = () => {
        this.setState({
            title: "",
            description: ""
        });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addIdea(this.state);
        this.resetForm();
    }

    render() {
        return (
            <header>
                  <div className="container">
                      <h1 className="logo">
                          <span className="logo-span"><b>Idea</b></span><b>Box</b>
                      </h1>
                      <div className="form-div">
                          <form className="header-form">
                              <input name="title" onChange={this.handleChange} value={this.state.title} className="input-padd" type="text" placeholder="Title"/>
                              <textarea name="description" onChange={this.handleChange} value={this.state.description} className="input-padd" placeholder="Description"></textarea>
                              <input onClick={this.handleSubmit} className="save-btn" type="button" value="SAVE"/>
                          </form>
                      </div>
                  </div>
            </header>
        );
    }
}

export default Header;