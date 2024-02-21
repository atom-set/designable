import React, { Fragment } from 'react'
import { isStr, isPlainObj, sendLog } from '@designable/shared'
import { GlobalRegistry, IDesignerMiniLocales } from '@designable/core'
import { observer } from '@formily/reactive-react'

export interface ITextWidgetProps {
  componentName?: string
  sourceName?: string
  token?: string | IDesignerMiniLocales
  defaultMessage?: string | IDesignerMiniLocales
}

export const TextWidget: React.FC<ITextWidgetProps> = observer((props) => {
  const takeLocale = (
    message: string | IDesignerMiniLocales
  ): React.ReactNode => {
    if (isStr(message)) return message
    if (isPlainObj(message)) {
      const lang = GlobalRegistry.getDesignerLanguage()
      for (let key in message) {
        if (key.toLocaleLowerCase() === lang) return message[key]
      }
      return
    }
    return message
  }
  const takeMessage = (token: any) => {
    if (!token) return
    const message = isStr(token)
      ? GlobalRegistry.getDesignerMessage(token)
      : token

    sendLog(
      false,
      '2024-01-09 TextWidget takeMessage:',
      isStr(token),
      GlobalRegistry.getDesignerMessage(token)
    )

    if (message) return takeLocale(message)
    return token
  }
  sendLog(
    false,
    '2024-01-09 TextWidget render:',
    props.children,
    props.token,
    props.defaultMessage
  )
  return (
    <Fragment>
      {takeMessage(props.children) ||
        takeMessage(props.token) ||
        takeMessage(props.defaultMessage)}
    </Fragment>
  )
})
