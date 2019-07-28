import React, { SF, useState } from 'react'
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile'

const CustomImagePicker: React.SF = () => {
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