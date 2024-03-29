import { GlobalStateModel } from './model';

export const globalInitialState: GlobalStateModel = {
  openSideDrawer: false,
  locale: 'es',
  initialDarkMode: false,
  activePath: '',
  myData: {
    name: {
      full: 'Cristian José Santiz Calvo',
      short: 'Cristian Santiz',
    },
    birthdate: '1996-03-30',
    currentLocation: 'Sincé - Sucre (Colombia)',
    socialMediaLinks: {
      whatsapp: 'https://api.whatsapp.com/send?phone=573016206425',
      github: 'https://github.com/crisantizan',
      repository: 'https://github.com/crisantizan/cristiansantiz',
      linkedin: 'https://linkedin.com/in/crisantizan',
      twitter: 'https://twitter.com/crisantizan_',
      email: 'crisantizan@gmail.com',
      mobile: '+57 301 620 6425',
    },
  },
  skillSectionVisited: false,
};
