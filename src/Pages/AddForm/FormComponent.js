//интерфейс приложения
import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          type="text"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="Фамилия"
        />
        <br />

        <input
          type="text"
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="Имя"
        />
        <br />

        <input
          type="text"
          name="middleName"
          value={props.data.middleName}
          onChange={props.handleChange}
          placeholder="Отчество"
        />

        <div>
          <input
            type="date"
            name="date"
            value={props.data.date}
            onChange={props.prototype}
            placeholder="Дата рождения"
          />
          <br />
        </div>

        <input
          type="tel"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          maxLength="12"
          value={props.data.phone}
          onChange={props.handleChange}
          placeholder="Телефон"
        />
        <br />

        <input
          type="number"
          name="passport"
          value={props.data.passport}
          onChange={props.handleChange}
          placeholder="Паспорт"
        />
        <br />

        <div>
          <label>Город проживания</label>
          <div>
            <select
              value={props.data.city}
              onChange={props.handleChange}
              name="city"
            >
              <option value="">Выбрать</option>
              <option value="Kazan">Kazan</option>
              <option value="Moscov">Moscov</option>
            </select>
          </div>
        </div>
        <br />

        <div>
          <label>Оффер</label>
          <div>
            <select
              value={props.data.offer}
              onChange={props.handleChange}
              name="offer"
            >
              <option value="">Выбрать</option>
              <option value="First">First offer</option>
              <option value="Second">Second offer</option>
            </select>
          </div>
        </div>
        <br />

        <button onClick={props.handleClick}>
          {props.data.isToggleOn ? "Сохранить" : "Сохранено"}
        </button>
      </form>

      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {props.data.firstName} {props.data.lastName}{" "}
        {props.data.middleName}
      </p>
      <p>Your city: {props.data.city}</p>
      <p>Offer: {props.data.offer}</p>
      <p>Phone: {props.data.phone}</p>
      <p>Dbirth: {props.data.date}</p>
    </main>
  );
}

export default FormComponent;
