import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          voluptatum sunt ipsa magnam officiis commodi eius sed nulla beatae
          nesciunt quam corrupti exercitationem dolorum molestias corporis, ex
          quaerat alias ullam?
        </Description>
        <Logo2  src="/images/cta-logo-two.png">
          
        </Logo2>
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: calc(100vh - 70px);
  
  
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: royalblue;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
font-size: 11px;
font-family: Arial, Helvetica, sans-serif;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`
const Logo2 = styled.img`

width: 90%;
`