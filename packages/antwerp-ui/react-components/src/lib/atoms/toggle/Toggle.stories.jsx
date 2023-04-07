import { useState } from 'react';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Toggle from './Toggle';

export default {
  title: 'React/Atoms/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'A toggle button is a button that has two states and triggers another element which is not part of the toggle.'
      }
    }
  },
  args: {
    id: '',
    checked: false,
    showLabels: true,
    size: '',
    checkedLabel: 'Open',
    uncheckedLabel: 'Close',
    checkedIcon: 'navigation-menu',
    uncheckedIcon: 'close',
    checkedTheme: '',
    uncheckedTheme: 'danger'
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      description: 'ID for `Toggle` component.'
    },
    checked: {
      control: { type: 'boolean', disable: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Toggles between the two toggle states.'
    },
    showLabels: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description: 'Controls if labels are shown or not.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'small', 'large'],
      description: 'Sets the size of the component. Can be omitted for medium.'
    },
    checkedLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Text in checked state label.'
    },
    uncheckedLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Text in unchecked state label.'
    },
    checkedIcon: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['navigation-menu', 'single-neutral', 'social-media-snapchat', 'os-system-apple', 'love-it'],
      description: 'Icon in checked state.'
    },
    uncheckedIcon: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['close', 'mouse', 'list-bullets', 'os-system-apple', 'love-it'],
      description: 'Icon in unchecked state.'
    },
    checkedTheme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'primary', 'success', 'warning', 'danger'],
      description: 'Theme of the button in checked state.'
    },
    uncheckedTheme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'primary', 'success', 'warning', 'danger'],
      description: 'Theme of the button in unchecked state.'
    },
    onClick: {
      table: {
        type: { summary: 'function' }
      },
      description: 'Click handler, (checked: boolean) => void.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <Toggle
      {...args}
      onClick={(...params) => {
        args.onClick(...params);
        setChecked(...params);
      }}
      checked={checked}
    />
  );
};

export const toggle = Template.bind({});
