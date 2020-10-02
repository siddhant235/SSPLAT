import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



// import Logo from '../../../assets/Images/apple-touch-icon.png'
import {Navbar,Nav} from "react-bootstrap";
import './Navbar.css';


class navbar extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      logout:false
    }
    this.Handlelogout=this.Handlelogout.bind(this);
  }
  Handlelogout=()=>{
    this.props.onLogout()
  this.setState({
    logout:true
  })
  
  }
  render() {
   
    
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" >
          <Navbar.Brand href="/" style={{fontSize:"30px",marginLeft:"35rem"}}>NEWZZ PAGE BY 17BEC0431</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
           {/* <Nav.Link href="/auth"><i class="fa fa-user" aria-hidden="true"></i> Register/Login</Nav.Link>
              
    */}
            </Nav>
            {/* <Nav >
           
              <Nav.Link href="/"><i className="fa fa-id-card" aria-hidden="true"></i>US</Nav.Link>
            
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
        
      </React.Fragment>
    );
  }
}

export default navbar;
