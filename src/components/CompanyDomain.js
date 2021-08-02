import { Col, Row, Select } from 'antd';
import { useState } from "react";
import { useAntDropdownRender } from './hooks';

const industryOptions = ['Banking and Finance','Health and Medicine','Media & Marketing','Education'];

export default function CompanyDomain() {
    const [industryList, setIndustryList] = useState(industryOptions);
    const [selectedIndustries, setIndustriesSelection] = useState([]);
    const dropdownRender = useAntDropdownRender(setIndustryList);

    return (
        <Row justify="center">
            <Col flex="auto" lg={24}>
                <label className="label" htmlFor="">Industry Domain</label>
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
            </Col>
        </Row>
    )
}