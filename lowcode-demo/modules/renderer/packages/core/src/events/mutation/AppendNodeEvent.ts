import { ICustomEvent } from "@designer/shared";
import { AbstractMutationNodeEvent } from "./AbstractMutationNodeEvent";

export class AppendNodeEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent {
  type = "append:node";
}
