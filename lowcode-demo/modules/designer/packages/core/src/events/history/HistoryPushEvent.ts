import { ICustomEvent } from "@designer/shared";
import { AbstractHistoryEvent } from "./AbstractHistoryEvent";

export class HistoryPushEvent
  extends AbstractHistoryEvent
  implements ICustomEvent {
  type = "history:push";
}
