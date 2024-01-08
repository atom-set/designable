import React, { Fragment } from 'react'
import { observer } from '@formily/reactive-react'
import { TreeNode } from '@designable/core'
import { sendLog } from '@designable/shared'
export interface INodeTitleWidgetProps {
  node: TreeNode
}

export const NodeTitleWidget: React.FC<INodeTitleWidgetProps> = observer(
  (props) => {
    const takeNode = () => {
      const node = props.node
      if (node.componentName === '$$ResourceNode$$') {
        return node.children[0]
      }
      return node
    }
    const node = takeNode()
    sendLog(
      false,
      '20240108-title:',
      node.getMessage('title') || node.componentName
    )
    sendLog(false, '20240108-node:', node)
    return <Fragment>{node.getMessage('title') || node.componentName}</Fragment>
  }
)
