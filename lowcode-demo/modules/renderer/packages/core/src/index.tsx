import { ITreeNode, TreeNode } from "@designer/core";
import { SchemaEditorWidget } from "./SchemaEditorWidget";
import { MarkupSchemaWidget } from "./MarkupSchemaWidget";
import { PreviewWidget } from "./PreviewWidget";

interface IRendererProps {
  type: 'Preview' | 'Editor';
  schema: 'Markup' | 'JSON';
  onChange?: (tree: ITreeNode) => void;
  tree: TreeNode
}

export const Renderer = (props: IRendererProps) => {
  const { type, schema, tree, onChange } = props;

  // schema edit mode
  if (type === 'Editor' && schema === 'JSON') {
    return <SchemaEditorWidget tree={tree} onChange={onChange} />
  }

  // Markup Editor
  if (type === 'Editor' && schema === 'Markup') {
    return <MarkupSchemaWidget tree={tree} />
  }

  // Preview mode
  return <PreviewWidget tree={tree} />
};
