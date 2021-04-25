import { FC } from "react";
import { Link } from "react-router-dom";

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
        </nav>
    );
};

export default Navigation;