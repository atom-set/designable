export interface IDataSourceItem {
  label?: "";
  value?: any;
  children?: any[];
}

export interface INodeItem {
  key: string;
  title: string;
  duplicateKey?: string;
  config?: Record<string, any>
}

export interface ITreeDataSource {
  dataSource: INodeItem[];
  selectedKey: string;
}
