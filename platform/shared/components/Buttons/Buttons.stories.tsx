import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-native';

import { 
 ButtonFull, 
 ButtonFullIcon, 
 FabCart, 
 ButtonWidePry, 
 ButtonMidPry, 
 ButtonMidSec, 
 ButtonMidWhite, 
 TagCyan, 
 TagOrange, 
 TagMagenta, 
 TagGreen, 
 TagRed,
 TagSquare, 
 TagBlue,
 TagMid
} from './button'
import { Tag } from 'antd-mobile';

storiesOf('Shared|Buttons/Button', module)
 .add('button-full-no-icon', () => <ButtonFull label="Label"/>)
 .add('button-full-icon', () => <ButtonFullIcon label="Label"/>)
 .add('fab-cart', () => <FabCart label="5"/>)
 .add('button-wide-pry', () => <ButtonWidePry label="Label"/>)
 .add('button-mid-pry', () => <ButtonMidPry label="Label"/>)
 .add('button-mid-sec', () => <ButtonMidSec label="Label"/>)
 .add('button-mid-white', () => <ButtonMidWhite label="Label"/>)
 .add('tag-cyan', () => <TagCyan label="Label"/>)
 .add('tag-orange', () => <TagOrange label="Label"/>)
 .add('tag-magenta', () => <TagMagenta label="Label"/>)
 .add('tag-green', () => <TagGreen label="Label"/>)
 .add('tag-red', () => <TagRed label="Label"/>)
 .add('tag-square', () => <TagSquare label="NEW"/>)
 .add('tag-blue', () => <TagBlue label="Label"/>)
 .add('tag-mid', () => <TagMid label="Label"/>)
