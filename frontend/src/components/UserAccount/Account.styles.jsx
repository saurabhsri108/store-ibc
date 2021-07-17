import styled from "styled-components"
import Card from "../Card/Card.component"
import Container from "../Container/Container.component"

export const AccountContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;

  .dashboard-area {
    padding: 2rem;
    align-content: start;
    .dashboard-heading {
      font-size: var(--fs-product-title);
      line-height: var(--fs-cta-subheading-line-height);
      color: var(--color-black-70);
      font-weight: 600;
      text-transform: uppercase;

      @media screen and (min-width: 60rem) {
        text-align: left;
        width: 100%;
        margin-bottom: 2rem;
        margin-top: 0;
      }
    }
    .user-dashboard-form {
      width: 100%;

      .password-group {
        position: relative;
      }
      .show-password {
        position: absolute;
        display: inline-flex;
        top: 50%;
        right: 2%;
        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 60rem) {
    grid-template-columns: 1fr 4fr;
  }
`
export const AccountInfo = styled(Card)`
  .avatar-img {
    border-radius: 50%;
  }
  .avatar-name {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-black-60);
    margin-top: 1rem;
  }
`
export const AccountLinks = styled(Card)`
  display: none;

  @media screen and (min-width: 60rem) {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    .user-lists-menu {
      list-style: none;
      width: 100%;
    }

    .user-link-item {
      color: var(--color-black-60);
      font-size: 1.4rem;
      display: inline-block;
      width: 100%;
      padding: 1rem;
      transition: all 100ms ease-in-out;

      &.active {
        background-color: hsla(0, 0%, 90%, 1);
        color: var(--color-black-70);
      }

      &:hover,
      &:focus,
      &:active {
        background-color: hsla(0, 0%, 90%, 1);
      }
    }

    .user-list-item:last-child .user-link-item {
      border: none;
    }
  }
`
