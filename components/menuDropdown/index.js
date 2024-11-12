import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// Definição do botão estilizado
const CustomMenu = styled(Menu)`
  .MuiMenu-paper {
    background-color: rgba(0, 0, 0, 0.4); /* Cor de fundo do menu */
    color: #000; /* Cor do texto do menu */
    overflow: visible; /* Evita o overflow e barras de rolagem desnecessárias */
  }
`;

const CustomMenuItem = styled(MenuItem)`
  color: white; /* Cor do texto dos itens do menu */
  &:hover {
    background-color: #EA2027; /* Cor de fundo ao passar o mouse */
  }
`;

const CustomButton = styled(Button)`
    text-transform: uppercase; /* Força o texto a ser exibido em maiúsculas */
`;

const BasicMenu = ({ buttonTitle, menuList, href }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter();

    const handleClick = (event) => {
        if (menuList && menuList.length > 1) {
            setAnchorEl(event.currentTarget);
        } else {
            router.push(href);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div
            onMouseEnter={() => {
                if (menuList && menuList.length > 1) {
                    setAnchorEl(anchorEl);
                }
            }}
            onMouseLeave={() => {
                if (menuList && menuList.length > 1) {
                    handleClose();
                }
            }}
        >
            <CustomButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {buttonTitle}
            </CustomButton>
            {menuList && menuList.length > 1 && (
                <CustomMenu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {menuList.map((item, index) => (
                        <CustomMenuItem key={index} onClick={() => {
                            handleClose();
                            router.push(item.href);
                        }}>
                            {item.value}
                        </CustomMenuItem>
                    ))}
                </CustomMenu>
            )}
        </div>
    );
};

export default BasicMenu;
