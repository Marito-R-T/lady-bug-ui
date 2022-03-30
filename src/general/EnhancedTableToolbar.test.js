import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import EnhancedTableToolbar from './EnhancedTableToolbar';

test('component renders', () => {
    const component = render(<EnhancedTableToolbar />)
    console.log(component);
});