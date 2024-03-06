import { GlobalRegistry } from "@designer/core";
import { FoldItem } from "../FoldItem";
import { ArrayField } from "@formily/core";
import {
  observer,
  useField,
} from "@formily/react";
import { Select } from "antd";
import React from "react";

export interface IReactionsSetterProps {
  value?: any;
  onChange?: (value: any) => void;
}

export const ReactionsSetter: React.FC<
  React.PropsWithChildren<IReactionsSetterProps>
> = observer((props) => {
  const field = useField<ArrayField>();
  debugger
  return (
    <FoldItem label={field.title}>
      <FoldItem.Base>
        <Select
          value={Array.isArray(props.value) ? undefined : props.value}
          onChange={props.onChange}
          allowClear
          placeholder={GlobalRegistry.getDesignerMessage(
            "SettingComponents.ValidatorSetter.pleaseSelect",
          )}
          options={GlobalRegistry.getDesignerMessage(
            "SettingComponents.ValidatorSetter.formats",
          )}
        />
      </FoldItem.Base>
    </FoldItem>
  );
});
