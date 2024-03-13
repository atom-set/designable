import React, { useMemo } from "react";
import format from "dateformat";
import { observer } from "@formily/reactive-react";
import { RequestSourceSetter } from "@designer/settings-form";
import { usePrefix, useWorkbench } from "../../hooks";
import { TextWidget } from "../TextWidget";
import "./styles.less";
import cls from "classnames";
import { Button } from "antd";
import { useForm } from "@formily/react";
import { Form } from "@formily/antd";
import { createForm } from "@formily/core";


export const DatabaseWidget: React.FC<React.PropsWithChildren> = observer(() => {
  const workbench = useWorkbench();
  const currentWorkspace =
    workbench?.activeWorkspace || workbench?.currentWorkspace;
  const prefix = usePrefix("database");
  if (!currentWorkspace) return null;

  const form = useMemo(() => {
    return createForm();
  }, []);

  return (
    <div className={prefix}>
      <Form
        form={form}
        colon={false}
        labelWidth={120}
        labelAlign="left"
        wrapperAlign="right"
        feedbackLayout="none"
        tooltipLayout="text"
      >
        <RequestSourceSetter onChange={() => { }} value={[]} />
      </Form>
    </div>
  );
});