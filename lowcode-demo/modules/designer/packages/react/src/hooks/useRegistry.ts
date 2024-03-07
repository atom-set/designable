import { GlobalRegistry, IDesignerRegistry } from "@designer/core";
import { globalThisPolyfill } from "@designer/shared";

export const useRegistry = (): IDesignerRegistry => {
  return (globalThisPolyfill as any).__DESIGNER_REGISTRY__ || GlobalRegistry;
};
