import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';
import { MemoryRouter } from 'react-router-dom';

test('render Homepage <Home/>', () => {
    const { container, getAllByText, getAllByPlaceholderText } = render (
        <MemoryRouter>
            <Home/>
        </MemoryRouter>
    );

    expect(getAllByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(getAllByText('Watch anywhere. Cancel at any time')).toBeTruthy();
    expect(getAllByPlaceholderText('Email address')).toBeTruthy();
    expect(getAllByText('Try it now')).toBeTruthy();
    expect(getAllByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
});