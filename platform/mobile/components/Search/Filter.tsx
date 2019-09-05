import React, { useState } from 'react'
import AutoComplete from 'antd/lib/auto-complete'
import Input from 'antd/lib/input'
import Icon from 'antd/lib/icon'
import TimePicker from 'antd/lib/time-picker'
import DatePicker from 'antd/lib/date-picker'
import moment from 'moment'


import Location from '../../../shared/icons/Location'
import {
  Button,
  DrawerWrapper,
  FilterSearchWrapper,
  DateTimePickerWrapper
} from './SearchStyle'

const services = {
  itemWidth: 270,
  itemHeight: 250,
  headerText: 'popular services',
  itemsCount: null,
  marginTop: 44,
  showBorder: false,
  items: [
    {
      name: 'nail polish',
      subHeader: '32 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
    {
      name: 'facial treatment',
      subHeader: '11 vendors',
      image: '/static/images/thumbnail/nails.jpg'
    },
    {
      name: 'madonna spa',
      subHeader: '67 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
    {
      name: 'massage',
      subHeader: '30 vendors',
      image: '/static/images/thumbnail/nails.jpg'
    },
    {
      name: 'hair grooming',
      subHeader: '18 vendors',
      image: '/static/images/thumbnail/cream.jpg'
    },
  ]
}

const searchResultMock = {
  items: [
    {
      price: 7890,
      name: 'nail polish',
      image: '/static/images/thumbnail/cream.jpg',
      rating: 4
    },
    {
      price: 2790,
      name: 'facial treatment',
      image: '/static/images/thumbnail/nails.jpg',
      rating: 5
      
    },
    {
      price: 890,
      name: 'madonna spa',
      image: '/static/images/thumbnail/cream.jpg',
      rating: 4
    },
    {
      price: 17890,
      name: 'massage',
      image: '/static/images/thumbnail/nails.jpg',
      rating: 1
    },
    {
      price: 9200,
      name: 'hair grooming',
      image: '/static/images/thumbnail/cream.jpg',
      rating: 3.5
    },
  ]
}

interface ICalendar {
  visible: boolean
  startValue?: moment.Moment
  endValue?: moment.Moment
}

interface Props {
  openDrawer?: boolean
  setOpenDrawer(value: boolean): void
}

const Filter: React.FC<Props> = (props) => {
  const data: string[] = []
  const result: { price: number; name: string; image: string; rating: number; }[] = []
  const calendarItem: ICalendar = { visible: false }
  const [ dataSource, setDataSource ] = useState(data)
  const [ searchResult, setSearchResult ] = useState(result)
  const [ calenderData, setCalendarData ] = useState(calendarItem)

  const handleSearch = (value: string) => {
    setDataSource(searchResultMock.items.filter((item) => item.name.includes(value)).map(item => item.name))

    setSearchResult(searchResultMock.items.filter((item) => item.name.includes(value)))
  }

  const onSelected = (value: any) => {
    setSearchResult(searchResultMock.items.filter((item) => item.name.includes(value)))
  }

  const disabledStartDate = startValue => {
    const { endValue } = calenderData
    if (!startValue || !endValue) {
      return false
    }
    return startValue.valueOf() > endValue.valueOf()
  }

  const disabledEndDate = endValue => {
    const { startValue } = calenderData
    if (!endValue || !startValue) {
      return false
    }
    return endValue.valueOf() <= startValue.valueOf()
  }

  const onChange = (field, value) => {
    setCalendarData({ ...calenderData, [field]: value, visible: false })
  }

  const onStartChange = value => {
    onChange('startValue', value)
  }

  const onEndChange = value => {
    onChange('endValue', value)
  }

  const handleStartOpenChange = open => {
    if (!open) {
      setCalendarData({ ...calenderData, visible: true })
    }
  }

  const handleEndOpenChange = open => {
    setCalendarData({ ...calenderData, visible: open })
  }

  return (
    <DrawerWrapper title="Filter"
      width={300}
      style={{ height: 590, padding: 0 }}
      placement="right"
      closable={true}
      onClose={() => props.setOpenDrawer(false)}
      visible={props.openDrawer}
      className="style-drawer">
        <div style={{ marginLeft: '17px', marginTop: '20px' }}><Location fill="#505050" /> Location</div>
        <FilterSearchWrapper>
          <AutoComplete
            className="auto-complete"
            dataSource={dataSource}
            onSearch={handleSearch}
            allowClear={true}
            onSelect={onSelected}
          >
            <Input
              placeholder="Filter by area, city or state"
            />
          </AutoComplete>
        </FilterSearchWrapper>
        <DateTimePickerWrapper>
          <div onClick={() => setCalendarData({ ...calendarItem, visible: true })}><Icon type="calendar" /> Date</div>
          <DatePicker
            style={{ width: '47%' }}
            disabledDate={disabledStartDate}
            format="DD/MM/YY"
            value={calenderData.startValue}
            placeholder="Start"
            onChange={onStartChange}
            onOpenChange={handleStartOpenChange}
            allowClear={false}
          />
          <DatePicker
            style={{ width: '47%' }}
            disabledDate={disabledEndDate}
            format="DD/MM/YY"
            value={calenderData.endValue}
            placeholder="End"
            onChange={onEndChange}
            open={calenderData.visible}
            onOpenChange={handleEndOpenChange}
            allowClear={false}
          />
        </DateTimePickerWrapper>

        <DateTimePickerWrapper>
          <div><Icon type="clock-circle" /> Time</div>
          <TimePicker use12Hours format="h:mm a" onChange={() => {}} />
        </DateTimePickerWrapper>

        <Button onClick={() => props.setOpenDrawer(false)}>Apply</Button>
    </DrawerWrapper>
  )
}

export default Filter
