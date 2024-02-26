import { IconWidget, TextWidget, usePrefix } from "@designer/react";
import { observer } from "@formily/reactive-react";
import { uid } from "@formily/shared";
import { Button, Tree } from "antd";
import React, { Fragment, useCallback } from "react";
import { Header } from "./Header";
import { Title } from "./Title";
import "./styles.less";
import { IDataSourceItem, IDataSource } from "./types";
import { toJS } from '@formily/reactive';
import { GlobalRegistry } from "@designer/core";

export interface ITreePanelProps {
  treeDataSource: IDataSource;
}

export const TreePanel: React.FC<React.PropsWithChildren<ITreePanelProps>> =
  observer((props) => {
    const prefix = usePrefix("data-request-setter");

    const addClick = useCallback(() => {
      const uuid = uid();
      const dataSource = props.treeDataSource.dataSource;
      props.treeDataSource.dataSource = dataSource.concat({
        key: uuid,
        title: GlobalRegistry.getDesignerMessage(
          "SettingComponents.RequestSourceSetter.dataSourceTitle",
        ),
        duplicateKey: uuid,
        config: {
          name: GlobalRegistry.getDesignerMessage(
            "SettingComponents.RequestSourceSetter.dataSourceTitle",
          ),
          path: 'https://mock.com/api/xxxx',
          method: 'POST',
        }
      });

      console.log('add:', toJS(props.treeDataSource.dataSource));
    }, [props.treeDataSource.dataSource]);

    console.log('TreePanel Render props:', toJS(props.treeDataSource.dataSource))

    return (
      <Fragment>
        <Header
          title={
            <TextWidget token="SettingComponents.RequestSourceSetter.dataSourceTree" />
          }
          extra={
            <Button
              type="text"
              onClick={addClick}
              icon={<IconWidget infer="Add" />}
            >
              <TextWidget token="SettingComponents.RequestSourceSetter.addNode" />
            </Button>
          }
        />
        <div className={`${`${prefix}-layout-item-content`}`}>
          <Tree
            blockNode
            draggable={false}
            showLine={{ showLeafIcon: false }}
            treeData={props.treeDataSource.dataSource}
            titleRender={(titleProps: IDataSourceItem) => {
              return (
                <Title
                  {...titleProps}
                  treeDataSource={props.treeDataSource}
                ></Title>
              );
            }}
            onSelect={(selectedKeys) => {
              if (selectedKeys[0]) {
                props.treeDataSource.selectedKey = selectedKeys[0].toString();
              }
            }}
          ></Tree>
        </div>
      </Fragment>
    );
  });
