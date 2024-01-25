import React from 'react'
import { Switch as AntdSwitch } from 'antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { SwitchSchema } from './schema'
import { SwitchLocal } from './local'
// import { AllSchemas } from '../../schemas'
// import { AllLocales } from '../../locales'

export const Switch: DnFC<React.ComponentProps<typeof AntdSwitch>> = AntdSwitch

Switch.Behavior = createBehavior({
  name: 'Switch',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Switch',
  designerProps: {
    // propsSchema: createFieldSchema(AllSchemas.Switch),
    propsSchema: createFieldSchema(SwitchSchema),
  },
  // designerLocales: AllLocales.Switch,
  designerLocales: SwitchLocal,
})

Switch.Resource = createResource({
  icon: 'SwitchSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'boolean',
        title: 'Switch',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
      },
    },
  ],
})
