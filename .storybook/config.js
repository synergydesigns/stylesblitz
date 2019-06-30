import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// automatically import all files ending in *.stories.js
const req = require.context('../platform', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const viewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({ viewport: { ...INITIAL_VIEWPORTS, ...viewports } });
configure(loadStories, module);

