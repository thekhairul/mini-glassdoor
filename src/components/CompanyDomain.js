import { Col, Row, Select } from 'antd';
import { useState } from "react";

const industryOptions = ['Banking and Finance','Health and Medicine','Media & Marketing','Education'];

export default function CompanyDomain() {
    const [selectedIndustries, setIndustriesSelection] = useState([]);

    return (
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Industry Domain</label>
                {/* TODO: add custom option feature */}
                <Select
                    mode="multiple"
                    placeholder="Pick one or multiple domain"
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
            </Col>
        </Row>
    )
}