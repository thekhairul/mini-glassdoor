import { Col, Row, Select } from 'antd';
import { useState } from "react";
import { useAntDropdownRender } from './hooks';

const techOptions = ['NodeJs','Laravel','React','Vue','Typescript','MySQL','PostgreSQL','MongoDB'];

export default function CompanyTech() {
    const [techList, setTechList] = useState(techOptions);
    const [selectedTech, setTechSelection] = useState([]);
    const dropdownRender = useAntDropdownRender(setTechList);
    const unselectedTechs = techList.filter(tech => !selectedTech.includes(tech));

    return (
        <Row justify="center">
            <Col flex="auto" lg={12}>
                <label className="label" htmlFor="">Common Tech Used in Company</label>
                <Select
                    mode="multiple"
                    placeholder="Inserted are removed"
                    value={selectedTech}
                    onChange={setTechSelection}
                    dropdownRender={dropdownRender}
                    style={{ width: '100%' }}
                >
                    {unselectedTechs.map((item, idx) => (
                        <Select.Option key={idx} value={item}>
                            {item}
                        </Select.Option>
                    ))}
                </Select>
            </Col>
        </Row>
    )
}