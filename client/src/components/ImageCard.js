import React from 'react'
import styled from "styled-components";
import {exportComponentAsJPEG, exportComponentAsPDF} from 'react-component-export-image'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';


const Card = styled.div`
        width:300px;
        height:300px;
        margin:20px;
        border-width:1px 2px 40px 8px ;
        border-style:solid;
        border-color:black;
        box-shadow : 10px 10px 5px grey;
        position:relative;

`

const Author = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    font-weight:bold;
    font-size:1rem;
    margin-left:10px;
`
const Download = styled.button`
    position:absolute;
    right:1px;
    bottom:-30px;
    height:30px;
    width:30px;
    background: transparent;
    border: 0px;
`

const Prompt = styled.div`
    position:relative;
    top:0px;
    left:0px;
    font-weight:bold;
    font-size:1rem;

`

export default function ImageCard(props) {
    const imgref = useRef();
    const handleDownloadImage = async () => {
        const element = imgref.current;
        const canvas = await html2canvas(element,{useCORS: true, allowTaint: true});
    
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
    
        if (typeof link.download === 'string') {
          link.href = data;
          link.download = 'image.png';
    
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(data);
        }
      };

  return (
    <div>
        <Card>
            <div ref = {imgref}>
                <img src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
                    style={{
                        width:'300px',
                        height:'300px',
                        objectFit:'fill'
                    }}
                    crossOrigin="anonymous"
                />
            </div>
            
                <Author >
                    {props?props.Author:''}
                    <Prompt>{props?props.prompt:''}</Prompt>
                </Author>
                <Download onClick={handleDownloadImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="11.download"><path fill="white" d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"/><path fill="white" d="M12 14.414 7.293 9.707l1.414-1.414L12 11.586l3.293-3.293 1.414 1.414L12 14.414z"/><path fill="white" d="M11 5h2v8h-2zM17 19H7v-3h2v1h6v-1h2v3z"/></g></svg>
                </Download>
                
        </Card>
        

      </div>
  )
}
