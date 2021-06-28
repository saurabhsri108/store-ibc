import { MainFooter, Container, ExternalLink } from "./Footer.styles";

const Footer = () => {
  return (
    <MainFooter>
      <Container>
        Copyright &copy; 2021{" "}
        <ExternalLink
          href="https://github.com/vasudeveloper001"
          target="_blank"
        >
          Saurabh Srivastava @saudev001
        </ExternalLink>
      </Container>
    </MainFooter>
  );
};

export default Footer;
