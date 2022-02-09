import React from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, PhoneOutlined, PicLeftOutlined } from '@ant-design/icons';

const { Meta } = Card;



export default function PackageCards(props) {

    const cardInfo = [
        {
            title: 'Business Website',
            img: 'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            Charges: '15000',
            costsIncluded: ['Website name registration', 'Deployment cost', 'Service fee'],
            bgColor: '#008080'
        }, {
            title: 'Personal Website / Portfolio',
            img: 'https://images.pexels.com/photos/8872785/pexels-photo-8872785.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            priceStartingFrom: '4000',
            costsIncluded: ['Website name registration', 'Deployment cost', 'Service fee'],
            bgColor: '#6A5ACD'
        }, {
            title: 'Mobile Application',
            img: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            priceStartingFrom: '30000',
            costsIncluded: ['Service fee', 'Deployment cost', 'No hidden charges'],
            bgColor: '#708090'
        }
    ]

  return (
      <div id={props.id} style={{paddingTop: '16vh'}}>
            <Row style={{verticalAlign: 'center', padding: '0px 35px'}}>
                <Col md={{span: 24}}  xs={{span:24}} align="left"><h3 style={{color: '#871F78', fontFamily: 'roboto'}}><b>SERVICES<hr/></b></h3></Col>
                
            </Row>
            <br/>
        <Row>
            
            {
                cardInfo.map((card) => {

                    return <Col align="center" md={{span: 8}} xs={{span: 24}} style={{padding: '0px 10px'}}>
                        <Card
                        bordered={false}
                        align="left"
                            style={{ width: '90%', borderRadius: '5px', borderRight: '0px', borderLeft: '0px', borderTop: '0px', marginBottom: '10vh', background: card.bgColor, textColor: 'white !important'}}
                            cover={
                                <img
                                alt="example"
                                src={card.img}
                                style={{borderRadius:'5px 5px 0px 0px', background: 'white'}}
                                />
                            }
                            actions={[
                                <a href="#" style={{backgroundColor: card.bgColor, color: 'white', padding: '7px 7px'}}><PicLeftOutlined /> Demo</a>,
                                <a href="#" style={{backgroundColor: card.bgColor, color: 'white', padding: '7px 7px'}}><PhoneOutlined /> Contact</a>,
                                <a href="#" style={{backgroundColor: card.bgColor, color: 'white', padding: '7px 7px'}}>More</a>,
                                
                            ]}
                            >
                                <h2 style={{ color: 'white', fontFamily: 'raleway', fontWeight: '700'}}>{card.title}</h2>
                                <h3 style={{ color: 'white', fontFamily: 'roboto', fontWeight: '700'}}>Costs include :<ul style={{paddingLeft: '30px'}}> {card.costsIncluded.map((costType)=>{
                                    return <li>{costType}</li>
                                })}</ul></h3>
                            
                        </Card>
                    </Col>
            })}
        </Row>
        </div>
  );
}
