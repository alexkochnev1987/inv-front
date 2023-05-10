import React from "react";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";
import About from '../components/pages/index/About';
import Services from '../components/pages/index/Services';
import Projects from '../components/pages/index/Projects';
import Blog from '../components/pages/index/Blog';
import {useLayoutEffect} from 'react';

const Home = ({  projects }) => {
	useLayoutEffect(() => {
		document.body.classList.add("bg-black");
		document.body.classList.add("text-white");
	  })
  return (
    <Layout >
       <div className="mx-auto py-6">
        <About />
        <Services />
        <Projects projects={projects} />
        <Blog />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [projectsRes] = await Promise.all([
   
	fetchAPI("/projects", { populate: "*" })
    
  ]);

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}

export default Home;