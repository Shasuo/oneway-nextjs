import styles from "./ReviewSlide.module.css";

export default function ReviewsSlide({
  countryFrom,
  countryTo,
  carModel,
  comment,
  socialNetwork,
  socialIcon,
  socialAlt,
  imgSrc,
  imgAlt,
  onClickLeft,
  onClickRight,
}: {
  countryFrom: string;
  countryTo: string;
  carModel: string;
  comment: string;
  socialNetwork?: string;
  socialIcon?: string;
  socialAlt?: string;
  imgSrc: string;
  imgAlt: string;
  onClickLeft: React.MouseEventHandler<HTMLButtonElement>;
  onClickRight: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="flex h-[70vh] items-center w-full box-border px-[5vw] py-0 relative">
      <div className="flex flex-col max-w-[34.58vw] w-full justify-between  mr-[3.47vw]">
        <div className="flex flex-col gap-[10px] ">
          <p className="font-semibold flex items-center gap-[0.69vw] text_type_1_5x">
            {countryFrom} <img src="path.png" alt="" /> {countryTo}
          </p>
          <h2 className="text_type_4x">{carModel}</h2>
          <p className="text_type_2x">{comment}</p>
        </div>
        <div className="absolute bottom-0">
          <div className="mt-[3.47vw] flex text_type_1_5x">
            {socialIcon ? <img
              src={socialIcon}
              alt={socialAlt}
              className="w-[1.11vw] h-[1.11vw]"
            /> : null}
            <p className="ml-[0.556vw]">{socialNetwork}</p>
          </div>
          <div className="flex">
            <button
              className="hover:cursor-pointer flex items-center justify-center w-[1.875vw] h-[1.875vw] bg-[#141519] text-white rounded-[50%] border border-white mr-[14px] mt-[12px] mb-0 text_type_2x"
              onClick={onClickLeft}
            >
              {"<"}
            </button>
            <button
              className="hover:cursor-pointer flex items-center justify-center w-[1.875vw] h-[1.875vw] bg-[#141519] text-white rounded-[50%] border border-white mr-[14px] mt-[12px] mb-0 text_type_2x"
              onClick={onClickRight}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[4.86vw]  w-[52.64vw] overflow-hidden absolute right-0">
        <img className="max-h-[70vh] max-w-[45vw] left-0" src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
}
