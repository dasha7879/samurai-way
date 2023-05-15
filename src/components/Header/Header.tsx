import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import { propsType } from './HeaderContainer';

const Header: React.FC<propsType> = (props) => {
    console.log(props.isAuth)
    return (
        <header className={s.header}>
            <img src="https://www.shutterstock.com/image-vector/mountain-vector-icon-isolated-on-260nw-1199231911.jpg" alt="logo" />
            {console.log(props.isAuth)}
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
            }
        </header>
    )
}
export default Header;