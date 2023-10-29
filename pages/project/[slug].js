import Seo from '@/components/seo';
import Layout from '@/components/layout';
import Image from 'next/image';
import {fetchAPI} from 'lib/api';
import {getStrapiMedia} from 'lib/media';

import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';
import TagBlock from '@/components/Projects/TagBlock';
import Line from '@/components/ui/Line';
import ProjectCarousel from '@/components/Projects/ProjectCarousel';
import ProjectAbout from '@/components/Projects/ProjectAbout';
import IntroCost from '@/components/ui/IntroCost';

function Project({project, categories}) {
  const {t} = useTranslation('common');
  const i18n = useTranslation();
  const locale = i18n.lang;
  const imageUrl = getStrapiMedia(project.attributes.Poster);

  const seo = {
    metaTitle: t('seo.project') + project.attributes.Seo[0].metaTitle,
    metaDescription: project.attributes.Seo[0].metaDescription,
    shareImage: project.attributes.Poster,
    project: true,
  };

  const breadCrumbsItems = [
    {
      title: t('works.title'),
      path: '/portfolio',
    },
    {
      title: project.attributes.Title,
    },
  ];
  return (
    <>
      <Seo seo={seo} />

      <TitleSection text={project.attributes.Title} />
      {project.attributes.tags.data[0] && (
        <TagBlock tags={project.attributes.tags.data} />
      )}
      <Line variantColor='grey' />
      <BreadCrumbs links={breadCrumbsItems} />

      <ProjectCarousel
        photos={project.attributes.ProjectSliderFotos.data}
        poster={project.attributes.Poster}
        videoFiles={project.attributes.VideoFile}
      />

      <ProjectAbout
        task={project.attributes.ProjectTask}
        done={project.attributes.ProjectDone}
        CustomerName={project.attributes.CustomerName}
        CustomerUrl={project.attributes.CustomerUrl}
      />

      <Line variantColor='grey' />
      <div className='py-10 md:py-15 lg:py-18'>
        <IntroCost />
      </div>

      <Line variantColor='grey' />
    </>
  );
}

export async function getStaticPaths() {
  const projectsRes = await fetchAPI('/projects', {fields: ['slug']});

  return {
    paths: [
      ...projectsRes.data.map((project) => ({
        params: {
          slug: project.attributes.slug,
        },
      })),
      ...projectsRes.data.map((project) => ({
        params: {
          slug: project.attributes.slug,
        },
        locale: 'en',
      })),
    ],
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const projectsRes = await fetchAPI('/projects', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  });
  const categoriesRes = await fetchAPI('/categories');

  return {
    props: {project: projectsRes.data[0], categories: categoriesRes},
    revalidate: 1,
  };
}
Project.getLayout = function getLayout(page) {
  return (
    <Layout
      bg='white'
      headerBg='white'
      footerBg='white'
      pillowColorFooter='whiteClasses'
      variantSvg='darkClassesSvg'
    >
      {page}
    </Layout>
  );
};
export default Project;
