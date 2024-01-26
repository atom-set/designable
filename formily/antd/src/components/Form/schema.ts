import { ISchema } from '@formily/react'
import { CSSStyle, FormLayout } from '../Base/schema'

export const FormSchema: ISchema = {
  type: 'object',
  properties: {
    ...(FormLayout.properties as any),
    style: CSSStyle,
  },
}
