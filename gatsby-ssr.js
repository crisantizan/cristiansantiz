import React from 'react';
import './src/styles/tailwind.scss';
import './src/styles/index.scss';
import { DefaultLayout } from './src/layouts/DefaultLayout';

export const wrapPageElement = ({ element, props }) => (
  <DefaultLayout {...props}>{element}</DefaultLayout>
);

