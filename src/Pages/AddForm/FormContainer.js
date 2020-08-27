//логика функционирования приложения
import React, { Component } from "react";
import FormComponent from "./FormComponent";

class Form extends Component {
  constructor() {
    //как должен выглядеть интерфейс
    super();
    this.state = {
      firstName: "",
      lastName: "",
      middleName: "",
      city: "",
      offer: "",
      phone: "",
      passport: "",
      date: "", //не работает
      isToggleOn: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //this.toStringDate = this.toStringDate.bind(this);
  }

  handleChange(event) {
    //«business logic» (то что реализует логику функционирования приложения)
    const { name, value } = event.target; //ивент - событие(handleChange);таргет - элемент откуда пришло событие
    this.setState({
      [name]: value
    });
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
/*
  toStringDate() {
    this.setState(state => ({
      date: state.toLocaleDateString()
    }));
  }

  toStringDate={this.toStringDate}
  */

  render() {
    //формирование интерфейса приложения
    return (
      <FormComponent
        handleChange={this.handleChange}
        data={this.state}
        handleClick={this.handleClick}
      />
    );
  }
}

export default Form;
