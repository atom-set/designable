/**
 * @description 2024-01-11 左侧面板
 * 1、组件
 * 2、大纲树
 * 3、历史记录
 */
import React, { useEffect, useRef, useState } from 'react'
import { isValid, sendLog } from '@designable/shared'
import cls from 'classnames'
import { IconWidget, TextWidget } from '../widgets'
import { usePrefix } from '../hooks'

export interface ICompositePanelProps {
  direction?: 'left' | 'right'
  showNavTitle?: boolean
  defaultOpen?: boolean
  defaultPinning?: boolean
  defaultActiveKey?: number
  activeKey?: number | string
  onChange?: (activeKey: number | string) => void
}

export interface ICompositePanelItemProps {
  shape?: 'tab' | 'button' | 'link'
  title?: React.ReactNode
  icon?: React.ReactNode
  key?: number | string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  extra?: React.ReactNode
}

// 解析 props.children
const parseItems = (
  children: React.ReactNode
): React.PropsWithChildren<ICompositePanelItemProps>[] => {
  const items = []
  React.Children.forEach(children, (child, index) => {
    if (child?.['type'] === CompositePanel.Item) {
      items.push({ key: child['key'] ?? index, ...child['props'] })
    }
  })
  return items
}

// 查找当前选中的 PanelItem
const findItem = (
  items: React.PropsWithChildren<ICompositePanelItemProps>[],
  key: string | number
) => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (key === index) return item
    if (key === item.key) return item
  }
}

// 获取当下选中的 KEY
const getDefaultKey = (children: React.ReactNode) => {
  const items = parseItems(children)
  return items?.[0].key
}

export const CompositePanel: React.FC<ICompositePanelProps> & {
  Item: React.FC<ICompositePanelItemProps>
} = (props) => {
  const prefix = usePrefix('composite-panel')
  const [activeKey, setActiveKey] = useState<string | number>(
    props.defaultActiveKey ?? getDefaultKey(props.children)
  )
  const activeKeyRef = useRef(null)
  const [pinning, setPinning] = useState(props.defaultPinning ?? false)
  const [visible, setVisible] = useState(props.defaultOpen ?? true)
  const items = parseItems(props.children)
  const currentItem = findItem(items, activeKey)
  const content = currentItem?.children

  activeKeyRef.current = activeKey

  // 2024-01-11 Tab Active Key
  useEffect(() => {
    if (isValid(props.activeKey)) {
      if (props.activeKey !== activeKeyRef.current) {
        setActiveKey(props.activeKey)
      }
    }
  }, [props.activeKey])

  // 2024-01-11 渲染 Tab 的内容
  const renderContent = () => {
    sendLog(
      true,
      '2024-01-11 CompositePanel renderContent:',
      pinning,
      currentItem
    )
    if (!content || !visible) return
    return (
      <div
        className={cls(prefix + '-tabs-content', {
          pinning,
        })}
      >
        {/* title */}
        <div className={prefix + '-tabs-header'}>
          <div className={prefix + '-tabs-header-title'}>
            <TextWidget>{currentItem.title}</TextWidget>
          </div>
          {/* extra */}
          <div className={prefix + '-tabs-header-actions'}>
            <div className={prefix + '-tabs-header-extra'}>
              {currentItem.extra}
            </div>
            {/* 吸附逻辑 */}
            {!pinning && (
              <IconWidget
                infer="PushPinOutlined"
                className={prefix + '-tabs-header-pin'}
                onClick={() => {
                  setPinning(!pinning)
                }}
              />
            )}
            {pinning && (
              <IconWidget
                infer="PushPinFilled"
                className={prefix + '-tabs-header-pin-filled'}
                onClick={() => {
                  setPinning(!pinning)
                }}
              />
            )}
            {/* 隐藏逻辑 */}
            <IconWidget
              infer="Close"
              className={prefix + '-tabs-header-close'}
              onClick={() => {
                setVisible(false)
              }}
            />
          </div>
        </div>
        <div className={prefix + '-tabs-body'}>{content}</div>
      </div>
    )
  }

  sendLog(true, '2024-01-11 CompositePanel:', props, activeKey, items)
  return (
    <div
      className={cls(prefix, {
        [`direction-${props.direction}`]: !!props.direction,
      })}
    >
      <div className={prefix + '-tabs'}>
        {items.map((item, index) => {
          {
            /* 2024-01-11 TabPanel 逻辑: <链接 | Icon> */
          }
          const takeTab = () => {
            if (item.href) {
              return <a href={item.href}>{item.icon}</a>
            }
            return (
              <IconWidget
                tooltip={
                  props.showNavTitle
                    ? null
                    : {
                        title: <TextWidget>{item.title}</TextWidget>,
                        placement:
                          props.direction === 'right' ? 'left' : 'right',
                      }
                }
                infer={item.icon}
              />
            )
          }
          const shape = item.shape ?? 'tab'
          const Comp = shape === 'link' ? 'a' : 'div'
          sendLog(
            true,
            '2024-01-11 CompositePanel render:',
            'props.showNavTitle:',
            props.showNavTitle,
            'item.href:',
            item.href,
            item
          )
          return (
            <Comp
              className={cls(prefix + '-tabs-pane', {
                active: activeKey === item.key,
              })}
              key={index}
              href={item.href}
              onClick={(e: any) => {
                if (shape === 'tab') {
                  if (activeKey === item.key) {
                    setVisible(!visible)
                  } else {
                    setVisible(true)
                  }
                  if (!props?.activeKey || !props?.onChange)
                    setActiveKey(item.key)
                }
                item.onClick?.(e)
                props.onChange?.(item.key)
              }}
            >
              {takeTab()}
              {props.showNavTitle && item.title ? (
                <div className={prefix + '-tabs-pane-title'}>
                  <TextWidget>{item.title}</TextWidget>
                </div>
              ) : null}
            </Comp>
          )
        })}
      </div>
      {/* tabContent 逻辑 */}
      {renderContent()}
    </div>
  )
}

CompositePanel.Item = () => {
  return <React.Fragment />
}
