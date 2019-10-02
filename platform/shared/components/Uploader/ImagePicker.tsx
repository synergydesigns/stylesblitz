import React, { useState } from 'react';
import { WingBlank, ImagePicker } from 'antd-mobile';

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
