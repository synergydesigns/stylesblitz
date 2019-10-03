import React from 'react'
import { Button } from 'antd-mobile';

import { ButtonWrapper } from './ButtonStyles'
import { Gallery } from '../../icons'

interface Props {
  label: string,
  onClick?: () => null ,
  className: string,
  icon?: any,
}

const BaseButton: React.FC<Props> = ({ label, className, onClick, icon }) => {
  return <ButtonWrapper>
      <Button
        type="ghost"
        cla inline
        onClick={onClick}
        className={className}
        icon={icon}
      >
        {label}
      </Button>
    </ButtonWrapper>
}

export const ButtonFull: React.FC<Props> = ({ ...props }) => {
  return <BaseButton
    className={'button-full-no-icon'}
    {...props}
  />
}
export const ButtonFullIcon: React.FC<Props> = ({ icon, ...props }) => {
  return <BaseButton
    icon={<Gallery />}
    className={'button-full-icon'}
    {...props}
  />
}

export const FabCart: React.FC<Props> = ({ icon, ...props }) => {
  return <BaseButton
    icon={<Gallery />}
    className={'fab-cart'}
    {...props}
  />
}

export const ButtonWidePry: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'button-wide-primary'}
    {...props}
  />
}

export const ButtonMidPry: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'button-mid-primary'}
    {...props}
  />
}

export const ButtonMidSec: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'button-mid-secondary'}
    {...props}
  />
}

export const ButtonMidWhite: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'button-mid-white'}
    {...props}
  />
}

export const TagCyan: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'tag-cyan'}
    {...props}
  />
}

export const TagOrange: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'tag-orange'}
    {...props}
  />
}

export const TagMagenta: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'tag-magenta'}
    {...props}
  />
}

export const TagGreen: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'tag-green'}
    {...props}
  />
}

export const TagRed: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'tag-red'}
    {...props}
  />
}

export const TagSquare: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'tag-square'}
    {...props}
  />
}

export const TagMid: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'tag-mid'}
    {...props}
  />
}

export const TagBlue: React.FC<Props> = ({...props }) => {
  return <BaseButton
    className={'tag-blue'}
    {...props}
  />
}


export default BaseButton;
