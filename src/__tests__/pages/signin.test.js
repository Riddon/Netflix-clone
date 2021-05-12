import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Signin } from '../../pages';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

const firebase = {
    auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() => Promise.resolve('I am signed in!')),
    })),
};

describe('<Signin/>', () => {
    it('render SignIn Page with form', async() => {
        const {getByTestId, getByPlaceholderText, queryByTestId} = render(
            <BrowserRouter>
                <FirebaseContext.Provider value={{ firebase }}>
                    <Signin/>
                </FirebaseContext.Provider>
            </BrowserRouter>
        );

        await act(async() => {
            await fireEvent.change(getByPlaceholderText('Email address'), {
                target: { value: 'qwerty@gmail.com' }
            });
            await fireEvent.change(getByPlaceholderText('Password'), {
                target: { value: 'password' }
            });
            fireEvent.click(getByTestId('sign-in'));

            expect(getByPlaceholderText('Email address').value).toBe('qwerty@gmail.com');
            expect(getByPlaceholderText('Password').value).toBe('password');
            expect(queryByTestId('error')).toBeFalsy();
        });
    });
});