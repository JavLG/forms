

const Button = ({styles, label, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className={styles} alt={label}>{label}</button>
    </div>
  );
};

export default Button;