import React from 'react'
import { useState } from 'react';
import GenerateImageForm from './GenerateImageForm';
import styled from 'styled-components';
import GenerateImageCard from './GenerateImageCard';


export default function Post() {

  const [photo,setPhoto] = useState("");
  const [loading,setLoading] = useState(false);
  const [postLoading,setPostLoading] = useState(false);




  const Container = styled.div`
    width:95%;
    display:flex;
    justify-content:center;
    padding:16px;
    // margin:1rem 2rem;
    @media(max-width:599px){
      flex-direction:column;
    }
  `

  return (
    <Container>
      <GenerateImageForm photo = {photo} setPhoto = {setPhoto} loading = {loading} setLoading = {setLoading} postLoading={postLoading} setPostLoading = {setPostLoading}></GenerateImageForm>
      <GenerateImageCard loading={loading} photo={photo}></GenerateImageCard>
    </Container>
    
  )
}
