import { Link } from "react-router-dom";
import { FC, useState, useRef } from "react";


const Login: FC<any> = (): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const onLogin = (event: any) => {
        event.preventDefault();
    }
    return (
        <form
            className='form from--login main'
            onSubmit={(event: any) => {onLogin(event)}}>
                <h1
                    className='form__header'>
                    Log in
                </h1>
                <section
                    className='form__labels'>
                    <label
                        className='form__label from_label--username'>
                        Username
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
                        className='form__input form__input--password'
                        type='text'
                        ref={passwordRef}
                        onChange={() => {if(passwordRef && passwordRef.current) setPassword(passwordRef.current.value)}}
                        value={password}/>
                </section>
                <input 
                    className='form__submit'
                    type='submit' 
                    value='Log in'/>
                <section
                    className='form__link-wrapper'>
                    You don't own an account yet? 
                    <Link
                        className='form__link form__link--register'
                        to='/register'>
                        Sign in 
                    </Link>
                </section>
        </form>
    );
};

export default Login;