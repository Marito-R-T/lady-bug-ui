import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CaseCreateModal from './CaseCreateModal';

test('renders content', () => {
    const component = render(<CaseCreateModal />);
    console.log(component);
});