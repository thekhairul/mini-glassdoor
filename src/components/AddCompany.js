import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Radio, Rate, Space } from 'antd';
import { useState } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import CompanyBenefit from './CompanyBenefit';
import CompanyDomain from './CompanyDomain';
import CompanyTech from './CompanyTech';

const { TextArea } = Input;
const reviewParams = ['Not a chance', 'Somewhat unlikely', 'Maybe', 'Very likely', 'Absolutely'];

const AddComppany = () => {
    const [managementStyle, setManagementStyle] = useState('startup');
    const [reviewStar, setReviewStar] = useState();
    const [convertedText, setConvertedText] = useState("Some default content");

    return ( <div id="add-company" className="add-company">
        <Form layout="vertical" onFinish={(e) => console.log(e)}>
            <Form.Item label="Name of Company" name="companyName" required>
                <Input size="large" placeholder="Company Name" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item label="Established at" name="companyEstablishedAt" required>
                <DatePicker size="large" picker="year" placeholder="Select year" disabledDate={current => current.year() > new Date().getFullYear()}/>
            </Form.Item>

            <Form.Item label="Company Address" name="companyAddress">
                <TextArea placeholder="Company Address" allowClear prefix={<HomeOutlined />}/>
            </Form.Item>

            <Form.Item label="Company Website" name="companyWebsite" required>
                <Input size="large" placeholder="Company website" prefix={<GlobalOutlined />} />
            </Form.Item>

            <Form.Item label="Number of Employees" name="employeeNumber" required>
                <Radio.Group defaultValue="medium" buttonStyle="solid">
                    <Radio.Button value="small">Less than 10</Radio.Button>
                    <Radio.Button value="medium">10-50</Radio.Button>
                    <Radio.Button value="large">50-100</Radio.Button>
                    <Radio.Button value="giant">100+</Radio.Button>
                </Radio.Group>
            </Form.Item>

            <CompanyTech />

            <Form.Item label="Salary structure" name="salary" required>
                <Radio.Group defaultValue="competitive" buttonStyle="solid">
                    <Radio.Button value="below">Below average</Radio.Button>
                    <Radio.Button value="average">Average</Radio.Button>
                    <Radio.Button value="competitive">Competitive</Radio.Button>
                    <Radio.Button value="international">International standard</Radio.Button>
                </Radio.Group>
            </Form.Item>

            <CompanyBenefit />
            <CompanyDomain />

            <Form.Item label="Management Style" name="managementStyle">
                <Radio.Group onChange={(e) => setManagementStyle(e.target.value)} value={managementStyle}>
                    <Space direction="vertical">
                        <Radio value={'startup'}>Startup</Radio>
                        <Radio value={'corporate'}>Corporate</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>

            <Form.Item label="How likely will you recommend?" name="rating">
                <Rate tooltips={reviewParams} onChange={setReviewStar} value={reviewStar} />
            </Form.Item>

            <Form.Item label="Your review" name="review">
                <ReactQuill
                    theme='snow'
                    value={convertedText}
                    onChange={setConvertedText}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    </div> );
}
 
export default AddComppany;