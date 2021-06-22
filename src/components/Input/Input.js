const Input = ({
  type,
  label,
  styles: { labelStyle, inputStyle },
  name,
  required = false,
  placeholder = "",
  onChange
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
          onChange={({target}) => onChange(target.value, target.name)}
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
        />
      );
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

export default Input;
