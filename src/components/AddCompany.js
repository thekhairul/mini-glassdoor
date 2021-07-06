import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Input, Radio } from 'antd';
const { TextArea } = Input;

const AddComppany = () => {
    return ( <div id="add-company" className="add-company">
        <Input size="large" placeholder="Company Name" prefix={<UserOutlined />} />
        <DatePicker size="large" picker="year" placeholder="Year of Establishment"/>
        <TextArea placeholder="Company Address" allowClear prefix={<HomeOutlined />}/>
        <Input size="large" placeholder="Company website" prefix={<GlobalOutlined />} />
        <Radio.Group defaultValue="competitive" buttonStyle="solid">
            <Radio.Button value="below">Below Avarage</Radio.Button>
            <Radio.Button value="avarage">Avarage</Radio.Button>
            <Radio.Button value="competitive">Competitive</Radio.Button>
            <Radio.Button value="international">International Standard</Radio.Button>
        </Radio.Group>
    </div> );
}
 
export default AddComppany;