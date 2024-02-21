import { ICustomEvent } from "@designer/shared";
import { AbstractMutationNodeEvent } from "./AbstractMutationNodeEvent";

export class HoverNodeEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent {
  type = "hover:node";
}
