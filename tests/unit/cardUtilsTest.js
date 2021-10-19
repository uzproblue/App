const cardUtils = require('../../src/libs/cardUtils');

const shortDate = '0924';
const shortDateSlashed = '09/24';
const longDate = '092024';
const longDateSlashed = '09/2024';
const expectedMonth = '09';
const expectedYear = '2024';

describe('cardUtils', () => {
    it('Test MM/YYYY format for getting expirationDate month and year', () => {
        expect(cardUtils.getMonthFromExpirationDateString(longDateSlashed)).toBe(expectedMonth);
        expect(cardUtils.getYearFromExpirationDateString(longDateSlashed)).toBe(expectedYear);
    });

    it('Test MMYYYY format for getting expirationDate month and year', () => {
        expect(cardUtils.getMonthFromExpirationDateString(longDate)).toBe(expectedMonth);
        expect(cardUtils.getYearFromExpirationDateString(longDate)).toBe(expectedYear);
    });

    it('Test MM/YY format for getting expirationDate month and year', () => {
        expect(cardUtils.getMonthFromExpirationDateString(shortDateSlashed)).toBe(expectedMonth);
        expect(cardUtils.getYearFromExpirationDateString(shortDateSlashed)).toBe(expectedYear);
    });

    it('Test MMYY format for getting expirationDate month and year', () => {
        expect(cardUtils.getMonthFromExpirationDateString(shortDate)).toBe(expectedMonth);
        expect(cardUtils.getYearFromExpirationDateString(shortDate)).toBe(expectedYear);
    });
});
