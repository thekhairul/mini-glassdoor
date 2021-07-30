import { Col, Row, Select } from 'antd';
import { useState } from "react";
import { useAntDropdownRender } from './hooks';

const benefitOptions = ['5 days work week', '2 festival bonus', 'Yearly salary review', 'Profit share', 'Gratuity', 'Subsidized lunch & snacks', '21 days yearly paid leave'];

export default function CompanyBenefit() {
    const [benefitList, setBenifitList] = useState(benefitOptions);
    const [selectedBenefits, setBenefitsSelection] = useState([]);
    const dropdownRender = useAntDropdownRender(setBenifitList);

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
                    dropdownRender={dropdownRender}
                    style={{ width: '100%' }}
                >
                    {benefitList.map((item, idx) => (
                        <Select.Option key={idx} value={item}>
                            {item}
                        </Select.Option>
                    ))}
                </Select>
            </Col>
        </Row>
    )
}