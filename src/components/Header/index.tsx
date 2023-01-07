import React, {useContext} from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

const Header: React.FC = () => {

  const authContext = useContext(AuthContext)

  const isActiveLink = (isActive: boolean): string => {
    return isActive ? styles.active : ""
  }

  return (
    <ul className={styles.container}>
        <li>
            <NavLink className={({isActive}) => isActiveLink(isActive)} to="/">Usuários</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActiveLink(isActive)} to="/cats">Gatinhos</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActiveLink(isActive)} to="/dogs">Cachorrinhos</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActiveLink(isActive)} to="/clients">Clientes</NavLink>
        </li>
        <li onClick={() => authContext?.logout()} className={styles.exit}>Sair</li>
    </ul>
  );
}

export default Header;