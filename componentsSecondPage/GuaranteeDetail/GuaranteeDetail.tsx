import { useMediaQuery } from "react-responsive";
import styles from "./GuaranteeDetail.module.css";

function GuaranteeDetail({
  children,
}: {
  children: any;
}) {
  return (
    <div className={styles.detail}>
      <div className={styles.icon}/>
      <p className="text text_type_2x text_type_normal__mobile">
        {children}
      </p>
    </div>
  );
}

export default GuaranteeDetail;
