import { transformRunTime } from 'utils';

describe('transformRunTime.ts tests', () => {
    test('should return 0h 0m', () => {
        const value = transformRunTime(0);

        expect(value).toBe('0h 0m');
    });

    test('should return 12h 15m', () => {
        const value = transformRunTime(735);

        expect(value).toBe('12h 15m');
    });
});
