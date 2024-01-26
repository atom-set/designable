import { createBehavior } from '@designable/core'
import { createFieldSchema, createVoidFieldSchema } from '../Field'
// import { AllSchemas } from '../../schemas'
// import { AllLocales } from '../../locales'
import {
  ArrayCards as ArrayCardsSchema,
  ArrayTable as ArrayTableSchema,
} from '../Base/schema'
import {
  ArrayTable as ArrayTableLocales,
  ArrayCards as ArrayCardsLocales,
} from '../Base/locales'
import {
  ArrayAddition,
  ArrayIndex,
  ArrayMoveDown,
  ArrayMoveUp,
  ArrayRemove,
} from './locales'

export const createArrayBehavior = (name: 'ArrayCards' | 'ArrayTable') => {
  return createBehavior(
    {
      name,
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === name,
      designerProps: {
        droppable: true,
        // propsSchema: createFieldSchema(AllSchemas[name]),
        propsSchema: createFieldSchema(
          name === 'ArrayCards' ? ArrayCardsSchema : ArrayTableSchema
        ),
      },
      // designerLocales: AllLocales[name],
      designerLocales:
        name === 'ArrayTable' ? ArrayTableLocales : ArrayCardsLocales,
    },
    {
      name: `${name}.Addition`,
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === `${name}.Addition`,
      designerProps: {
        allowDrop(parent) {
          return parent.props['x-component'] === name
        },
        // propsSchema: createVoidFieldSchema(AllSchemas[name].Addition),
        propsSchema: createVoidFieldSchema(
          name === 'ArrayCards'
            ? ArrayCardsSchema.Addition
            : ArrayTableSchema.Addition
        ),
      },
      // designerLocales: AllLocales.ArrayAddition,
      designerLocales: ArrayAddition,
    },
    {
      name: `${name}.Remove`,
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === `${name}.Remove`,
      designerProps: {
        allowDrop(parent) {
          return parent.props['x-component'] === name
        },
        propsSchema: createVoidFieldSchema(),
      },
      // designerLocales: AllLocales.ArrayRemove,
      designerLocales: ArrayRemove,
    },
    {
      name: `${name}.Index`,
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === `${name}.Index`,
      designerProps: {
        allowDrop(parent) {
          return parent.props['x-component'] === name
        },
        propsSchema: createVoidFieldSchema(),
      },
      // designerLocales: AllLocales.ArrayIndex,
      designerLocales: ArrayIndex,
    },
    {
      name: `${name}.MoveUp`,
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === `${name}.MoveUp`,
      designerProps: {
        allowDrop(parent) {
          return parent.props['x-component'] === name
        },
        propsSchema: createVoidFieldSchema(),
      },
      // designerLocales: AllLocales.ArrayMoveUp,
      designerLocales: ArrayMoveUp,
    },
    {
      name: `${name}.MoveDown`,
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === `${name}.MoveDown`,
      designerProps: {
        allowDrop(parent) {
          return parent.props['x-component'] === 'ArrayCards'
        },
        propsSchema: createVoidFieldSchema(),
      },
      // designerLocales: AllLocales.ArrayMoveDown,
      designerLocales: ArrayMoveDown,
    }
  )
}
