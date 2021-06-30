import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

export const UserActionsNav = styled.nav`
  margin-left: 0.625rem;
  position: relative;
`;

export const UserNavlist = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  text-decoration: none;
  list-style: none;
  gap: 1.4rem;
  height: 100%;
  font-weight: 600;
  font-size: var(--fs-user-actions);
  place-items: center;

  @media screen and (min-width: 45rem) {
    gap: 2rem;
  }
`;

export const UserCartLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;
  color: var(--color-white-70);
`;

export const UserCartHeading = styled.span`
  font-family: "Raleway", sans-serif;
  display: none;

  @media screen and (min-width: 45rem) {
    display: block;
  }
`;

export const UserCartNumber = styled.span`
  position: absolute;
  width: 100%;
  left: 0;
  top: -1rem;
  font-size: 1.2rem;
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: var(--color-white-70);

  @media screen and (min-width: 45rem) {
    left: -1.6rem;
  }
`;

export const UserLoginLink = styled(Link)`
  color: var(--color-black-100);
`;

export const UserLoginHeading = styled.span`
  display: none;
  border: 1px solid white;
  padding: 0.8rem 2rem;
  background-color: var(--color-white-100);
  border-radius: 0.2rem;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  position: relative;
  transition: 0.5s;

  @media screen and (min-width: 45rem) {
    display: block;
  }
`;

export const StyledFaSignInAlt = styled(FaSignInAlt)`
  color: var(--color-white-100);

  @media screen and (min-width: 45rem) {
    display: none;
  }
`;
