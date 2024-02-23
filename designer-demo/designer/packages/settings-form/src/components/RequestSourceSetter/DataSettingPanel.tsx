import { PlusOutlined } from "@ant-design/icons";
import { TextWidget, usePrefix } from "@designer/react";
import { ValueInput } from "../ValueInput";
import { ArrayItems, Form, FormButtonGroup, FormItem, Input, Reset, Select, Submit } from "@formily/antd";
import { Form as FormCore, createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import { observer } from "@formily/reactive-react";
import { Button } from "antd";
import React, { useMemo, Fragment } from "react";
import { Header } from "./Header";
import { traverseTree } from "./shared";
import "./styles.less";
import { ITreeDataSource } from "./types";

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayItems,
    ValueInput,
    Select,
  },
});

export interface IDataSettingPanelProps {
  treeDataSource: ITreeDataSource;
  allowExtendOption?: boolean;
  effects?: (form: FormCore<any>) => void;
}

export const DataSettingPanel: React.FC<
  React.PropsWithChildren<IDataSettingPanelProps>
> = observer((props) => {
  const { allowExtendOption, effects } = props;
  const prefix = usePrefix("data-request-setter");
  const form = useMemo(() => {
    let values: any;
    traverseTree(props.treeDataSource.dataSource, (dataItem) => {
      if (dataItem.key === props.treeDataSource.selectedKey) {
        values = dataItem;
      }
    });
    return createForm({
      values,
      effects: effects,
    });
  }, [
    props.treeDataSource.selectedKey,
    props.treeDataSource.dataSource.length,
  ]);
  if (!props.treeDataSource.selectedKey)
    return (
      <Fragment>
        <Header
          title={
            <TextWidget token="SettingComponents.RequestSourceSetter.nodeProperty" />
          }
          extra={null}
        />
        <div className={`${`${prefix}-layout-item-content`}`}>
          <TextWidget token="SettingComponents.RequestSourceSetter.pleaseSelectNode" />
        </div>
      </Fragment>
    );
  return (
    <Fragment>
      <Header
        title={
          <TextWidget token="SettingComponents.RequestSourceSetter.nodeProperty" />
        }
        extra={null}
      // extra={
      //   allowExtendOption ? (
      //     <Button
      //       type="text"
      //       onClick={() => {
      //         form.setFieldState("map", (state) => {
      //           state.value.push({});
      //         });
      //       }}
      //       icon={<PlusOutlined />}
      //     >
      //       <TextWidget token="SettingComponents.DataSourceSetter.addKeyValuePair" />
      //     </Button>
      //   ) : null
      // }
      />
      <div className={`${`${prefix}-layout-item-content`}`}>
        <Form form={form} labelWidth={140} >
          <SchemaField>
            <SchemaField.Object>
              <SchemaField.String
                name="name"
                title="名称"
                required
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.String
                name="desc"
                title="描述"
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.String
                name="path"
                title="HTTP URL"
                required
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.String
                name="method"
                title="HTTP Method"
                required
                x-decorator="FormItem"
                x-component="Select"
                enum={[
                  { label: 'GET', value: 'GET' },
                  { label: 'POST', value: 'POST' },
                ]}
              />
              <SchemaField.Array
                name="requestParam"
                title="请求参数"
                x-decorator="FormItem"
                x-component="ArrayItems"
              >
                <SchemaField.Object x-decorator="ArrayItems.Item">
                  <SchemaField.String
                    name="paramKey"
                    x-component="Input"
                    x-component-props={{ placeholder: 'key' }}
                  />
                  <SchemaField.Void
                    x-component={() => <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>:</div>}
                  />
                  <SchemaField.String
                    name="paramValue"
                    x-component="Input"
                    x-component-props={{ placeholder: 'value' }}
                  />
                  <SchemaField.Void
                    x-decorator="FormItem"
                    x-component="ArrayItems.Remove"
                  />
                </SchemaField.Object>
                <SchemaField.Void
                  x-component="ArrayItems.Addition"
                  title="添加"
                />
              </SchemaField.Array>
              <SchemaField.Array
                name="requestBody"
                title="请求体"
                x-decorator="FormItem"
                x-component="ArrayItems"
              >
                <SchemaField.Object x-decorator="ArrayItems.Item">
                  <SchemaField.String
                    name="paramKey"
                    x-component="Input"
                    x-component-props={{ placeholder: 'key' }}
                  />
                  <SchemaField.Void
                    x-component={() => <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>:</div>}
                  />
                  <SchemaField.String
                    name="paramValue"
                    x-component="Input"
                    x-component-props={{ placeholder: 'value' }}
                  />
                  <SchemaField.Void
                    x-decorator="FormItem"
                    x-component="ArrayItems.Remove"
                  />
                </SchemaField.Object>
                <SchemaField.Void
                  x-component="ArrayItems.Addition"
                  title="添加"
                />
              </SchemaField.Array>
              <SchemaField.Array
                name="requestHeader"
                title="请求头"
                x-decorator="FormItem"
                x-component="ArrayItems"
              >
                <SchemaField.Object x-decorator="ArrayItems.Item">
                  <SchemaField.String
                    name="paramKey"
                    x-component="Input"
                    x-component-props={{ placeholder: 'key' }}
                  />
                  <SchemaField.Void
                    x-component={() => <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>:</div>}
                  />
                  <SchemaField.String
                    name="paramValue"
                    x-component="Input"
                    x-component-props={{ placeholder: 'value' }}
                  />
                  <SchemaField.Void
                    x-decorator="FormItem"
                    x-component="ArrayItems.Remove"
                  />
                </SchemaField.Object>
                <SchemaField.Void
                  x-component="ArrayItems.Addition"
                  title="添加"
                />
              </SchemaField.Array>
            </SchemaField.Object>
            {/* <SchemaField.Array name="map" x-component="ArrayItems">
              <SchemaField.Object
                x-decorator="ArrayItems.Item"
                x-decorator-props={{ type: "divide" }}
              >
                <SchemaField.String
                  title={
                    <TextWidget token="SettingComponents.DataSourceSetter.label" />
                  }
                  x-decorator="FormItem"
                  x-disabled={!allowExtendOption}
                  name="label"
                  x-component="Input"
                />
                <SchemaField.String
                  title={
                    <TextWidget token="SettingComponents.DataSourceSetter.value" />
                  }
                  x-decorator="FormItem"
                  name="value"
                  x-component="ValueInput"
                />
                <SchemaField.Void
                  x-component="ArrayItems.Remove"
                  x-visible={allowExtendOption}
                  x-component-props={{
                    style: {
                      margin: 5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  }}
                />
              </SchemaField.Object>
            </SchemaField.Array> */}
          </SchemaField>
          <FormButtonGroup.FormItem>
            <Submit onSubmit={console.log}>保存</Submit>
            <Reset>取消</Reset>
          </FormButtonGroup.FormItem>
        </Form>
      </div >
    </Fragment >
  );
});
