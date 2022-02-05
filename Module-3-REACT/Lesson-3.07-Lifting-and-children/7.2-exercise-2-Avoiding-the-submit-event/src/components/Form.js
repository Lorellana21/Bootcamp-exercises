import React from "react-dom";
import Button from "./Button";
import InputGroupCheck from "./InputGroupCheck";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupText from "./InputGroupText";
import Preview from "./Preview";

const Form = (props) => {

    const handleForm = (ev) => {
        ev.preventDefault();
        props.handleFormSubmit(ev)

    }


    return (
        <form className="form" handleFormSubmit={handleForm}>
            <h2>Rellena tus datos para finalizar la compra:</h2>
            <div className="form">


                <InputGroupText
                    labelText="Escribe un nombre:"
                    inputName="name"
                    inputId="name"
                    inputPlaceholder="María García"
                    inputValue={props.name}
                    handleChange={props.handleName}
                />


                <InputGroupText
                    labelText="Escribe un email:"
                    inputName="email"
                    inputId="email"
                    inputPlaceholder="mariagarcia@gmail.com"
                    inputValue={props.email}
                    handleChange={props.handleEmail}
                />


                <InputGroupSelect
                    labelText="Indica tu región::"
                    inputName="region"
                    inputId="region"
                    inputPlaceholder="mariagarcia@gmail.com"
                    inputValue={props.region}
                    handleChange={props.handleRegion}
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
                    inputChecked={props.paymentType === 'creditCard'}
                    handleChange={props.handlePaymentType}
                />

                <InputGroupRadio
                    labelText="Efectivo"
                    inputName="paymentType"
                    inputId="cash"
                    inputValue="cash"
                    inputChecked={props.paymentType === 'cash'}
                    handleChange={props.handlePaymentType}
                />

                <InputGroupRadio
                    labelText="Contra reembolso"
                    inputName="paymentType"
                    inputId="cashOnDelivery"
                    inputValue="cashOnDelivery"
                    inputChecked={props.paymentType === "cashOnDelivery"}
                    handleChange={props.handlePaymentType}
                />


                <InputGroupCheck
                    labelText="Debes aceptar nuestros términos legales para completar la compra:"
                    inputName="legalTerms"
                    inputId="legalTerms"
                    inputChecked={props.legalTerms}
                    handleChange={props.handleLegalTerms}
                />

            </div>

            <Preview
                name={props.name}
                email={props.email}
                region={props.region}
                paymentType={props.paymentType}
                legalTerms={props.legalTerms}
            ></Preview>



            <Button
                inputType="submit"
                inputValue="Enviar"
                inputDisabled={props.isValidForm() === false}
                handleClick={props.handleForm}
            />



            {/* reset */}
            <Button
                inputClass="reset"
                inputType="reset"
                inputValue="Limpiar el formulario"
                handleClick={props.handleReset}
            />

        </form >





    );
};

export default Form;