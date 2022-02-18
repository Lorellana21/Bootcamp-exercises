import React, { useState } from "react";

import GetAvatar from "./GetAvatar";


function Fill(props) {
  return (
    <>
      <label className="form__label" htmlFor="email">
        Email:
      </label>
      <input className="form__input-text" type="email" id="email"/>
      <label className="form__label" htmlFor="email">
        nombre:
      </label>
      <input className="form__input-text" type="email" id="email"/>
      <GetAvatar image={props.image}
                 updateAvatar={props.updateAvatar}/>
    </>
  );
}

export default Fill;
