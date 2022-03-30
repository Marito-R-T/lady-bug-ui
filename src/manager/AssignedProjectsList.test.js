import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import AssignedProjectsList from './AssignedProjectsList';

test('renders content', () => {
    const component = render(<AssignedProjectsList />);
    console.log(component);
});

test('component contains correct table headers', () => {
    const component = render(<AssignedProjectsList />);
    component.getByText('Status');
    component.getByText('Project ID');
    component.getByText('Project Manager');
    component.getByText('Project Name');
    component.getByText('Due Date');
});

test('component contains correct table title', () => {
    const component = render(<AssignedProjectsList />);
    component.getByText('Assigned Projects List');
});