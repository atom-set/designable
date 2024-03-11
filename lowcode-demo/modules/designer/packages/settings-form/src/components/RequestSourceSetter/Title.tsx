import { IconWidget, TextWidget, usePrefix } from "@designer/react";
import { clone, toArr } from "@designer/shared";
import { observer } from "@formily/reactive-react";
import React from "react";
import { traverseData } from "./shared";
import "./styles.less";
import { IDataSourceItem, IDataSource } from "./types";

export interface ITitleProps extends IDataSourceItem {
  treeDataSource: IDataSource;
}

export const Title: React.FC<ITitleProps> = observer((props) => {
  const prefix = usePrefix("data-request-setter-node-title");

  const renderTitle = (props: ITitleProps) => {
    const nodeTitle = props.title;

    if (nodeTitle === undefined) {
      return (
        <TextWidget token="SettingComponents.RequestSourceSetter.defaultTitle" />
      );
    }

    return `${nodeTitle}`;
  };


  return (
    <div className={prefix}>
      <span style={{ marginRight: "5px" }}>
        {renderTitle(props)}
      </span>
      <IconWidget
        className={`${prefix}-icon`}
        infer="Remove"
        onClick={() => {
          const newDataSource = clone(props?.treeDataSource?.dataSource);
          traverseData(newDataSource || [], (dataItem, i, data) => {
            debugger
            if (data[i].key === props.key) toArr(data).splice(i, 1);
          });
          props.treeDataSource.dataSource = newDataSource;
        }}
      />
    </div>
  );
});
