/**
 * @description 2024-01-11 资源组件面板；渲染设计器所需要的组件
 */
import React, { useState } from 'react'
import {
  isResourceHost,
  isResourceList,
  IResourceLike,
  IResource,
} from '@designable/core'
import { isFn, sendLog } from '@designable/shared'
import { observer } from '@formily/reactive-react'
import { usePrefix } from '../../hooks'
import { IconWidget } from '../IconWidget'
import { TextWidget } from '../TextWidget'
import cls from 'classnames'
import './styles.less'

export type SourceMapper = (resource: IResource) => React.ReactChild

export interface IResourceWidgetProps {
  title: React.ReactNode
  sources?: IResourceLike[]
  className?: string
  defaultExpand?: boolean
  children?: SourceMapper | React.ReactElement
}

{
  /* TODO: 2024-01-11 observer 包裹？ */
}
export const ResourceWidget: React.FC<IResourceWidgetProps> = observer(
  (props) => {
    const prefix = usePrefix('resource')
    const [expand, setExpand] = useState(props.defaultExpand)
    const renderNode = (source: IResource) => {
      const { node, icon, title, thumb, span } = source
      sendLog(
        false,
        '2024-01-11 ResourceWidget renderNode:',
        node.children[0],
        icon,
        title,
        thumb,
        span
      )
      return (
        <div
          className={prefix + '-item'}
          style={{ gridColumnStart: `span ${span || 1}` }}
          key={node.id}
          data-designer-source-id={node.id}
        >
          {/* 缩略图 */}
          {thumb && <img className={prefix + '-item-thumb'} src={thumb} />}
          {/* Icon */}
          {icon && React.isValidElement(icon) ? (
            <>{icon}</>
          ) : (
            <IconWidget
              className={prefix + '-item-icon'}
              infer={icon}
              style={{ width: 150, height: 40 }}
            />
          )}
          {/* 标题 */}
          <span className={prefix + '-item-text'}>
            {
              <TextWidget>
                {title || node.children[0]?.getMessage('title')}
              </TextWidget>
            }
          </span>
        </div>
      )
    }
    const sources = props.sources.reduce<IResource[]>((buf, source) => {
      if (isResourceList(source)) {
        return buf.concat(source)
      } else if (isResourceHost(source)) {
        return buf.concat(source.Resource)
      }
      sendLog(false, '2024-01-11 ResourceWidget sources:', sources)
      return buf
    }, [])

    const remainItems =
      sources.reduce((length, source) => {
        return length + (source.span ?? 1)
      }, 0) % 3

    sendLog(false, '2024-01-11 ResourceWidget remainItems:', remainItems, props)
    return (
      <div
        className={cls(prefix, props.className, {
          expand,
        })}
      >
        {/* 2024-01-11 容器标题 */}
        <div
          className={prefix + '-header'}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setExpand(!expand)
          }}
        >
          <div className={prefix + '-header-expand'}>
            <IconWidget infer="Expand" size={10} />
          </div>
          <div className={prefix + '-header-content'}>
            <TextWidget>{props.title}</TextWidget>
          </div>
        </div>
        {/* 2024-01-11 容器内容 */}
        <div className={prefix + '-content-wrapper'}>
          <div className={prefix + '-content'}>
            {sources.map(isFn(props.children) ? props.children : renderNode)}
            {remainItems ? (
              <div
                className={prefix + '-item-remain'}
                style={{ gridColumnStart: `span ${3 - remainItems}` }}
              ></div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
)

ResourceWidget.defaultProps = {
  defaultExpand: true,
}
