import useTranslation from "next-translate/useTranslation";
import PillowLink from "./PillowLink";
import Loading from "./Loading";

export default function IntroCost({ texts }) {
  const { t } = useTranslation("common");
  if (!texts) {
    <Loading />;
  }
  console.log(texts);
  return (
    <div className="py-6 md:py-5">
      <div
        className="w-full bg-[url('/image/content/bg-intro-mob.png')] bg-no-repeat bg-cover pt-15 pb-10 px-10 rounded-5xl flex flex-col justify-between md:bg-[url('/image/content/bg-intro.png')] md:bg-right-top-30 min-h-[463px] text-white mx-auto
    md:pb-33 lg:px-21 lg:pt-25 lg:pb-20"
      >
        <h3
          className="text-4xl tracking-tight md:w-9/12 mb-10
      lg:text-6xl       lg:mb-7"
        >
          {texts.Title}
        </h3>
        <p
          className="pr-6 w-full mb-auto pb-5 tracking-tighter
      md:text-xl md:max-w-[378px] le md:pr-0 md:w-2/4
      lg:text-1xl "
        >
          {texts.Slogan}
        </p>
        <PillowLink
          text={texts.ButtonText}
          link="/brief"
          variantSvg="dark"
          variant="white"
        ></PillowLink>
      </div>
    </div>
  );
}
