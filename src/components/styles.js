import "normalize.css";
import styled, { createGlobalStyle } from "styled-components";
import ReactLoading from "react-loading";
import { typography, fonts, colours, media } from "./theme";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: ${fonts.default};
    font-size: ${typography.rootSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    cursor: pointer;
  }
`;

const PageOuter = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageInner = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

export const Page = ({ children }) => (
  <>
    <GlobalStyles />
    <PageOuter>
      <PageInner>{children}</PageInner>
    </PageOuter>
  </>
);

export const LoadingAnimation = () => (
  <ReactLoading type="cylon" color="#aaa" />
);

export const Header = styled.header`
  background: ${colours.grey};
  padding: 0 15px;
  height: 60px;
  transition: 0.3s;
  ${media.greaterThan("md")`
    height: 80px;
  `}
`;

export const Logo = styled.img`
  height: auto;
  width: 100px;
  margin: 5px 0 0;
  transition: 0.3s;
  ${media.greaterThan("md")`
    width: 140px;
  `}
`;

export const Main = styled.main`
  padding: 5px;
  flex: 1 0 auto;
  ${media.greaterThan("md")`
    padding: 5px 0;
    display: flex;
  `}
`;

export const SideNav = styled.div`
  background: ${colours.grey};
  padding: 15px;
  ${media.greaterThan("md")`
    flex: 0 0 200px;
    margin-right: 5px;
  `}
`;

export const Primary = styled.div`
  padding: 15px;
  ${media.greaterThan("md")`
    flex-grow: 1;
  `}
`;

export const Footer = styled.footer`
  background: ${colours.grey};
  padding: 0 15px;
`;

export const Badge = styled.span`
  background: ${colours.grey};
  padding: 5px;
  font-size: 10px;
  position: relative;
  top: -3px;
  ${(props) =>
    props.success &&
    `
      background: ${colours.success};
      color: #fff;
    `}
  ${(props) =>
    props.danger &&
    `
      background: ${colours.danger};
      color: #fff;
    `}
`;

export const CatFact = styled.div`
  padding: 0 0 20px;
  & + & {
    border-top: 1px solid ${colours.grey};
  }
`;

export const ErrorText = styled.p`
  color: ${colours.danger};
`;
