import Logo from "@/componentsSecondPage/Logo/Logo";
import styles from "./PartnersPage.module.css";
import { useMediaQuery } from "react-responsive";
import MainBlock from "@/componentsSecondPage/MainBlock/MainBlock";
import FAQBlock from "@/componentsSecondPage/FAQBlock/FAQBlock";
import Process from "@/componentsSecondPage/Process/Process";
import Benefits from "@/componentsSecondPage/Benefits/Benefits";
import Guarantee from "@/componentsSecondPage/Guarantee/Guarantee";
import FormBlock from "@/componentsSecondPage/FormBlock/FormBlock";

function PartnersPage() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <main className={styles.page}>
      {/* {isMobile && <Logo />} */}
      <MainBlock isMobile={isMobile} />
      <Process isMobile={isMobile} />
      <Benefits isMobile={isMobile} />
      <Guarantee isMobile={isMobile} />
      <FAQBlock isMobile={isMobile} />
      <FormBlock isMobile={isMobile} />
    </main>
  );
}

export default PartnersPage;
