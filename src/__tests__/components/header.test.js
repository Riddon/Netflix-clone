import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from "../../components/";
import { MemoryRouter } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import logo from "../../logo.svg";

describe('<Header />', () => {
    it('renders the basic <Header/> with a background', () => {
        const{ container, getByText, getByAltText, getByTestId } = render(
            <MemoryRouter>
                <Header>
                    <Header.Frame>
                        <Header.Logo src="/logo.svg" alt="Netflix"/>
                        <Header.TextLink active="true">It is a link</Header.TextLink>
                    </Header.Frame>
                </Header>
            </MemoryRouter>
        );

        expect(getByTestId('header-bg')).toBeTruthy();
        expect(getByAltText('Netflix')).toBeTruthy();
        expect(getByText('It is a link')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the basic <Header/> without a background', () => {
        const{ container, getByText, getByAltText, queryByTestId } = render(
            <MemoryRouter>
                <Header bg={false}>
                    <Header.Frame>
                        <Header.Logo src="/logo.svg" alt="Netflix"/>
                        <Header.ButtonLink>Sign In</Header.ButtonLink>
                        <Header.TextLink active="true">It is a link</Header.TextLink>
                    </Header.Frame>
                </Header>
            </MemoryRouter>
        );

        expect(queryByTestId('header-bg')).toBeFalsy();
        expect(getByAltText('Netflix')).toBeTruthy();
        expect(getByText('It is a link')).toBeTruthy();
        expect(getByText('Sign In')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the full <Header/> with a background', () => {
        const { container, getByText, getByTestId } = render(
            <MemoryRouter>
                <Header src='joker1' dontShowOnSmallViewPort>
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo src='/images/logo.png' alt="Netflix"/>
                            <Header.TextLink
                                active='false'
                                onClick={() => {}}
                            >
                                Series
                            </Header.TextLink>
                            <Header.TextLink
                                active='true'
                                onClick={() => {}}
                            >
                                Films
                            </Header.TextLink>
                        </Header.Group>

                        <Header.Group>
                            <Header.Search searchTerm="Joker" setSearchTerm={()=> {}} />

                            <Header.Profile>
                                <Header.Picture src='/images/some.png'/>
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture src='/images/some.png'/>
                                        <Header.TextLink>Karlitto</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink onClick={() => {}}>Sign out</Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame>

                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>
                            Forever alone in a crowd
                        </Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                    </Header.Feature>
                </Header>
            </MemoryRouter>
        );

        expect(getByTestId('search-input')).toBeTruthy();
        expect(getByTestId('search-input').value).toBe('Joker');

        fireEvent.change(getByTestId('search-input'), {
           target: {value: 'Simpsons'},
        });
        fireEvent.click(getByTestId('search-click'));

        expect(getByText('Series')).toBeTruthy();
        expect(getByText('Films')).toBeTruthy();
        expect(getByText('Karlitto')).toBeTruthy();
        expect(getByText('Sign out')).toBeTruthy();
        expect(getByText('Watch Joker Now')).toBeTruthy();
        expect(getByText('Forever alone in a crowd')).toBeTruthy();
        expect(getByText('Play')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });
});


