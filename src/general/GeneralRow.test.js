import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import GeneralRow from './GeneralRow';

const project = {
    id: 1,
    name: 'project_test',
    pm_name: 'project manager test',
    start_date: 'start date test',
    due_date: 'due date test',
    status: 0,
    cases_amount: 3
}

test('renders content', () => {
    const component = render(<GeneralRow project={project} />);
    console.log(component);
});

test('component renders correct sent data', () => {
    const component = render(<GeneralRow project={project} />);
    component.getByText('project_test');
    component.getByText('project manager test');
    component.getByText('due date test');
    component.getByText('start date test');
});

test('component contains correct amount of rows', () => {
    const component = render(<GeneralRow project={project}/>);
    const rows = component.getAllByRole('row');
    expect(rows).toHaveLength(2);
});

test('component contains correct amount of cells', () => {
    const component = render(<GeneralRow project={project}/>);
    const cells = component.getAllByRole('cell');
    expect(cells).toHaveLength(8);
});