import React from 'react';
import PageContainer from '../PageContainer';
import Img from 'gatsby-image';
import { Link } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../button/Button';
import SocialMediaIcons from '../SocialMediaIcons';
import { useLang } from '@libs/hooks/use-language';
import { useSelector } from '@/libs/context/global/context';

interface Props {
  id: string;
}

const Home: React.FC<Props> = ({ id }) => {
  const image = useStaticQuery(query);
  const {
    lang: {
      pages: { home },
      siteDescription,
    },
  } = useLang();

  const myData = useSelector(s => s.myData);

  return (
    <PageContainer id={id} className="min-h-screen">
      <div
        style={{ height: '85vh' }}
        className="w-full flex justify-center items-center flex-col">
        <Img
          className="w-40 sm:w-48 rounded-full image-shadow"
          fluid={image.imageSharp.fluid}
        />

        <div className="flex justify-center items-center flex-col">
          {/* name */}
          <p className="text-warning font-bold text-2xl uppercase">
            {myData.name.short}
          </p>

          {/* role */}
          <div
            className="flex items-center text-xl web-developer font-semibold -mt-2"
            data-wow-delay="500ms">
            <span className="text-warning text-2xl font-semibold mr-1">
              &#60;
            </span>
            WebDeveloper
            <span className="text-warning text-2xl font-semibold ml-1">
              /&#62;
            </span>
          </div>

          {/* message */}
          <span className="sm:w-1/2 text-center mt-1">{siteDescription}</span>

          {/* button */}
          <div className="flex my-3">
            <Link
              to="sobre-mi"
              smooth
              offset={-56}
              className="Button Button--outline text-sm mr-2">
              {home.labels.buttonKnowMore}
            </Link>

            <a
              href="https://mis-links.herokuapp.com/cv"
              target="_blank"
              className="Button Button--outline text-sm ml-2">
              {home.labels.cv}
            </a>
          </div>

          {/* social media icons */}
          <SocialMediaIcons />

          {/* current location */}
          <small>{myData.currentLocation}</small>
        </div>
      </div>
    </PageContainer>
  );
};

const query = graphql`
  {
    imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default Home;
