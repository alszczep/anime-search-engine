import { fetchData } from './../fetch-data';

export const onLogin = async(event: any, username: string, password: string, setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, history: any) => {
    event.preventDefault();
    if(username.length > 0 && password.length > 0){
        const resp = await fetchData('http://localhost:5000/api/user/login', 'POST', { username, password });
        sessionStorage.setItem('jwtToken', resp.jwtToken);
        setUserLoggedIn(true);
        history.push('/');
    }
}