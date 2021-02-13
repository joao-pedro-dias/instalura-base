import React from 'react';
import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from '../Menu/styles/MenuWrapper';

export default function Menu(){
    return(
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo/>
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide as="ul">
                {[
                    {url: '/', name: 'Home'},
                    {url:'/faq', name: 'Perguntas Frequentes'},
                    {url:'/sobre', name: 'Sobre'},
                ].map((link) => (
                    <li key={link.url}>
                        <a href="{link.url}">
                            {link.name}
                        </a>
                    </li>
                ))}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <button type="button">
                    Entrar
                </button>
                <button type="button">
                    Cadastrar
                </button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    );
}