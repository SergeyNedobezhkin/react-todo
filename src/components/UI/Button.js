import styles from "./Button.module.css";
console.log(styles);
function Button({ onClick, children, title, disabled = false }) {
  return (
    <button
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
