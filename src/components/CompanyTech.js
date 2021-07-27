import { PlusOutlined } from '@ant-design/icons';
import { Col, Divider, Input, Row, Select } from 'antd';
import { useState } from "react";

const techOptions = ['NodeJs','Laravel','React','Vue','Typescript','MySQL','PostgreSQL','MongoDB'];

export default function CompanyTech() {
    const [techList, setTechList] = useState(techOptions);
    const [selectedTech, setTechSelection] = useState([]);
    const [customOption, setCustomOption] = useState('');
    const unselectedTechs = techList.filter(tech => !selectedTech.includes(tech));
    const addCustomOption = (e) => {
        if (e.code !== 'Enter' || !customOption) return;
        setTechList(currentTechs => ([...currentTechs, customOption]));
        setCustomOption('');
    }

    const dropdownRender = menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
              <Input style={{ flex: 'auto' }} value={customOption} onChange={(e) => setCustomOption(e.target.value)} onKeyDown={addCustomOption}/>
              <a
                style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                onClick={addCustomOption}
              >
                <PlusOutlined /> Add item
              </a>
            </div>
          </div>
        );

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