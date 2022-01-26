import { Col, Row, Button } from 'antd';
import React from 'react';
import { ad } from '../../assets';

export default function HomePage() {
  return <div style={{minHeight: '100vh', background: "#663399 no-repeat fixed left", backgroundSize: "cover", padding: '35px'}}>
    <Row>
        <Col style={{backgroundColor: 'transparent'}} xs={{span:24}} md={{span: 12}} align='left'>
            <h1 style={{color: 'white'}}>bitsjoy</h1>
        </Col>
        <Col style={{backgroundColor: 'transparent'}} xs={{span:0}} md={{span: 12}} align='right'>
        {/* <h1 style={{color: 'white'}}><Button  style={{fontSize:'35px', height: '100%', color: 'white'}} type="link" size="large">☎️</Button></h1> */}
        </Col>
    </Row>
    
    <Row style={{marginTop: '5vh'}}>
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
    <Row style={{}}>
        <Col xs={{span: 24}} align="center">
            
            <Row style={{verticalAlign: 'center'}}>
            <Col md={{span: 3}} xs={{span:6}}>
                    <hr/>
                </Col>
                <Col md={{span: 3}}  xs={{span:12}} align="center"><h4 style={{color: 'yellow', fontFamily: 'roboto'}}><b>OUR CLIENTS</b></h4></Col>
                <Col md={{span: 18}} xs={{span:6}}>
                    <hr/>
                </Col>
            </Row> 
            <div style={{display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll', color: 'white', fontSize: '18px', fontFamily: 'roboto'}}>
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
            <br/>
            <div style={{display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll', color: 'white', fontSize: '18px', fontFamily: 'roboto'}}>
                <span style={{minWidth: '400px', maxWidth: '400px', height: '200px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "I is the Lorem ipsum lorem ipsuem Lorem ipsum lorem ipsuem Lorem  ips " <br/><br/> - Joe
                </span>

                <span style={{minWidth: '400px', maxWidth: '400px', height: '200px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "Lorem ipsuem ipsuem Lorem  ipsum lorem ipsuem Lorem ipsum lorem ipsuem 
                    Lorem ipsum lorem ipsuemm Lorem ipsum lorem ipsuem " <br/><br/> - Hoe Garden
                </span>

                <span style={{minWidth: '400px', maxWidth: '400px', height: '200px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "Lorem ipsum lorem ipsuem Lorem ipsum lorem ipsuem L " <br/><br/> - Toe 
                </span>

                <span style={{minWidth: '400px', maxWidth: '400px', height: '200px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "Lorem ipsum lorem ipsuem Lorem ipsum lor  " <br/><br/> - Tip
                </span>

                <span style={{minWidth: '400px', maxWidth: '400px', height: '200px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "Lorem ipsum lorem ipsuem Lorem ipsum lorem ipsuem Lorem  ipsum lorem ipsuem Lorem ipsum lorem ipsuem 
                    Lorem ipsum loripsum lorem ipsuem " <br/><br/> - Zip 
                </span>

                <span style={{minWidth: '400px', maxWidth: '400px', height: '200px', border: '0px solid black', marginRight: '37px', textAlign: 'left', marginTop: '20px'}}>
                    "Lorem ipsum lorem ipsuem Lorem ipsum lorem ipsuem Lorem  ipsum lorem ipsuem Lorem ipsum lorem ipsuem 
                    Lorem ipsum lorem ipsuem Lorem ipsum lorem ip ipsuem " <br/><br/> - Joe
                </span>
            </div>
        </Col>
    </Row>
  </div>;
}
