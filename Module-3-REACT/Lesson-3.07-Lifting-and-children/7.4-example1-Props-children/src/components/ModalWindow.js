// Y React mete este h1 en una prop especial llamada children de este componente.

const ModalWindow = (props) => {
    console.log(props.children);



    return (
        <section className="modal-window">
            <p>Esto es una ventana modal</p>
            {props.children} {/* Lo queremos pintar después de un párrafo y antes del cierre de la sección */}
        </section>
    );
};

export default ModalWindow;