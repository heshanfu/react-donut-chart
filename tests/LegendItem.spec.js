import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import createComponent from 'react-unit';
import test from 'tape';

import LegendItem from '../lib/LegendItem.jsx';

import mockData from '../mock/graph.js';

test('Testing: LegendItem', (t) => {
    const className = 'donut';

    const component = createComponent.shallow(<LegendItem
                                              className={ className } />);
    t.equal(component.props.className, className, `className props of component should equal ${className}`);
    t.end();
});
