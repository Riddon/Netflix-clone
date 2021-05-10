import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from "../../components/";

describe('<Profiles />', () => {
    it('renders the <Profiles/> with populated data',  () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>
                    Who`s watching?
                </Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {}}>
                        <Profiles.Picture src="/images/karlitto.png" data-testid={'getByTestId'}/>
                        <Profiles.Name>Karlitto</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        );

        expect(getByText('Who`s watching?')).toBeTruthy();
        expect(getByText('Karlitto')).toBeTruthy();
        expect(getByTestId('getByTestId')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Profiles/> without src',  () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>
                    Who`s watching?
                </Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {}}>
                        <Profiles.Picture src={false} data-testid={'getByTestId'}/>
                        <Profiles.Name>Karlitto</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        );

        expect(getByText('Who`s watching?')).toBeTruthy();
        expect(getByText('Karlitto')).toBeTruthy();
        expect(getByTestId('getByTestId').src).toContain('/images/misc/loading.gif');

        expect(container.firstChild).toMatchSnapshot();
    });
});