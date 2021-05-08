import React, { useState, useEffect } from "react";
import { FiBell } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiFile } from "react-icons/fi";
import Filtro from "../Filtro";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, NavLinkStyle } from "./styles";

const Header: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const botoes = [
    {
      name: "notas",
      element: (
        <div className="divpai">
          <div className="principal-botoes">
            <button className="btn-menu" onClick={() => setIsShow(!isShow)}>
              <FiFile color="#47A3FF" className="icones-menu" />
              <p>NOTAS</p>
            </button>
          </div>
          {isShow && (
            <div className="sub-notas">
              <div className="sub-notas1">
                <NavLinkStyle href="/tester">
                  <a className="a-menu">Painel de Notas</a>
                </NavLinkStyle>
              </div>
              <div className="sub-notas1">
                <NavLinkStyle href="/tester">
                  <a className="a-menu">Painel de Notas</a>
                </NavLinkStyle>
              </div>
              <div className="sub-notas1">
                <NavLinkStyle href="/tester">
                  <a className="a-menu">Painel de Notas</a>
                </NavLinkStyle>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      name: "novo",
      element: (
        <div className="divpai">
          <div className="principal-botoes">
            <button className="btn-menu" onClick={() => setIsShow1(!isShow1)}>
              <FiFile color="#47A3FF" className="icones-menu" />
              <p>NOTAS</p>
            </button>
          </div>
          {isShow1 && (
            <div className="sub-notas">
              <div className="sub-notas1">
                <NavLinkStyle href="/tester">
                  <a className="a-menu">Painel de Notas</a>
                </NavLinkStyle>
              </div>
              <div className="sub-notas1">
                <NavLinkStyle href="/tester">
                  <a className="a-menu">Painel de Notas</a>
                </NavLinkStyle>
              </div>
              <div className="sub-notas1">
                <NavLinkStyle href="/tester">
                  <a className="a-menu">Painel de Notas</a>
                </NavLinkStyle>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  function handleMenu() {
    setMenu(!menu);
    setIsShowMenu(!isShowMenu);
  }

  return (
    <Container>
      <div className="div1">
        {menu === false ? (
          <button className="menu" onClick={() => handleMenu()}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faCaretRight} className="arrow-left" />
          </button>
        ) : (
          <button className="menu" onClick={() => handleMenu()}>
            <FontAwesomeIcon icon={faBars} />

            <FontAwesomeIcon icon={faCaretLeft} className="arrow-left" />
          </button>
        )}
        {isShowMenu && (
          <div className="drop1">
            <div className="drop2">
              <Filtro
                name="Buscar..."
                icon={FiSearch}
                className="filtro"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  console.log(searchTerm);
                }}
              />

              {botoes
                .filter(
                  ({ name }) =>
                    name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    name.length === 0
                )
                .map(({ element }) => element)}
            </div>
          </div>
        )}

        <h1>IntegraNotas</h1>
      </div>
      <div className="div2">
        <button className="bell">
          <FiBell />
        </button>
        <img
          className="ball"
          src="/assets/ball.png"
          alt="Picture of the author"
          width={300}
          height={300}
        />
        <button className="perfil">
          <img
            className="falcon"
            src="/assets/falcon.jpg"
            alt="Picture of the author"
          />
        </button>
        <p>Jorge Attie</p>
      </div>
    </Container>
  );
};

export default Header;
