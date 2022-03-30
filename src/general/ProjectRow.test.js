import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ProjectRow from './ProjectRow';

const project = {
    id: 1,
    name: 'project_test',
    pm_name: 'project manager test',
    due_date: 'date test',
    status: 0
}

test('renders content', () => {
    const component = render(<ProjectRow project={project} />);
    console.log(component);
});

test('component renders correct sent data', () => {
    const component = render(<ProjectRow project={project} />);
    component.getByText('project_test');
    component.getByText('project manager test');
    component.getByText('date test');
});

test('component contains correct amount of rows', () => {
    const component = render(<ProjectRow project={project}/>);
    const rows = component.getAllByRole('row');
    expect(rows).toHaveLength(2);
});

test('component contains correct amount of cells', () => {
    const component = render(<ProjectRow project={project}/>);
    const cells = component.getAllByRole('cell');
    expect(cells).toHaveLength(5);
});