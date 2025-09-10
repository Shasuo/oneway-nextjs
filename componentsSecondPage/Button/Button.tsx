import { memo } from "react";
import { Link } from "react-router";
import classNames from "classnames";
import styles from "./Button.module.css";
import { useMediaQuery } from "react-responsive";

const Button = ({
  type = "button",
  size = "fit",
  className,
  onClick,
  linkTo,
  children,
  ...restProps
}: {
  type: "button" | "submit" | "reset" | undefined;
  size?: string;
  className: any;
  onClick?: any;
  linkTo?: any;
  children?: any;
}) => {
  const buttonClassNames = classNames(
    [styles.button],
    [styles[size]],
    className
  );

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const handleClick = (e: React.MouseEvent) => {
    if (type !== "submit") {
      e.preventDefault();
    }
    onClick?.();
  };

  if (linkTo !== undefined) {
    return (
      <Link className={buttonClassNames} to={linkTo}>
        <span className={`text text_type_normal`}>{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={buttonClassNames}
      onClick={handleClick}
      type={type}
      {...restProps}
    >
      <span
        className={classNames(
          "text",
          `text_type_${isMobile ? "1_5x" : "normal"}`
          //   {
          //   text_type_body_medium: isMobile,
          //   text_type_tiny_medium: !isMobile,
          // }
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default memo(Button);
