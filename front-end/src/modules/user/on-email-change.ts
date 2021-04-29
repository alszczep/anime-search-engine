import { fetchData } from './../fetch-data';

export const onEmailChange = async(event: any, email: string, password: string) => {
    event.preventDefault();
    if(email.length > 0 && password.length > 0){
        const resp = await fetchData('http://localhost:5000/api/user/email', 'POST', { email, password }, (sessionStorage.getItem('jwtToken')? { jwtToken: sessionStorage.getItem('jwtToken')}: undefined));
        if(resp && !resp.error){
            alert('email changed');
        }else{
            alert('email not changed')
            // error
        }
    }
}