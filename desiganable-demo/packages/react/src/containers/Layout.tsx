/**
 * @description 2024-01-08 页面样式和布局相关
 * 1、页面主题变量
 * 2、定位方式
 * 3、className 前缀
 */
import React, { useContext, Fragment, useRef, useLayoutEffect } from 'react'
import { each, sendLog } from '@designable/shared'
import { DesignerLayoutContext } from '../context'
import { IDesignerLayoutProps } from '../types'
import cls from 'classnames'

export const Layout: React.FC<IDesignerLayoutProps> = (props) => {
  const layout = useContext(DesignerLayoutContext)
  const ref = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
    if (ref.current) {
      sendLog(false, '20240108-Layout-props.variables:', props.variables)
      each(props.variables, (value, key) => {
        ref.current.style.setProperty(`--${key}`, value)
      })
    }
  }, [])

  sendLog(false, '20240108-Layout: ', layout, props)

  if (layout) {
    return <Fragment>{props.children}</Fragment>
  }

  return (
    <div
      ref={ref}
      className={cls({
        [`${props.prefixCls}app`]: true,
        [`${props.prefixCls}${props.theme}`]: props.theme,
      })}
    >
      <DesignerLayoutContext.Provider
        value={{
          theme: props.theme,
          prefixCls: props.prefixCls,
          position: props.position,
        }}
      >
        {props.children}
      </DesignerLayoutContext.Provider>
    </div>
  )
}

Layout.defaultProps = {
  theme: 'light',
  prefixCls: 'dn-',
  position: 'fixed',
}
