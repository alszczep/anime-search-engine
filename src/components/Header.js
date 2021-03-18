import { Link } from "react-router-dom";

const Header = () => {
    return (<header className='header'>
        <Link to='/' className='link'><h3 className='headerText'>Anime Search Engine</h3></Link>
    </header>);
};

export default Header;