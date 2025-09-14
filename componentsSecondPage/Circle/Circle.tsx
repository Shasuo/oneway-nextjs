import classNames from "classnames";
import styles from "./Circle.module.css";

function Circle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.circle}>
      <p
        className={classNames(
          "text text_type_2x text_type_normal__mobile",
          [styles.step]
        )}
      >
        {children}
      </p>
    </div>
  );
}

export default Circle;
