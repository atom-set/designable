import React from 'react'
import { NumberPicker as FormilyNumberPicker } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { NumberPickerLocal } from './local'
import { NumberPickerSchema } from './schema'
// import { AllSchemas } from '../../schemas'
// import { AllLocales } from '../../locales'

export const NumberPicker: DnFC<
  React.ComponentProps<typeof FormilyNumberPicker>
> = FormilyNumberPicker

NumberPicker.Behavior = createBehavior({
  name: 'NumberPicker',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'NumberPicker',
  designerProps: {
    // propsSchema: createFieldSchema(AllSchemas.NumberPicker),
    propsSchema: createFieldSchema(NumberPickerSchema),
  },
  // designerLocales: AllLocales.NumberPicker,
  designerLocales: NumberPickerLocal,
})

NumberPicker.Resource = createResource({
  icon: 'NumberPickerSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'number',
        title: 'NumberPicker',
        'x-decorator': 'FormItem',
        'x-component': 'NumberPicker',
      },
    },
  ],
})
