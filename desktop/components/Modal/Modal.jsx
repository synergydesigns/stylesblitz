
import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import { ModalWrapper, ModalOverlay, ModalBody } from './Styles'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div')
    this.modalRoot = {}
  }

  componentDidMount() {
    this.modalRoot = document.getElementById('modal')
    
    if (!this.modalRoot) {
      const div = document.createElement('div')
      div.setAttribute('id', 'modal')
      document.body.appendChild(div)
    
      this.modalRoot = document.getElementById('modal')
    }

    this.modalRoot.appendChild(this.el)
  }

  componentWillUnmount = () => this.modalRoot.removeChild(this.el)

  render() {
    return createPortal(
      <ModalWrapper>
        <ModalOverlay />
        <ModalBody>
          <span onClick={this.props.onHandleClick} />
          { this.props.children }
        </ModalBody>
      </ModalWrapper>,
      this.el
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onHandleClick: PropTypes.func
}

export default Modal
