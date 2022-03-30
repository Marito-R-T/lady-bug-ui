import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Phase from './Phase';

const phase = {
    nameType: 'test phase'
}; 

test('renders content', () => {
    const component = render(<Phase info={phase}/>);
    console.log(component);
});

test('component contains correct amount of listitems', () => {
    const component = render(<Phase info={phase}/>);
    const li = component.getAllByRole('listitem');
    expect(li).toHaveLength(1);
});

test('component contains correct amount of buttons', () => {
    const component = render(<Phase info={phase}/>);
    const button = component.getAllByRole('button');
    expect(button).toHaveLength(1);
});

test('component button is enabled', () => {
    const component = render(<Phase info={phase}/>);
    const button = component.getByRole('button');
    expect(button).toBeEnabled;
});

test('component contains correct amount of texboxes', () => {
    const component = render(<Phase info={phase}/>);
    const textbox = component.getAllByRole('textbox');
    expect(textbox).toHaveLength(2);
});
