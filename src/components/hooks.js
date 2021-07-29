import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input } from 'antd';
import { useState } from "react";

export function useAntDropdownRender(updateRootOptions) {
    const [customOption, setCustomOption] = useState('');

    const addCustomOption = (e) => {
        if (customOption && (e.code === 'Enter' || e.type === 'click')) {
            e.preventDefault();
            e.stopPropagation();
            updateRootOptions(currentOptions => ([customOption,...currentOptions]));
            setCustomOption('');
        }
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
    
    return dropdownRender;
}