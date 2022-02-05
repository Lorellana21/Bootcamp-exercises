import { useState } from "react";
import Button from "./Button";
import InputGroupCheck from "./InputGroupCheck";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupText from "./InputGroupText";
import Preview from "./Preview";

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular");
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);


  const handleName = (value) => {
    //debugger;
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {

    setLegalTerms(checked);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    console.log("Enviando datos al servidor...");
  };

  const isValidForm = () => {

    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">

          {/* name */}
          <InputGroupText
            labelText="Escribe un nombre:"
            inputName="name"
            inputId="name"
            inputPlaceholder="María García"
            inputValue={name}
            handleChange={handleName}
          />


          <InputGroupText
            labelText="Escribe un email:"
            inputName="email"
            inputId="email"
            inputPlaceholder="mariagarcia@gmail.com"
            inputValue={email}
            handleChange={handleEmail}
          />


          <InputGroupSelect
            labelText="Indica tu región::"
            inputName="region"
            inputId="region"
            inputPlaceholder="mariagarcia@gmail.com"
            inputValue={region}
            handleChange={handleRegion}
            options={[
              'España peninsular',
              'Islas Canarias',
              'Islas Baleares',
              'Ceuta',
              'Melilla',
            ]}
          />


          <label className="label-text">Indica tu método de pago:</label>

          <InputGroupRadio
            labelText="Tarjeta de crédito"
            inputName="paymentType"
            inputId="creditCard"
            inputValue="creditCard"
            inputChecked={paymentType === 'creditCard'}
            handleChange={handlePaymentType}
          />

          <InputGroupRadio
            labelText="Efectivo"
            inputName="paymentType"
            inputId="cash"
            inputValue="cash"
            inputChecked={paymentType === 'cash'}
            handleChange={handlePaymentType}
          />

          <InputGroupRadio
            labelText="Contra reembolso"
            inputName="paymentType"
            inputId="cashOnDelivery"
            inputValue="cashOnDelivery"
            inputChecked={paymentType === "cashOnDelivery"}
            handleChange={handlePaymentType}
          />


          <InputGroupCheck
            labelText="Debes aceptar nuestros términos legales para completar la compra:"
            inputName="legalTerms"
            inputId="legalTerms"
            inputChecked={legalTerms}
            handleChange={handleLegalTerms}
          />

        </div>

        <Preview
          name={name}
          email={email}
          region={region}
          paymentType={paymentType}
          legalTerms={legalTerms}
        ></Preview>



        <Button
          inputType="submit"
          inputValue="Enviar"
          inputDisabled={isValidForm() === false}
          handleClick={handleForm}
        />


        <Button
          inputClass="reset"
          inputType="reset"
          inputValue="Limpiar el formulario"
          handleClick={handleReset}
        />

      </form >
    </div >
  );
};

export default App;
