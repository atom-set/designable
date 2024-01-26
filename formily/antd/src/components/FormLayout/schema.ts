import { ISchema } from '@formily/react'
import { FormLayout } from '../Base/schema'

export const FormLayoutSchema: ISchema = {
  type: 'object',
  properties: {
    ...(FormLayout.properties as any),
  },
}
