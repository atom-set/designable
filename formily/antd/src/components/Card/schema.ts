import { ISchema } from '@formily/react'
import { Card } from '../Base/schema'

export const CardSchema: ISchema & { Addition?: ISchema } = Card
