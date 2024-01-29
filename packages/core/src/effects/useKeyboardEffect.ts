import { Engine } from '../models'
import { KeyDownEvent, KeyUpEvent } from '../events'
import { sendLog } from '@designable/shared'

export const useKeyboardEffect = (engine: Engine) => {
  sendLog(false, '2024-01-11 Engine useKeyboardEffect:', 'attach')

  engine.subscribeTo(KeyDownEvent, (event) => {
    const keyboard = engine.keyboard
    if (!keyboard) return
    const workspace =
      engine.workbench.activeWorkspace || engine.workbench.currentWorkspace
    keyboard.handleKeyboard(event, workspace.getEventContext())
  })

  engine.subscribeTo(KeyUpEvent, (event) => {
    const keyboard = engine.keyboard
    if (!keyboard) return
    const workspace =
      engine.workbench.activeWorkspace || engine.workbench.currentWorkspace
    keyboard.handleKeyboard(event, workspace.getEventContext())
  })
}
