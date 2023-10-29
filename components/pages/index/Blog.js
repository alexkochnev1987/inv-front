import PillowLink from "../../ui/PillowLink";
import TitleH2 from "@/components/ui/TitleH2";
import Article from "@/components/ui/Article";
import ButtonPagination from "@/components/ui/ButtonPagination";
import { useRef } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "@/components/ui/Loading";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useTranslation from "next-translate/useTranslation";

export default function Blog({ blogs, titleColor, articleColor, buttonColor }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  if (!blogs) {
    return <Loading />;
  }

  return (
    <section
      className="text-white pt-18 pb-[38px] mx-auto
    md:pb-20 md:pt-20
    lg:pb-20 lg:max-w-[1746px] lg:pt-33 pl-3.8"
    >
      <div
        className="flex justify-between pb-10 items-center
        md:pb-15 lg:pb-18"
      >
        <TitleH2 text="Блог invert" variant={titleColor} />

        <div className="flex">
          <div ref={navigationPrevRef}>
            <ButtonPagination variant={buttonColor}>
              <svg
                className='w-[9px] h-[15px] viewBox="0 0 9 15'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </ButtonPagination>
          </div>
          <div ref={navigationNextRef}>
            <ButtonPagination variant={buttonColor}>
              <svg
                className='w-[9px] h-[15px] viewBox="0 0 9 15 rotate-180'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </ButtonPagination>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        spaceBetween={10}
        slidesPerView={"auto"}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        virtual
        loop={true}
      >
        {blogs[0] &&
          blogs.map((blog, key) => (
            <SwiperSlide key={key}>
              <Article
                image={blog.attributes.Image_preview}
                link={blog.attributes.slug}
                tag="VR"
                title={blog.attributes.Title}
                text={blog.attributes.Preview}
                variant={articleColor}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="mt-7">
        <PillowLink
          text={t("All_news")}
          link={`/${i18n.lang}/blogs`}
          variant="dark"
          variantSvg="whiteClassesSvg"
        />
      </div>
    </section>
  );
}
