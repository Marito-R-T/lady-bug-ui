import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import StepCase from './CaseProgress2';

test('renders step case content', () => {
    const component = render(<StepCase />);
    console.log(component);
});
