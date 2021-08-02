import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Tooltip } from 'antd';
import { useState } from 'react';
import './App.less';
import AddCompany from './components/AddCompany';

function App() {
  const [isDrawerOpen, setDrawer] = useState(false);
  return (
    <div className="App">
      <Drawer title="Create a new company"
          width={720}
          onClose={() => setDrawer(false)}
          visible={isDrawerOpen}
          bodyStyle={{ paddingBottom: 80 }}>
        <AddCompany />
      </Drawer>
      <Tooltip title="Add a company">
        <Button className="add-company-btn" type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={() => setDrawer(true)}/>
      </Tooltip>
    </div>
  );
}

export default App;
