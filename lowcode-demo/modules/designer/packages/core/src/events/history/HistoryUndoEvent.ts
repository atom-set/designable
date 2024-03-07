import { ICustomEvent } from "@designer/shared";
import { AbstractHistoryEvent } from "./AbstractHistoryEvent";

export class HistoryRedoEvent
  extends AbstractHistoryEvent
  implements ICustomEvent {
  type = "history:redo";
}
