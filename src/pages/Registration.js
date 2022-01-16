import { Col, Row, Form, Input, Button, Select, DatePicker, Checkbox } from 'antd'
import React, {useState, useEffect } from 'react'
import { TimePicker } from 'antd';
import axios from 'axios';
import { welcome } from '../assets';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function Registration() {
    const [form] = Form.useForm();

  const onFinish = (values) => {

    const payload = {
        pointName: values.pointName,
        since: values.since._d.toString().split(" ")[3],
        location: {lon_lat: "", text: values.address},
        pointType: values.pointType,
        schedule: {
            weekdays: values.businessDays,
            openingTime: values.openingTime._d.toString().split(" ")[4],
            closingTime: values.closingTime._d.toString().split(" ")[4],
        },
        contactDetails: {
            phones: [{countryCode: '+91', number: values.phone},{countryCode: '+91', number: values.alternatePhone}]
        } ,
        fee: {
            feeStructure: values.feeStructure,
            feeAmount: values.feeAmount
        }
    }

    console.log(payload);

    axios.post('http://localhost:3001/api/point', payload)
    .then((res)=>{console.log(res)})
    .catch(err=>{console.log(err)})

  };

  const onReset = () => {
    form.resetFields();
  };

  const [payload, setPayload] = useState({
      contactDetails: null,
      feeStructure: null
  })

  const businessDaysOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  useEffect(() => {
      alert('To register your business with _us_, fill and submit the form')
  }, [])

    return (
        <div style={{padding:'10px', minHeight: '100vh', background: `url('${welcome}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
            <Row>
                <Col xs={{span: 24}} lg={{span:24}} align="center" >
                <h3 align='left' style={{position: 'fixed', left: '0px', margin: 'auto', boxShadow: '0px 5px 9px 3px silver', borderRadius: '', backgroundColor: '#4267B2', padding: '30px 20px', color: 'white', right: '130px', top: '0px', width: '100%', zIndex: '9999'}}>
                        useit
                    </h3>
                </Col>
                <Col xs={{span: 0}} lg={{span:24}} align="center" ></Col>
            </Row>
            <br/>
            <Row style={{marginTop: '150px'}}>
                <Col xs={{span: 24}} lg={{span:24}} align="center">
                <Form style={{backgroundColor: 'white', padding: '30px 30px',  borderRadius: ' 10px 10px 10px 10px',}} {...layout} size="large" align='left' form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item style={{}} name="pointName" label="Business Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="since" label="Since" rules={[{ required: true }]}>
                        <DatePicker id="yearPicker" onChange={()=>{}} picker="year" />
                    </Form.Item>

                    <Form.Item name="pointType" label="Business Type" rules={[{ required: true }]}>
                        <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                        >
                        <Option value="Indoor sports">Indoor sports</Option>
                        <Option value="Boxing club">Boxing club</Option>
                        <Option value="Music school">Music school</Option>
                        <Option value="Gym">Gym</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="businessDays" label="Business Days" rules={[{ required: true }]}>
                        <Checkbox.Group options={businessDaysOptions} defaultValue={['Apple']}/>
                    </Form.Item>

                    <Form.Item name="openingTime" label="Opening Time" rules={[{ required: true }]}>
                        <TimePicker format='h:mm a'/>
                    </Form.Item>

                    <Form.Item name="closingTime" label="Closing Time" rules={[{ required: true }]}>
                        <TimePicker format='h:mm a'/>
                    </Form.Item>
                    <Form.Item name="phone" label="Phone ( +91 )" rules={[{ required: true }]}>
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item name="alternatePhone" label="Alternate phone ( +91 )" rules={[{ required: false}]}>
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                        <Input type="email" />
                    </Form.Item>

                    <Form.Item name="feeStructure" label="Fee Structure" rules={[{ required: true }]}>

                        <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                        >
                            <Option value="per month">per month</Option>
                            <Option value="per slot">per slot</Option>
                            <Option value="per hour">per hour</Option>
                            <Option value="per day">per day</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="feeAmount" label="Fee Amount" rules={[{ required: true }]}>
                        <Input placeholder="please enter amount in rupees" type="number" />
                    </Form.Item>

                    <Form.Item style={{width: '100%',textAlign:'center', position: 'relative'}}>
                        <Button type="primary" style={{position: 'static', width: '100%', background: '#4267B2'}} htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                    </Form>
                </Col>
                <Col xs={{span: 0}} lg={{span:0}} align='center'>
                <h1 style={{boxShadow: '5px 5px 7px 3px silver', borderRadius: ' 10px 10px 10px 10px', backgroundColor: '#4267B2', padding: '30px 20px', color: 'white', right: '130px', top: '50px'}}>
                        Oops! Please open the website in a mobile phone, it doesn't support bigger screens.<br/> Sorry for the inconvenience
                    </h1>
                </Col>
            </Row>
        </div>

    )
}
