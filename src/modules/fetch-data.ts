import fetch from 'node-fetch';

export const fetchData = async (url: string, method: string, data?:any, headers?: any): Promise<any> => {
    try{
        const response = await fetch(url, {
            method: method,
            // mode: 'cors',
            // credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...(headers || '')
            },
            ...(data? {body: JSON.stringify(data)}: '')
        });
        const result = await response.json();
        return result;
    }catch(error){
        return null;
    }
};