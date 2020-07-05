declare module '*.json' {
  const value: any;
  export default value;
}

/** Typing for custom HTML component */
declare type HTMLComponent<T> = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<T>,
  T
>;

// declare module '*.svg' {
//   const value: any;
//   export default value;
// }

// declare module '*.svg' {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

declare module '\*.svg' {
  import React = require('react');
  const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module 'wowjs';
