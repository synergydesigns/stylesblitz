import React, { useState } from 'react';
import ImagePicker from 'antd-mobile/lib/image-picker';
import WingBlank from 'antd-mobile/lib/wing-blank';

const CustomImagePicker: React.FC = () => {
  const [files, setFiles] = useState([]);
  const [multiple] = useState(true);

  const onChange = (loadedFiles) => {
    setFiles(loadedFiles);
  };

  return (
    <WingBlank>
      <ImagePicker
        files={files}
        onChange={onChange}
        selectable={files.length < 7}
        multiple={multiple}
      />
    </WingBlank>
  );
};

export default CustomImagePicker;
