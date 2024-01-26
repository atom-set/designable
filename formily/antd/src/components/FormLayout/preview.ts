import React from 'react'
import { FormLayout as FormilyFormLayout } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { withContainer } from '../../common/Container'
import { createVoidFieldSchema } from '../Field'
import { FormLayoutLocales } from './locales'
import { FormLayoutSchema } from './schema'
// import { AllSchemas } from '../../schemas'
// import { AllLocales } from '../../locales'

export const FormLayout: DnFC<React.ComponentProps<typeof FormilyFormLayout>> =
  withContainer(FormilyFormLayout)

FormLayout.Behavior = createBehavior({
  name: 'FormLayout',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'FormLayout',
  designerProps: {
    droppable: true,
    // propsSchema: createVoidFieldSchema(AllSchemas.FormLayout),
    propsSchema: createVoidFieldSchema(FormLayoutSchema),
  },
  // designerLocales: AllLocales.FormLayout,
  designerLocales: FormLayoutLocales,
})

FormLayout.Resource = createResource({
  icon: 'FormLayoutSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'FormLayout',
      },
    },
  ],
})
