import { usePrefix } from "@designer/react";
import React, { useMemo, useState } from "react";
import { MonacoInput } from "../MonacoInput";
import "./styles.less";
import { responseAdapterCode } from "./helper";


export interface IResponseSetterProps {
  extraLib?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const template = (code: string) => {
  if (!code) return;
  return code.trim();
};

export const ResponseSetter: React.FC<
  React.PropsWithChildren<IResponseSetterProps>
> = (props) => {
  const prefix = usePrefix("editor-setter");

  return (
    <div className={`${prefix}-coder-wrapper`}>
      {/* <div className={`${prefix}-coder-start`}>
        {"(options, context) => {"}
      </div> */}
      <div className={`${prefix}-coder`}>
        <MonacoInput
          language="javascript.expression"
          extraLib={props.extraLib}
          helpCode=""
          value={props.value}
          defaultValue={responseAdapterCode}
          options={{
            lineNumbers: "off",
            wordWrap: "on",
            glyphMargin: false,
            folding: false,
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 0,
            minimap: {
              enabled: false,
            },
          }}
          onChange={(expression) => {
            console.log('expression:', expression)
            props.onChange?.(expression);
          }}
        />
      </div>
      {/* <div className={`${prefix}-coder-end`}>{"}"}</div> */}
    </div>
  );
};
