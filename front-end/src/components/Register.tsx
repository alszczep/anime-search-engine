import { Link, useHistory } from "react-router-dom";
import { FC, useState, useRef } from "react";
import { onRegister } from "../modules/user/on-register";

const Register: FC<{ setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setUserLoggedIn }): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const history = useHistory();
    return (
        <form
            className='form from--login main'
            onSubmit={(event: any) => {onRegister(event, username, email, password, setUserLoggedIn, history)}}>
                <h1
                    className='form__header'>
                    Sign in
                </h1>
                <section
                    className='form__labels'>
                    <label
                        className='form__label from_label--username'>
                        Username
                    </label>
                    <label
                        className='form__label from_label--email'>
                        Email
                    </label>
                    <label
                        className='form__label from_label--password'>
                        Password
                    </label>
                </section>
                <section
                    className='form__inputs'>
                    <input
                        className='form__input form__input--username'
                        type='text'
                        ref={usernameRef}
                        onChange={() => {if(usernameRef && usernameRef.current) setUsername(usernameRef.current.value)}}
                        value={username}/>
                    <input
                        className='form__input form__input--email'
                        type='text'
                        ref={emailRef}
                        onChange={() => {if(emailRef && emailRef.current) setEmail(emailRef.current.value)}}
                        value={email}/>
                    <input
                        className='form__input form__input--password'
                        type='password'
                        ref={passwordRef}
                        onChange={() => {if(passwordRef && passwordRef.current) setPassword(passwordRef.current.value)}}
                        value={password}/>
                </section>
                <input 
                    className='form__submit'
                    type='submit' 
                    value='Sign in'/>
                <section
                    className='form__link-wrapper'>
                    Already own an account? 
                    <Link
                        className='form__link form__link--login'
                        to='/login'>
                        Log in 
                    </Link>
                </section>
        </form>
    );
};

export default Register;