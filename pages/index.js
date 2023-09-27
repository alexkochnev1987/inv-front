import React from "react";
import Layout from "@/components/layout";
import { fetchAPI } from "lib/api";
import About from "@/components/pages/index/About";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import ServicesListHome from "@/components/Services/ServicesListHome";
import Line from "@/components/ui/Line";
import Wrapper from "@/components/ui/Wrapper";
import ProjectsListForMain from "@/components/Projects/ProjectsListForMain";

const Home = ({ projects, services, servicesAbout, about, blogs }) => {
  return (
    <>
      <About about={about} servicesAbout={servicesAbout} />
      <ServicesListHome services={services} />
      <Wrapper color="grey" position="top">
        <ProjectsListForMain projects={projects} moreProjects={true} />
      </Wrapper>
      <BlogsBlockList
        articleColor="nero"
        titleColor="white"
        buttonColor="white"
        blogRes={blogs}
      />
      <Line variantColor="eclipse" />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const [projectsRes, servicesRes, servicesAboutRes, aboutRes, blogRes] =
    await Promise.all([
      fetchAPI("/projects", {
        sort: ["ListPosition:asc"],
        populate: {
          Poster: "*",
          Poster_for_mainPage: "*",
          tags: "*",
        },
        fields: ["title", "slug"],
        locale: locale,
        filters: {
          ShowOnMainPage: true,
        },
        pagination: {
          start: 0,
          limit: 6,
        },
      }),
      fetchAPI("/categories", {
        populate: "*",
        fields: ["name", "slug", "text"],
        locale: locale,
        filters: {
          ShowOnMainPage: true,
        },
      }),
      fetchAPI("/categories", {
        filters: {
          ShowAsSlide: true,
        },
        fields: ["name", "slug"],
        locale: locale,
        populate: {
          Slides: {
            sort: ["SlidePosition:asc"],
            populate: "*",
          },
        },
      }),
      fetchAPI("/about", {
        fields: ["SloganPart1", "SloganPart2"],
        populate: ["Video"],
        locale: locale,
      }),
      fetchAPI("/blogs", {
        fields: ["Title", "slug", "Preview"],
        populate: ["tags", "Image_preview"],
        locale: locale,
      }),
    ]);

  return {
    props: {
      projects: projectsRes.data,
      services: servicesRes.data,
      servicesAbout: servicesAboutRes.data,
      about: aboutRes.data,
      blogs: blogRes.data,
    },
    revalidate: 1,
  };
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      bg="black"
      headerBg="black"
      footerBg="black"
      pillowColor="dark"
      variantSvg="darkSvg"
    >
      {page}
    </Layout>
  );
};

export default Home;
