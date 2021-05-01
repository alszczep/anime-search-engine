import { isPasswordValid } from '../../src/modules/is-password-valid';

describe('password validation function', () => {
    it('returns true for valid password', () => {
        expect(isPasswordValid('zaq1@WSX')).toBe(true);
    })
})