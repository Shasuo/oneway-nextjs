import { useMediaQuery } from "react-responsive";
import Contacts from "../components/Contacts/Contacts";
import ReviewsBlock from "../components/ReviewsBlock/ReviewsBlock";
import ContactsMobile from "../components/Contacts/ContactsMobile";
import Team from "../components/Team/Team";
import FAQBlock from "../components/FAQBlockMain/FAQBlockMain";
import ReviewsBlockMobile from "../components/ReviewsBlock/ReviewsBlockMobile";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className="">
      <div className="font-semibold">Raleway</div>
      <div className="font-medium">Raleway</div>
      <div className="font-normal">Raleway</div>
      <ReviewsBlockMobile />
      {/* {isMobile && <ReviewsBlockMobile />} */}
      {/* {isMobile && <ReviewsBlock />} */}
      <Team />

      {/* {isMobile ? <ContactsMobile /> : <Contacts />} */}
      {/* <ContactsMobile /> */}
      <Contacts />
      <section className="w-full mt-[10vw] box-border pt-0 px-[5vw] pb-[5vw]">
        <FAQBlock />
      </section>
    </div>
  );
}
