import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Accordion } from '../../components';
import faqsData from '../../fixture/faqs.json';

describe('<Accordion />', () => {
    it('renders the <Accordion/> with populated data',  () => {
        const { container, getByText } = render(
            <Accordion>
                <Accordion.Title>
                    Frequently Asked Questions
                </Accordion.Title>
                <Accordion.Inner>
                    {faqsData.map((item) => (
                        <Accordion.Item key={item.id}>
                            <Accordion.Header>
                                {item.header}
                            </Accordion.Header>
                            <Accordion.Body>
                                {item.body}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion.Inner>
            </Accordion>
        );

        expect(getByText('Frequently Asked Questions')).toBeTruthy();
        expect(getByText('What is Netflix?')).toBeTruthy();
        expect(getByText('How much does Netflix cost?')).toBeTruthy();
        expect(getByText('Where can I watch?')).toBeTruthy();
        expect(getByText('How do I cancel?')).toBeTruthy();
        expect(getByText('What can I watch on Netflix?')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('opens and closes the <Accordion /> component', () => {
        const { container, queryByText  } = render(
            <Accordion>
                <Accordion.Title>
                    Frequently Asked Questions
                </Accordion.Title>
                <Accordion.Inner>
                    {faqsData.map((item) => (
                        <Accordion.Item key={item.id}>
                            <Accordion.Header>
                                {item.header}
                            </Accordion.Header>
                            <Accordion.Body>
                                {item.body}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion.Inner>
            </Accordion>
        );

        const FaqsDataBody = "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.";

        expect(queryByText(FaqsDataBody)).toBeFalsy();

        fireEvent.click(queryByText('What can I watch on Netflix?'));
        expect(queryByText(FaqsDataBody)).toBeTruthy();

        fireEvent.click(queryByText('What can I watch on Netflix?'));
        expect(queryByText(FaqsDataBody)).toBeFalsy();

        expect(container.firstChild).toMatchSnapshot();
    });
});

