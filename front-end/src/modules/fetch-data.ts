export const fetchData = async (url: string, method: string, data?:any): Promise<any> => {
    try{
        const response = await fetch(url, {
            method: method,
            // mode: 'cors',
            // credentials: 'include',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            ...(data? {body: JSON.stringify(data)}: '')
        });
        console.log('response', response);
        const result = await response.json();
        console.log('response.json()', result);
        return result;
    }catch(error){
        console.log('fetch error', error);
        return null;
    }
};