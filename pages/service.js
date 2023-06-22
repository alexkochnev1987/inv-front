import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import { fetchAPI } from "lib/api";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ServiceIntro from "@/components/Services/ServiceIntro";

export default function Service({}) {
  const i18n = useTranslation();
  const locale = i18n.lang;
  const breadCrumbsItems = [
    {
      title: "Услуги",
      path: "/products",
    },
    {
      title: "Архитектурная 3D визуализация",
    },
  ];
  return (
    <Layout bg="white" headerBg="white" footerBg="black">
      <div className="lg:max-w-[1920px]">
        <div
          className="px-3.8
        lg:px-21"
        >
          <TitleSection text="Архитектурная 3D&nbsp;визуализация" />
          <BreadCrumbs links={breadCrumbsItems} />
        </div>
        <ServiceIntro
          title="об услуге"
          text="Архитектурная 3D визуализация это доступный и&nbsp;выгодный способ демонстрации внешнего вида ваших проектов от&nbsp;интерьера квартиры до&nbsp;жилого комплекса. Предметная 3D визуализация это отличный вариант презентовать ваш товара, подготовить рекламный контент или показать внутреннее устройство вашего продукта. 3D моделирование будет полезно в&nbsp;прототипирование для дальнейшего изготовления модели на&nbsp;3D принтере или фрезеровки."
        />
      </div>
    </Layout>
  );
}
