const FormikInput = ({
    type,
    label,
    options,
    styles: { labelStyle, inputStyle },
    name,
    required = false,
    placeholder = "",
    onChange,
    onBlur
  }) => {
    let input;
    switch (type) {
      case "text":
      case "email":
        input = (
          <input
            className={inputStyle}
            id={label}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
        );
        break;
        case "number":
        input = (
          <input
            className={inputStyle}
            id={label}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
          />
        );
        break;

      case "select":
        
        input = (<select className={inputStyle} required={required} id={label} name={name} onChange={onChange}>
          <option value={null}>{placeholder}</option>
          {options.map((option,k) => <option key={`opt-${k}`} value={option.value}>{option.text}</option>)}
        </select>);
        break;
  
      default:
        console.log("broke input tag");
    }
  
    return (
      <div>
        <label
          className={labelStyle}
          htmlFor={label}
        >
          {label}
        </label>
        {input}
      </div>
    );
  };
  
  export default FormikInput;
  