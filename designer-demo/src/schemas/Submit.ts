import { ISchema } from '@formily/react'

export const Submit: ISchema = {
  type: 'object',
  properties: {
    children: {
      type: 'String',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
