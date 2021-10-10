import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Features from '../../../components/Features';

export const ServiceList = [
  {
    title: 'Freelancing projects',
    image: '/img/undraw_Organizing_projects.svg',
    description: (
      <>
        I can help automate any product for any platform (e.g: Web, API, Android and iOS) or help
        you create Test automation frameworks.
      </>
    ),
  },
  {
    title: 'Personalized Training',
    image: '/img/undraw_personal_training.svg',
    description: (
      <>
        I can provide personalized training for any tech stack related to Test Automation and CI /
        CD.
      </>
    ),
  },
  {
    title: 'Mentoring',
    image: '/img/undraw_teacher.svg',
    description: (
      <>
        I can help mentor you in Test Automation space, understand different concepts and tools used
        for Automation and CI / CD.
      </>
    ),
  },
  {
    title: 'Knowledge sharing',
    image: '/img/undraw_knowledge.svg',
    description: (
      <>
        I like sharing my knowledge with the QA community. I am thinking of sharing my knowledge via
        blogs, YouTube videos, workshops, talks, etc.
      </>
    ),
  },
];

export default function CoteafsAppium(): JSX.Element {
  return (
    <Layout>
      <Features features={ServiceList} />
    </Layout>
  );
}
