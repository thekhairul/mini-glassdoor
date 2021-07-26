import { Col, Row, Select } from 'antd';
import { useState } from "react";

const benefitOptions = ['5 days work week', '2 festival bonus', 'Yearly salary review', 'Profit share', 'Gratuity', 'Subsidized lunch & snacks', '21 days yearly paid leave'];

export default function CompanyBenefit() {
    const [selectedBenefits, setBenefitsSelection] = useState([]);

    return (
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Perks & Benefits</label>
                {/* TODO: add custom option feature */}
                <Select
                    mode="multiple"
                    placeholder="Pick or add benefits"
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
            </Col>
        </Row>
    )
}