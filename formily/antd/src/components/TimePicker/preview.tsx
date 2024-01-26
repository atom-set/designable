import React from 'react'
import { TimePicker as FormilyTimePicker } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { TimePickerSchema } from './schema'
import { TimePickerLocales, TimeRangePickerLocales } from './locales'
// import { AllSchemas } from '../../schemas'
// import { AllLocales } from '../../locales'

export const TimePicker: DnFC<React.ComponentProps<typeof FormilyTimePicker>> =
  FormilyTimePicker

TimePicker.Behavior = createBehavior(
  {
    name: 'TimePicker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'TimePicker',
    designerProps: {
      // propsSchema: createFieldSchema(AllSchemas.TimePicker),
      propsSchema: createFieldSchema(TimePickerSchema),
    },
    // designerLocales: AllLocales.TimePicker,
    designerLocales: TimePickerLocales,
  },
  {
    name: 'TimePicker.RangePicker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'TimePicker.RangePicker',
    designerProps: {
      // propsSchema: createFieldSchema(AllSchemas.TimePicker.RangePicker),
      propsSchema: createFieldSchema(TimePickerSchema.RangePicker),
    },
    // designerLocales: AllLocales.TimeRangePicker,
    designerLocales: TimeRangePickerLocales,
  }
)

TimePicker.Resource = createResource(
  {
    icon: 'TimePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'TimePicker',
          'x-decorator': 'FormItem',
          'x-component': 'TimePicker',
        },
      },
    ],
  },
  {
    icon: 'TimeRangePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string[]',
          title: 'TimeRangePicker',
          'x-decorator': 'FormItem',
          'x-component': 'TimePicker.RangePicker',
        },
      },
    ],
  }
)
