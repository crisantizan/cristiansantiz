import { RootStateModel } from './root.model';
import { RootActionTypes } from './root-action-types';
import i18n from '@/libs/i18n/i18next';

export const rootReducer = (
  state: RootStateModel,
  action: RootActionTypes,
): RootStateModel => {
  switch (action.type) {
    case 'TOOLBAR_TRANSPARENT':
      return { ...state, toolbarTransparent: action.payload };

    case 'TOGGLE_SIDE_DRAWER':
      return { ...state, openSideDrawer: !state.openSideDrawer };

    case 'CHANGE_LOCALE':
      // change language in i18n instance
      i18n.changeLanguage(action.payload);
      return { ...state, locale: action.payload };

    default:
      return state;
  }
};