
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

  import Component0 from '../src/components/BarChartGraph.js';
reactComponents['BarChartGraph'] = Component0;

import Component1 from '../src/components/LineChartGraph.js';
reactComponents['LineChartGraph'] = Component1;

import Component2 from '../src/components/RadarGraph.js';
reactComponents['RadarGraph'] = Component2;

import Component3 from '../src/components/RadialBarGraph.js';
reactComponents['RadialBarGraph'] = Component3;

import Component4 from '../src/components/RightInfos.js';
reactComponents['RightInfos'] = Component4;

import Component5 from '../src/components/User.js';
reactComponents['User'] = Component5;