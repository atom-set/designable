import { TextWidget, usePrefix, useTheme } from "@designer/react";
import { Form } from "@formily/core";
import { observable, toJS } from "@formily/reactive";
import { observer } from "@formily/reactive-react";
import { Button, Drawer, Space } from "antd";
import cls from "classnames";
import React, { Fragment, useMemo, useState } from "react";
import { DataSettingPanel } from "./DataSettingPanel";
import { TreePanel } from "./TreePanel";
import { transformDataToValue, transformValueToData } from "./shared";
import type { IDataSourceItem, IDataSourceItemConfig, IDataSource } from "./types";
import "./styles.less";

export interface IRequestSourceSetterProps {
  className?: string;
  style?: React.CSSProperties;
  onChange: (dataSource: IDataSourceItem[]) => void;
  value: IDataSourceItem[];
  effects?: (form: Form<any>) => void;
}

export const RequestSourceSetter: React.FC<
  React.PropsWithChildren<IRequestSourceSetterProps>
> = observer((props) => {
  const {
    className,
    value = [],
    onChange,
    effects = () => { },
  } = props;

  const theme = useTheme();
  const prefix = usePrefix("data-request-setter");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const requestDataSource: IDataSource = useMemo(
    () =>
      observable({
        dataSource: transformValueToData(value),
        selectedKey: "",
      }),
    [value, drawerVisible],
  );

  const openDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <Fragment>
      <Button block onClick={openDrawer}>
        <TextWidget token="SettingComponents.RequestSourceSetter.configureRequest" />
      </Button>
      <Drawer
        title={
          <TextWidget token="SettingComponents.RequestSourceSetter.configureRequest" />
        }
        width="80%"
        bodyStyle={{ padding: 10 }}
        open={drawerVisible}
        onClose={closeDrawer}
        extra={
          <Space>
            <Button onClick={closeDrawer}>Cancel</Button>
            <Button type="primary" onClick={() => {
              console.log(toJS(requestDataSource.dataSource))
              onChange(transformDataToValue(requestDataSource.dataSource));
              closeDrawer();
            }}>
              OK
            </Button>
          </Space>
        }
      >
        <div
          className={`${cls(
            prefix,
            className,
          )} ${`${prefix}-${theme}`} ${`${prefix}-layout`}`}
        >
          <div className={`${`${prefix}-layout-item left`}`}>
            <TreePanel
              treeDataSource={requestDataSource}
            />
          </div>
          <div className={`${`${prefix}-layout-item right`}`}>
            <DataSettingPanel
              treeDataSource={requestDataSource}
              effects={effects}
            />
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
});
