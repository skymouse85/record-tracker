import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import RecordLogo from '../app/assets/record.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (<Navbar sticky='top' expand='md'>
        <NavbarBrand className='ms-5' href='/'>
            <img src={RecordLogo} alt='record logo' className='float-start' />
            <h1 className='mt-1'> Record collector </h1>

        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>

            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg'>Home</i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/directory'>
                        <i className='fa fa-list fa-lg'>Directory</i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>
                        <i className='fa fa-info fa-lg'>About</i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                        <i className='fa fa-address-card fa-lg'>Contact</i>
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>

    </Navbar >
    );

};

export default Header;