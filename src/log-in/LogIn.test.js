import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import LogIn from './LogIn';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigator, 
}));

console.log(mockedNavigator);

it('renders content', () => {
    const component = render(<LogIn />);
    console.log(component);
});
