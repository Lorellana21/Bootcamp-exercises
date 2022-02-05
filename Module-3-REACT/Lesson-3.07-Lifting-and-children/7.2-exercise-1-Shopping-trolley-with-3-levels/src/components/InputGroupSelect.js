
const InputGroupSelect = (props) => {


    const handleRegion = (ev) => {
        props.handleChange(ev.target.value);
    }

    const renderOptions = () => {
        return props.options.map((option, index) => (
            <option key={index}>{option}</option>
        ));
    };


    return (


        <div className="input-group-select">
            <label className="label-text" htmlFor={props.inputId}>
                {props.labelText}
            </label>
            <select
                className="input-select"
                name={props.inputName}
                id={props.inputId}
                value={props.inputValue}
                onChange={handleRegion}
            >
                {renderOptions()}
            </select>
        </div>


    );
};

export default InputGroupSelect;