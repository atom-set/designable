import { GlobalRegistry } from "@designer/core";
import { FoldItem } from "../FoldItem";
import { ArrayField } from "@formily/core";
import {
  observer,
  useField,
} from "@formily/react";
import { Select } from "antd";
import React from "react";
import { useDesigner } from "@designer/react";
import { toJS } from '@formily/reactive';

export interface IRemoteDataSourceSetterProps {
  value?: any;
  onChange?: (value: any) => void;
}

export const RemoteDataSourceSetter: React.FC<
  React.PropsWithChildren<IRemoteDataSourceSetterProps>
> = observer((props) => {
  const field = useField<ArrayField>();
  const designer = useDesigner();
  const scope = toJS(designer.getCurrentTree().props?.scope ?? []);
  const options = scope.map((item) => {
    return { label: item.config.desc || item.config.name, value: `{{${item.config.name}}}` };
  })
  debugger
  return (
    <FoldItem label={"数据源接口"}>
      <FoldItem.Base>
        <Select
          value={Array.isArray(props.value) ? undefined : props.value}
          onChange={props.onChange}
          allowClear
          placeholder={GlobalRegistry.getDesignerMessage(
            "SettingComponents.ValidatorSetter.pleaseSelect",
          )}
          options={options}
        />
      </FoldItem.Base>
    </FoldItem>
  );
});
