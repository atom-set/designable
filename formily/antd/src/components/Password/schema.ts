import { ISchema } from '@formily/react'
import { InputSchema } from '../Base/schema'

export const PasswordSchema: ISchema = {
  type: 'object',
  properties: {
    ...(InputSchema.properties as any),
    checkStrength: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
