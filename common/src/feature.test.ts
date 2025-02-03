import { formatDate } from './feature';
import {describe, expect, test} from '@jest/globals';


describe('formatDate', () => {
    test('should format date correctly', () => {
        const date = '2025-10-05';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe('5 ottobre 2025');
    });
});