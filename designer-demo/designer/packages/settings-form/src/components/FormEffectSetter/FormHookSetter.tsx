import { TextWidget, usePrefix } from "@designer/react";
import { MonacoInput } from "../MonacoInput";
import { isPlainObj, reduce } from "@formily/shared";
import { Menu } from "antd";
import React, { useState } from "react";
import { FormHookProperties } from "./properties";

interface IHooksProperty {
  [key: string]: string;
}

export interface IFormHookSetterProps {
  extraLib?: string;
  value?: IHooksProperty;
  onChange?: (value: IHooksProperty) => void;
}

const template = (code: string) => {
  if (!code) return;
  return code.trim();
};

export const FormHookSetter: React.FC<
  React.PropsWithChildren<IFormHookSetterProps>
> = (props) => {
  const [selectKeys, setSelectKeys] = useState(["onFormMount"]);
  const prefix = usePrefix("form-hook-setter");
  const value = { ...props.value };

  const parseExpression = (expression: string) => {
    if (!expression) return "";
    return String(expression).match(/^\{\{([\s\S]*)\}\}$/)?.[1] || "";
  };

  const filterEmpty = (value: object) => {
    return reduce(
      value,
      (buf, value, key) => {
        if (!value || value === "{{}}") return buf;
        buf[key] = value;
        return buf;
      },
      {} as any,
    );
  };

  const currentProperty = FormHookProperties.find(
    (item) => item.key === selectKeys[0],
  );

  const items = FormHookProperties.map((key) => {
    const item: React.ComponentProps<typeof Menu>["items"][0] = isPlainObj(key)
      ? {
        key: key.key,
        label: (
          <TextWidget
            token={`SettingComponents.FormEffectSetter.${key.token || key.key
              }`}
          />
        ),
      }
      : {
        key,
        label: (
          <TextWidget token={`SettingComponents.FormEffectSetter.${key}`} />
        ),
      };
    return item;
  });

  return (
    <div className={prefix}>
      <Menu
        mode="vertical"
        style={{
          width: 200,
          height: 300,
          paddingRight: 4,
          overflowY: "auto",
          overflowX: "hidden",
        }}
        defaultSelectedKeys={selectKeys}
        selectedKeys={selectKeys}
        onSelect={({ selectedKeys }) => {
          setSelectKeys(selectedKeys);
        }}
        items={items}
      ></Menu>
      <div className={`${prefix}-coder-wrapper`}>
        <div className={`${prefix}-coder-start`}>
          {`${selectKeys[0]} = ((form) => {`}
          <span
            style={{
              fontSize: 14,
              marginLeft: 10,
              color: "#888",
              fontWeight: "normal",
            }}
          >
            {"//"}{" "}
            <TextWidget token="SettingComponents.FormEffectSetter.expressionValueTypeIs" />{" "}
            {"`"}
            {currentProperty?.type}
            {"`"}
          </span>
        </div>
        <div className={`${prefix}-coder`}>
          <MonacoInput
            key={selectKeys[0]}
            language="javascript.expression"
            extraLib={props.extraLib}
            helpCode={template(currentProperty?.helpCode!)}
            value={parseExpression(value[selectKeys[0]])}
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
              props.onChange?.(
                filterEmpty({
                  ...value,
                  [selectKeys[0]]: `{{${expression}}}`,
                }),
              );
            }}
          />
        </div>
        <div className={`${prefix}-coder-end`}>{"})"}</div>
      </div>
    </div>
  );
};
