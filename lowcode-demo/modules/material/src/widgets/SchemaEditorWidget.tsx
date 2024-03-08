import { ITreeNode, TreeNode } from "@designer/core";
import { MonacoInput } from "@designer/settings-form";
import React from "react";
import { transformToSchema, transformToTreeNode } from "../utils/transformer";

export interface ISchemaEditorWidgetProps {
  tree: TreeNode;
  onChange?: (tree: ITreeNode) => void;
}

export const SchemaEditorWidget: React.FC<
  React.PropsWithChildren<ISchemaEditorWidgetProps>
> = (props) => {
  console.log('transformToSchema(props.tree):', transformToSchema(props.tree));
  return (
    <MonacoInput
      {...props}
      value={JSON.stringify(transformToSchema(props.tree), null, 2)}
      onChange={(value) => {
        props.onChange?.(transformToTreeNode(JSON.parse(value)));
      }}
      language="json"
    />
  );
};
