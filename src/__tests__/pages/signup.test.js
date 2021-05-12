import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Signup } from '../../pages';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn()
    }),
}));

const firebase = {
    auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({
            user: {updateProfile: jest.fn(() => Promise.resolve('I am signed up!'))}
        })),
    })),
};

// const firebaseError = {
//     auth: jest.fn(() => ({
//         createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({
//             user: {updateProfile: jest.fn(() => Promise.reject('You have an error'))}
//         })),
//     })),
// };

describe('<Signup/>', () => {
    it('render SignUp Page with form', async() => {
        const {getByTestId, getByPlaceholderText, queryByTestId} = render(
            <BrowserRouter>
                <FirebaseContext.Provider value={{ firebase }}>
                    <Signup/>
                </FirebaseContext.Provider>
            </BrowserRouter>
        );

        await act(async() => {
            await fireEvent.change(getByPlaceholderText('First name'), {
                target: { value: 'Steve' }
            });

            await fireEvent.change(getByPlaceholderText('Email address'), {
                target: { value: 'qwerty@gmail.com' }
            });
            await fireEvent.change(getByPlaceholderText('Password'), {
                target: { value: 'password' }
            });
            fireEvent.click(getByTestId('sign-up'));

            expect(getByPlaceholderText('Email address').value).toBe('qwerty@gmail.com');
            expect(getByPlaceholderText('Password').value).toBe('password');

            expect(queryByTestId('error')).toBeFalsy();
        });
    });
});