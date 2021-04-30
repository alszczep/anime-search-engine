import { domain } from '../domain';
import { fetchData } from './../fetch-data';

export const onLogin = async(event: any, username: string, password: string, setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, history: any, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>, setError: React.Dispatch<React.SetStateAction<string>>) => {
    event.preventDefault();
    if(username.length > 0 && password.length > 0){
        const resp = await fetchData(`${domain}/api/user/login`, 'POST', { username, password });
        if(resp && !resp.error){
            sessionStorage.setItem('jwtToken', resp.jwtToken);
            setUserLoggedIn(true);
            history.push('/account');
        }else{
            if(resp.error)
                setError(resp.error);
            setIsModalOpen(true);
        }
    }else{
        setError('Username and password cannot be empty');
        setIsModalOpen(true);
    }
}