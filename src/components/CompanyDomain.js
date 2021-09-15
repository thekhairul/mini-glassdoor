import { Form, Select } from 'antd';
import { useState } from "react";
import { useAntDropdownRender } from './hooks';

const industryOptions = ['Banking and Finance','Health and Medicine','Media & Marketing','Education','Miscllaneous'];

export default function CompanyDomain() {
    const [industryList, setIndustryList] = useState(industryOptions);
    const [selectedIndustries, setIndustriesSelection] = useState([]);
    const dropdownRender = useAntDropdownRender(setIndustryList);

    return (
        <Form.Item label="Industry Domain" name="industries" rules={[{ required: true, message: 'Please select industry domain for this company' }]}>
            <Select
                mode="multiple"
                placeholder="Pick one or multiple domain"
                value={selectedIndustries}
                onChange={setIndustriesSelection}
                dropdownRender={dropdownRender}
                style={{ width: '100%' }}
            >
                {industryList.map((item,idx) => (
                    <Select.Option key={idx} value={item}>
                        {item}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    )
}