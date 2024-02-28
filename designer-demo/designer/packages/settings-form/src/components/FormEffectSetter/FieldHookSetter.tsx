import { TextWidget, usePrefix } from "@designer/react";
import { MonacoInput } from "../MonacoInput";
import { isPlainObj, reduce } from "@formily/shared";
import { Menu } from "antd";
import React, { useState } from "react";
import { FieldHookProperties } from "./properties";
import { genFunctionBodyCode } from "./helpers";
export interface IFieldProperty {
  [key: string]: string;
}

export interface IFieldHookSetterProps {
  extraLib?: string;
  value?: IFieldProperty;
  onChange?: (value: IFieldProperty) => void;
}

const template = (code: string) => {
  if (!code) return;
  return code.trim();
};

export const FieldHookSetter: React.FC<
  React.PropsWithChildren<IFieldHookSetterProps>
> = (props) => {
  const [selectKeys, setSelectKeys] = useState(["onFieldInit"]);
  const prefix = usePrefix("field-hook-setter");
  const value = { ...props.value };

  const parseExpression = (expression: string) => {
    console.log('expression:', expression);
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

  const currentProperty = FieldHookProperties.find(
    (item) => item.key === selectKeys[0],
  );

  const items = FieldHookProperties.map((key) => {
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

  const renderValue = (val) => {
    const valCode = `
onFieldReact(pattern, (field) => {

})
  `
    return valCode;
  }

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
        <div className={`${prefix}-coder`}>
          <MonacoInput
            key={selectKeys[0]}
            language="javascript.expression"
            extraLib={props.extraLib}
            helpCode={template(currentProperty?.helpCode!)}
            value={genFunctionBodyCode(selectKeys[0], parseExpression(value[selectKeys[0]]))}
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
      </div>
    </div>
  );
};
