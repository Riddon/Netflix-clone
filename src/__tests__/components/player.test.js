import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Player } from '../../components';

describe('<Player />', () => {

    it('renders the <Player/> with a bunny video and close clicked on <Overlay/>', () => {
        const { container, getByText, queryByTestId } = render(
            <Player>
                <Player.Button/>
                <Player.Video src="videos/bunny.mp4"/>
            </Player>
        );

        expect(queryByTestId('player')).toBeFalsy();
        fireEvent.click(getByText('Play'));

        expect(queryByTestId('player')).toBeTruthy();
        fireEvent.click(queryByTestId('player'));

        expect(queryByTestId('player')).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Player/> with a bunny video and close clicked on <Close/>', () => {
        const { container, getByText, queryByTestId } = render(
            <Player>
                <Player.Button/>
                <Player.Video src="videos/bunny.mp4"/>
            </Player>
        );

        expect(queryByTestId('player')).toBeFalsy();

        fireEvent.click(getByText('Play'));
        expect(queryByTestId('player')).toBeTruthy();

        fireEvent.click(queryByTestId('player-close'));
        expect(queryByTestId('player')).toBeFalsy();

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Player/> with a bunny video and close clicked on <Inner/>', () => {
        const { container, getByText, queryByTestId } = render(
            <Player>
                <Player.Button/>
                <Player.Video src="videos/bunny.mp4"/>
            </Player>
        );

        expect(queryByTestId('player')).toBeFalsy();

        fireEvent.click(getByText('Play'));
        expect(queryByTestId('player')).toBeTruthy();

        fireEvent.click(queryByTestId('player-inner'));
        expect(queryByTestId('player')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });
});