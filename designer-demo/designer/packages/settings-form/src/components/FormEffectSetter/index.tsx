import { GlobalRegistry } from "@designer/core";
import { TextWidget, usePrefix, useSelectedNode } from "@designer/react";
import { MonacoInput } from "../MonacoInput";
import { requestIdle } from "@designer/shared";
import {
  ArrayTable,
  Form,
  FormCollapse,
  FormItem,
  Input,
  Select,
} from "@formily/antd";
import { createForm, isVoidField, onFieldInputValueChange } from "@formily/core";
import { createSchemaField, useField } from "@formily/react";
import { clone, uid } from "@formily/shared";
import { Button, Card, Modal, Tag, Tooltip } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { FieldPropertySetter } from "./FieldPropertySetter";
import { PathSelector } from "./PathSelector";
import { initDeclaration } from "./declarations";
import { FulfillRunHelper } from "./helpers";
import "./styles.less";
import { IReaction } from "./types";

export interface IFormEffectSetterProps {
  value?: IReaction; //  TODO:
  onChange?: (value: IReaction) => void;
}

const TypeView = ({ value }: { value: any }) => {
  const text = String(value);
  if (text.length <= 26) return <Tag>{text}</Tag>;
  return (
    <Tag>
      <Tooltip
        title={
          <div style={{ fontSize: 12 }}>
            <code>
              <pre style={{ whiteSpace: "pre-wrap", padding: 0, margin: 0 }}>
                {text}
              </pre>
            </code>
          </div>
        }
      >
        {text.substring(0, 24)}...
      </Tooltip>
    </Tag>
  );
};

const SchemaField = createSchemaField({
  components: {
    Card,
    FormCollapse,
    Input,
    TypeView,
    Select,
    FormItem,
    PathSelector,
    MonacoInput,
    FieldPropertySetter,
    ArrayTable,
  },
});

export const FormEffectSetter: React.FC<
  React.PropsWithChildren<IFormEffectSetterProps>
> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [innerVisible, setInnerVisible] = useState(false);
  const prefix = usePrefix("effects-setter");

  const form = useMemo(() => {
    console.log('clone(props.value),:', clone(props.value))
    return createForm({
      values: clone(props.value),
    });
  }, [modalVisible, props.value]);

  const formCollapse = useMemo(
    () => FormCollapse.createFormCollapse?.(["field", "state"]),
    [modalVisible],
  );

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  useEffect(() => {
    if (modalVisible) {
      requestIdle(
        () => {
          initDeclaration().then(() => {
            setInnerVisible(true);
          });
        },
        {
          timeout: 400,
        },
      );
    } else {
      setInnerVisible(false);
    }
  }, [modalVisible]);

  const FieldStateValueTypes = {
    modified: 'boolean',
    initialized: 'boolean',
    title: 'string',
    description: 'string',
    mounted: 'boolean',
    unmounted: 'boolean',
    active: 'boolean',
    visited: 'boolean',
    loading: 'boolean',
    errors: 'string[]',
    warnings: 'string[]',
    successes: 'string[]',
    feedbacks: `Array<
    triggerType?: 'onInput' | 'onFocus' | 'onBlur'
    type?: 'error' | 'success' | 'warning'
    code?:
      | 'ValidateError'
      | 'ValidateSuccess'
      | 'ValidateWarning'
      | 'EffectError'
      | 'EffectSuccess'
      | 'EffectWarning'
    messages?: string[]
  >
  `,
    valid: 'boolean',
    invalid: 'boolean',
    pattern: "'editable' | 'disabled' | 'readOnly' | 'readPretty'",
    display: "'visible' | 'hidden' | 'none'",
    disabled: 'boolean',
    readOnly: 'boolean',
    readPretty: 'boolean',
    visible: 'boolean',
    hidden: 'boolean',
    editable: 'boolean',
    validateStatus: "'error' | 'warning' | 'success' | 'validating'",
    validating: 'boolean',
  }


  console.log('form:', form)
  return (
    <>
      <Button block onClick={openModal}>
        <TextWidget token="SettingComponents.FormEffectSetter.configureFormEffect" />
      </Button>
      <Modal
        title={GlobalRegistry.getDesignerMessage(
          "SettingComponents.FormEffectSetter.configureFormEffect",
        )}
        width="70%"
        centered
        bodyStyle={{ padding: 10 }}
        transitionName=""
        maskTransitionName=""
        open={modalVisible}
        onCancel={closeModal}
        destroyOnClose
        onOk={() => {
          form.submit((values) => {
            props.onChange?.(values);
          });
          closeModal();
        }}
      >
        <div className={prefix}>
          {innerVisible && (
            <Form form={form}>
              <SchemaField>
                <SchemaField.Void
                  x-component="FormCollapse"
                  x-component-props={{
                    formCollapse,
                    defaultActiveKey: ["field", "state"],
                    style: { marginBottom: 10 },
                  }}
                >
                  <SchemaField.Void
                    x-component="FormCollapse.CollapsePanel"
                    x-component-props={{
                      key: "field",
                      header: GlobalRegistry.getDesignerMessage(
                        "SettingComponents.FormEffectSetter.fromPath",
                      ),
                    }}
                  >
                    <SchemaField.Array
                      name="fieldList"
                      x-component="ArrayTable"
                    >
                      <SchemaField.Object>
                        <SchemaField.Void
                          x-component="ArrayTable.Column"
                          x-component-props={{
                            title: GlobalRegistry.getDesignerMessage(
                              "SettingComponents.FormEffectSetter.fieldTitle",
                            ),
                            width: 240,
                          }}
                        >
                          <SchemaField.String
                            name="fieldTitle"
                            x-decorator="FormItem"
                            x-component={(props) => {
                              const index = ArrayTable.useIndex?.();
                              console.log('props:', props)
                              return (
                                <PathSelector
                                  value={props.value}
                                  placeholder={GlobalRegistry.getDesignerMessage(
                                    "SettingComponents.FormEffectSetter.pleaseSelect",
                                  )}
                                  onChange={(value, node) => {
                                    form.setFieldState(
                                      `fieldList.${index}.fieldTitle`,
                                      (state) => {
                                        state.value = node.props.title || node.props['x-component-props'].title
                                      },
                                    );
                                    form.setFieldState(
                                      `fieldList.${index}.fieldName`,
                                      (state) => {
                                        state.value = node.props.name
                                      },
                                    );
                                    form.setFieldState(
                                      `fieldList.${index}.fieldPath`,
                                      (state) => {
                                        state.value = value
                                      },
                                    );

                                    form.setFieldState(
                                      `fieldList.${index}.fieldType`,
                                      (state) => {
                                        state.value = node.props?.type || 'any'
                                      },
                                    );

                                  }}
                                />
                              )
                            }}
                          />
                        </SchemaField.Void>
                        <SchemaField.Void
                          x-component="ArrayTable.Column"
                          x-component-props={{
                            title: GlobalRegistry.getDesignerMessage(
                              'SettingComponents.FormEffectSetter.fieldType'
                            ),
                            ellipsis: {
                              showTitle: false,
                            },
                            width: 200,
                            align: 'center',
                          }}
                        >
                          <SchemaField.String
                            name="fieldType"
                            default="any"
                            x-decorator="FormItem"
                            x-component="TypeView"
                          />
                        </SchemaField.Void>
                        <SchemaField.Void
                          x-component="ArrayTable.Column"
                          x-component-props={{
                            title: GlobalRegistry.getDesignerMessage(
                              "SettingComponents.FormEffectSetter.FieldName",
                            ),
                            width: 200,
                          }}
                        >
                          <SchemaField.String
                            name="fieldName"
                            x-decorator="FormItem"
                            x-component="Input"
                            x-disabled
                          />
                        </SchemaField.Void>
                        <SchemaField.Void
                          x-component="ArrayTable.Column"
                          x-component-props={{
                            title: GlobalRegistry.getDesignerMessage(
                              "SettingComponents.FormEffectSetter.fieldPath",
                            ),
                            width: 200,
                          }}
                        >
                          <SchemaField.String
                            name="fieldPath"
                            x-decorator="FormItem"
                            x-component="Input"
                            x-disabled

                          />
                        </SchemaField.Void>
                        <SchemaField.Void
                          x-component="ArrayTable.Column"
                          x-component-props={{
                            title: GlobalRegistry.getDesignerMessage(
                              "SettingComponents.FormEffectSetter.operations",
                            ),
                            align: "center",
                            width: 80,
                          }}
                        >
                          <SchemaField.Markup
                            type="void"
                            x-component="ArrayTable.Remove"
                          />
                        </SchemaField.Void>
                      </SchemaField.Object>
                      <SchemaField.Void
                        title={GlobalRegistry.getDesignerMessage(
                          "SettingComponents.FormEffectSetter.addFormField",
                        )}
                        x-component="ArrayTable.Addition"
                        x-component-props={{ style: { marginTop: 8 } }}
                      />
                    </SchemaField.Array>
                  </SchemaField.Void>
                  {/* 
                  <SchemaField.Void
                    x-component="FormCollapse.CollapsePanel"
                    x-component-props={{
                      header: GlobalRegistry.getDesignerMessage(
                        "SettingComponents.FormEffectSetter.propertyReactions",
                      ),
                      key: "state",
                      className: "reaction-state",
                    }}
                  >
                    <SchemaField.Markup
                      name="fulfill.state"
                      x-component="FieldPropertySetter"
                    />
                  </SchemaField.Void>
                  <SchemaField.Void
                    x-component="FormCollapse.CollapsePanel"
                    x-component-props={{
                      key: "run",
                      header: GlobalRegistry.getDesignerMessage(
                        "SettingComponents.FormEffectSetter.actionReactions",
                      ),
                      className: "reaction-runner",
                    }}
                  >
                    <SchemaField.String
                      name="fulfill.run"
                      x-component="MonacoInput"
                      x-component-props={{
                        width: "100%",
                        height: 400,
                        language: "typescript",
                        helpCode: FulfillRunHelper,
                        options: {
                          minimap: {
                            enabled: false,
                          },
                        },
                      }}
                      x-reactions={(field) => {
                        const deps = field.query("dependencies").value();
                        if (Array.isArray(deps)) {
                          field.componentProps["extraLib"] = `
                          declare var $deps : {
                            ${deps.map(({ name, type }) => {
                            if (!name) return "";
                            return `${name}?:${type || "any"},`;
                          })}
                          }
                          `;
                        }
                      }}
                    />
                  </SchemaField.Void> */}
                </SchemaField.Void>
              </SchemaField>
            </Form>
          )}
        </div>
      </Modal>
    </>
  );
};
