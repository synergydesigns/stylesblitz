import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Button } from '../Button'
import ProviderSnippet from './ProviderSnippet'
import { 
  FeaturedServiceWrapper, 
  ImageWrapper,
  KeyValue
} from './Styles'

class FeaturedService extends Component {
  panels = [
    ...Array(2).fill(1).map(() => ({
      header: 'Thai Royal Orchid Massage 2',
      description: ` when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting`,
      time: '60',
      price: '60',
      image: '/static/images/jamakassi-364678-unsplash.jpg',
      location: '>Maryland lagos',
      provider: {
        name: 'Givency saloon',
        location: 'Victoria Island, lagos'
      }
    })),
    {
      header: 'Dewee enroyale d’suis 3 piece suit',
      description: ` when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting`,
      time: '60',
      price: '60',
      image: '/static/images/toa-heftiba-578099-unsplash.jpg',
      location: '>Maryland lagos',
      provider: {
        name: 'Dewee Fashion house',
        location: 'Victoria Island, lagos'
      }
    }
  ]

  render () {
    return (
      <FeaturedServiceWrapper>
        <Tabs>
          {
            this.panels.map((panel, index) => (
              <TabPanel key={index}>
                <div className="feature-service-panel">
                  <ImageWrapper
                    width="600px" 
                    height="400px" 
                    image={panel.image}
                    borderRadius="5px" />
                  <section>
                    <ProviderSnippet
                      className="provider-snippet"
                      image={panel.image}
                      provider={panel.provider.name}
                      location={panel.provider.location} />
                    <h2> { panel.header } </h2>
                    <p className="featured-description">{ panel.description}</p>
                    <KeyValue >
                      <h1>Time:</h1>
                      <p>{ panel.time }</p>
                    </KeyValue>
                    <KeyValue >
                      <h1>Duration:</h1>
                      <p>{ panel.price }</p>
                    </KeyValue>
                    <Button 
                      text='Book Now' 
                      width='150px' 
                      height='50px' 
                      style={{ 
                        boxShadow: '0 5px 30px 2px rgba(0,0,0,0.22)',
                        marginTop: '20px'
                      }} />
                  </section>
                </div>
              </TabPanel>
            ))
          }
          <TabList>
            {this.panels.map((panel, index) => <Tab key={index}>{++index}</Tab>)}
          </TabList>
        </Tabs>
      </FeaturedServiceWrapper>
    )
  }
}

export default FeaturedService

