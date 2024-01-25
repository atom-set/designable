/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.30.1(5a7ba61be909ae9e4889768a3453ebb0dec392e2)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/bicep/bicep', ['require', 'exports'], function (
  e,
  n
) {
  'use strict'
  Object.defineProperty(n, '__esModule', { value: !0 }),
    (n.language = n.conf = void 0)
  var t = '\\b' + '[_a-zA-Z][_a-zA-Z0-9]*' + '\\b'
  ;(n.conf = {
    comments: { lineComment: '//', blockComment: ['/*', '*/'] },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
    ],
    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: "'", close: "'" },
      { open: "'''", close: "'''" },
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: "'", close: "'", notIn: ['string', 'comment'] },
      { open: "'''", close: "'''", notIn: ['string', 'comment'] },
    ],
    autoCloseBefore: ":.,=}])' \n\t",
    indentationRules: {
      increaseIndentPattern: new RegExp(
        '^((?!\\/\\/).)*(\\{[^}"\'`]*|\\([^)"\'`]*|\\[[^\\]"\'`]*)$'
      ),
      decreaseIndentPattern: new RegExp(
        '^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$'
      ),
    },
  }),
    (n.language = {
      defaultToken: '',
      tokenPostfix: '.bicep',
      brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
      ],
      symbols: /[=><!~?:&|+\-*/^%]+/,
      keywords: [
        'targetScope',
        'resource',
        'module',
        'param',
        'var',
        'output',
        'for',
        'in',
        'if',
        'existing',
      ],
      namedLiterals: ['true', 'false', 'null'],
      escapes: "\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\${)",
      tokenizer: {
        root: [{ include: '@expression' }, { include: '@whitespace' }],
        stringVerbatim: [
          { regex: "(|'|'')[^']", action: { token: 'string' } },
          { regex: "'''", action: { token: 'string.quote', next: '@pop' } },
        ],
        stringLiteral: [
          {
            regex: '\\${',
            action: { token: 'delimiter.bracket', next: '@bracketCounting' },
          },
          { regex: "[^\\\\'$]+", action: { token: 'string' } },
          { regex: '@escapes', action: { token: 'string.escape' } },
          { regex: '\\\\.', action: { token: 'string.escape.invalid' } },
          { regex: "'", action: { token: 'string', next: '@pop' } },
        ],
        bracketCounting: [
          {
            regex: '{',
            action: { token: 'delimiter.bracket', next: '@bracketCounting' },
          },
          { regex: '}', action: { token: 'delimiter.bracket', next: '@pop' } },
          { include: 'expression' },
        ],
        comment: [
          { regex: '[^\\*]+', action: { token: 'comment' } },
          { regex: '\\*\\/', action: { token: 'comment', next: '@pop' } },
          { regex: '[\\/*]', action: { token: 'comment' } },
        ],
        whitespace: [
          { regex: '[ \\t\\r\\n]' },
          { regex: '\\/\\*', action: { token: 'comment', next: '@comment' } },
          { regex: '\\/\\/.*$', action: { token: 'comment' } },
        ],
        expression: [
          {
            regex: "'''",
            action: { token: 'string.quote', next: '@stringVerbatim' },
          },
          {
            regex: "'",
            action: { token: 'string.quote', next: '@stringLiteral' },
          },
          { regex: '[0-9]+', action: { token: 'number' } },
          {
            regex: t,
            action: {
              cases: {
                '@keywords': { token: 'keyword' },
                '@namedLiterals': { token: 'keyword' },
                '@default': { token: 'identifier' },
              },
            },
          },
        ],
      },
    })
})
