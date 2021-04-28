import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../modules/user/logout";
import Settings from './account/Settings';
import YourList from './account/YourList';

const Account: FC<{setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>}> = ({ setUserLoggedIn }): JSX.Element => {
    const [areSettingsOpen, setAreSettingsOpen] = useState<boolean>(true);
    const history = useHistory()
    return (
        <section 
            className='account main'>
            <section
                className='account__navigation'>
                <button
                    className='account__navigation-button account__navigation-button--settings'
                    onClick={() => { setAreSettingsOpen(true) }}>
                    Settings
                </button>
                <button
                    className='account__navigation-button account__navigation-button--list'
                    onClick={() => { setAreSettingsOpen(false) }}>
                    Your list
                </button>
                <button
                    className='account__navigation-button account__navigation-button--logout'
                    onClick={() => { logout(setUserLoggedIn, history) }}>
                    Logout
                </button>
            </section>
            <section
                className='account__content'>
                {
                    areSettingsOpen?
                    <Settings/>:
                    <YourList/>
                }
            </section>
        </section>
    );
};

export default Account;