import { Engine } from "@designer/core";
import { message } from "antd";
import { transformToSchema, transformToTreeNode } from "./transformer";

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    "formily-schema",
    JSON.stringify(transformToSchema(designer.getCurrentTree()!)),
  );
  message.success("Save Success");
};

export const resetSchema = (designer: Engine) => {
  if (designer?.workbench?.currentWorkspace?.id) {
    delete designer.getCurrentTree().props.effects;
    delete designer.getCurrentTree().props.scope;
  }
  designer.setCurrentTree(transformToTreeNode({}));
  localStorage.removeItem("formily-schema",);
  message.success("Reset Success");
};

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem("formily-schema")!)),
    );
  } catch { }
};

export const publicSchema = (designer: Engine) => {
  const jsonSchema = transformToSchema(designer.getCurrentTree());
  localStorage.setItem(
    "formily-schema",
    JSON.stringify(jsonSchema!),
  );

  message.success("Public Success");
};
