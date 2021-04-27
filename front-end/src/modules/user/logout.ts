export const logout = (setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, history: any) => {
    setUserLoggedIn(false);
    sessionStorage.removeItem('jwtToken');
    history.push('/');
}