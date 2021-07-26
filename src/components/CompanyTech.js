import { Col, Row, Select } from 'antd';
import { useState } from "react";

const techOptions = ['NodeJs','Laravel','React','Vue','Typescript','MySQL','PostgreSQL','MongoDB'];

export default function CompanyTech() {
    const [selectedTech, setTechSelection] = useState([]);
    const unselectedTechs = techOptions.filter(tech => !selectedTech.includes(tech));

    return (
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Common Tech Used in Company</label>
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
            </Col>
        </Row>
    )
}