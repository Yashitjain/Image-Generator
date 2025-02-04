import React from 'react'
import styled from 'styled-components'
// import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function GenerateImageCard(props) {
    const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
    border:dashed;
    border-color:yellow;
    object-fit:fill;
    @media(max-width:599px){
      flex-direction:column;
    }
  `

function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
    console.log("props ",props);
  return (
    <Container>
        {props.loading ? (<><CircularIndeterminate/> <div style={{fontSize:'25px',marginLeft:'8px'}}>Loading...</div></> ):
        props.photo?(<img src={props.photo} style={{ width:'100%'}} />) : (<>Write Prompt To Generate Image</>)}
    </Container>
  )
}
