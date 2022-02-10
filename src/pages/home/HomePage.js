import { Col, Row, Button } from 'antd';
import React from 'react';
import { ad, logo } from '../../assets';
import SmoothScroll from "smooth-scroll";

import './HomePage.css';
import PackageCards from '../components/PackageCards';

export default function HomePage() {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1200, 
    });
  return <div id="d" style={{background: "linear-gradient(white)"}}> 
  <div style={{}}>
      
    <Row style={{position: 'fixed', width: '100%', zIndex: '99', background: "white", top: '0px'}}>
        <Col style={{backgroundColor: 'transparent'}} xs={{span:24}} md={{span: 24}} align='left'> 
            <h1 style={{color: '#264348', padding: '20px 20px', paddingBottom: '5px'}}> <img style={{width:'40px'}} src={logo} alt="bitsjoy"/>  Bitsjoy</h1>
        </Col>
    </Row>
    
    <Row style={{marginTop: '20vh'}} align="center">
        <Col xs={{span: 3}}></Col>
        <Col xs={{span: 0}} md={{span: 18}}>
            <p style={{fontSize: '30px', fontFamily: 'roboto', color: 'black', fontWeight: '700'}}>From <span style={{color: '#871F78'}}>websites</span> and <span style={{color: '#871F78'}}>portfolios</span> <br/> to mobile <span style={{color: '#871F78'}}>apps</span>, <br/>we’ll create your <span style={{color: '#871F78'}}>amazing online presence.</span></p>
        </Col>
        <Col xs={{span: 18}} md={{span: 0}}>
            <p style={{fontSize: '25px', fontFamily: 'roboto', color: 'black'}}>From <span style={{color: '#871F78'}}>websites</span> and <span style={{color: '#871F78'}}>portfolios</span> <br/> to mobile <span style={{color: '#871F78'}}>apps</span>, <br/>we’ll create your <span style={{color: '#871F78'}}>amazing online presence.</span></p>
            
            </Col>
        <Col xs={{span: 3}}></Col>


    </Row> 
    </div>

   
    
    <PackageCards id="df"/>

    <Row style={{paddingTop: '10vh'}}>
        <Col xs={{span: 24}} align="center">
            <Row style={{verticalAlign: 'center'}}>
                <Col md={{span: 24}}  xs={{span:24}} align="center"><h3 style={{color: '#871F78', fontFamily: 'roboto'}}><b>OUR CLIENTS</b></h3></Col>
                
            </Row> 
            <div style={{background: '', display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll', color: 'black', fontSize: '18px', fontFamily: 'roboto', padding: '0px 35px'}}>
                
            <div style={{minWidth: '100px', maxWidth: '100px', border: '0px solid black', marginRight: '37px', textAlign: 'center', marginTop: '20px'}}>
                    <img src={ad} style={{width: '100%'}} alt="ad"/>
                </div>
                <div style={{minWidth: '100px', maxWidth: '100px', border: '0px solid black', marginRight: '37px', textAlign: 'center', marginTop: '20px'}}>
                <h4 style={{color: 'black', border: '1px solid silver', borderRadius: '50%', padding: '20px'}}>R.K. <br/>Minerals</h4>
                </div>
            </div> 
            <Row style={{verticalAlign: 'center', paddingTop: '10vh'}}>
            <Col md={{span: 24}}  xs={{span:24}} align="center"><h3 style={{color: '#871F78', fontFamily: 'roboto'}}><b>TESTIMONIALS</b></h3></Col>
            </Row> 
            <div style={{padding: '0px 35px', display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll', color: '', fontSize: '18px', fontFamily: 'roboto'}}>
                <p style={{minWidth: '400px', maxWidth: '400px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "I is the Lorem ipsum lorem ipsuem Lorem ipsum lorem ipsuem Lorem  ips " <br/><br/> - Joe
                </p>

                <span style={{minWidth: '400px', maxWidth: '400px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "Lorem ipsuem ipsuem Lorem  ipsum lorem ipsuem Lorem ipsum lorem ipsuem 
                    Lorem ipsum lorem ipsuemm Lorem ipsum lorem ipsuem " <br/><br/> - Mitchel Garden
                </span>

            </div>
        </Col>
    </Row>
    <Row style={{padding: '20px 35px', background: '#e5e4e2', fontFamily: 'roboto', fontWeight: '700'}}>
        <Col xs={{span: 24}} md={{span: 12}} align="left">
            <h3>Contact details</h3>
            Phone: +91 9870938860, +91 8126153920 <br/>
            Email: contact@bitsjoy.com <br/>
        </Col>

        {/* <Col xs={{span: 0}} md={{span: 12}} align="right" style={{fontFamily: 'roboto', fontWeight: '700'}}>
            <Button type="text">About us</Button>
            <Button type="text">Get Quote</Button>
            <Button type="text">Careers</Button>
        </Col>

        <Col xs={{span: 24}} md={{span: 0}} align="left" style={{fontFamily: 'roboto', fontWeight: '700'}}>
            <br/>
            <Button type="text">About us</Button> 
            <Button type="text">Get Quote</Button>
            <Button type="text">Careers</Button>
        </Col> */}
    </Row>
  </div>;
}
