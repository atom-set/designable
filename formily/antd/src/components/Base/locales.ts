import { GlobalRegistry } from '@designable/core'

export const DatePickerLocal = {
  zh: {
    title: '日期选择',
    settings: {
      'x-component-props': {
        disabledDate: {
          title: '不可选日期',
          tooltip: '格式 (currentDate: moment) => boolean',
        },
        disabledTime: {
          title: '不可选时间',
          tooltip: '格式 (currentDate: moment) => boolean',
        },
        inputReadOnly: '输入框只读',
        format: '格式',
        picker: {
          title: '选择器类型',
          dataSource: ['时间', '日期', '月份', '年', '季度', '财年'],
        },
        showNow: '显示此刻',
        showTime: '时间选择',
        showToday: '显示今天',
      },
    },
  },
  en: {
    title: 'DatePicker',
    settings: {
      'x-component-props': {
        disabledDate: {
          title: 'Disabled Date',
          tooltip: 'Format (currentDate: moment) => boolean',
        },
        disabledTime: {
          title: 'Disabled Time',
          tooltip: 'Format (currentDate: moment) => boolean',
        },
        inputReadOnly: 'Input ReadOnly',
        format: 'Format',
        picker: {
          title: 'Picker Type',
          dataSource: ['Time', 'Date', 'Month', 'Year', 'Quarter', 'Decade'],
        },
        showNow: 'Show Now',
        showTime: 'Show Time',
        showToday: 'Show Today',
      },
    },
  },
}

export const Input = {
  'zh-CN': {
    title: '输入框',
    settings: {
      'x-component-props': {
        addonAfter: '后缀标签',
        addonBefore: '前缀标签',
        maxLength: '最大长度',
        prefix: '前缀',
        suffix: '后缀',
        autoSize: {
          title: '自适应高度',
          tooltip: '可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
        },
        showCount: '是否展示字数',
        checkStrength: '检测强度',
      },
    },
  },
  'en-US': {
    title: 'Input',
    settings: {
      'x-component-props': {
        addonAfter: 'Addon After',
        addonBefore: 'Addon Before',
        maxLength: 'Max Length',
        prefix: 'Prefix',
        suffix: 'Suffix',
        autoSize: 'Auto Size',
        showCount: 'Show Count',
        checkStrength: 'Check Strength',
      },
    },
  },
}

export const Component = {
  'zh-CN': {
    settings: {
      style: {
        width: '宽度',
        height: '高度',
        display: '展示',
        background: '背景',
        boxShadow: '阴影',
        font: '字体',
        margin: '外边距',
        padding: '内边距',
        borderRadius: '圆角',
        border: '边框',
        opacity: '透明度',
      },
    },
  },
  'en-US': {
    settings: {
      style: {
        width: 'Width',
        height: 'Height',
        display: 'Display',
        background: 'Background',
        boxShadow: 'Box Shadow',
        font: 'Font',
        margin: 'Margin',
        padding: 'Padding',
        borderRadius: 'Radius',
        border: 'Border',
        opacity: 'Opacity',
      },
    },
  },
}

export const Card = {
  'zh-CN': {
    title: '卡片',
    settings: {
      'x-component-props': {
        type: '类型',
        title: '标题',
        extra: '右侧扩展',
        cardTypes: [
          { label: '内置', value: 'inner' },
          { label: '默认', value: '' },
        ],
      },
    },
  },
  'en-US': {
    title: 'Card',
    settings: {
      'x-component-props': {
        type: 'Type',
        title: 'Title',
        extra: 'Extra',
        cardTypes: [
          { label: 'Inner', value: 'inner' },
          { label: 'Default', value: '' },
        ],
      },
    },
  },
}

export const ArrayTable = {
  'zh-CN': {
    title: '自增表格',
    addSortHandle: '添加排序',
    addColumn: '添加列',
    addIndex: '添加索引',
    addOperation: '添加操作',
    settings: {
      'x-component-props': {
        showHeader: '显示头部',
        sticky: '吸顶',
        align: {
          title: '对齐',
          dataSource: ['左', '右', '居中'],
        },
        colSpan: '跨列',
        fixed: { title: '固定列', dataSource: ['左', '右', '无'] },
        width: '宽度',
        defaultValue: '默认值',
        tableLayout: {
          title: '表格布局',
          dataSource: ['自动', '固定'],
        },
      },
    },
  },
  'en-US': {
    title: 'Array Table',
    addSortHandle: 'Add Sort Handle',
    addColumn: 'Add Column',
    addIndex: 'Add Index',
    addOperation: 'Add Operations',
    settings: {
      'x-component-props': {
        showHeader: 'Show Header',
        sticky: 'Sticky',
        align: {
          title: 'Align',
          dataSource: ['Left', 'Right', 'Center'],
        },
        colSpan: 'Col Span',
        fixed: { title: 'Fixed', dataSource: ['Left', 'Right', 'None'] },
        width: 'Width',
        defaultValue: 'Default Value',
        tableLayout: {
          title: 'Table Layout',
          dataSource: ['Auto', 'Fixed'],
        },
      },
    },
  },
}
export const ArrayTableColumn = {
  'zh-CN': {
    title: '表格列',
    settings: {
      'x-component-props': {
        title: '标题',
        align: {
          title: '内容对齐',
          dataSource: ['左', '右', '居中'],
        },
        colSpan: '跨列',
        width: '宽度',
        fixed: {
          title: '固定',
          dataSource: ['左', '右', '无'],
        },
      },
    },
  },
  'en-US': {
    title: 'Column',
    settings: {
      'x-component-props': {
        title: 'Title',
        align: {
          title: 'Align',
          dataSource: ['Left', 'Right', 'Center'],
        },
        colSpan: 'Col Span',
        width: 'Width',
        fixed: {
          title: 'Fixed',
          dataSource: ['Left', 'Right', 'None'],
        },
      },
    },
  },
}

export const ArrayCards = {
  'zh-CN': {
    ...Card['zh-CN'],
    title: '自增卡片',
    addIndex: '添加索引',
    addOperation: '添加操作',
  },
  'en-US': {
    ...Card['en-US'],
    title: 'Array Cards',
    addIndex: 'Add Index',
    addOperation: 'Add Operations',
  },
}

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    Previews: {
      droppable: '可以拖入组件',
      addTabPane: '添加选项卡',
      addCollapsePanel: '添加手风琴卡片',
      addTableColumn: '添加表格列',
      addTableSortHandle: '添加排序',
      addIndex: '添加索引',
      addOperation: '添加操作',
    },
  },
})
