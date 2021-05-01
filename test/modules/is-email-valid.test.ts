import { isEmailValid } from './../../src/modules/is-email-vaild';

describe('email validation function', () => {
    it('returns true for valid email', () => {
        expect(isEmailValid('user1@gmail.com')).toBe(true);
    })
})