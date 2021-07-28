import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../Card/Card.component";
import { Container } from "../../Footer/Footer.styles";
import { InputGroup } from "../../FormComponents";

export const ShippingContainer = styled(Container)`
  color: var(--color-black-70);
  margin: 2rem auto;
  text-align: left;
`;
export const ShippingCard = styled(Card)`
  grid-template-columns: auto;
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 45rem) {
    grid-template-columns: repeat(3, auto);
    margin-bottom: 4rem;
  }
`;
export const ShippingLink = styled(Link)`
  color: inherit;
  padding: 1rem;
  text-align: center;

  &:not(.active) {
    display: none;
  }

  @media screen and (min-width: 45rem) {
    &:not(.active) {
      display: block;
    }
  }

  &.active {
    background: var(--color-black-100);
    color: var(--color-white-100);
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (min-width: 45rem) {
    margin-top: 4rem;
  }
`;
export const InputGroupStyled = styled(InputGroup)`
  @media screen and (min-width: 45rem) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & label {
      flex: 1;
    }

    & input {
      flex: 4;
    }
  }
`;

export const PlaceOrderMain = styled.section`
  @media screen and (min-width: 45rem) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;
  }
`;

export const PlaceOrderContainer = styled(Container)`
  color: var(--color-black-70);
  margin: 0 auto;
  text-align: left;
  width: 100%;

  .main-items {
    margin: 1rem auto;
    margin-bottom: 2rem;

    h2 {
      font-size: var(--fs-product-title);
      line-height: 1.5;
    }

    p {
      font-size: 1.3rem;
      line-height: 1.4;
      color: var(--color-black-60);
      padding-top: 0.5rem;
    }

    table {
      border: 1px solid var(--color-black-10);
      padding-top: 0.5rem;
      border-spacing: 1rem;
      width: 100%;

      @media screen and (min-width: 45rem) {
        width: 80%;
      }

      thead {
        font-size: 1.3rem;

        th {
          font-weight: 600;
        }
      }

      tbody {
        color: var(--color-black-60);
        font-size: 1.2rem;
        font-weight: 600;

        tr {
          margin: 1rem;
        }
      }
    }
  }
`;
