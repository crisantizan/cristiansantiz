import React, { useState, useEffect, useMemo } from 'react';
import { Toolbar } from '@components/toolbar/Toolbar';
import { SideDrawer } from '@components/side-drawer/SideDrawer';
import { Backdrop } from '@components/backdrop/Backdrop';
import { changeLocale } from '@libs/context/global/actions';
import { LocalKey } from '@libs/enum';
import { LocaleType } from '@libs/i18n/languages';
import { useGlobalState } from '@/libs/hooks/use-global-state';

/* Layout per defect */
export const DefaultLayout = ({ children }: any) => {
  const {
    state: { locale },
    dispatch,
  } = useGlobalState();

  const [smallScreen, setSmallScren] = useState(false);

  useEffect(() => {
    const localePersisted = localStorage.getItem(LocalKey.LOCALE) as
      | LocaleType
      | undefined;

    // change only if they are different
    if (!!localePersisted && localePersisted !== locale) {
      dispatch(changeLocale(localePersisted));
    }

    // set screen type on first render
    setSmallScren(window.innerWidth <= 768);

    function handleResize() {
      setSmallScren(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toolbar = useMemo(() => {
    return <Toolbar isSmallScreen={smallScreen} />;
  }, [locale, smallScreen]);

  // render only in small screen devices
  const sidedrawer = useMemo(() => {
    return smallScreen ? <SideDrawer /> : null;
  }, [smallScreen]);

  const backdrop = useMemo(() => {
    return smallScreen ? <Backdrop /> : null;
  }, [smallScreen]);

  return (
    <>
      {toolbar}
      {sidedrawer}
      {backdrop}

      {/* main */}
      <main>{children}</main>
    </>
  );
};
