import React, { useEffect, useState } from 'react';
import {
  toggleSideDrawer,
  setSkillSectionAsVisited,
} from '@libs/context/global/actions';
import { useLang } from '@libs/hooks/use-language';
import {
  HomeIcon,
  AboutMeIcon,
  ProjectsIcon,
  ContactIcon,
  SkillsIcon,
} from '../svg-icons';
import { PagesLinkLabel } from '@models/locale.model';
import { pagesLinkLabelSelector } from '@helpers/selectors.helper';
import { Link as LinkScroll } from 'react-scroll';
import { SEO } from '../Seo';
import { useSelector, useDispatch } from '@/libs/context/global/context';

interface Props {
  icons?: boolean;
}

type PageItems =
  | 'inicio'
  | 'sobre-mi'
  | 'habilidades'
  | 'proyectos'
  | 'contacto';

const ToolbarItems = ({ icons = false }: Props) => {
  const [locale, isOpen, skillSectionVisited] = useSelector(s => [
    s.locale,
    s.openSideDrawer,
    s.skillSectionVisited,
  ]);

  const dispatch = useDispatch();

  const [title, setTitle] = useState('Inicio');

  const { selector } = useLang();
  const [pageItem, setPageItem] = useState<PageItems>('' as PageItems);

  /** link labels */
  const labels: PagesLinkLabel = selector(pagesLinkLabelSelector);

  /** close side drawer if its open when change page */
  function handleClick() {
    if (isOpen) {
      dispatch(toggleSideDrawer());
    }
  }

  /** show icon if prefer */
  function getIcon(name: keyof PagesLinkLabel) {
    if (!icons) {
      return null;
    }

    switch (name) {
      case 'home':
        return <HomeIcon className="svg-icon" />;
      case 'aboutMe':
        return <AboutMeIcon className="svg-icon" />;
      case 'skills':
        return <SkillsIcon className="svg-icon" />;
      case 'projects':
        return <ProjectsIcon className="svg-icon" />;
      case 'contact':
        return <ContactIcon className="svg-icon" />;
    }
  }

  // update title when "page" is changed
  useEffect(() => {
    if (!!pageItem) {
      setTitle(getPageSelected(pageItem));
    }
  }, [pageItem]);

  // update title when locale is changed
  useEffect(() => {
    if (!!pageItem) {
      setTitle(getPageSelected(pageItem));
    }
  }, [locale]);

  /** set active item */
  function handleActive(to: PageItems) {
    if (to === 'habilidades' && !skillSectionVisited) {
      setTimeout(() => {
        dispatch(setSkillSectionAsVisited());
      }, 200);
    }
    setPageItem(to);
  }

  function getPageSelected(item: PageItems): string {
    switch (item) {
      case 'inicio':
        return labels.home;

      case 'sobre-mi':
        return labels.aboutMe;

      case 'habilidades':
        return labels.skills;

      case 'proyectos':
        return labels.projects;

      case 'contacto':
        return labels.contact;
    }
  }

  /** get classes according to "icons" prop */
  function getClasses() {
    return 'Navigation-items'.concat(
      icons ? ' Navigation-items--vertical' : '',
    );
  }

  return (
    <div className={getClasses()}>
      <SEO title={title} />
      <ul className="Navigation-items__wrapper">
        <li className="Navigation-items__item">
          <LinkScroll
            to="inicio"
            activeClass="active"
            className="Navigation-items__link cursor-pointer"
            onSetActive={handleActive}
            onClick={handleClick}
            offset={-56}
            spy
            smooth
            duration={700}>
            {getIcon('home')}
            {labels.home}
          </LinkScroll>
        </li>
        <li className="Navigation-items__item">
          <LinkScroll
            className="Navigation-items__link cursor-pointer"
            to="sobre-mi"
            activeClass="active"
            onSetActive={handleActive}
            onClick={handleClick}
            spy
            smooth
            offset={-56}
            duration={700}>
            {getIcon('aboutMe')}
            {labels.aboutMe}
          </LinkScroll>
        </li>
        <li className="Navigation-items__item">
          <LinkScroll
            className="Navigation-items__link cursor-pointer"
            to="habilidades"
            activeClass="active"
            onSetActive={handleActive}
            onClick={handleClick}
            spy
            smooth
            offset={-56}
            duration={700}>
            {getIcon('skills')}
            {labels.skills}
          </LinkScroll>
        </li>
        <li className="Navigation-items__item">
          <LinkScroll
            className="Navigation-items__link cursor-pointer"
            to="proyectos"
            activeClass="active"
            onSetActive={handleActive}
            onClick={handleClick}
            spy
            smooth
            offset={-56}
            duration={700}>
            {getIcon('projects')}
            {labels.projects}
          </LinkScroll>
        </li>
        <li className="Navigation-items__item">
          <LinkScroll
            className="Navigation-items__link cursor-pointer"
            to="contacto"
            activeClass="active"
            onSetActive={handleActive}
            onClick={handleClick}
            spy
            smooth
            offset={-56}
            duration={700}>
            {getIcon('contact')}
            {labels.contact}
          </LinkScroll>
        </li>
      </ul>
    </div>
  );
};

export default ToolbarItems;
