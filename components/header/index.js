// src/components/Header.js
import React from 'react';
import Image from 'next/image';
import { HeaderContainer } from '../header/style';
import Dropdown from '../menuDropdown/index';
import Logo from '../../public/assets/IMG/logo-kalerm1.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Header = () => {
    const headerOptions = [
        {
            buttonTitle: 'Quem Somos',
            href: '/QuemSomos',
        },
        {
            buttonTitle: 'Máquinas',
            menuList: [
                { value: 'Estabelecimento', href: '/Maquinas/Estabelecimento' },
                { value: 'Casa', href: '/Maquinas/Casa' },
                { value: 'Pequeno Negócio', href: '/Maquinas/Negocio' }
            ]
        },
        {
            buttonTitle: 'Representantes',
            href: '/Representantes',
        },
        {
            buttonTitle: 'Assistência',
            href: '/assistencia',
        },
        {
            buttonTitle: 'contato',
            href: '/contato',
        },
    ];

    return (
        <HeaderContainer>
            <div className='logo'>
                <Image src={Logo} alt="Logo Kalerm" width={140} height={60} priority />
            </div>
            <div className='menu'>
                {headerOptions.map((item, index) => (
                    <Dropdown key={index} buttonTitle={item.buttonTitle} menuList={item.menuList} href={item.href} />
                ))}
            </div>
            <div className='icons'>
                <InstagramIcon />
                <FacebookIcon />
            </div>
        </HeaderContainer>
    );
};

export default Header;
