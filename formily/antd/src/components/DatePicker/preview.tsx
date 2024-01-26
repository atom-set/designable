import React from 'react'
import { DatePicker as FormilyDatePicker } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { DatePickerSchema } from './schema'
import { DatePickerLocal, DateRangePickerLocal } from './locales'
// import { AllSchemas } from '../../schemas'
// import { AllLocales } from '../../locales'

export const DatePicker: DnFC<React.ComponentProps<typeof FormilyDatePicker>> =
  FormilyDatePicker

DatePicker.Behavior = createBehavior(
  {
    name: 'DatePicker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'DatePicker',
    designerProps: {
      // propsSchema: createFieldSchema(AllSchemas.DatePicker),
      propsSchema: createFieldSchema(DatePickerSchema),
    },
    // designerLocales: AllLocales.DatePicker,
    designerLocales: DatePickerLocal,
  },
  {
    name: 'DatePicker.RangePicker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'DatePicker.RangePicker',
    designerProps: {
      // propsSchema: createFieldSchema(AllSchemas.DatePicker.RangePicker),
      propsSchema: createFieldSchema(DatePickerSchema.RangePicker),
    },
    // designerLocales: AllLocales.DateRangePicker,
    designerLocales: DateRangePickerLocal,
  }
)

DatePicker.Resource = createResource(
  {
    icon: 'DatePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'DatePicker',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
        },
      },
    ],
  },
  {
    icon: 'DateRangePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string[]',
          title: 'DateRangePicker',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker.RangePicker',
        },
      },
    ],
  }
)
