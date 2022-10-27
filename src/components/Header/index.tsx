import { HeaderContainer, MenuButton, MobileNavigation } from "./styles";
import logo from "/logo.svg"
import { NavLink } from "react-router-dom";
import { List, X } from "phosphor-react"

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} />

            <nav>
                <ul>
                    <li><NavLink title="início" aria-label="ir para a homepage" to="/" end>Início</NavLink></li>
                    <li><NavLink title="campo mourão" aria-label="ver a situação de campo mourão" to="/campo-mourao">Campo Mourão</NavLink></li>
                    <li><NavLink title="sobre" aria-label="ir para a página sobre os autores" to="/about">Sobre nós</NavLink></li>
                </ul>
            </nav>

            <MenuButton onClick={openMenu}><List size={32} weight="fill" /></MenuButton>

            <MobileNavigation id="mobile-nav">
                <button onClick={closeMenu}><X size={32} weight="fill" /></button>

                <NavLink title="início" aria-label="ir para a homepage" to="/" end>Início</NavLink>
                <NavLink title="campo mourão" aria-label="ver a situação de campo mourão" to="/campo-mourao">Campo Mourão</NavLink>
                <NavLink title="sobre" aria-label="ir para a página sobre os autores" to="/about">Sobre nós</NavLink>
            </MobileNavigation>
        </HeaderContainer>
    )
}

function openMenu() {
    const mobileNav = document.querySelector("#mobile-nav")

    mobileNav!.classList.add("active")
}

function closeMenu() {
    const mobileNav = document.querySelector("#mobile-nav")

    mobileNav!.classList.remove("active")
}