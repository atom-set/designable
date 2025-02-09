import React, { useMemo, useRef, Fragment } from 'react'
import { useDesigner } from '../hooks'
import { WorkspaceContext } from '../context'
import { sendLog } from '@designable/shared'
export interface IWorkspaceProps {
  id?: string
  title?: string
  description?: string
}

export const Workspace: React.FC<IWorkspaceProps> = ({
  id,
  title,
  description,
  ...props
}) => {
  const oldId = useRef<string>()
  const designer = useDesigner()

  const workspace = useMemo(() => {
    if (!designer) return
    if (oldId.current && oldId.current !== id) {
      const old = designer.workbench.findWorkspaceById(oldId.current)
      if (old) old.viewport.detachEvents()
    }
    const workspace = {
      id: id || 'index',
      title,
      description,
    }
    designer.workbench.ensureWorkspace(workspace)
    oldId.current = workspace.id
    return workspace
  }, [id, designer])

  sendLog(false, '2024-01-11 Engine Workspace props:', props)
  sendLog(false, '2024-01-11 Engine Workspace designer:', designer)
  sendLog(false, '2024-01-11 Engine Workspace workspace:', workspace)
  return (
    <Fragment>
      <WorkspaceContext.Provider value={workspace}>
        {props.children}
      </WorkspaceContext.Provider>
    </Fragment>
  )
}
