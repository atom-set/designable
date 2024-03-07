
export interface IDataSourceItemConfig {
  name: string;
  desc?: string;
  path: string;
  method: "GET" | "POST";
  requestParam?: Array<{
    paramKey: string;
    paramValue: string;
  }>;
  requestBody?: Array<{
    paramKey: string;
    paramValue: string;
  }>;
  requestHeader?: Array<{
    paramKey: string;
    paramValue: string;
  }>;
  requestAdapter?: string;
  responseAdapter?: string;
}

export interface IDataSourceItem {
  key: string;
  title: string;
  duplicateKey?: string;
  config?: IDataSourceItemConfig
}

export interface IDataSource {
  dataSource: IDataSourceItem[];
  selectedKey: string;
}
