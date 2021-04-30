import { fetchData } from './../fetch-data';

export const onEmailChange = async(event: any, email: string, password: string, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>, setHeader: React.Dispatch<React.SetStateAction<string>>, setContent: React.Dispatch<React.SetStateAction<string>>) => {
    event.preventDefault();
    if(email.length > 0 && password.length > 0){
        const token = sessionStorage.getItem('jwtToken');
        const resp = await fetchData('/api/user/email', 'POST', { email, password }, (token? { jwtToken: token}: undefined));
        if(resp && !resp.error){
            setHeader('Info');
            setContent('Email changed')
        }else{
            if(resp.error){
                setHeader('');
                setContent(resp.error);
            }
        }
    }else{
        setHeader('');
        setContent('Email and password cannot be empty');        
    }
    setIsModalOpen(true);
}