import React, { useState } from 'react'
import { AutoComplete, Input, Rate } from 'antd'
import Router from 'next/router'

import Layout from './layout'
import Arrow from '../../shared/icons/Arrow'
import Chevron from '../../shared/icons/Chevron'
import CarouselList from '../components/ListItems/CarouselList'
import { FilterSort, RecentSearchWrapper, SearchResultWrapper, SearchWrapper } from '../components/Search/SearchStyle'

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

const recentSearch = ['Acrylic Nail Fixing', 'Wig'];


const Search: React.FC = () => {
  const data: string[] = []
  const result: { price: number; name: string; image: string; rating: number; }[] = []
  const [ dataSource, setDataSource ] = useState(data)
  const [ searchResult, setSearchResult ] = useState(result)

  const handleSearch = (value: string) => {
    setDataSource(searchResultMock.items.filter((item) => item.name.includes(value)).map(item => item.name))
    setSearchResult(searchResultMock.items.filter((item) => item.name.includes(value)))
  };
  const onSelected = (value: any) => {
    setSearchResult(searchResultMock.items.filter((item) => item.name.includes(value)))
  };
  const recentSearchList = recentSearch.map((s, i) => <li key={i}>{s}</li>);

  return (<>
    <Layout showHeader={false} showFooter={false} showNav={true}>
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
              <Arrow fill="#505050" style={{ marginRight: -12 }} onClick={() => Router.back()}/>
            }
          />
        </AutoComplete>
      </SearchWrapper>
      {searchResult.length ?
        <>
          <FilterSort>
            <div>
              <span>Filter</span>
              <span />
              <span>
                Sort<div><Chevron /></div>
              </span>
            </div>
            <div>{searchResult.length} Services Found</div>
          </FilterSort>
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
          </SearchResultWrapper> :
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
    </Layout>
  </>)
}

export default Search
