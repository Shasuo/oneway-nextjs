import Contacts from "../components/Contacts/Contacts";
import Team from "../components/Team/Team";
import PreloadCar from "@/components/PreloadCar/PreloadCar";
import { FirstScreen } from "@/components/FirstScreen/FirstScreen";
import { WheelBlock } from "@/components/WheelBlock/WheelBlock";
import { SecondScreen } from "@/components/SecondScreen/SecondScreen";
import { FAQBlock } from "@/components/FAQBlockMain/FAQBlockMain";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { MobileCar } from "@/components/MobileCar/MobileCar";
import { MobileFirstScreen } from "@/components/MobileFirstScreen/MobileFirstScreen";
import { MobileWheelBlock } from "@/components/MobileWheelBlock/MobileWheelBlock";
import { useAtom } from "jotai";
import { isMainPage } from "@/components/Jotai/atoms";
import { Cases } from "@/components/Cases/Cases";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [isMobileState, setIsMobileState] = useState(false);
  const setIsMainPage = useAtom(isMainPage)[1];
  useEffect(() => {
    setIsMobileState(isMobile);
  }, [isMobile]);

  useEffect(() => setIsMainPage(true), []);

  return (
    <main>
      {!isMobileState && <PreloadCar />}
      <div className="max-w-[97vw] mx-auto w-full relative max-lg:max-w-[91.5vw]">
        <MobileCar />
      </div>
      {!isMobileState && <FirstScreen />}
      <div className="max-w-[97vw] mx-auto w-full relative max-lg:max-w-[91.5vw]">
        <MobileFirstScreen />
      </div>
      <SecondScreen />
      <Cases />
      {!isMobileState && <WheelBlock />}
      <MobileWheelBlock />
      <Team />

      <div className="max-w-[90vw] mx-auto w-full relative max-lg:max-w-[91.5vw]">
        <Contacts />
        <FAQBlock />
      </div>
    </main>
  );
}
