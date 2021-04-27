import { FC } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../modules/user/logout";

const Account: FC<{setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>}> = ({ setUserLoggedIn }): JSX.Element => {
    const history = useHistory()
    return (
        <>
            <button
                style={{position: 'absolute', bottom: '0px'}}
                onClick={() => { logout(setUserLoggedIn, history) }}>
                logout
            </button>
        </>
    );
};

export default Account;