import classNames from "classnames";
import styles from "./Circle.module.css";
import { useMediaQuery } from "react-responsive";

function Circle({
  isMobile,
  children,
}: {
  isMobile: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.circle}>
      <p
        className={classNames(
          "text",
          `text_type_${isMobile ? "normal" : "2x"}"`,
          [styles.step]
        )}
      >
        {children}
      </p>
    </div>
  );
}

export default Circle;
