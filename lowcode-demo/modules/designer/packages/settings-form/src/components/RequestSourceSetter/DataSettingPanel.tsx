import { TextWidget, usePrefix } from "@designer/react";
import { ValueInput } from "../ValueInput";
import { ArrayItems, Form, FormButtonGroup, FormItem, FormTab, Input, Reset, Select, Submit } from "@formily/antd";
import { Form as FormCore, createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import { observer } from "@formily/reactive-react";
import React, { useMemo, Fragment } from "react";
import { Header } from "./Header";
import { traverseData } from "./shared";
import "./styles.less";
import { IDataSource } from "./types";
import { RequestSetter } from "./RequestSetter";
import { ResponseSetter } from "./ResponseSetter";

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayItems,
    ValueInput,
    Select,
    FormTab,
    RequestSetter,
    ResponseSetter,
  },
});

export interface IDataSettingPanelProps {
  treeDataSource: IDataSource;
  effects?: (form: FormCore<any>) => void;
}

const formTab = FormTab.createFormTab('requestTab');

export const DataSettingPanel: React.FC<
  React.PropsWithChildren<IDataSettingPanelProps>
> = observer((props) => {
  const { effects } = props;
  const prefix = usePrefix("data-request-setter");

  const form = useMemo(() => {
    let values: any;
    traverseData(props.treeDataSource.dataSource, (dataItem) => {
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

  if (!props.treeDataSource.selectedKey) {
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
  }

  return (
    <Fragment>
      <Header
        title={
          <TextWidget token="SettingComponents.RequestSourceSetter.nodeProperty" />
        }
        extra={null}
      />
      <div className={`${`${prefix}-layout-item-content`}`}>
        <Form form={form} labelWidth={140} >
          <SchemaField>
            <SchemaField.Void>
              <SchemaField.String
                name="title"
                title={
                  <TextWidget token="SettingComponents.RequestSourceSetter.title" />
                }
                required
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.String
                name="name"
                title={
                  <TextWidget token="SettingComponents.RequestSourceSetter.name" />
                }
                required
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.String
                name="desc"
                title={
                  <TextWidget token="SettingComponents.RequestSourceSetter.description" />
                }
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.String
                name="path"
                title={
                  <TextWidget token="SettingComponents.RequestSourceSetter.requestPath" />
                }
                required
                x-validator="url"
                x-decorator="FormItem"
                x-component="Input"
              />
              <SchemaField.String
                name="method"
                title={
                  <TextWidget token="SettingComponents.RequestSourceSetter.requestMethod" />
                }
                required
                x-decorator="FormItem"
                x-component="Select"
                enum={[
                  { label: 'GET', value: 'GET' },
                  { label: 'POST', value: 'POST' },
                ]}
              />
              {/* <SchemaField.Array
                name="requestParam"
                title={
                  <TextWidget token="SettingComponents.RequestSourceSetter.requestParam" />
                }
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
                  title={
                    <TextWidget token="SettingComponents.RequestSourceSetter.addition" />
                  }
                />
              </SchemaField.Array> */}
              <SchemaField.Array
                name="requestBody"
                title={
                  <TextWidget token="SettingComponents.RequestSourceSetter.requestBody" />
                }
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
                  title={
                    <TextWidget token="SettingComponents.RequestSourceSetter.addition" />
                  }
                />
              </SchemaField.Array>
              <SchemaField.Array
                name="requestHeader"
                title={
                  <TextWidget token="SettingComponents.RequestSourceSetter.requestHeader" />
                }
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
                  title={
                    <TextWidget token="SettingComponents.RequestSourceSetter.addition" />
                  }
                />
              </SchemaField.Array>
              <SchemaField.Void
                type="void"
                x-component="FormTab"
                x-component-props={{
                  formTab,
                }}
              >
                <SchemaField.Void
                  type="void"
                  x-component="FormTab.TabPane"
                  x-component-props={{ tab: '请求参数剪裁', key: "requestTab" }}
                >
                  <SchemaField.String
                    name="requestAdapter"
                    x-component="RequestSetter"
                  />
                </SchemaField.Void>
                <SchemaField.Void
                  type="void"
                  x-component="FormTab.TabPane"
                  x-component-props={{ tab: '响应数据剪裁', key: "responseTab" }}
                >
                  <SchemaField.String
                    name="responseAdapter"
                    x-component="ResponseSetter"
                  />
                </SchemaField.Void>

              </SchemaField.Void>
            </SchemaField.Void>
          </SchemaField>
        </Form>
      </div >
    </Fragment >
  );
});
