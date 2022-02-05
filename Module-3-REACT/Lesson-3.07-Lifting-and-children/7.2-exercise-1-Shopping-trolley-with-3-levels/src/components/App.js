import { useState } from "react";
import Form from "./Form";


const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
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
      <Form
        name={name}
        email={email}
        region={region}
        paymentType={paymentType}
        legalTerms={legalTerms}
        handleName={handleName}
        handleEmail={handleEmail}
        handleRegion={handleRegion}
        handlePaymentType={handlePaymentType}
        handleLegalTerms={handleLegalTerms}
        handleReset={handleReset}
        handleForm={handleForm}
        isValidForm={isValidForm}
      ></Form>
    </div >
  );
};

export default App;
