/**
 * @description 2024-01-08 Login 和右侧操作按钮
 */
import React from 'react'
import { usePrefix, usePosition } from '../hooks'
import { Layout } from '../containers'
import cls from 'classnames'
import { sendLog } from '@designable/shared'
export interface IStudioPanelProps {
  style?: React.CSSProperties
  className?: string
  logo?: React.ReactNode
  actions?: React.ReactNode
  prefixCls?: string
  theme?: string
  position?: React.ComponentProps<typeof Layout>['position']
}

const StudioPanelInternal: React.FC<IStudioPanelProps> = ({
  logo,
  actions,
  ...props
}) => {
  const prefix = usePrefix('main-panel')
  const position = usePosition()
  const classNameBase = cls('root', position, props.className)
  if (logo || actions) {
    return (
      <div {...props} className={cls(`${prefix}-container`, classNameBase)}>
        <div className={prefix + '-header'}>
          <div className={prefix + '-header-logo'}>{logo}</div>
          <div className={prefix + '-header-actions'}>{actions}</div>
        </div>
        <div className={prefix}>{props.children}</div>
      </div>
    )
  }
  return (
    <div {...props} className={cls(prefix, classNameBase)}>
      {props.children}
    </div>
  )
}

sendLog(true, '2024-01-08 StudioPanel render')

export const StudioPanel: React.FC<IStudioPanelProps> = (props) => {
  return (
    <Layout
      theme={props.theme}
      prefixCls={props.prefixCls}
      position={props.position}
    >
      <StudioPanelInternal {...props} />
    </Layout>
  )
}
