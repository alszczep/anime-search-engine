import { fetchData } from './../fetch-data';

export const onLogin = async(event: any, username: string, password: string, setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, history: any) => {
    event.preventDefault();
    if(username.length > 0 && password.length > 0){
        const resp = await fetchData('http://localhost:5000/api/user/login', 'POST', { username, password });
        if(resp && !resp.error){
            sessionStorage.setItem('jwtToken', resp.jwtToken);
            setUserLoggedIn(true);
            history.push('/');
        }else{
            alert('user does not exist')
            // error
        }
    }
}