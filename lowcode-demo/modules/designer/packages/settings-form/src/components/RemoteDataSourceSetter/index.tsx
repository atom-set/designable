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
  const apiList = toJS(designer.getCurrentTree().props?.api ?? []);
  const options = apiList.map((item) => {
    return { label: `${item.title}`, value: item.duplicateKey };
  })
  return (
    <FoldItem label={field.title}>
      <FoldItem.Base>
        <Select
          value={Array.isArray(props.value) ? undefined : props.value}
          onChange={props.onChange}
          allowClear
          placeholder={GlobalRegistry.getDesignerMessage(
            "SettingComponents.RemoteDataSourceSetter.pleaseSelect",
          )}
          options={options}
        />
      </FoldItem.Base>
    </FoldItem>
  );
});
