import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '@components/Seo';
import { toolbarChangeStyle } from '@helpers/toolbar-change-style.helper';
import { PageContainer } from '@components/PageContainer';
import { useLanguage } from '@libs/hooks/use-language';

const IndexPage = (props: any) => {
  toolbarChangeStyle({ isTransparent: false });
  const { lang } = useLanguage();
  return (
    <>
      <SEO title="Inicio" />
      <PageContainer>
        {/* <button className="bg-red-300" onClick={() => toggleLang()}>
          Toggle language
        </button> */}
        <Link to="/en">English</Link>
        <pre>{lang.labels.githubBtn}</pre>
        <pre>{lang.pages.aboutMe.text}</pre>
      </PageContainer>
    </>
  );
};

export default IndexPage;
