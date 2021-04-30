import { fetchData } from './../fetch-data';

export const onRegister = async(event: any, username: string, email: string, password: string, setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, history: any, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>, setError: React.Dispatch<React.SetStateAction<string>>) => {
    event.preventDefault();
    if(username.length > 0 && email.length > 0 && password.length > 0){
        const resp = await fetchData('/api/user/register', 'POST', { username, email, password });
        console.log(resp)
        if(resp && !resp.error){
            sessionStorage.setItem('jwtToken', resp.jwtToken);
            setUserLoggedIn(true);
            history.push('/account');
        }
        else{
            if(resp.error)
                setError(resp.error);
            setIsModalOpen(true);
        }
    }else{
        setError('Username, email and password cannot be empty');
        setIsModalOpen(true);
    }
}