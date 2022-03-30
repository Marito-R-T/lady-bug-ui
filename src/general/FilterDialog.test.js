import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FilterDialog from './FilterDialog';

test('renders content', () => {
    const component = render(<FilterDialog />);
    console.log(component);
});

test('component renders an enabled button', () => {
    const component = render(<FilterDialog />);
    const buttons = component.getByRole('button');
    expect(buttons).toBeEnabled();
});
