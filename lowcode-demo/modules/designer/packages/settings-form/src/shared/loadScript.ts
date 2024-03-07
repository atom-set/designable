import { globalThisPolyfill } from "@designer/shared";
import { getNpmCDNRegistry } from "../registry";
export interface ILoadScriptProps {
  package: string;
  entry: string;
  root: string;
  base?: string;
}

const anyGlobal = globalThisPolyfill as any;

export const loadScript = async (props: ILoadScriptProps) => {
  const options: ILoadScriptProps = {
    base: getNpmCDNRegistry(),
    ...props,
  };
  if (anyGlobal[props.root]) return anyGlobal[options.root];
  const path = `${options.base}/${options.package}/${options.entry}`;
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;
    script.src = path;
    script.onload = () => {
      const module = anyGlobal[options.root];
      anyGlobal["define"] = define;
      resolve(module);
      script.remove();
    };
    script.onerror = (err) => {
      reject(err);
    };
    const define = anyGlobal["define"];
    anyGlobal["define"] = undefined;
    document.body.appendChild(script);
  });
};
