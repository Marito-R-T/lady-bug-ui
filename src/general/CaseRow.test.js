import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CaseRow from './CaseRow';

const case_ = {
    id: 1,
    description: 'description test',
    projectName: 'project name test',
    caseTypeName: 'test',
    start_date: 'start date test',
    due_date: 'due date test',
    status: 0,
}

test('renders content', () => {
    const component = render(<CaseRow cases={case_} />);
    console.log(component);
});

test('component renders correct sent data', () => {
    const component = render(<CaseRow cases={case_} />);
    component.getByText('description test');
    component.getByText('project name test');
    component.getByText('test');
    component.getByText('start date test');
    component.getByText('due date test');
});

test('component contains correct amount of rows', () => {
    const component = render(<CaseRow cases={case_}/>);
    const rows = component.getAllByRole('row');
    expect(rows).toHaveLength(1);
});

test('component contains correct amount of cells', () => {
    const component = render(<CaseRow cases={case_}/>);
    const cells = component.getAllByRole('cell');
    expect(cells).toHaveLength(7);
});