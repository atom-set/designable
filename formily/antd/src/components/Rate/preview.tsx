import React from 'react'
import { Rate as AntdRate } from 'antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { RateLocal } from './local'
import { RateSchema } from './schema'
// import { AllSchemas } from '../../schemas'
// import { AllLocales } from '../../locales'

export const Rate: DnFC<React.ComponentProps<typeof AntdRate>> = AntdRate

Rate.Behavior = createBehavior({
  name: 'Rate',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Rate',
  designerProps: {
    // propsSchema: createFieldSchema(AllSchemas.Rate),
    propsSchema: createFieldSchema(RateSchema),
  },
  // designerLocales: AllLocales.Rate,
  designerLocales: RateLocal,
})

Rate.Resource = createResource({
  icon: 'RateSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'number',
        title: 'Rate',
        'x-decorator': 'FormItem',
        'x-component': 'Rate',
      },
    },
  ],
})
