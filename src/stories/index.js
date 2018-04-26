import { storiesOf } from '@storybook/vue'

import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

import Button from '../renderer/components/atoms/Button.vue'

storiesOf('Usage button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('default', withNotes(
    `
      sizeとcolorはここにあるやつを使ってください
      size: minimum, small, normal, large, full
      color: default, primary, success, info, warning, danger, dark
    `
  )(() => {
    const ButtonText = text('text', 'default')
    const sizeOptions = {
      minimum: 'minimum',
      small: 'small',
      normal: 'normal',
      large: 'large',
      full: 'full'
    }
    const size = select('size', sizeOptions, 'normal')

    const colorOptions = {
      default: 'default',
      primary: 'primary',
      success: 'success',
      info: 'info',
      warning: 'warning',
      danger: 'danger',
      dark: 'dark'
    }
    const color = select('color', colorOptions, 'default')
    return {
      components: { Button },
      template: `<Button text="${ButtonText}" size="${size}" kind="${color}" />`
    }
  }))
