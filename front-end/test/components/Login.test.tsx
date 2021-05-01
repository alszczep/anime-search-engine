import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/Login';

describe('Login component', () => {
    it('renders a form with correct classes', () => {
        const wrapper = shallow(<Login setUserLoggedIn={()=>{}}/>);
        const form = wrapper.find('form');
        expect(form.exists()).toBe(true);
        expect(form.prop('className')).toBe('form from--login main');
    })
})