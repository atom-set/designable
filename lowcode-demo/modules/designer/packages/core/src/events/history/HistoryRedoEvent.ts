import { ICustomEvent } from "@designer/shared";
import { AbstractHistoryEvent } from "./AbstractHistoryEvent";

export class HistoryUndoEvent
  extends AbstractHistoryEvent
  implements ICustomEvent {
  type = "history:undo";
}
