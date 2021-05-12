import { selectionFilter } from '../../utils';

test('selectionFilter with legitimate data', () => {
    const series = [
        {
            id: 'series-1x',
            title: 'Tiger King',
            description:
                'An exploration of a big cat breeding and its bizarre underworld, ' +
                'populated by eccentric characters.',
            genre: 'documentaries',
            maturity: '18',
            slug: 'tiger-king'
        },
    ];
    const films = [
        {
            id: 'film-1x',
            title: 'The Prestige',
            description:
                'Two friends and fellow magicians become bitter enemies after a sudden tragedy. ' +
                'As they devote themselves to this rivalry, they make sacrifices that bring them ' +
                'fame but with terrible consequences.',
            genre: 'drama',
            maturity: '15',
            slug: 'the-prestige'
        },
    ];

    const slides = selectionFilter({ series, films });

    expect(slides.series[0].title).toBe('Documentaries');
    expect(slides.series[0].data[0].title).toBe('Tiger King');
    expect(slides.series[0].data[0].description).toBe('An exploration of a big cat breeding and its bizarre underworld, populated by eccentric characters.');
    expect(slides.series[0].data[0].genre).toBe('documentaries');
    expect(slides.series[0].data[0].maturity).toBe('18');
    expect(slides.series[0].data[0].slug).toBe('tiger-king');

    expect(slides.films[0].title).toBe('Drama');
    expect(slides.films[0].data[0].title).toBe('The Prestige');
    expect(slides.films[0].data[0].description).toBe('Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.');
    expect(slides.films[0].data[0].genre).toBe('drama');
    expect(slides.films[0].data[0].maturity).toBe('15');
    expect(slides.films[0].data[0].slug).toBe('the-prestige');
});

test('selectionFilter with empty data', () => {
    const slides = selectionFilter();

    expect(slides.series[0].title).toBe('Documentaries');
    expect(slides.films[1].title).toBe('Thriller');
    expect(slides.series[0].data).toBe(undefined);
    expect(slides.films[0].data).toBe(undefined);
});

