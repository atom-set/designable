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
    designer?.workbench?.removeWorkspace(designer?.workbench?.currentWorkspace?.id)
  }
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
