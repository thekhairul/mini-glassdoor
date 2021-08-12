import { Form, Select } from 'antd';
import { useState } from "react";
import { useAntDropdownRender } from './hooks';

const techOptions = ['NodeJs','Laravel','React','Vue','Typescript','MySQL','PostgreSQL','MongoDB'];

export default function CompanyTech() {
    const [techList, setTechList] = useState(techOptions);
    const [selectedTech, setTechSelection] = useState([]);
    const dropdownRender = useAntDropdownRender(setTechList);
    const unselectedTechs = techList.filter(tech => !selectedTech.includes(tech));

    return (
        <Form.Item label="Common Tech Used in Company" name="techStack" required>
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
        </Form.Item>
    )
}