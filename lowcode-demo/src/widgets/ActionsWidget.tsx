import { GlobalRegistry } from "@designer/core";
import { TextWidget, useDesigner } from "@designer/react";
import { observer } from "@formily/react";
import { Button, Radio, Space, Popconfirm } from "antd";
import React, { useEffect } from "react";
import { loadInitialSchema, publicSchema, resetSchema, saveSchema } from "../utils";

export const ActionsWidget = observer(() => {
  const designer = useDesigner();
  useEffect(() => {
    loadInitialSchema(designer);
  }, []);
  const supportLocales = ["zh-cn", "en-us"];
  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage("zh-cn");
    }
  }, []);
  return (
    <Space style={{ marginRight: 10 }}>
      <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: "English", value: "en-us" },
          { label: "简体中文", value: "zh-cn" },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          saveSchema(designer);
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Popconfirm
        title={() => {
          return <TextWidget>confirmReset</TextWidget>
        }}
        onConfirm={() => {
          resetSchema(designer);
        }}
        okText="Confirm"
        cancelText="Cancel"
      >
        <Button danger><TextWidget>reset</TextWidget></Button>
      </Popconfirm>
      <Button
        type="primary"
        onClick={() => {
          publicSchema(designer);
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </Space>
  );
});
