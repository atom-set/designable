import { IconWidget, TextWidget, usePrefix } from "@designer/react";
import { observer } from "@formily/reactive-react";
import React from "react";
import { traverseTree } from "./shared";
import "./styles.less";
import { INodeItem, ITreeDataSource } from "./types";
import { clone, toArr } from "@designer/shared";
export interface ITitleProps extends INodeItem {
  treeDataSource: ITreeDataSource;
}

export const Title: React.FC<ITitleProps> = observer((props) => {
  console.log('props:', props);
  const prefix = usePrefix("data-request-setter-node-title");

  const renderTitle = (title: string) => {
    let nodeTitle = title;
    if (nodeTitle === undefined)
      return (
        <TextWidget token="SettingComponents.RequestSourceSetter.defaultTitle" />
      );
    else return `${nodeTitle}`;
  };

  return (
    <div className={prefix}>
      <span style={{ marginRight: "5px" }}>
        {renderTitle(props.title)}
      </span>
      <IconWidget
        className={`${prefix}-icon`}
        infer="Remove"
        onClick={() => {
          const newDataSource = clone(props?.treeDataSource?.dataSource);
          traverseTree(newDataSource || [], (dataItem, i, data) => {
            if (data[i].key === props.duplicateKey) toArr(data).splice(i, 1);
          });
          props.treeDataSource.dataSource = newDataSource;
        }}
      />
    </div>
  );
});
