import React from 'react'
import ImageCard from './ImageCard.js'
import Search from './Search';


export default function Home() {
  function Wrapper(){
    return (
      <div style={{
        width:"100%",
        height:'100px',
        background:"red",
        display:'flex',
        flexWrap:'wrap',
        padding:'10px',
      }}>
      </div>
    )
  }
  return (
    <div>
      <h1 className = "tagLine">⦿ Generated with AI ⦿</h1>
      <div style={{display:'flex',justifyContent:"center"}}><Search /></div>
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        gap:'10px',
        justifyContent:'space-evenly',
      }}>
        <ImageCard text="Card"></ImageCard>
        <ImageCard text="Card"></ImageCard>
        <ImageCard text="Card"></ImageCard>
        <ImageCard text="Card"></ImageCard>
        <ImageCard text="Card"></ImageCard>
        <ImageCard text="Card"></ImageCard>
        <ImageCard text="Card"></ImageCard>
        <ImageCard text="Card"></ImageCard>
        <ImageCard text="Card"></ImageCard>

      </div>
    </div>
  )
}
