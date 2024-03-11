import { uid, clone } from '@formily/shared'
import { IDataSourceItem } from './types'
import { GlobalRegistry } from '@designer/core'

export const traverseData = <T extends IDataSourceItem>(
  data: T[],
  callback: (dataItem: T, i: number, data: T[]) => any
) => {
  for (let i = 0; i < data.length; i++) {
    callback(data[i], i, data)
  }
}

export const transformValueToData = (value: IDataSourceItem[]): IDataSourceItem[] => {
  const data = clone(value);
  return data
}

export const transformDataToValue = (data: IDataSourceItem[]): IDataSourceItem[] => {
  const value = clone(data)
  return value
}
