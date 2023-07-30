// import firebase from "firebase";
import Styled from 'styled-components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {auth,provider} from '../firebase';
import {selectUserName,setUserLoginDetails,selectUserPhoto,setSignOutState} from "../features/user/userSlice";

function Header(props) {
    const dispatch = useDispatch() 
    const navigate =useNavigate()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    useEffect(()=>{
        
            auth.onAuthStateChanged(async (user)=>{
                if(user){
                    setUser(user);
                    navigate("/home");
                }
            });
        
        

    },[userName]);

    const handleAuth=()=>{
        if(!userName){
            auth.signInWithPopup(provider).then(result=>{
                setUser(result.user);
            }).catch((error)=>{
                alert(error.message)
            });
        }
        else if(userName){
            auth.signOut().then(()=>{
            dispatch(setSignOutState())
            navigate('/')
        }).catch((err)=>alert(err.message));
    }
    };

    const setUser = (user)=>{
        dispatch(setUserLoginDetails({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL,
        })
        );
    };
  return (
    <Nav>
        
        {/* <img src="/imgages/logo.svg" alt=""/> */}
        <Logo>
            <img src="https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg" alt=""/>
            
        </Logo>
        {
            !userName?
            <Login onClick={handleAuth}>Login</Login>
            :
            <>
        <NaveMenu>
            <a href='/home'>
                <image src="home.jpeg" alt ="HOME"/>
                {/* <i class="fa fa-home" aria-hidden="true"></i> */}
                <span>HOME</span>
            </a>
            <a href='/search'>
                <image src="home.jpeg" alt ="SEARCH"/>
                {/* <i class="fa fa-home" aria-hidden="true"></i> */}
                <span>SEARCH</span>
            </a>
            <a href='/watchlist'>
                <image src="home.jpeg" alt ="HOME"/>
                {/* <i class="fa fa-home" aria-hidden="true"></i> */}
                <span>WATCHLIST</span>
            </a>

            <a href='/originals'>
                <image src="home.jpeg" alt ="HOME"/>
                {/* <i class="fa fa-home" aria-hidden="true"></i> */}
                <span>ORIGINALS</span>
            </a>
            <a href='/movies'>
                <image src="home.jpeg" alt ="HOME"/>
                {/* <i class="fa fa-home" aria-hidden="true"></i> */}
                <span>MOVIES</span>
            </a>
            <a href='/series'>
                <image src="home.jpeg" alt ="HOME"/>
                {/* <i class="fa fa-home" aria-hidden="true"></i> */}
                <span>SERIES</span>
            </a>
        </NaveMenu>
        <SignOut>
            <UserImg src={userPhoto} alt={userName}/>
            <DropDown>
                <span onClick={handleAuth}>Sign out</span>
            </DropDown>
        </SignOut>
        
        </>
        } 
    </Nav>
    
  )
}

const Nav = Styled.nav`
    width:100%;
    position :fixed;
    top:0;
    left:0;
    right 0;
    height:70px;
    background-color:black;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 36px;
    letter-spacing:16px;
    z-index:3;
`;

const Logo =Styled.a`
    padding:0;
    width:8%;
    margin-height:70px;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }

`

const NaveMenu = Styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    height:100%;
    justify-content:flex-end;
    margin:0px;
    padding 0;
    position:relative;
    margin-right:auto;
    margin-left:25px;
    
    

    a{
        display:flex;
        align-items:center;
        padding:0 12px;

        img{
            height:20px;
            min-width:20px;
            width:20px;
        }

        span{
            color:rgb(249,249,249);
            font-size:13px;
            letter-spacing:1.42px;
            line-height:1.08;
            padding:2px 0px;
            white-space:nowrap;
            position:relative;

            &:before{
                background-color:rgb(249,249,249);
                border-radius:0 0 4px 4px;
                bottom: -6px;
                content:"";
                height:2px;
                left:0px;
                opacity:0;
                position:absolute;
                right:0px;
                transform-origin:left center;  
                transform:sclaeX(0);
                transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility:hidden;
                widht:auto;
            }

        }

        &:hover{
            span:before{
                transform:scaleX(1);
                visibility: visible;
                opacity: 1 important;  
                
            }
        }
    }

    @media(max-width 768px){
        display:none; 
    }
`;

const Login= Styled.a`
    background-color:rgb(0,0,0,0.6);
    padding:8px 16px;
    text-transform:uppercase;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color:white;
        color:black;
        border-color:trasparent;
    }
`;

const UserImg = Styled.img`
    min-height:100%;
    // border-radius:100%;

`;

const DropDown = Styled.div`
    position:absolute;
    top:48px;
    right:0;
    background-color:rgb(19,19,19);
    border:1px solid rgba(151,151,151,0.34);
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 50%) 0 0 18px 0;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    width:100px;
    opacity:0;
`

const SignOut = Styled.div`
    position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;

    ${UserImg}{
        border-radius:100%;
        width:100%;
        height:100%;
    }

    &:hover{
        ${DropDown}{
            opacity:1;
            transition-duration:1s;
        }
    }
`



export default Header