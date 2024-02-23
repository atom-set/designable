import { TextWidget, usePrefix, useTheme } from "@designer/react";
import { Form } from "@formily/core";
import { observable } from "@formily/reactive";
import { observer } from "@formily/reactive-react";
import { Button, Drawer } from "antd";
import cls from "classnames";
import React, { Fragment, useMemo, useState } from "react";
import { DataSettingPanel } from "./DataSettingPanel";
import { TreePanel } from "./TreePanel";
import { transformDataToValue, transformValueToData } from "./shared";
import "./styles.less";
import { IDataSourceItem, ITreeDataSource } from "./types";
export interface IRequestSourceSetterProps {
  className?: string;
  style?: React.CSSProperties;
  onChange: (dataSource: IDataSourceItem[]) => void;
  value: IDataSourceItem[];
  allowTree?: boolean;
  allowExtendOption?: boolean;
  defaultOptionValue?: {
    label: string;
    value: any;
  }[];
  effects?: (form: Form<any>) => void;
}

export const RequestSourceSetter: React.FC<
  React.PropsWithChildren<IRequestSourceSetterProps>
> = observer((props) => {
  const {
    className,
    value = [],
    onChange,
    allowTree = true,
    allowExtendOption = true,
    defaultOptionValue,
    effects = () => { },
  } = props;
  const theme = useTheme();
  const prefix = usePrefix("data-request-setter");
  const [modalVisible, setModalVisible] = useState(false);
  const treeDataSource: ITreeDataSource = useMemo(
    () =>
      observable({
        dataSource: transformValueToData(value),
        selectedKey: "",
      }),
    [value, modalVisible],
  );
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <Fragment>
      <Button block onClick={openModal}>
        <TextWidget token="SettingComponents.RequestSourceSetter.configureRequest" />
      </Button>
      <Drawer
        title={
          <TextWidget token="SettingComponents.RequestSourceSetter.configureRequest" />
        }
        width="65%"
        bodyStyle={{ padding: 10 }}
        open={modalVisible}
        onClose={closeModal}
      // onOk={() => {
      //   onChange(transformDataToValue(treeDataSource.dataSource));
      //   closeModal();
      // }}
      >
        <div
          className={`${cls(
            prefix,
            className,
          )} ${`${prefix}-${theme}`} ${`${prefix}-layout`}`}
        >
          <div className={`${`${prefix}-layout-item left`}`}>
            <TreePanel
              defaultOptionValue={defaultOptionValue!}
              allowTree={allowTree}
              treeDataSource={treeDataSource}
            ></TreePanel>
          </div>
          <div className={`${`${prefix}-layout-item right`}`}>
            <DataSettingPanel
              allowExtendOption={allowExtendOption}
              treeDataSource={treeDataSource}
              effects={effects}
            ></DataSettingPanel>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
});
