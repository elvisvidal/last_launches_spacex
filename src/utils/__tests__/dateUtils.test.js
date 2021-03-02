import convertDate, { dateLabel } from '../dateUtils';

describe('dateUtils', () => {
    it('dateLabel should add 0 in the beginning only if input < 10', () => {
        const inputDay = 9;
        expect(dateLabel(inputDay)).toEqual('09');

        const inputMonth = 11;
        expect(dateLabel(inputMonth)).not.toEqual('011');
        expect(dateLabel(inputMonth)).toEqual(11);

        const inputInvalid = 'abc';
        expect(dateLabel(inputInvalid)).toEqual(undefined);
    });

    it('convertDate should return a valid date DD/MM/YYYY', () => {
        const resultDate = convertDate('October 13, 2014 11:13:00');
        expect(resultDate).toEqual('13/10/2014');

        const invalidDate = convertDate('abc');
        expect(invalidDate).toEqual('00/00/0000');
    });
});
