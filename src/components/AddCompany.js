import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Input, Radio, Rate, Select, Space } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;
const techOptions = ['NodeJs','Laravel','React','Vue','Typescript','MySQL','PostgreSQL','MongoDB'];
const benefitOptions = ['5 days work week', '2 festival bonus', 'Yearly salary review', 'Profit share', 'Gratuity', 'Subsidized lunch & snacks', '21 days yearly paid leave']
const industryOptions = ['Banking and Finance','Health and Medicine','Media & Marketing','Education'];
const reviewParams = ['Not a chance', 'Somewhat unlikely', 'Maybe', 'Very likely', 'Absolutely'];

const AddComppany = () => {
    const [selectedTech, setTechSelection] = useState([]);
    const [selectedBenefits, setBenefitsSelection] = useState([]);
    const [selectedIndustries, setIndustriesSelection] = useState([]);
    const [managementStyle, setManagementStyle] = useState('startup');
    const [reviewStar, setReviewStar] = useState();

    const unselectedTechs = techOptions.filter(tech => !selectedTech.includes(tech));
    return ( <div id="add-company" className="add-company">
        <label htmlFor="">Name of Company</label>
        <Input size="large" placeholder="Company Name" prefix={<UserOutlined />} />
        <label htmlFor="">Established at</label>
        {/* FIXME: restric year to current year */}
        <DatePicker size="large" picker="year" placeholder="Year of Establishment"/>
        <label htmlFor="">Company Address</label>
        <TextArea placeholder="Company Address" allowClear prefix={<HomeOutlined />}/>
        <label htmlFor="">Company Website</label>
        <Input size="large" placeholder="Company website" prefix={<GlobalOutlined />} />
        <label htmlFor="">Number of Employees</label>
        <Radio.Group defaultValue="medium" buttonStyle="solid">
            <Radio.Button value="small">Less than 10</Radio.Button>
            <Radio.Button value="medium">10-50</Radio.Button>
            <Radio.Button value="large">50-100</Radio.Button>
            <Radio.Button value="giant">100+</Radio.Button>
        </Radio.Group>
        <label htmlFor="">Common Tech Used in Company</label>
        {/* TODO: add custom option feature */}
        <Select
            mode="multiple"
            placeholder="Inserted are removed"
            value={selectedTech}
            onChange={setTechSelection}
            style={{ width: '100%' }}
        >
            {unselectedTechs.map(item => (
                <Select.Option key={item} value={item}>
                    {item}
                </Select.Option>
            ))}
        </Select>
        <label htmlFor="">Salary</label>
        <Radio.Group defaultValue="competitive" buttonStyle="solid">
            <Radio.Button value="below">Below average</Radio.Button>
            <Radio.Button value="average">Average</Radio.Button>
            <Radio.Button value="competitive">Competitive</Radio.Button>
            <Radio.Button value="international">International standard</Radio.Button>
        </Radio.Group>
        <label htmlFor="">Perks & Benefits</label>
        {/* TODO: add custom option feature */}
        <Select
            mode="multiple"
            placeholder="Inserted are removed"
            value={selectedBenefits}
            onChange={setBenefitsSelection}
            style={{ width: '100%' }}
        >
            {benefitOptions.map(item => (
                <Select.Option key={item} value={item}>
                    {item}
                </Select.Option>
            ))}
        </Select>
        <label htmlFor="">Industry Domain</label>
        {/* TODO: add custom option feature */}
        <Select
            mode="multiple"
            placeholder="Inserted are removed"
            value={selectedIndustries}
            onChange={setIndustriesSelection}
            style={{ width: '100%' }}
        >
            {industryOptions.map(item => (
                <Select.Option key={item} value={item}>
                    {item}
                </Select.Option>
            ))}
        </Select>
        <label htmlFor="">Management Style</label>
        <Radio.Group onChange={(e) => setManagementStyle(e.target.value)} value={managementStyle}>
            <Space direction="vertical">
                <Radio value={'startup'}>Startup</Radio>
                <Radio value={'corporate'}>Corporate</Radio>
            </Space>
        </Radio.Group>
        <label htmlFor="">How likely will you recommend?</label>
        <Rate tooltips={reviewParams} onChange={setReviewStar} value={reviewStar} />
    </div> );
}
 
export default AddComppany;