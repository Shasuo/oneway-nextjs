import { useMediaQuery } from "react-responsive";
import Contacts from "../components/Contacts/Contacts";
import ReviewsBlock from "../components/ReviewsBlock/ReviewsBlock";
import ContactsMobile from "../components/Contacts/ContactsMobile";
import Team from "../components/Team/Team";
import FAQBlock from "../components/FAQBlockMain/FAQBlockMain";
import ReviewsBlockMobile from "../components/ReviewsBlock/ReviewsBlockMobile";
import TeamMobile from "@/components/Team/TeamMobile";
import FAQBlockSecond from "@/components/FAQBlockSecond.tsx/FAQBlockSecond";
import FAQBlockSecondMob from "@/components/FAQBlockSecond.tsx/FAQBlockSecondMob";
import FAQBlockMobile from "@/components/FAQBlockMain/FAQBlockMainMob";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className="">
      <div className="font-semibold">Raleway</div>
      <div className="font-medium">Raleway</div>
      <div className="font-normal">Raleway</div>
      {/* {isMobile && <ReviewsBlockMobile />}
      {!isMobile && <ReviewsBlock />} */}
      {/* <TeamMobile /> */}
      {/* {!isMobile &&  <Team />} */}
      

      {/* {isMobile ? <ContactsMobile /> : <Contacts />} */}
       <ContactsMobile />
      {/* <Contacts /> */}
      <section className="w-full mt-[10vw] box-border pt-0 px-[5vw] pb-[5vw]">
        <FAQBlockMobile />
      </section>

      <FAQBlockSecondMob />
    </div>
  );
}
