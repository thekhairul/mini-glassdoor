import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Col, DatePicker, Input, Radio, Rate, Row, Space } from 'antd';
import { useState } from 'react';
import CompanyBenefit from './CompanyBenefit';
import CompanyDomain from './CompanyDomain';
import CompanyTech from './CompanyTech';

const { TextArea } = Input;
const reviewParams = ['Not a chance', 'Somewhat unlikely', 'Maybe', 'Very likely', 'Absolutely'];

const AddComppany = () => {
    const [managementStyle, setManagementStyle] = useState('startup');
    const [reviewStar, setReviewStar] = useState();

    return ( <div id="add-company" className="add-company">
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Name of Company</label>
                <Input size="large" placeholder="Company Name" prefix={<UserOutlined />} />
            </Col>
        </Row>
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Established at</label>
                {/* FIXME: restrict year to current year */}
                <DatePicker size="large" picker="year" placeholder="Select year"/>
            </Col>
        </Row>
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Company Address</label>
                <TextArea placeholder="Company Address" allowClear prefix={<HomeOutlined />}/>
            </Col>
        </Row>
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Company Website</label>
                <Input size="large" placeholder="Company website" prefix={<GlobalOutlined />} />
            </Col>
        </Row>
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Number of Employees</label>
                <Radio.Group defaultValue="medium" buttonStyle="solid">
                    <Radio.Button value="small">Less than 10</Radio.Button>
                    <Radio.Button value="medium">10-50</Radio.Button>
                    <Radio.Button value="large">50-100</Radio.Button>
                    <Radio.Button value="giant">100+</Radio.Button>
                </Radio.Group>
            </Col>
        </Row>
        <CompanyTech />
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Salary structure</label>
                <Radio.Group defaultValue="competitive" buttonStyle="solid">
                    <Radio.Button value="below">Below average</Radio.Button>
                    <Radio.Button value="average">Average</Radio.Button>
                    <Radio.Button value="competitive">Competitive</Radio.Button>
                    <Radio.Button value="international">International standard</Radio.Button>
                </Radio.Group>
            </Col>
        </Row>
        <CompanyBenefit />
        <CompanyDomain />
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Management Style</label>
                <Radio.Group onChange={(e) => setManagementStyle(e.target.value)} value={managementStyle}>
                    <Space direction="vertical">
                        <Radio value={'startup'}>Startup</Radio>
                        <Radio value={'corporate'}>Corporate</Radio>
                    </Space>
                </Radio.Group>
            </Col>
        </Row>
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">How likely will you recommend?</label>
                <Rate tooltips={reviewParams} onChange={setReviewStar} value={reviewStar} />
            </Col>
        </Row>
    </div> );
}
 
export default AddComppany;