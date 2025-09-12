import Contacts from "../components/Contacts/Contacts";
import ReviewsBlock from "../components/ReviewsBlock/ReviewsBlock";
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
import ReviewsBlockMobile from "@/components/ReviewsBlock/ReviewsBlockMobile";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [isMobileState, setIsMobileState] = useState(false);
  useEffect(() => {
    setIsMobileState(isMobile);
  }, [isMobile]);

  return (
    <>
      {!isMobileState && <PreloadCar />}

      <div className="max-w-[97vw] mx-auto w-full relative max-lg:max-w-[91.5vw]">
        <MobileCar />

        {!isMobileState && <FirstScreen />}
        <MobileFirstScreen />
      </div>
      <SecondScreen />
      <div className="max-w-[97vw] mx-auto w-full relative max-lg:max-w-[91.5vw]">
        <ReviewsBlock />
        <ReviewsBlockMobile />
      </div>
      

      {!isMobileState && <WheelBlock />}
      <MobileWheelBlock />

      <Team />

      <div className="max-w-[90vw] mx-auto w-full relative max-lg:max-w-[91.5vw]">
        <Contacts />
        <FAQBlock />
      </div>
    </>
  );
}
