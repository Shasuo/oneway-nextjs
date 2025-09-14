import styles from "./PartnersPage.module.css";
import MainBlock from "@/componentsSecondPage/MainBlock/MainBlock";
import FAQBlock from "@/componentsSecondPage/FAQBlock/FAQBlock";
import Process from "@/componentsSecondPage/Process/Process";
import Benefits from "@/componentsSecondPage/Benefits/Benefits";
import Guarantee from "@/componentsSecondPage/Guarantee/Guarantee";
import FormBlock from "@/componentsSecondPage/FormBlock/FormBlock";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { isMainPage } from "@/components/Jotai/atoms";

function PartnersPage() {
  const setIsMainPage = useAtom(isMainPage)[1];

  useEffect(() => setIsMainPage(false), []);

  return (
    <main className={styles.page}>
      <MainBlock />
      <Process />
      <Benefits />
      <Guarantee />
      <FAQBlock  />
      <FormBlock  />
    </main>
  );
}

export default PartnersPage;
