import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FilterSelector from './FilterSelector';

test('renders content', () => {
    const component = render(<FilterSelector />);
    console.log(component);
});

test('component renders an enabled button', () => {
    const component = render(<FilterSelector />);
    const button = component.getByRole('button');
    expect(button).toBeEnabled();
});