import { Col, Row, Button } from 'antd';
import React from 'react';
import { ad } from '../../assets';

export default function HomePage() {
  return <div style={{minHeight: '100vh', background: "#264348"}}>
      
    <Row style={{position: 'fixed', width: '100%', zIndex: '99', background: "white", top: '0px'}}>
        <Col style={{backgroundColor: 'transparent'}} xs={{span:24}} md={{span: 24}} align='left'> 
            <h1 style={{color: '#264348', padding: '20px 35px', paddingBottom :'7px'}}>bitsJoy</h1>
        </Col>
    </Row>
    
    <Row style={{paddingTop: '30vh', height: '60vh'}}>
        <Col xs={{span: 3}}></Col>
        <Col xs={{span: 0}} md={{span: 18}}>
            <p style={{fontSize: '30px', fontFamily: 'roboto', color: 'silver'}}>From <span style={{color: 'white'}}>websites</span> and <span style={{color: 'white'}}>portfolios</span> <br/> to mobile <span style={{color: 'white'}}>apps</span>, <br/>we’ll create your <span style={{color: 'white'}}>amazing online presence.</span></p>
        </Col>
        <Col xs={{span: 18}} md={{span: 0}}>
            <p style={{fontSize: '25px', fontFamily: 'roboto', color: 'silver'}}>From <span style={{color: 'white'}}>websites</span> and <span style={{color: 'white'}}>portfolios</span> <br/> to mobile <span style={{color: 'white'}}>apps</span>, <br/>we’ll create your < span style={{color: 'white'}}>amazing online presence.</span></p>
        </Col>
        <Col xs={{span: 3}}></Col>
    </Row>
    <br/> 
<br/>
<br/>
<br/>
    <Row style={{height: '70vh'}}>
        <Col xs={{span: 24}} align="center">
            
            <Row style={{verticalAlign: 'center', padding: '0px 35px'}}>
            <Col md={{span: 3}} xs={{span:6}}>
                    <hr/>
                </Col>
                <Col md={{span: 3}}  xs={{span:12}} align="center"><h4 style={{color: 'yellow', fontFamily: 'roboto'}}><b>OUR CLIENTS</b></h4></Col>
                <Col md={{span: 18}} xs={{span:6}}>
                    <hr/>
                </Col>
            </Row> 
            <div style={{display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll', color: 'white', fontSize: '18px', fontFamily: 'roboto', padding: '0px 35px'}}>
                <div style={{minWidth: '100px', maxWidth: '100px', border: '0px solid black', marginRight: '37px', textAlign: 'center', marginTop: '20px'}}>
                <h1 style={{color: 'white'}}><b>R.K.</b></h1>
                    <sub>R.K. Minerals</sub>
                </div>
                <div style={{minWidth: '100px', maxWidth: '100px', height: '50px', border: '0px solid black', marginRight: '37px', textAlign: 'center', marginTop: '20px'}}>
                    <img src={ad} style={{width: '100%'}} alt="ad"/>
                    <sub>Archana Design</sub>
                </div>

            </div> 
            <br/>
            <Row style={{verticalAlign: 'center', padding: '0px 35px'}}>
            <Col md={{span: 18}} xs={{span:6}}>
            <hr/>
            </Col>
            <Col md={{span: 3}}  xs={{span:12}} align="center"><h4 style={{color: 'yellow', fontFamily: 'roboto'}}><b>TESTIMONIALS</b></h4></Col>
            <Col md={{span: 3}} xs={{span:6}}>
                    <hr/>
                </Col>
            </Row> 

            <div style={{padding: '0px 35px', display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll', color: 'white', fontSize: '18px', fontFamily: 'roboto'}}>
                <span style={{minWidth: '400px', maxWidth: '400px', height: '200px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "I is the Lorem ipsum lorem ipsuem Lorem ipsum lorem ipsuem Lorem  ips " <br/><br/> - Joe
                </span>

                <span style={{minWidth: '400px', maxWidth: '400px', height: '200px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "Lorem ipsuem ipsuem Lorem  ipsum lorem ipsuem Lorem ipsum lorem ipsuem 
                    Lorem ipsum lorem ipsuemm Lorem ipsum lorem ipsuem " <br/><br/> - Mitchel Garden
                </span>

            </div>
        </Col>
    </Row>
    <Row style={{padding: '20px 35px', background: 'white', fontFamily: 'roboto'}}>
        <Col xs={{span: 24}} md={{span: 12}} align="left">
            <h3>Contact details</h3>
            Phone: +91 9870938860, +91 8126153920 <br/>
            Email: contact@bitsjoy.com <br/>
        </Col>

        <Col xs={{span: 0}} md={{span: 12}} align="right">
            <Button type="text">About us</Button>
            <Button type="text">Get Quote</Button>
            <Button type="text">Careers</Button>
        </Col>

        <Col xs={{span: 24}} md={{span: 0}} align="left">
            <br/>
            <Button type="text">About us</Button> 
            <Button type="text">Get Quote</Button>
            <Button type="text">Careers</Button>
        </Col>
    </Row>
  </div>;
}
