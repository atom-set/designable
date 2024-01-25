/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.30.1(5a7ba61be909ae9e4889768a3453ebb0dec392e2)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/pla/pla', ['require', 'exports'], function (e, o) {
  'use strict'
  Object.defineProperty(o, '__esModule', { value: !0 }),
    (o.language = o.conf = void 0),
    (o.conf = {
      comments: { lineComment: '#' },
      brackets: [
        ['[', ']'],
        ['<', '>'],
        ['(', ')'],
      ],
      autoClosingPairs: [
        { open: '[', close: ']' },
        { open: '<', close: '>' },
        { open: '(', close: ')' },
      ],
      surroundingPairs: [
        { open: '[', close: ']' },
        { open: '<', close: '>' },
        { open: '(', close: ')' },
      ],
    }),
    (o.language = {
      defaultToken: '',
      tokenPostfix: '.pla',
      brackets: [
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '<', close: '>', token: 'delimiter.angle' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
      ],
      keywords: [
        '.i',
        '.o',
        '.mv',
        '.ilb',
        '.ob',
        '.label',
        '.type',
        '.phase',
        '.pair',
        '.symbolic',
        '.symbolic-output',
        '.kiss',
        '.p',
        '.e',
        '.end',
      ],
      comment: /#.*$/,
      identifier: /[a-zA-Z]+[a-zA-Z0-9_\-]*/,
      plaContent: /[01\-~\|]+/,
      tokenizer: {
        root: [
          { include: '@whitespace' },
          [/@comment/, 'comment'],
          [
            /\.([a-zA-Z_\-]+)/,
            {
              cases: {
                '@eos': { token: 'keyword.$1' },
                '@keywords': {
                  cases: {
                    '.type': { token: 'keyword.$1', next: '@type' },
                    '@default': { token: 'keyword.$1', next: '@keywordArg' },
                  },
                },
                '@default': { token: 'keyword.$1' },
              },
            },
          ],
          [/@identifier/, 'identifier'],
          [/@plaContent/, 'string'],
        ],
        whitespace: [[/[ \t\r\n]+/, '']],
        type: [
          { include: '@whitespace' },
          [/\w+/, { token: 'type', next: '@pop' }],
        ],
        keywordArg: [
          [
            /[ \t\r\n]+/,
            { cases: { '@eos': { token: '', next: '@pop' }, '@default': '' } },
          ],
          [/@comment/, 'comment', '@pop'],
          [
            /[<>()\[\]]/,
            {
              cases: {
                '@eos': { token: '@brackets', next: '@pop' },
                '@default': '@brackets',
              },
            },
          ],
          [
            /\-?\d+/,
            {
              cases: {
                '@eos': { token: 'number', next: '@pop' },
                '@default': 'number',
              },
            },
          ],
          [
            /@identifier/,
            {
              cases: {
                '@eos': { token: 'identifier', next: '@pop' },
                '@default': 'identifier',
              },
            },
          ],
          [
            /[;=]/,
            {
              cases: {
                '@eos': { token: 'delimiter', next: '@pop' },
                '@default': 'delimiter',
              },
            },
          ],
        ],
      },
    })
})
