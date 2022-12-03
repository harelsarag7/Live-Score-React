// import { Box, AppBar, Toolbar, IconButton, Typography, alpha, InputBase, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "react-router-dom";
import { setDark, setLight } from "../app/lightDarkSlice";
import "./Header.css";
import NavBar from "./NavBar/NavBar";
import React, { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';



// import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ModalComponent from "../ModalComponent/ModalComponent";
import { setNav } from "../app/mobileNav";


function Header(): JSX.Element {
    const webMode = useSelector((state: any) => state.chosenMode.toggle)
    const navStatus = useSelector((state: any) => state.mobileNav.toggle)
    let dispatch = useDispatch();
    const [isLight, setIsLight] = useState<boolean>(true)

    useEffect(() => {
        console.log("modeEffect: " + webMode);
    }, [webMode])

    function clickedWebMode() {
      if(isLight){
        dispatch(setDark())
        setIsLight(!isLight)
      } else {
        dispatch(setLight())
        setIsLight(!isLight)
      }
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      

      function openNav() {
        dispatch(setNav())
      }


    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={openNav}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
               <NavBar/>

            </Typography>
            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
                
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search> */}
          </Toolbar>
        </AppBar>
                {navStatus? <></> :  <NavBar/>  }
                
      </Box>
                     <div className="darkModeLightModeDiv">
                   <div className="mode-icon"  onClick={clickedWebMode}>
                     {webMode? 
                     <DarkModeIcon fontSize="large"/>
                     : <LightModeIcon  fontSize="large"/>
                     }
                     </div>
                 </div>
                 </div>
    );
}

export default Header;
