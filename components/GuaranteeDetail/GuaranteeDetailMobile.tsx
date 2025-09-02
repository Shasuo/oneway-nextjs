import { useMediaQuery } from "react-responsive";
import styles from "./GuaranteeDetail.module.css";

function GuaranteeDetailMobile({ children } : { children: React.ReactNode }) {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className="flex flex-col w-[81.6vw] gap-[3.2vw]">
      <div className="w-[6.667vw] h-[6.667vw]" 
      style={{backgroundImage: `url(guarantee_icon.svg)`, backgroundSize:"cover"}}></div>
      <p className="text_type_normal font-medium">{children}</p>
    </div>
  );
}

export default GuaranteeDetailMobile;
