import { FC } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';

const Navigation: FC = (): JSX.Element => {
    return (
        <nav 
            className='navigation'>
            <Link 
                to='/' 
                className='navigation__link navigation__link--home'>
                <h3 
                    className='navigation__header navigation__header--home'>
                    Anime List
                </h3>
            </Link>
            <Link 
                to='/login' 
                className='navigation__link navigation__link--user'>
                <FaUserAlt 
                    className='navigation__user-icon'
                    color='white'/>
            </Link>
        </nav>
    );
};

export default Navigation;