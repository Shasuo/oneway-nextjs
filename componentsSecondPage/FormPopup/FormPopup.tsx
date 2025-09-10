import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./FormPopup.module.css";
// import DoneIcon from "../../assets/form_done.svg?react";
// import CloseIcon from "../../assets/close.svg?react";
import { useMediaQuery } from "react-responsive";

function FormPopup({ isOpen, onClose }: { isOpen: any; onClose: any }) {
  useEffect(() => {
    if (!isOpen) return;
    // const timer = setTimeout(onClose, 5000);
    // return () => clearTimeout(timer);
    return;
  }, [onClose]);

  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  if (!isOpen) return null;
  return createPortal(
    <div className={styles.overlay} onClick={handleBackgroundClick}>
      <div className={styles.popup}>
        <button className={styles.close_button} onClick={onClose}>
          {/* <CloseIcon /> */}
        </button>
        {/* <DoneIcon className={styles.icon} /> */}
        <div className={styles.content}>
          <h2 className={`text text_type_h3_semibold`}>
            Заявка успешно отправлена
          </h2>
          <p className={`text text_type_${isMobile ? "body" : "h4"}_medium`}>
            Менеджер свяжется с&nbsp;вами в&nbsp;ближайшее время
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default FormPopup;
