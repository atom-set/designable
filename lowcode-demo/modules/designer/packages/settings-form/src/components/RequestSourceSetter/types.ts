export interface IDataSourceItem {
  key: string;
  duplicateKey: string;
  title: string;
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

export interface IDataSource {
  dataSource: IDataSourceItem[];
  selectedKey: string;
}
