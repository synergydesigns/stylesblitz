import React, { useState } from 'react'
import AutoComplete from 'antd/lib/auto-complete'
import Input from 'antd/lib/input'
import Rate from 'antd/lib/rate'
import Modal from 'antd-mobile/lib/modal'
import List from 'antd-mobile/lib/list'
import MobileIcon from 'antd-mobile/lib/icon'
import Router from 'next/router'

import Filter from './Filter'
import Arrow from '../../../shared/icons/Arrow'
import Chevron from '../../../shared/icons/Chevron'
import CarouselList from '../ListItems/CarouselList'
import {
  FilterSort,
  RecentSearchWrapper,
  SearchResultWrapper,
  SearchWrapper
} from './SearchStyle'

const Item = List.Item;
const sortList = [
  { key: 'Recommeded', active: true },
  { key: 'Higest Rating', active: false },
  { key: 'Lowest Price', active: false },
  { key: 'Higest Price', active: false },
  { key: 'Newly Added', active: false }
]
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

const recentSearch = ['Acrylic Nail Fixing', 'Wig']
interface ICalendar {
  visible: boolean;
  startTime?: string;
  endTime?: string;
}

const Search: React.FC = () => {
  const data: string[] = []
  const result: { price: number; name: string; image: string; rating: number; }[] = []
  const [ dataSource, setDataSource ] = useState(data)
  const [ searchResult, setSearchResult ] = useState(result)
  const [ visible, setVisible ] = useState(false)
  const [ openDrawer, setOpenDrawer ] = useState(false)
  const [ sortListData, setSortListData ] = useState(sortList)

  const handleSearch = (value: string) => {
    setDataSource(searchResultMock.items.filter((item) => item.name.includes(value)).map(item => item.name))

    setSearchResult(searchResultMock.items.filter((item) => item.name.includes(value)))
  }

  const onSelected = (value: any) => {
    setSearchResult(searchResultMock.items.filter((item) => item.name.includes(value)))
  }

  const showModal = () => setVisible(true)

  const showDrawer = () => setOpenDrawer(true)

  const recentSearchList = recentSearch.map((s, i) => <li key={i}>{s}</li>)

  return (
    <>
      <SearchWrapper>
        <AutoComplete
          className="auto-complete"
          dataSource={dataSource}
          onSearch={handleSearch}
          allowClear={true}
          onSelect={onSelected}
        >
          <Input
            placeholder="Search Service"
            prefix={
              <div style={{ height: "15px" }} onClick={() => Router.back()}>
                <Arrow fill="#505050" />
              </div>
            }
          />
        </AutoComplete>
      </SearchWrapper>
      {searchResult.length ?
        <>
          <FilterSort>
            <div>
              <span onClick={showDrawer}>Filter</span>
              <span />
              <span onClick={showModal}>
                Sort<div><Chevron /></div>
              </span>
            </div>
            <div>{searchResult.length} Services Found</div>
          </FilterSort>
          <Modal
            visible={visible}
            transparent
            maskClosable={false}
            onClose={() => setVisible(false)}
            footer={[]}
            closable={true}
          >
            <div style={{ overflow: 'scroll' }}>
              <div>
                <List>
                  {
                    sortListData.map((s, i) => (
                      <Item style={{ border: 'none' }} key={s.key} thumb={s.active && <MobileIcon style={{ marginTop: '7px', color: '#E0115F' }} type='check' />} onClick={() => {
                        const data = sortListData.map(item => ({ ...item, active: false }))
                        data[i].active = true
                        setSortListData(data)
                      }}>
                        <span style={{ marginLeft: !s.active && '38px', fontSize: '14px', color: '#505050' }}>{s.key}</span>
                      </Item>)
                    )
                  }
                </List>
              </div>
            </div>
          </Modal>
          <Filter openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          <SearchResultWrapper>
            {
              searchResult.map(({image, name, price, rating}, index) => (
                <div className="search-item" key={name}>
                  <img src={image} width={152} height={159} key={index} />
                  <p className="price">N {price}</p>
                  <p className="title">{name}</p>
                  <Rate disabled defaultValue={rating} allowHalf={true} />
                </div>
              ))
            }
          </SearchResultWrapper>
        </> :
        <>
          <RecentSearchWrapper>
            <h2>Recent Search</h2>
            <ul>
              {recentSearchList}
            </ul>
          </RecentSearchWrapper>
          <CarouselList { ...services } />
        </>
      }
    </>
  )
}

export default Search
