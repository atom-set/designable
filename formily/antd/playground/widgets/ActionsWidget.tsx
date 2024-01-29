/**
 * @description 2024-01-09 常用功能入口
 * 1、语言切换
 * 2、保存和发布schema
 */
import React, { useEffect } from 'react'
import { Space, Button } from 'antd'
// import { GithubOutlined } from '@ant-design/icons'
import { useDesigner, TextWidget } from '@designable/react'
import { GlobalRegistry } from '@designable/core'
import { observer } from '@formily/react'
import { loadInitialSchema, saveSchema } from '../service'
import { sendLog } from '@designable/shared'

export const ActionsWidget = observer(() => {
  const designer = useDesigner()

  useEffect(() => {
    loadInitialSchema(designer)
  }, [])

  const supportLocales = ['zh-cn', 'en-us']

  useEffect(() => {
    sendLog(
      false,
      '2024-01-09: default Language:',
      GlobalRegistry.getDesignerLanguage()
    )
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage('zh-cn')
    }
  }, [])

  sendLog(
    false,
    '2024-01-09 GlobalRegistry:',
    GlobalRegistry.getDesignerLanguage()
  )
  return (
    <Space style={{ marginRight: 10 }}>
      {/* <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: 'English', value: 'en-us' },
          { label: '简体中文', value: 'zh-cn' },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value)
        }}
      /> */}
      {/* <Button href="https://github.com/atom-set/designable" target="_blank">
        <GithubOutlined />
        Github
      </Button> */}
      <Button
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </Space>
  )
})
