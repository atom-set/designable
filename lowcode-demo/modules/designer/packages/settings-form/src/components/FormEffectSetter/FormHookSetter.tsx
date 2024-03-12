import { TextWidget, usePrefix } from "@designer/react";
import { isPlainObj, reduce } from "@formily/shared";
import { Menu } from "antd";
import React, { useMemo, useState } from "react";
import { MonacoInput } from "../MonacoInput";
import { FormHookProperties } from "./properties";
import { getFormHooksBlockCode } from "./helpers";

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
  const prefix = usePrefix("form-hook-setter");
  const [selectKeys, setSelectKeys] = useState(["onFormInit"]);

  const value = { ...props.value };

  const parseExpression = (expression: string) => {
    if (!expression) return "";
    return String(expression).replace(/[/\n\s]/g, '').match(/^on\S+\(\(form\)\=>\{(\s*\S*)+\}\)$/)?.[1] || "";
  };

  const filterEmpty = (value: object) => {
    return reduce(
      value,
      (buf, value, key) => {
        const newValue = !parseExpression(value) ? '' : value;
        if (!newValue) return buf;

        buf[key] = newValue;
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

  const defaultCode = useMemo((): string => {
    if (selectKeys[0] && value[selectKeys[0]]) {
      return value[selectKeys[0]];
    }
    return getFormHooksBlockCode(selectKeys[0])
  }, [value, selectKeys[0]])

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
      />
      <div className={`${prefix}-coder-wrapper`}>
        <div className={`${prefix}-coder`}>
          <MonacoInput
            key={selectKeys[0]}
            language="javascript.expression"
            extraLib={props.extraLib}
            helpCode={template(currentProperty?.helpCode!)}
            value={defaultCode}
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
                  [selectKeys[0]]: `${expression}`,
                }),
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};
