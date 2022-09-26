import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg"  />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"  />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"  />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"  />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"  />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"  />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/profile.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  // expands it how far it can
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        // this is like div
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
      }
     
    }
   &:hover {
   span:after{
    transform: scaleX(1);
    opacity: 1;
    transition: 0.3s ease-in-out;
   }
   }
  }
`;

const UserImg = styled.img`
  width: 100px;
  height: 60px;
  cursor: pointer;
  border-radius: 50%;
`;
