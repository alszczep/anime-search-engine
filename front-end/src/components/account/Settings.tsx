import { FC, useCallback, useEffect, useRef, useState } from "react";
import { fetchData } from "../../modules/fetch-data";
import { onEmailChange } from "../../modules/user/on-email-change";
import Error from "../shared/Error";
import Loading from "../shared/Loading";

const url = 'http://localhost:5000/api/user/user';

const Settings: FC<any> = (): JSX.Element => {
    const [newEmail, setNewEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const newEmailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [data, setData] = useState<any>();
    const getData = useCallback(async() => {
        setData(await fetchData(url, 'GET', undefined, (sessionStorage.getItem('jwtToken')? { jwtToken: sessionStorage.getItem('jwtToken')}: undefined)));
    }, []) 
    useEffect(() => {
        getData()
    }, [getData]);
    if(data && data.username && data.email)
        return (
            <>
                <section
                    className='account__content-settings-header'>
                    Welcome, {data.username}. Your current email is {data.email}
                </section>
                <form 
                    className='settings-form settings-form--email'
                    onSubmit={(event: any) => {onEmailChange(event, newEmail, password)}}>
                    <h1
                        className='settings-form__header'>
                        Change your email
                    </h1>
                    <label
                        className='settings-form__label'>
                        New email
                        <input 
                            className='settings-form__input'
                            type='text'
                            ref={newEmailRef}
                            value={newEmail}
                            onChange={() => { if(newEmailRef && newEmailRef.current) setNewEmail(newEmailRef.current.value) }}/>
                    </label>
                    <label
                        className='settings-form__label'>
                        Password
                        <input 
                            className='settings-form__input'
                            type='password'
                            ref={passwordRef}
                            value={password}
                            onChange={() => { if(passwordRef && passwordRef.current) setPassword(passwordRef.current.value) }}/>
                    </label>
                    <input 
                        className='settings-form__submit'
                        type='submit'
                        value='Change'/>
                </form>
            </>
        );
        if(data === undefined)
        return (
            <Loading 
                elementClass={''}/>
        )
        if(data === null)
            return (
                <Error 
                    elementClass={''}/>
            )
    return (
        <Error 
            elementClass={''}/>
    )
};

export default Settings;