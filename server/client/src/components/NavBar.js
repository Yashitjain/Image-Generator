import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate,useLocation } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  // console.log("pathname=> "+location.pathname);
  return (
    <Navbar className=" justify-content-between" style={{background:"Black"}}>
      <Form inline>
        <h1 style={{color:"grey",marginLeft:"2rem",marginRight:"2rem",filter:'brightNess(150%)'}}>
          GenAi
        </h1>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto" style={{marginRight:"2rem",marginLeft:"2rem"}}>
          {pathname === "/post" ?(null):(
            <Button 
            type="submit" 
            style={{paddingLeft:"30px",paddingRight:"30px",fontSize:"16px"}}
            onClick={()=>navigate("/post")}
            ><b>+ Create New Post</b></Button>)}
            
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default NavBar;