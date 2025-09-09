export const SecondScreen = () => {
  return (
    <section className="relative mt-[-5vw]">
      <img src="/secondScreenBg.webp" className="w-full" />
      <div
        className="absolute left-0 top-[22.9vw] text-center font-semibold"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <h3 className="text_type_big">Привезли более 1000 авто</h3>
        <p className="max-w-[46.6vw] text_type_3x mt-[1.11vw]">
          Специализируемся на моделях от 5 до 40 млн с пробегом до 50 тыс. км
        </p>
        <div className="mt-[1.11vw] py-[0.76vw] px-[2.22vw] rounded-[200px] bg-white w-fit mx-auto text-[#16171A] font-medium text_type_normal cursor-pointer">
          Связаться
        </div>
      </div>
    </section>
  );
};
