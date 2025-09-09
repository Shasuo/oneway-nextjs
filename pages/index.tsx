import Contacts from "../components/Contacts/Contacts";
import ReviewsBlock from "../components/ReviewsBlock/ReviewsBlock";
import Team from "../components/Team/Team";
import PreloadCar from "@/components/PreloadCar/PreloadCar";
import { FirstScreen } from "@/components/FirstScreen/FirstScreen";
import { WheelBlock } from "@/components/WheelBlock/WheelBlock";
import { SecondScreen } from "@/components/SecondScreen/SecondScreen";
import { FAQBlock } from "@/components/FAQBlockMain/FAQBlockMain";

export default function Home() {
  return (
    <>
      <PreloadCar />
      <div className="max-w-[97vw] mx-auto w-full relative">
        <FirstScreen />
      </div>
      <SecondScreen />
      <div className="max-w-[97vw] mx-auto w-full relative">
        <ReviewsBlock />
      </div>
      <WheelBlock />
      <Team />

      <div className="max-w-[90vw] mx-auto w-full relative">
        <Contacts />
        <FAQBlock />
      </div>
    </>
  );
}
