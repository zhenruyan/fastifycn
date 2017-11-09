var md = require('../index');

describe('nunjucks-markdown-filter', function () {
    it('should convert markdown to strings', function () {
        var actual, expected;

        actual = 'This has no markdown';
        expected = 'This has no markdown';
        expect(md(actual)).toBe(expected);

        actual = 'This has **some** markdown';
        expected = 'This has <strong>some</strong> markdown';
        expect(md(actual)).toBe(expected);

        actual = 'This has **some** _more_ markdown';
        expected = 'This has <strong>some</strong> <em>more</em> markdown';
        expect(md(actual)).toBe(expected);
    })

    it('should leave wrapping <pa> tags when specified', function () {
        var actual, expected;

        actual = 'This has no markdown';
        expected = '<p>This has no markdown</p>';
        expect(md(actual, false)).toBe(expected);

        actual = 'This has **some** markdown';
        expected = '<p>This has <strong>some</strong> markdown</p>';
        expect(md(actual, false)).toBe(expected);

        actual = 'This has **some** _more_ markdown';
        expected = '<p>This has <strong>some</strong> <em>more</em> markdown</p>';
        expect(md(actual, false)).toBe(expected);
    })
});
