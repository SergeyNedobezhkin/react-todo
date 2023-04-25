import styles from "./Button.module.css";
console.log(styles);
function Button(props) {
  const { onClick, children, title, disabled = false } = props;
  return (
    <button
      {...props}
      type="submit"
      className={styles.button}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
