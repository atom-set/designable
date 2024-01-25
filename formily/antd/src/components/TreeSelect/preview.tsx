import React from 'react'
import { TreeSelect as FormilyTreeSelect } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { TreeSelectSchema } from './schema'
import { TreeSelectLocal } from './local'
// import { AllSchemas } from '../../schemas'
// import { AllLocales } from '../../locales'

export const TreeSelect: DnFC<React.ComponentProps<typeof FormilyTreeSelect>> =
  FormilyTreeSelect

TreeSelect.Behavior = createBehavior({
  name: 'TreeSelect',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'TreeSelect',
  designerProps: {
    // propsSchema: createFieldSchema(AllSchemas.TreeSelect),
    propsSchema: createFieldSchema(TreeSelectSchema),
  },
  // designerLocales: AllLocales.TreeSelect,
  designerLocales: TreeSelectLocal,
})

TreeSelect.Resource = createResource({
  icon: 'TreeSelectSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'TreeSelect',
        'x-decorator': 'FormItem',
        'x-component': 'TreeSelect',
      },
    },
  ],
})
