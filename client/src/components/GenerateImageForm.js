import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

import { AuthorContext } from '../ContextApi/AuthorApi';
import { PromptContext } from '../ContextApi/PromptApi'

function GenerateImageForm(props) {

    const Author = useContext(AuthorContext);
    const Prompt = useContext(PromptContext);
    
    console.log("generate image form ",props)

  return (
    // <Container>
    <Form id='Form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          placeholder="Enter Your Name" 
          name='name' 
          value = {Author.author} 
          onChange = {(e)=>Author.setAuthor(e.target.value)} 
          style={{textAlign:'center'}}></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Prompt</Form.Label>
        <textarea className="mb-3" controlId="formBasicEmail"
          placeholder="Enter A Detailed Prompt" 
          name='prompt' 
          value = {Prompt.prompt} 
          onChange = {(e)=>Prompt.setPrompt(e.target.value)} 
          rows='8' 
          style={{width:'100%',textAlign:'center'}} />
      </Form.Group>

      <div id='formButton'>
        <Button variant="primary" type="submit" id='GenerateButton' 
            onClick={()=>props.setLoading(true)}
            disabled = {Prompt.prompt == null}
        >
          Generate Image
        </Button>
        <Button variant="primary" type="submit"id='PostButton'
            disabled = {Author.author == null || Prompt.prompt == null}
            onClick={()=>props.setPostLoading(true)}

        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{height:"25px", width:"25px"}}><defs></defs><g id="pen"><path class="cls-1" d="M15.45 4.3a1.2 1.2 0 0 0-1.66.15l-8.18 9.83a10.76 10.76 0 0 0-2.41 5.57l-.43 3.45a.49.49 0 0 0 .17.44.51.51 0 0 0 .32.12h.15l3.32-1.05a10.78 10.78 0 0 0 5-3.38L20 9.58a1.17 1.17 0 0 0-.16-1.65zm3.74 4.64L11 18.77a9.81 9.81 0 0 1-4.57 3.07l-2.57.81.33-2.65a9.75 9.75 0 0 1 2.19-5l8.18-9.83a.22.22 0 0 1 .14 0 .2.2 0 0 1 .11 0l4.35 3.53a.17.17 0 0 1 .03.24zM21.24 3.07 20 2.06a2.19 2.19 0 0 0-3.11.28l-.83 1a.5.5 0 0 0 .07.7.49.49 0 0 0 .7-.06l.83-1a1.21 1.21 0 0 1 1.7-.16l1.22 1a1.21 1.21 0 0 1 .15 1.7l-.83 1a.5.5 0 0 0 .39.82.49.49 0 0 0 .38-.18l.83-1a2.22 2.22 0 0 0-.26-3.09zM8.47 7.45a.51.51 0 0 0 .39-.18l3.82-4.58A.52.52 0 0 1 13 2.5a.51.51 0 0 1 .39.12l.74.62a.5.5 0 1 0 .64-.77l-.74-.62A1.54 1.54 0 0 0 13 1.5a1.51 1.51 0 0 0-1 .55L8.09 6.63a.49.49 0 0 0 .06.7.51.51 0 0 0 .32.12z"/></g></svg>
          Post Image
        </Button>
      </div>
    </Form>
    // </Container>
  )
}
export default React.memo(GenerateImageForm)