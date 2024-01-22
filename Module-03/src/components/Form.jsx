import React from "react";

export default function Form() {
  return (
    <form id='form'>
      <label>
        First name:
        <b id='firstNameText'>Jane</b>
        <input id='firstNameInput' value='Jane' style='display: none' />
      </label>
      <label>
        Last name:
        <b id='lastNameText'>Jacobs</b>
        <input id='lastNameInput' value='Jacobs' style='display: none' />
      </label>
      <button type='submit' id='editButton'>
        Edit Profile
      </button>
      <p>
        <i id='helloText'>Hello, Jane Jacobs!</i>
      </p>
    </form>
  );
}
