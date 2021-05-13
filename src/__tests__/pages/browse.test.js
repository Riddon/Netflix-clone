import React from 'react';
import { render } from '@testing-library/react';
import { Browse } from '../../pages';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({})
}));

jest.mock('../../utils', () => ({
    selectionFilter: () => ({
        series: [
            {
                data: [
                    {
                        id: 'series-1x',
                        title: 'Tiger King',
                        description: 'Some description ....',
                        genre: 'documentaries',
                        maturity: '18',
                        slug: 'tiger-king'
                    }
                ]
            }
        ],
        films: [
            {
                id: 'film-1x',
                title: 'Amanda Knox',
                description: 'Amanda Knox is an American woman ...',
                genre: 'documentaries',
                maturity: '12',
                slug: 'amanda-knox'
            }
        ]
    })
}));

const firebase = {
    auth: jest.fn(() => ({
        currentUser: { displayName: 'Karlito', photoURL: '2', email: 'email@email.com' },
        signOut: jest.fn(() => Promise.resolve('I am sign out'))
    })),
    firestore: jest.fn(() => ({
        collection: jest.fn(() => ({
            get: jest.fn(() => Promise.resolve('I get collection')),
            add: jest.fn(() => Promise.resolve('I add content'))
        }))
    }))
};

describe('<Browse/>', () => {
   it('render the Browse Page with <SelectProfileContainer/>', async () => {
       const {} = render (
           <BrowserRouter>
               <FirebaseContext.Provider value={ {firebase} }>
                   <Browse/>
               </FirebaseContext.Provider>
           </BrowserRouter>
       );
   })
});