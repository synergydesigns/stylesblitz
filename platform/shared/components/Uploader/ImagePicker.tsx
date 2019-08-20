import React, { useState } from 'react'
import ImagePicker from 'antd-mobile/lib/image-picker'
import SegmentedControl from 'antd-mobile/lib/segmented-control'
import WingBlank from 'antd-mobile/lib/wing-blank'

const CustomImagePicker: React.FC = () => {
  const [files, setFiles] = useState([])
  const [multiple, setMultiple] = useState(true)

  const onChange = (files, type, index) => {
    setFiles(files)
  }

  const onSegmentChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex
    setMultiple(index === 1)
  }

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
}

export default CustomImagePicker