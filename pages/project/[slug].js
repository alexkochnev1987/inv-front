import Seo from "@/components/seo";
import Layout from "@/components/layout";
import Layout from "@/components/layout";
import Image from "next/image";
import { fetchAPI } from "lib/api";
import { getStrapiMedia } from "lib/media";

import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import TagBlock from "@/components/Projects/TagBlock";
import Line from "@/components/ui/Line";
import Video from "@/components/Projects/Video";
import ProjectCarousel from "@/components/Projects/ProjectCarousel";
import ProjectAbout from "@/components/Projects/ProjectAbout";
import IntroCost from "@/components/ui/IntroCost";
import PortfolioCarousel from "@/components/Portfolio/PortfolioCarousel";

function Project({ project, categories }) {
  const imageUrl = getStrapiMedia(project.attributes.Poster);
  console.log(project);

  const seo = {
    metaTitle: project.attributes.Title,
    metaDescription: project.attributes.Description,
    shareImage: project.attributes.Poster,
    project: true,
  };

  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  const breadCrumbsItems = [
    {
      title: t("works.title"),
      path: "/portfolio",
    },
    {
      title: project.attributes.Title,
    },
  ];

  return (
    <Layout bg="white" headerBg="white" footerBg="white">
      <Seo seo={seo} />
      {/* <h1>{project.attributes.Title}</h1>
      {project.attributes.Description && (
        <div>{project.attributes.Description}</div>
      )} */}
      {/* <Image
        width="230"
        height="322"
        src={imageUrl}
        alt={project.attributes.Title}
      /> */}

      <TitleSection text={project.attributes.Title} />
      {project.attributes.tags.data[0] && (
        <TagBlock tags={project.attributes.tags.data} />
      )}
      <Line variantColor="grey" />
      <BreadCrumbs links={breadCrumbsItems} />

      <Video
        poster={project.attributes.Poster}
        videofile={project.attributes.VideoFile}
      />

      {project.attributes.ProjectSliderFotos.data && (
        <ProjectCarousel fotos={project.attributes.ProjectSliderFotos.data} />
      )}

      <ProjectAbout
        task={project.attributes.ProjectTask}
        done={project.attributes.ProjectDone}
        CustomerName={project.attributes.CustomerName}
        CustomerUrl={project.attributes.CustomerUrl}
      />

      <Line variantColor="grey" />
      <IntroCost />
      <PortfolioCarousel title="Другие проекты" />
      <Line variantColor="grey" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const projectsRes = await fetchAPI("/projects", { fields: ["slug"] });

  return {
    paths: projectsRes.data.map((project) => ({
      params: {
        slug: project.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectsRes = await fetchAPI("/projects", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { project: projectsRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

export default Project;
