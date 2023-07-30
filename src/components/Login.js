
import styled from "styled-components";
// import React from 'react'

const Login = (props) =>{
  return (
    <Container>
      <BgImage />
        <Content>
            <CTA>
              <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
              <Signup>GET ALL THERE</Signup>
              <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee
                with a Disney+ subscription. As of 01/08/23, the price of Disney+
                and The Disney Bundle will increase by Rs100.
              </Description>
              <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
            </CTA>
            
        </Content>
        
    </Container>
  )
}  

const Container = styled.section`
    overfolw:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
`; 

const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding : 80px 40px;
    height:100%;
`;

const BgImage = styled.div`
  height:100%;
  background-position:top;
  background-size:cover;
  background-repeat:no-repeat;
  background-image:url("/images/login-background.jpg");
  position:absolute;
  top:0;
  right:0;
  left:0;
  z-image:-1;
`;

const CTA=styled.div`
max-width:650px;
width: 100%;
display: flex;
flex-direction: column;
margin:auto;
position:absolute;
`;

const CTALogoOne = styled.img`
  // height:100%;
  margin-bottom:12px;
  max-width:750px;
  min-height:1px;
  display:block;
  margin:auto;
  width:100%;
`;

const Signup = styled.a`
  font-width:bold;
  color:white;
  background-color:#0047AB;
  margin-bottom:12px;
  margin-top:12px;
  width:100%;
  letter-spacing:1.5px;
  font-size:18px;
  padding:16.5px 0;
  border:1px solid trasparent;
  border-radius:4px;

  &:hover{
    background-color:#0483ee;
  }
`;

const Description=styled.p`
  color:hsla(0,0%,95,3%,1);
  font-size:16px;
  margin: 0 0 24px;
  line-height:1.5;
  letter-spacing:1.5px 

`;

const CTALogoTwo = styled.img`
  max-width:650px;
  margin-bottom:20px;
  display:inline-block;
  vertical-align:bottom;
  width:100%;
  margin:auto;
`;

export default Login