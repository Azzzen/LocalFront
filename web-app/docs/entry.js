
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  
      import _CustomWrapper from '../src/docs/wrapperDoc.tsx';

      window._CustomWrapper = _CustomWrapper;

      import Component0 from '../src/components/buttons/button.tsx';
reactComponents['Button'] = Component0;

import Component1 from '../src/components/password/EmailPage.tsx';
reactComponents['EmailPage'] = Component1;

import Component2 from '../src/components/inputs/Radio.tsx';
reactComponents['RadioInput'] = Component2;

import Component3 from '../src/components/inputs/Text.tsx';
reactComponents['TextInput'] = Component3;

import Component4 from '../src/components/contact/ContactPage.tsx';
reactComponents['ContactPage'] = Component4;