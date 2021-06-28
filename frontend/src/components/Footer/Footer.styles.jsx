import styled from "styled-components";
import ExternalRedirect from "../../helpers/ExternalRedirect";

export const MainFooter = styled.footer`
  background-color: var(--color-black-100);
`;

export const Container = styled.section`
  width: 80%;
  margin: auto;
  padding: 2rem 0;
  text-align: center;

  font-size: var(--fs-footer);
  font-weight: 600;
  color: var(--color-white-100);
`;

export const ExternalLink = styled(ExternalRedirect)`
  color: var(--color-white-100);
  font-weight: 700;
`;
