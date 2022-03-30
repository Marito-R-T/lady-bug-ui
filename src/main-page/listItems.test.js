import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import listItems from './listItems';

test('component renders', () => {
    const component = render(<listItems />)
    console.log(component);
});
