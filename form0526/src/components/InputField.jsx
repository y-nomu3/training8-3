function InputField(props) {
    return (
        <div>
            <label>{props.label}</label>

            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />

            <p>{props.error}</p>
        </div>
    );
}

export default InputField;