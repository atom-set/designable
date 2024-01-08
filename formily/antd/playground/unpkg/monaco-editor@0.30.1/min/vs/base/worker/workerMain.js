/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.30.1(829382514cb1065f5ebb90f436e1c6103e153953)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/ ;(function () {
  var z = [
      'require',
      'exports',
      'vs/base/common/platform',
      'vs/editor/common/core/position',
      'vs/base/common/strings',
      'vs/base/common/event',
      'vs/editor/common/core/range',
      'vs/base/common/errors',
      'vs/base/common/lifecycle',
      'vs/base/common/stopwatch',
      'vs/base/common/diff/diff',
      'vs/base/common/types',
      'vs/base/common/uint',
      'vs/base/common/uri',
      'vs/base/common/diff/diffChange',
      'vs/base/common/functional',
      'vs/base/common/iterator',
      'vs/base/common/keyCodes',
      'vs/base/common/linkedList',
      'vs/base/common/process',
      'vs/base/common/path',
      'vs/base/common/cancellation',
      'vs/base/common/hash',
      'vs/editor/common/core/characterClassifier',
      'vs/editor/common/core/selection',
      'vs/editor/common/core/token',
      'vs/editor/common/diff/diffComputer',
      'vs/editor/common/model/wordHelper',
      'vs/editor/common/modes/linkComputer',
      'vs/editor/common/modes/supports/inplaceReplaceSupport',
      'vs/editor/common/standalone/standaloneEnums',
      'vs/editor/common/standalone/standaloneBase',
      'vs/editor/common/viewModel/prefixSumComputer',
      'vs/editor/common/model/mirrorTextModel',
      'vs/base/common/worker/simpleWorker',
      'vs/editor/common/services/editorSimpleWorker',
    ],
    G = function (F) {
      for (var n = [], A = 0, D = F.length; A < D; A++) n[A] = z[F[A]]
      return n
    },
    fe = this,
    he = typeof global == 'object' ? global : {},
    Q
  ;(function (F) {
    F.global = fe
    var n = (function () {
      function A() {
        ;(this._detected = !1),
          (this._isWindows = !1),
          (this._isNode = !1),
          (this._isElectronRenderer = !1),
          (this._isWebWorker = !1),
          (this._isElectronNodeIntegrationWebWorker = !1)
      }
      return (
        Object.defineProperty(A.prototype, 'isWindows', {
          get: function () {
            return this._detect(), this._isWindows
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(A.prototype, 'isNode', {
          get: function () {
            return this._detect(), this._isNode
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(A.prototype, 'isElectronRenderer', {
          get: function () {
            return this._detect(), this._isElectronRenderer
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(A.prototype, 'isWebWorker', {
          get: function () {
            return this._detect(), this._isWebWorker
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(
          A.prototype,
          'isElectronNodeIntegrationWebWorker',
          {
            get: function () {
              return this._detect(), this._isElectronNodeIntegrationWebWorker
            },
            enumerable: !1,
            configurable: !0,
          }
        ),
        (A.prototype._detect = function () {
          this._detected ||
            ((this._detected = !0),
            (this._isWindows = A._isWindows()),
            (this._isNode = typeof module != 'undefined' && !!module.exports),
            (this._isElectronRenderer =
              typeof process != 'undefined' &&
              typeof process.versions != 'undefined' &&
              typeof process.versions.electron != 'undefined' &&
              process.type === 'renderer'),
            (this._isWebWorker = typeof F.global.importScripts == 'function'),
            (this._isElectronNodeIntegrationWebWorker =
              this._isWebWorker &&
              typeof process != 'undefined' &&
              typeof process.versions != 'undefined' &&
              typeof process.versions.electron != 'undefined' &&
              process.type === 'worker'))
        }),
        (A._isWindows = function () {
          return typeof navigator != 'undefined' &&
            navigator.userAgent &&
            navigator.userAgent.indexOf('Windows') >= 0
            ? !0
            : typeof process != 'undefined'
            ? process.platform === 'win32'
            : !1
        }),
        A
      )
    })()
    F.Environment = n
  })(Q || (Q = {}))
  var Q
  ;(function (F) {
    var n = (function () {
      function w(s, d, a) {
        ;(this.type = s), (this.detail = d), (this.timestamp = a)
      }
      return w
    })()
    F.LoaderEvent = n
    var A = (function () {
      function w(s) {
        this._events = [new n(1, '', s)]
      }
      return (
        (w.prototype.record = function (s, d) {
          this._events.push(
            new n(s, d, F.Utilities.getHighPerformanceTimestamp())
          )
        }),
        (w.prototype.getEvents = function () {
          return this._events
        }),
        w
      )
    })()
    F.LoaderEventRecorder = A
    var D = (function () {
      function w() {}
      return (
        (w.prototype.record = function (s, d) {}),
        (w.prototype.getEvents = function () {
          return []
        }),
        (w.INSTANCE = new w()),
        w
      )
    })()
    F.NullLoaderEventRecorder = D
  })(Q || (Q = {}))
  var Q
  ;(function (F) {
    var n = (function () {
      function A() {}
      return (
        (A.fileUriToFilePath = function (D, w) {
          if (((w = decodeURI(w).replace(/%23/g, '#')), D)) {
            if (/^file:\/\/\//.test(w)) return w.substr(8)
            if (/^file:\/\//.test(w)) return w.substr(5)
          } else if (/^file:\/\//.test(w)) return w.substr(7)
          return w
        }),
        (A.startsWith = function (D, w) {
          return D.length >= w.length && D.substr(0, w.length) === w
        }),
        (A.endsWith = function (D, w) {
          return D.length >= w.length && D.substr(D.length - w.length) === w
        }),
        (A.containsQueryString = function (D) {
          return /^[^\#]*\?/gi.test(D)
        }),
        (A.isAbsolutePath = function (D) {
          return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(D)
        }),
        (A.forEachProperty = function (D, w) {
          if (D) {
            var s = void 0
            for (s in D) D.hasOwnProperty(s) && w(s, D[s])
          }
        }),
        (A.isEmpty = function (D) {
          var w = !0
          return (
            A.forEachProperty(D, function () {
              w = !1
            }),
            w
          )
        }),
        (A.recursiveClone = function (D) {
          if (
            !D ||
            typeof D != 'object' ||
            D instanceof RegExp ||
            (!Array.isArray(D) && Object.getPrototypeOf(D) !== Object.prototype)
          )
            return D
          var w = Array.isArray(D) ? [] : {}
          return (
            A.forEachProperty(D, function (s, d) {
              d && typeof d == 'object'
                ? (w[s] = A.recursiveClone(d))
                : (w[s] = d)
            }),
            w
          )
        }),
        (A.generateAnonymousModule = function () {
          return '===anonymous' + A.NEXT_ANONYMOUS_ID++ + '==='
        }),
        (A.isAnonymousModule = function (D) {
          return A.startsWith(D, '===anonymous')
        }),
        (A.getHighPerformanceTimestamp = function () {
          return (
            this.PERFORMANCE_NOW_PROBED ||
              ((this.PERFORMANCE_NOW_PROBED = !0),
              (this.HAS_PERFORMANCE_NOW =
                F.global.performance &&
                typeof F.global.performance.now == 'function')),
            this.HAS_PERFORMANCE_NOW ? F.global.performance.now() : Date.now()
          )
        }),
        (A.NEXT_ANONYMOUS_ID = 1),
        (A.PERFORMANCE_NOW_PROBED = !1),
        (A.HAS_PERFORMANCE_NOW = !1),
        A
      )
    })()
    F.Utilities = n
  })(Q || (Q = {}))
  var Q
  ;(function (F) {
    function n(w) {
      if (w instanceof Error) return w
      var s = new Error(w.message || String(w) || 'Unknown Error')
      return w.stack && (s.stack = w.stack), s
    }
    F.ensureError = n
    var A = (function () {
      function w() {}
      return (
        (w.validateConfigurationOptions = function (s) {
          function d(u) {
            if (u.phase === 'loading') {
              console.error('Loading "' + u.moduleId + '" failed'),
                console.error(u),
                console.error('Here are the modules that depend on it:'),
                console.error(u.neededBy)
              return
            }
            if (u.phase === 'factory') {
              console.error(
                'The factory method of "' +
                  u.moduleId +
                  '" has thrown an exception'
              ),
                console.error(u)
              return
            }
          }
          if (
            ((s = s || {}),
            typeof s.baseUrl != 'string' && (s.baseUrl = ''),
            typeof s.isBuild != 'boolean' && (s.isBuild = !1),
            typeof s.paths != 'object' && (s.paths = {}),
            typeof s.config != 'object' && (s.config = {}),
            typeof s.catchError == 'undefined' && (s.catchError = !1),
            typeof s.recordStats == 'undefined' && (s.recordStats = !1),
            typeof s.urlArgs != 'string' && (s.urlArgs = ''),
            typeof s.onError != 'function' && (s.onError = d),
            Array.isArray(s.ignoreDuplicateModules) ||
              (s.ignoreDuplicateModules = []),
            s.baseUrl.length > 0 &&
              (F.Utilities.endsWith(s.baseUrl, '/') || (s.baseUrl += '/')),
            typeof s.cspNonce != 'string' && (s.cspNonce = ''),
            typeof s.preferScriptTags == 'undefined' &&
              (s.preferScriptTags = !1),
            Array.isArray(s.nodeModules) || (s.nodeModules = []),
            s.nodeCachedData &&
              typeof s.nodeCachedData == 'object' &&
              (typeof s.nodeCachedData.seed != 'string' &&
                (s.nodeCachedData.seed = 'seed'),
              (typeof s.nodeCachedData.writeDelay != 'number' ||
                s.nodeCachedData.writeDelay < 0) &&
                (s.nodeCachedData.writeDelay = 1e3 * 7),
              !s.nodeCachedData.path ||
                typeof s.nodeCachedData.path != 'string'))
          ) {
            var a = n(
              new Error("INVALID cached data configuration, 'path' MUST be set")
            )
            ;(a.phase = 'configuration'),
              s.onError(a),
              (s.nodeCachedData = void 0)
          }
          return s
        }),
        (w.mergeConfigurationOptions = function (s, d) {
          s === void 0 && (s = null), d === void 0 && (d = null)
          var a = F.Utilities.recursiveClone(d || {})
          return (
            F.Utilities.forEachProperty(s, function (u, c) {
              u === 'ignoreDuplicateModules' &&
              typeof a.ignoreDuplicateModules != 'undefined'
                ? (a.ignoreDuplicateModules =
                    a.ignoreDuplicateModules.concat(c))
                : u === 'paths' && typeof a.paths != 'undefined'
                ? F.Utilities.forEachProperty(c, function (C, e) {
                    return (a.paths[C] = e)
                  })
                : u === 'config' && typeof a.config != 'undefined'
                ? F.Utilities.forEachProperty(c, function (C, e) {
                    return (a.config[C] = e)
                  })
                : (a[u] = F.Utilities.recursiveClone(c))
            }),
            w.validateConfigurationOptions(a)
          )
        }),
        w
      )
    })()
    F.ConfigurationOptionsUtil = A
    var D = (function () {
      function w(s, d) {
        if (
          ((this._env = s),
          (this.options = A.mergeConfigurationOptions(d)),
          this._createIgnoreDuplicateModulesMap(),
          this._createNodeModulesMap(),
          this._createSortedPathsRules(),
          this.options.baseUrl === '')
        ) {
          if (
            this.options.nodeRequire &&
            this.options.nodeRequire.main &&
            this.options.nodeRequire.main.filename &&
            this._env.isNode
          ) {
            var a = this.options.nodeRequire.main.filename,
              u = Math.max(a.lastIndexOf('/'), a.lastIndexOf('\\'))
            this.options.baseUrl = a.substring(0, u + 1)
          }
          if (this.options.nodeMain && this._env.isNode) {
            var a = this.options.nodeMain,
              u = Math.max(a.lastIndexOf('/'), a.lastIndexOf('\\'))
            this.options.baseUrl = a.substring(0, u + 1)
          }
        }
      }
      return (
        (w.prototype._createIgnoreDuplicateModulesMap = function () {
          this.ignoreDuplicateModulesMap = {}
          for (var s = 0; s < this.options.ignoreDuplicateModules.length; s++)
            this.ignoreDuplicateModulesMap[
              this.options.ignoreDuplicateModules[s]
            ] = !0
        }),
        (w.prototype._createNodeModulesMap = function () {
          this.nodeModulesMap = Object.create(null)
          for (var s = 0, d = this.options.nodeModules; s < d.length; s++) {
            var a = d[s]
            this.nodeModulesMap[a] = !0
          }
        }),
        (w.prototype._createSortedPathsRules = function () {
          var s = this
          ;(this.sortedPathsRules = []),
            F.Utilities.forEachProperty(this.options.paths, function (d, a) {
              Array.isArray(a)
                ? s.sortedPathsRules.push({ from: d, to: a })
                : s.sortedPathsRules.push({ from: d, to: [a] })
            }),
            this.sortedPathsRules.sort(function (d, a) {
              return a.from.length - d.from.length
            })
        }),
        (w.prototype.cloneAndMerge = function (s) {
          return new w(this._env, A.mergeConfigurationOptions(s, this.options))
        }),
        (w.prototype.getOptionsLiteral = function () {
          return this.options
        }),
        (w.prototype._applyPaths = function (s) {
          for (var d, a = 0, u = this.sortedPathsRules.length; a < u; a++)
            if (
              ((d = this.sortedPathsRules[a]),
              F.Utilities.startsWith(s, d.from))
            ) {
              for (var c = [], C = 0, e = d.to.length; C < e; C++)
                c.push(d.to[C] + s.substr(d.from.length))
              return c
            }
          return [s]
        }),
        (w.prototype._addUrlArgsToUrl = function (s) {
          return F.Utilities.containsQueryString(s)
            ? s + '&' + this.options.urlArgs
            : s + '?' + this.options.urlArgs
        }),
        (w.prototype._addUrlArgsIfNecessaryToUrl = function (s) {
          return this.options.urlArgs ? this._addUrlArgsToUrl(s) : s
        }),
        (w.prototype._addUrlArgsIfNecessaryToUrls = function (s) {
          if (this.options.urlArgs)
            for (var d = 0, a = s.length; d < a; d++)
              s[d] = this._addUrlArgsToUrl(s[d])
          return s
        }),
        (w.prototype.moduleIdToPaths = function (s) {
          if (this._env.isNode) {
            var d =
              this.nodeModulesMap[s] === !0 ||
              (this.options.amdModulesPattern instanceof RegExp &&
                !this.options.amdModulesPattern.test(s))
            if (d) return this.isBuild() ? ['empty:'] : ['node|' + s]
          }
          var a = s,
            u
          if (
            !F.Utilities.endsWith(a, '.js') &&
            !F.Utilities.isAbsolutePath(a)
          ) {
            u = this._applyPaths(a)
            for (var c = 0, C = u.length; c < C; c++)
              (this.isBuild() && u[c] === 'empty:') ||
                (F.Utilities.isAbsolutePath(u[c]) ||
                  (u[c] = this.options.baseUrl + u[c]),
                !F.Utilities.endsWith(u[c], '.js') &&
                  !F.Utilities.containsQueryString(u[c]) &&
                  (u[c] = u[c] + '.js'))
          } else
            !F.Utilities.endsWith(a, '.js') &&
              !F.Utilities.containsQueryString(a) &&
              (a = a + '.js'),
              (u = [a])
          return this._addUrlArgsIfNecessaryToUrls(u)
        }),
        (w.prototype.requireToUrl = function (s) {
          var d = s
          return (
            F.Utilities.isAbsolutePath(d) ||
              ((d = this._applyPaths(d)[0]),
              F.Utilities.isAbsolutePath(d) || (d = this.options.baseUrl + d)),
            this._addUrlArgsIfNecessaryToUrl(d)
          )
        }),
        (w.prototype.isBuild = function () {
          return this.options.isBuild
        }),
        (w.prototype.isDuplicateMessageIgnoredFor = function (s) {
          return this.ignoreDuplicateModulesMap.hasOwnProperty(s)
        }),
        (w.prototype.getConfigForModule = function (s) {
          if (this.options.config) return this.options.config[s]
        }),
        (w.prototype.shouldCatchError = function () {
          return this.options.catchError
        }),
        (w.prototype.shouldRecordStats = function () {
          return this.options.recordStats
        }),
        (w.prototype.onError = function (s) {
          this.options.onError(s)
        }),
        w
      )
    })()
    F.Configuration = D
  })(Q || (Q = {}))
  var Q
  ;(function (F) {
    var n = (function () {
        function u(c) {
          ;(this._env = c),
            (this._scriptLoader = null),
            (this._callbackMap = {})
        }
        return (
          (u.prototype.load = function (c, C, e, f) {
            var m = this
            if (!this._scriptLoader)
              if (this._env.isWebWorker) this._scriptLoader = new w()
              else if (this._env.isElectronRenderer) {
                var N = c.getConfig().getOptionsLiteral().preferScriptTags
                N
                  ? (this._scriptLoader = new A())
                  : (this._scriptLoader = new s(this._env))
              } else
                this._env.isNode
                  ? (this._scriptLoader = new s(this._env))
                  : (this._scriptLoader = new A())
            var b = { callback: e, errorback: f }
            if (this._callbackMap.hasOwnProperty(C)) {
              this._callbackMap[C].push(b)
              return
            }
            ;(this._callbackMap[C] = [b]),
              this._scriptLoader.load(
                c,
                C,
                function () {
                  return m.triggerCallback(C)
                },
                function (h) {
                  return m.triggerErrorback(C, h)
                }
              )
          }),
          (u.prototype.triggerCallback = function (c) {
            var C = this._callbackMap[c]
            delete this._callbackMap[c]
            for (var e = 0; e < C.length; e++) C[e].callback()
          }),
          (u.prototype.triggerErrorback = function (c, C) {
            var e = this._callbackMap[c]
            delete this._callbackMap[c]
            for (var f = 0; f < e.length; f++) e[f].errorback(C)
          }),
          u
        )
      })(),
      A = (function () {
        function u() {}
        return (
          (u.prototype.attachListeners = function (c, C, e) {
            var f = function () {
                c.removeEventListener('load', m),
                  c.removeEventListener('error', N)
              },
              m = function (b) {
                f(), C()
              },
              N = function (b) {
                f(), e(b)
              }
            c.addEventListener('load', m), c.addEventListener('error', N)
          }),
          (u.prototype.load = function (c, C, e, f) {
            if (/^node\|/.test(C)) {
              var m = c.getConfig().getOptionsLiteral(),
                N = d(c.getRecorder(), m.nodeRequire || F.global.nodeRequire),
                b = C.split('|'),
                h = null
              try {
                h = N(b[1])
              } catch (r) {
                f(r)
                return
              }
              c.enqueueDefineAnonymousModule([], function () {
                return h
              }),
                e()
            } else {
              var S = document.createElement('script')
              S.setAttribute('async', 'async'),
                S.setAttribute('type', 'text/javascript'),
                this.attachListeners(S, e, f)
              var p = c.getConfig().getOptionsLiteral().trustedTypesPolicy
              p && (C = p.createScriptURL(C)), S.setAttribute('src', C)
              var i = c.getConfig().getOptionsLiteral().cspNonce
              i && S.setAttribute('nonce', i),
                document.getElementsByTagName('head')[0].appendChild(S)
            }
          }),
          u
        )
      })()
    function D(u) {
      var c = u.getConfig().getOptionsLiteral().trustedTypesPolicy
      try {
        var C = c ? self.eval(c.createScript('', 'true')) : new Function('true')
        return C.call(self), !0
      } catch (e) {
        return !1
      }
    }
    var w = (function () {
        function u() {
          this._cachedCanUseEval = null
        }
        return (
          (u.prototype._canUseEval = function (c) {
            return (
              this._cachedCanUseEval === null &&
                (this._cachedCanUseEval = D(c)),
              this._cachedCanUseEval
            )
          }),
          (u.prototype.load = function (c, C, e, f) {
            if (/^node\|/.test(C)) {
              var m = c.getConfig().getOptionsLiteral(),
                N = d(c.getRecorder(), m.nodeRequire || F.global.nodeRequire),
                b = C.split('|'),
                h = null
              try {
                h = N(b[1])
              } catch (i) {
                f(i)
                return
              }
              c.enqueueDefineAnonymousModule([], function () {
                return h
              }),
                e()
            } else {
              var S = c.getConfig().getOptionsLiteral().trustedTypesPolicy,
                p =
                  /^((http:)|(https:)|(file:))/.test(C) &&
                  C.substring(0, self.origin.length) !== self.origin
              if (!p && this._canUseEval(c)) {
                fetch(C)
                  .then(function (i) {
                    if (i.status !== 200) throw new Error(i.statusText)
                    return i.text()
                  })
                  .then(function (i) {
                    i =
                      i +
                      `
//# sourceURL=` +
                      C
                    var r = S
                      ? self.eval(S.createScript('', i))
                      : new Function(i)
                    r.call(self), e()
                  })
                  .then(void 0, f)
                return
              }
              try {
                S && (C = S.createScriptURL(C)), importScripts(C), e()
              } catch (i) {
                f(i)
              }
            }
          }),
          u
        )
      })(),
      s = (function () {
        function u(c) {
          ;(this._env = c),
            (this._didInitialize = !1),
            (this._didPatchNodeRequire = !1)
        }
        return (
          (u.prototype._init = function (c) {
            this._didInitialize ||
              ((this._didInitialize = !0),
              (this._fs = c('fs')),
              (this._vm = c('vm')),
              (this._path = c('path')),
              (this._crypto = c('crypto')))
          }),
          (u.prototype._initNodeRequire = function (c, C) {
            var e = C.getConfig().getOptionsLiteral().nodeCachedData
            if (!e || this._didPatchNodeRequire) return
            this._didPatchNodeRequire = !0
            var f = this,
              m = c('module')
            function N(b) {
              var h = b.constructor,
                S = function (i) {
                  try {
                    return b.require(i)
                  } finally {
                  }
                }
              return (
                (S.resolve = function (i, r) {
                  return h._resolveFilename(i, b, !1, r)
                }),
                (S.resolve.paths = function (i) {
                  return h._resolveLookupPaths(i, b)
                }),
                (S.main = process.mainModule),
                (S.extensions = h._extensions),
                (S.cache = h._cache),
                S
              )
            }
            m.prototype._compile = function (b, h) {
              var S = m.wrap(b.replace(/^#!.*/, '')),
                p = C.getRecorder(),
                i = f._getCachedDataPath(e, h),
                r = { filename: h },
                l
              try {
                var g = f._fs.readFileSync(i)
                ;(l = g.slice(0, 16)),
                  (r.cachedData = g.slice(16)),
                  p.record(60, i)
              } catch (P) {
                p.record(61, i)
              }
              var v = new f._vm.Script(S, r),
                o = v.runInThisContext(r),
                _ = f._path.dirname(h),
                L = N(this),
                E = [this.exports, L, this, h, _, process, he, Buffer],
                y = o.apply(this.exports, E)
              return (
                f._handleCachedData(v, S, i, !r.cachedData, C),
                f._verifyCachedData(v, S, i, l, C),
                y
              )
            }
          }),
          (u.prototype.load = function (c, C, e, f) {
            var m = this,
              N = c.getConfig().getOptionsLiteral(),
              b = d(c.getRecorder(), N.nodeRequire || F.global.nodeRequire),
              h =
                N.nodeInstrumenter ||
                function (o) {
                  return o
                }
            this._init(b), this._initNodeRequire(b, c)
            var S = c.getRecorder()
            if (/^node\|/.test(C)) {
              var p = C.split('|'),
                i = null
              try {
                i = b(p[1])
              } catch (o) {
                f(o)
                return
              }
              c.enqueueDefineAnonymousModule([], function () {
                return i
              }),
                e()
            } else {
              C = F.Utilities.fileUriToFilePath(this._env.isWindows, C)
              var r = this._path.normalize(C),
                l = this._getElectronRendererScriptPathOrUri(r),
                g = Boolean(N.nodeCachedData),
                v = g ? this._getCachedDataPath(N.nodeCachedData, C) : void 0
              this._readSourceAndCachedData(r, v, S, function (o, _, L, E) {
                if (o) {
                  f(o)
                  return
                }
                var y
                _.charCodeAt(0) === u._BOM
                  ? (y = u._PREFIX + _.substring(1) + u._SUFFIX)
                  : (y = u._PREFIX + _ + u._SUFFIX),
                  (y = h(y, r))
                var P = { filename: l, cachedData: L },
                  R = m._createAndEvalScript(c, y, P, e, f)
                m._handleCachedData(R, y, v, g && !L, c),
                  m._verifyCachedData(R, y, v, E, c)
              })
            }
          }),
          (u.prototype._createAndEvalScript = function (c, C, e, f, m) {
            var N = c.getRecorder()
            N.record(31, e.filename)
            var b = new this._vm.Script(C, e),
              h = b.runInThisContext(e),
              S = c.getGlobalAMDDefineFunc(),
              p = !1,
              i = function () {
                return (p = !0), S.apply(null, arguments)
              }
            return (
              (i.amd = S.amd),
              h.call(
                F.global,
                c.getGlobalAMDRequireFunc(),
                i,
                e.filename,
                this._path.dirname(e.filename)
              ),
              N.record(32, e.filename),
              p
                ? f()
                : m(
                    new Error(
                      "Didn't receive define call in " + e.filename + '!'
                    )
                  ),
              b
            )
          }),
          (u.prototype._getElectronRendererScriptPathOrUri = function (c) {
            if (!this._env.isElectronRenderer) return c
            var C = c.match(/^([a-z])\:(.*)/i)
            return C
              ? 'file:///' +
                  (C[1].toUpperCase() + ':' + C[2]).replace(/\\/g, '/')
              : 'file://' + c
          }),
          (u.prototype._getCachedDataPath = function (c, C) {
            var e = this._crypto
                .createHash('md5')
                .update(C, 'utf8')
                .update(c.seed, 'utf8')
                .update(process.arch, '')
                .digest('hex'),
              f = this._path.basename(C).replace(/\.js$/, '')
            return this._path.join(c.path, f + '-' + e + '.code')
          }),
          (u.prototype._handleCachedData = function (c, C, e, f, m) {
            var N = this
            c.cachedDataRejected
              ? this._fs.unlink(e, function (b) {
                  m.getRecorder().record(62, e),
                    N._createAndWriteCachedData(c, C, e, m),
                    b && m.getConfig().onError(b)
                })
              : f && this._createAndWriteCachedData(c, C, e, m)
          }),
          (u.prototype._createAndWriteCachedData = function (c, C, e, f) {
            var m = this,
              N = Math.ceil(
                f.getConfig().getOptionsLiteral().nodeCachedData.writeDelay *
                  (1 + Math.random())
              ),
              b = -1,
              h = 0,
              S = void 0,
              p = function () {
                setTimeout(function () {
                  S ||
                    (S = m._crypto.createHash('md5').update(C, 'utf8').digest())
                  var i = c.createCachedData()
                  if (!(i.length === 0 || i.length === b || h >= 5)) {
                    if (i.length < b) {
                      p()
                      return
                    }
                    ;(b = i.length),
                      m._fs.writeFile(e, Buffer.concat([S, i]), function (r) {
                        r && f.getConfig().onError(r),
                          f.getRecorder().record(63, e),
                          p()
                      })
                  }
                }, N * Math.pow(4, h++))
              }
            p()
          }),
          (u.prototype._readSourceAndCachedData = function (c, C, e, f) {
            if (!C) this._fs.readFile(c, { encoding: 'utf8' }, f)
            else {
              var m = void 0,
                N = void 0,
                b = void 0,
                h = 2,
                S = function (p) {
                  p ? f(p) : --h == 0 && f(void 0, m, N, b)
                }
              this._fs.readFile(c, { encoding: 'utf8' }, function (p, i) {
                ;(m = i), S(p)
              }),
                this._fs.readFile(C, function (p, i) {
                  !p && i && i.length > 0
                    ? ((b = i.slice(0, 16)), (N = i.slice(16)), e.record(60, C))
                    : e.record(61, C),
                    S()
                })
            }
          }),
          (u.prototype._verifyCachedData = function (c, C, e, f, m) {
            var N = this
            !f ||
              c.cachedDataRejected ||
              setTimeout(function () {
                var b = N._crypto.createHash('md5').update(C, 'utf8').digest()
                f.equals(b) ||
                  (m
                    .getConfig()
                    .onError(
                      new Error(
                        "FAILED TO VERIFY CACHED DATA, deleting stale '" +
                          e +
                          "' now, but a RESTART IS REQUIRED"
                      )
                    ),
                  N._fs.unlink(e, function (h) {
                    h && m.getConfig().onError(h)
                  }))
              }, Math.ceil(5e3 * (1 + Math.random())))
          }),
          (u._BOM = 65279),
          (u._PREFIX = '(function (require, define, __filename, __dirname) { '),
          (u._SUFFIX = `
});`),
          u
        )
      })()
    function d(u, c) {
      if (c.__$__isRecorded) return c
      var C = function (f) {
        u.record(33, f)
        try {
          return c(f)
        } finally {
          u.record(34, f)
        }
      }
      return (C.__$__isRecorded = !0), C
    }
    F.ensureRecordedNodeRequire = d
    function a(u) {
      return new n(u)
    }
    F.createScriptLoader = a
  })(Q || (Q = {}))
  var Q
  ;(function (F) {
    var n = (function () {
      function a(u) {
        var c = u.lastIndexOf('/')
        c !== -1
          ? (this.fromModulePath = u.substr(0, c + 1))
          : (this.fromModulePath = '')
      }
      return (
        (a._normalizeModuleId = function (u) {
          var c = u,
            C
          for (C = /\/\.\//; C.test(c); ) c = c.replace(C, '/')
          for (
            c = c.replace(/^\.\//g, ''),
              C =
                /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
            C.test(c);

          )
            c = c.replace(C, '/')
          return (
            (c = c.replace(
              /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
              ''
            )),
            c
          )
        }),
        (a.prototype.resolveModule = function (u) {
          var c = u
          return (
            F.Utilities.isAbsolutePath(c) ||
              ((F.Utilities.startsWith(c, './') ||
                F.Utilities.startsWith(c, '../')) &&
                (c = a._normalizeModuleId(this.fromModulePath + c))),
            c
          )
        }),
        (a.ROOT = new a('')),
        a
      )
    })()
    F.ModuleIdResolver = n
    var A = (function () {
      function a(u, c, C, e, f, m) {
        ;(this.id = u),
          (this.strId = c),
          (this.dependencies = C),
          (this._callback = e),
          (this._errorback = f),
          (this.moduleIdResolver = m),
          (this.exports = {}),
          (this.error = null),
          (this.exportsPassedIn = !1),
          (this.unresolvedDependenciesCount = this.dependencies.length),
          (this._isComplete = !1)
      }
      return (
        (a._safeInvokeFunction = function (u, c) {
          try {
            return { returnedValue: u.apply(F.global, c), producedError: null }
          } catch (C) {
            return { returnedValue: null, producedError: C }
          }
        }),
        (a._invokeFactory = function (u, c, C, e) {
          return u.isBuild() && !F.Utilities.isAnonymousModule(c)
            ? { returnedValue: null, producedError: null }
            : u.shouldCatchError()
            ? this._safeInvokeFunction(C, e)
            : { returnedValue: C.apply(F.global, e), producedError: null }
        }),
        (a.prototype.complete = function (u, c, C) {
          this._isComplete = !0
          var e = null
          if (this._callback)
            if (typeof this._callback == 'function') {
              u.record(21, this.strId)
              var f = a._invokeFactory(c, this.strId, this._callback, C)
              ;(e = f.producedError),
                u.record(22, this.strId),
                !e &&
                  typeof f.returnedValue != 'undefined' &&
                  (!this.exportsPassedIn ||
                    F.Utilities.isEmpty(this.exports)) &&
                  (this.exports = f.returnedValue)
            } else this.exports = this._callback
          if (e) {
            var m = F.ensureError(e)
            ;(m.phase = 'factory'),
              (m.moduleId = this.strId),
              (this.error = m),
              c.onError(m)
          }
          ;(this.dependencies = null),
            (this._callback = null),
            (this._errorback = null),
            (this.moduleIdResolver = null)
        }),
        (a.prototype.onDependencyError = function (u) {
          return (
            (this._isComplete = !0),
            (this.error = u),
            this._errorback ? (this._errorback(u), !0) : !1
          )
        }),
        (a.prototype.isComplete = function () {
          return this._isComplete
        }),
        a
      )
    })()
    F.Module = A
    var D = (function () {
        function a() {
          ;(this._nextId = 0),
            (this._strModuleIdToIntModuleId = new Map()),
            (this._intModuleIdToStrModuleId = []),
            this.getModuleId('exports'),
            this.getModuleId('module'),
            this.getModuleId('require')
        }
        return (
          (a.prototype.getMaxModuleId = function () {
            return this._nextId
          }),
          (a.prototype.getModuleId = function (u) {
            var c = this._strModuleIdToIntModuleId.get(u)
            return (
              typeof c == 'undefined' &&
                ((c = this._nextId++),
                this._strModuleIdToIntModuleId.set(u, c),
                (this._intModuleIdToStrModuleId[c] = u)),
              c
            )
          }),
          (a.prototype.getStrModuleId = function (u) {
            return this._intModuleIdToStrModuleId[u]
          }),
          a
        )
      })(),
      w = (function () {
        function a(u) {
          this.id = u
        }
        return (
          (a.EXPORTS = new a(0)),
          (a.MODULE = new a(1)),
          (a.REQUIRE = new a(2)),
          a
        )
      })()
    F.RegularDependency = w
    var s = (function () {
      function a(u, c, C) {
        ;(this.id = u), (this.pluginId = c), (this.pluginParam = C)
      }
      return a
    })()
    F.PluginDependency = s
    var d = (function () {
      function a(u, c, C, e, f) {
        f === void 0 && (f = 0),
          (this._env = u),
          (this._scriptLoader = c),
          (this._loaderAvailableTimestamp = f),
          (this._defineFunc = C),
          (this._requireFunc = e),
          (this._moduleIdProvider = new D()),
          (this._config = new F.Configuration(this._env)),
          (this._hasDependencyCycle = !1),
          (this._modules2 = []),
          (this._knownModules2 = []),
          (this._inverseDependencies2 = []),
          (this._inversePluginDependencies2 = new Map()),
          (this._currentAnonymousDefineCall = null),
          (this._recorder = null),
          (this._buildInfoPath = []),
          (this._buildInfoDefineStack = []),
          (this._buildInfoDependencies = [])
      }
      return (
        (a.prototype.reset = function () {
          return new a(
            this._env,
            this._scriptLoader,
            this._defineFunc,
            this._requireFunc,
            this._loaderAvailableTimestamp
          )
        }),
        (a.prototype.getGlobalAMDDefineFunc = function () {
          return this._defineFunc
        }),
        (a.prototype.getGlobalAMDRequireFunc = function () {
          return this._requireFunc
        }),
        (a._findRelevantLocationInStack = function (u, c) {
          for (
            var C = function (r) {
                return r.replace(/\\/g, '/')
              },
              e = C(u),
              f = c.split(/\n/),
              m = 0;
            m < f.length;
            m++
          ) {
            var N = f[m].match(/(.*):(\d+):(\d+)\)?$/)
            if (N) {
              var b = N[1],
                h = N[2],
                S = N[3],
                p = Math.max(b.lastIndexOf(' ') + 1, b.lastIndexOf('(') + 1)
              if (((b = b.substr(p)), (b = C(b)), b === e)) {
                var i = { line: parseInt(h, 10), col: parseInt(S, 10) }
                return (
                  i.line === 1 &&
                    (i.col -=
                      '(function (require, define, __filename, __dirname) { '.length),
                  i
                )
              }
            }
          }
          throw new Error(
            'Could not correlate define call site for needle ' + u
          )
        }),
        (a.prototype.getBuildInfo = function () {
          if (!this._config.isBuild()) return null
          for (
            var u = [], c = 0, C = 0, e = this._modules2.length;
            C < e;
            C++
          ) {
            var f = this._modules2[C]
            if (!!f) {
              var m = this._buildInfoPath[f.id] || null,
                N = this._buildInfoDefineStack[f.id] || null,
                b = this._buildInfoDependencies[f.id]
              u[c++] = {
                id: f.strId,
                path: m,
                defineLocation:
                  m && N ? a._findRelevantLocationInStack(m, N) : null,
                dependencies: b,
                shim: null,
                exports: f.exports,
              }
            }
          }
          return u
        }),
        (a.prototype.getRecorder = function () {
          return (
            this._recorder ||
              (this._config.shouldRecordStats()
                ? (this._recorder = new F.LoaderEventRecorder(
                    this._loaderAvailableTimestamp
                  ))
                : (this._recorder = F.NullLoaderEventRecorder.INSTANCE)),
            this._recorder
          )
        }),
        (a.prototype.getLoaderEvents = function () {
          return this.getRecorder().getEvents()
        }),
        (a.prototype.enqueueDefineAnonymousModule = function (u, c) {
          if (this._currentAnonymousDefineCall !== null)
            throw new Error(
              'Can only have one anonymous define call per script file'
            )
          var C = null
          this._config.isBuild() &&
            (C = new Error('StackLocation').stack || null),
            (this._currentAnonymousDefineCall = {
              stack: C,
              dependencies: u,
              callback: c,
            })
        }),
        (a.prototype.defineModule = function (u, c, C, e, f, m) {
          var N = this
          m === void 0 && (m = new n(u))
          var b = this._moduleIdProvider.getModuleId(u)
          if (this._modules2[b]) {
            this._config.isDuplicateMessageIgnoredFor(u) ||
              console.warn("Duplicate definition of module '" + u + "'")
            return
          }
          var h = new A(b, u, this._normalizeDependencies(c, m), C, e, m)
          ;(this._modules2[b] = h),
            this._config.isBuild() &&
              ((this._buildInfoDefineStack[b] = f),
              (this._buildInfoDependencies[b] = (h.dependencies || []).map(
                function (S) {
                  return N._moduleIdProvider.getStrModuleId(S.id)
                }
              ))),
            this._resolve(h)
        }),
        (a.prototype._normalizeDependency = function (u, c) {
          if (u === 'exports') return w.EXPORTS
          if (u === 'module') return w.MODULE
          if (u === 'require') return w.REQUIRE
          var C = u.indexOf('!')
          if (C >= 0) {
            var e = c.resolveModule(u.substr(0, C)),
              f = c.resolveModule(u.substr(C + 1)),
              m = this._moduleIdProvider.getModuleId(e + '!' + f),
              N = this._moduleIdProvider.getModuleId(e)
            return new s(m, N, f)
          }
          return new w(this._moduleIdProvider.getModuleId(c.resolveModule(u)))
        }),
        (a.prototype._normalizeDependencies = function (u, c) {
          for (var C = [], e = 0, f = 0, m = u.length; f < m; f++)
            C[e++] = this._normalizeDependency(u[f], c)
          return C
        }),
        (a.prototype._relativeRequire = function (u, c, C, e) {
          if (typeof c == 'string') return this.synchronousRequire(c, u)
          this.defineModule(
            F.Utilities.generateAnonymousModule(),
            c,
            C,
            e,
            null,
            u
          )
        }),
        (a.prototype.synchronousRequire = function (u, c) {
          c === void 0 && (c = new n(u))
          var C = this._normalizeDependency(u, c),
            e = this._modules2[C.id]
          if (!e)
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                u +
                "'. This is the first mention of this module!"
            )
          if (!e.isComplete())
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                u +
                "'. This module has not been resolved completely yet."
            )
          if (e.error) throw e.error
          return e.exports
        }),
        (a.prototype.configure = function (u, c) {
          var C = this._config.shouldRecordStats()
          c
            ? (this._config = new F.Configuration(this._env, u))
            : (this._config = this._config.cloneAndMerge(u)),
            this._config.shouldRecordStats() && !C && (this._recorder = null)
        }),
        (a.prototype.getConfig = function () {
          return this._config
        }),
        (a.prototype._onLoad = function (u) {
          if (this._currentAnonymousDefineCall !== null) {
            var c = this._currentAnonymousDefineCall
            ;(this._currentAnonymousDefineCall = null),
              this.defineModule(
                this._moduleIdProvider.getStrModuleId(u),
                c.dependencies,
                c.callback,
                null,
                c.stack
              )
          }
        }),
        (a.prototype._createLoadError = function (u, c) {
          var C = this,
            e = this._moduleIdProvider.getStrModuleId(u),
            f = (this._inverseDependencies2[u] || []).map(function (N) {
              return C._moduleIdProvider.getStrModuleId(N)
            }),
            m = F.ensureError(c)
          return (m.phase = 'loading'), (m.moduleId = e), (m.neededBy = f), m
        }),
        (a.prototype._onLoadError = function (u, c) {
          var C = this._createLoadError(u, c)
          this._modules2[u] ||
            (this._modules2[u] = new A(
              u,
              this._moduleIdProvider.getStrModuleId(u),
              [],
              function () {},
              null,
              null
            ))
          for (
            var e = [], f = 0, m = this._moduleIdProvider.getMaxModuleId();
            f < m;
            f++
          )
            e[f] = !1
          var N = !1,
            b = []
          for (b.push(u), e[u] = !0; b.length > 0; ) {
            var h = b.shift(),
              S = this._modules2[h]
            S && (N = S.onDependencyError(C) || N)
            var p = this._inverseDependencies2[h]
            if (p)
              for (var f = 0, m = p.length; f < m; f++) {
                var i = p[f]
                e[i] || (b.push(i), (e[i] = !0))
              }
          }
          N || this._config.onError(C)
        }),
        (a.prototype._hasDependencyPath = function (u, c) {
          var C = this._modules2[u]
          if (!C) return !1
          for (
            var e = [], f = 0, m = this._moduleIdProvider.getMaxModuleId();
            f < m;
            f++
          )
            e[f] = !1
          var N = []
          for (N.push(C), e[u] = !0; N.length > 0; ) {
            var b = N.shift(),
              h = b.dependencies
            if (h)
              for (var f = 0, m = h.length; f < m; f++) {
                var S = h[f]
                if (S.id === c) return !0
                var p = this._modules2[S.id]
                p && !e[S.id] && ((e[S.id] = !0), N.push(p))
              }
          }
          return !1
        }),
        (a.prototype._findCyclePath = function (u, c, C) {
          if (u === c || C === 50) return [u]
          var e = this._modules2[u]
          if (!e) return null
          var f = e.dependencies
          if (f)
            for (var m = 0, N = f.length; m < N; m++) {
              var b = this._findCyclePath(f[m].id, c, C + 1)
              if (b !== null) return b.push(u), b
            }
          return null
        }),
        (a.prototype._createRequire = function (u) {
          var c = this,
            C = function (e, f, m) {
              return c._relativeRequire(u, e, f, m)
            }
          return (
            (C.toUrl = function (e) {
              return c._config.requireToUrl(u.resolveModule(e))
            }),
            (C.getStats = function () {
              return c.getLoaderEvents()
            }),
            (C.hasDependencyCycle = function () {
              return c._hasDependencyCycle
            }),
            (C.config = function (e, f) {
              f === void 0 && (f = !1), c.configure(e, f)
            }),
            (C.__$__nodeRequire = F.global.nodeRequire),
            C
          )
        }),
        (a.prototype._loadModule = function (u) {
          var c = this
          if (!(this._modules2[u] || this._knownModules2[u])) {
            this._knownModules2[u] = !0
            var C = this._moduleIdProvider.getStrModuleId(u),
              e = this._config.moduleIdToPaths(C),
              f = /^@[^\/]+\/[^\/]+$/
            this._env.isNode &&
              (C.indexOf('/') === -1 || f.test(C)) &&
              e.push('node|' + C)
            var m = -1,
              N = function (b) {
                if ((m++, m >= e.length)) c._onLoadError(u, b)
                else {
                  var h = e[m],
                    S = c.getRecorder()
                  if (c._config.isBuild() && h === 'empty:') {
                    ;(c._buildInfoPath[u] = h),
                      c.defineModule(
                        c._moduleIdProvider.getStrModuleId(u),
                        [],
                        null,
                        null,
                        null
                      ),
                      c._onLoad(u)
                    return
                  }
                  S.record(10, h),
                    c._scriptLoader.load(
                      c,
                      h,
                      function () {
                        c._config.isBuild() && (c._buildInfoPath[u] = h),
                          S.record(11, h),
                          c._onLoad(u)
                      },
                      function (p) {
                        S.record(12, h), N(p)
                      }
                    )
                }
              }
            N(null)
          }
        }),
        (a.prototype._loadPluginDependency = function (u, c) {
          var C = this
          if (!(this._modules2[c.id] || this._knownModules2[c.id])) {
            this._knownModules2[c.id] = !0
            var e = function (f) {
              C.defineModule(
                C._moduleIdProvider.getStrModuleId(c.id),
                [],
                f,
                null,
                null
              )
            }
            ;(e.error = function (f) {
              C._config.onError(C._createLoadError(c.id, f))
            }),
              u.load(
                c.pluginParam,
                this._createRequire(n.ROOT),
                e,
                this._config.getOptionsLiteral()
              )
          }
        }),
        (a.prototype._resolve = function (u) {
          var c = this,
            C = u.dependencies
          if (C)
            for (var e = 0, f = C.length; e < f; e++) {
              var m = C[e]
              if (m === w.EXPORTS) {
                ;(u.exportsPassedIn = !0), u.unresolvedDependenciesCount--
                continue
              }
              if (m === w.MODULE) {
                u.unresolvedDependenciesCount--
                continue
              }
              if (m === w.REQUIRE) {
                u.unresolvedDependenciesCount--
                continue
              }
              var N = this._modules2[m.id]
              if (N && N.isComplete()) {
                if (N.error) {
                  u.onDependencyError(N.error)
                  return
                }
                u.unresolvedDependenciesCount--
                continue
              }
              if (this._hasDependencyPath(m.id, u.id)) {
                ;(this._hasDependencyCycle = !0),
                  console.warn(
                    "There is a dependency cycle between '" +
                      this._moduleIdProvider.getStrModuleId(m.id) +
                      "' and '" +
                      this._moduleIdProvider.getStrModuleId(u.id) +
                      "'. The cyclic path follows:"
                  )
                var b = this._findCyclePath(m.id, u.id, 0) || []
                b.reverse(),
                  b.push(m.id),
                  console.warn(
                    b.map(function (p) {
                      return c._moduleIdProvider.getStrModuleId(p)
                    }).join(` => 
`)
                  ),
                  u.unresolvedDependenciesCount--
                continue
              }
              if (
                ((this._inverseDependencies2[m.id] =
                  this._inverseDependencies2[m.id] || []),
                this._inverseDependencies2[m.id].push(u.id),
                m instanceof s)
              ) {
                var h = this._modules2[m.pluginId]
                if (h && h.isComplete()) {
                  this._loadPluginDependency(h.exports, m)
                  continue
                }
                var S = this._inversePluginDependencies2.get(m.pluginId)
                S ||
                  ((S = []),
                  this._inversePluginDependencies2.set(m.pluginId, S)),
                  S.push(m),
                  this._loadModule(m.pluginId)
                continue
              }
              this._loadModule(m.id)
            }
          u.unresolvedDependenciesCount === 0 && this._onModuleComplete(u)
        }),
        (a.prototype._onModuleComplete = function (u) {
          var c = this,
            C = this.getRecorder()
          if (!u.isComplete()) {
            var e = u.dependencies,
              f = []
            if (e)
              for (var m = 0, N = e.length; m < N; m++) {
                var b = e[m]
                if (b === w.EXPORTS) {
                  f[m] = u.exports
                  continue
                }
                if (b === w.MODULE) {
                  f[m] = {
                    id: u.strId,
                    config: function () {
                      return c._config.getConfigForModule(u.strId)
                    },
                  }
                  continue
                }
                if (b === w.REQUIRE) {
                  f[m] = this._createRequire(u.moduleIdResolver)
                  continue
                }
                var h = this._modules2[b.id]
                if (h) {
                  f[m] = h.exports
                  continue
                }
                f[m] = null
              }
            u.complete(C, this._config, f)
            var S = this._inverseDependencies2[u.id]
            if (((this._inverseDependencies2[u.id] = null), S))
              for (var m = 0, N = S.length; m < N; m++) {
                var p = S[m],
                  i = this._modules2[p]
                i.unresolvedDependenciesCount--,
                  i.unresolvedDependenciesCount === 0 &&
                    this._onModuleComplete(i)
              }
            var r = this._inversePluginDependencies2.get(u.id)
            if (r) {
              this._inversePluginDependencies2.delete(u.id)
              for (var m = 0, N = r.length; m < N; m++)
                this._loadPluginDependency(u.exports, r[m])
            }
          }
        }),
        a
      )
    })()
    F.ModuleManager = d
  })(Q || (Q = {}))
  var j, Q
  ;(function (F) {
    var n = new F.Environment(),
      A = null,
      D = function (a, u, c) {
        typeof a != 'string' && ((c = u), (u = a), (a = null)),
          (typeof u != 'object' || !Array.isArray(u)) && ((c = u), (u = null)),
          u || (u = ['require', 'exports', 'module']),
          a
            ? A.defineModule(a, u, c, null, null)
            : A.enqueueDefineAnonymousModule(u, c)
      }
    D.amd = { jQuery: !0 }
    var w = function (a, u) {
        u === void 0 && (u = !1), A.configure(a, u)
      },
      s = function () {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
            w(arguments[0])
            return
          }
          if (typeof arguments[0] == 'string')
            return A.synchronousRequire(arguments[0])
        }
        if (
          (arguments.length === 2 || arguments.length === 3) &&
          Array.isArray(arguments[0])
        ) {
          A.defineModule(
            F.Utilities.generateAnonymousModule(),
            arguments[0],
            arguments[1],
            arguments[2],
            null
          )
          return
        }
        throw new Error('Unrecognized require call')
      }
    ;(s.config = w),
      (s.getConfig = function () {
        return A.getConfig().getOptionsLiteral()
      }),
      (s.reset = function () {
        A = A.reset()
      }),
      (s.getBuildInfo = function () {
        return A.getBuildInfo()
      }),
      (s.getStats = function () {
        return A.getLoaderEvents()
      }),
      (s.define = D)
    function d() {
      if (
        typeof F.global.require != 'undefined' ||
        typeof require != 'undefined'
      ) {
        var a = F.global.require || require
        if (typeof a == 'function' && typeof a.resolve == 'function') {
          var u = F.ensureRecordedNodeRequire(A.getRecorder(), a)
          ;(F.global.nodeRequire = u),
            (s.nodeRequire = u),
            (s.__$__nodeRequire = u)
        }
      }
      n.isNode && !n.isElectronRenderer && !n.isElectronNodeIntegrationWebWorker
        ? ((module.exports = s), (require = s))
        : (n.isElectronRenderer || (F.global.define = D),
          (F.global.require = s))
    }
    ;(F.init = d),
      (typeof F.global.define != 'function' || !F.global.define.amd) &&
        ((A = new F.ModuleManager(
          n,
          F.createScriptLoader(n),
          D,
          s,
          F.Utilities.getHighPerformanceTimestamp()
        )),
        typeof F.global.require != 'undefined' &&
          typeof F.global.require != 'function' &&
          s.config(F.global.require),
        (j = function () {
          return D.apply(null, arguments)
        }),
        (j.amd = D.amd),
        typeof doNotInitLoader == 'undefined' && d())
  })(Q || (Q = {})),
    j(z[14], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.DiffChange = void 0)
      class A {
        constructor(w, s, d, a) {
          ;(this.originalStart = w),
            (this.originalLength = s),
            (this.modifiedStart = d),
            (this.modifiedLength = a)
        }
        getOriginalEnd() {
          return this.originalStart + this.originalLength
        }
        getModifiedEnd() {
          return this.modifiedStart + this.modifiedLength
        }
      }
      n.DiffChange = A
    }),
    j(z[7], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.NotSupportedError =
          n.illegalState =
          n.illegalArgument =
          n.canceled =
          n.isPromiseCanceledError =
          n.transformErrorForSerialization =
          n.onUnexpectedExternalError =
          n.onUnexpectedError =
          n.errorHandler =
          n.ErrorHandler =
            void 0)
      class A {
        constructor() {
          ;(this.listeners = []),
            (this.unexpectedErrorHandler = function (m) {
              setTimeout(() => {
                throw m.stack
                  ? new Error(
                      m.message +
                        `

` +
                        m.stack
                    )
                  : m
              }, 0)
            })
        }
        emit(m) {
          this.listeners.forEach((N) => {
            N(m)
          })
        }
        onUnexpectedError(m) {
          this.unexpectedErrorHandler(m), this.emit(m)
        }
        onUnexpectedExternalError(m) {
          this.unexpectedErrorHandler(m)
        }
      }
      ;(n.ErrorHandler = A), (n.errorHandler = new A())
      function D(f) {
        a(f) || n.errorHandler.onUnexpectedError(f)
      }
      n.onUnexpectedError = D
      function w(f) {
        a(f) || n.errorHandler.onUnexpectedExternalError(f)
      }
      n.onUnexpectedExternalError = w
      function s(f) {
        if (f instanceof Error) {
          let { name: m, message: N } = f
          const b = f.stacktrace || f.stack
          return { $isError: !0, name: m, message: N, stack: b }
        }
        return f
      }
      n.transformErrorForSerialization = s
      const d = 'Canceled'
      function a(f) {
        return f instanceof Error && f.name === d && f.message === d
      }
      n.isPromiseCanceledError = a
      function u() {
        const f = new Error(d)
        return (f.name = f.message), f
      }
      n.canceled = u
      function c(f) {
        return f
          ? new Error(`Illegal argument: ${f}`)
          : new Error('Illegal argument')
      }
      n.illegalArgument = c
      function C(f) {
        return f ? new Error(`Illegal state: ${f}`) : new Error('Illegal state')
      }
      n.illegalState = C
      class e extends Error {
        constructor(m) {
          super('NotSupported')
          m && (this.message = m)
        }
      }
      n.NotSupportedError = e
    }),
    j(z[15], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.once = void 0)
      function A(D) {
        const w = this
        let s = !1,
          d
        return function () {
          return s || ((s = !0), (d = D.apply(w, arguments))), d
        }
      }
      n.once = A
    }),
    j(z[16], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Iterable = void 0)
      var A
      ;(function (D) {
        function w(l) {
          return (
            l && typeof l == 'object' && typeof l[Symbol.iterator] == 'function'
          )
        }
        D.is = w
        const s = Object.freeze([])
        function d() {
          return s
        }
        D.empty = d
        function* a(l) {
          yield l
        }
        D.single = a
        function u(l) {
          return l || s
        }
        D.from = u
        function c(l) {
          return !l || l[Symbol.iterator]().next().done === !0
        }
        D.isEmpty = c
        function C(l) {
          return l[Symbol.iterator]().next().value
        }
        D.first = C
        function e(l, g) {
          for (const v of l) if (g(v)) return !0
          return !1
        }
        D.some = e
        function f(l, g) {
          for (const v of l) if (g(v)) return v
        }
        D.find = f
        function* m(l, g) {
          for (const v of l) g(v) && (yield v)
        }
        D.filter = m
        function* N(l, g) {
          let v = 0
          for (const o of l) yield g(o, v++)
        }
        D.map = N
        function* b(...l) {
          for (const g of l) for (const v of g) yield v
        }
        D.concat = b
        function* h(l) {
          for (const g of l) for (const v of g) yield v
        }
        D.concatNested = h
        function S(l, g, v) {
          let o = v
          for (const _ of l) o = g(o, _)
          return o
        }
        D.reduce = S
        function* p(l, g, v = l.length) {
          for (
            g < 0 && (g += l.length),
              v < 0 ? (v += l.length) : v > l.length && (v = l.length);
            g < v;
            g++
          )
            yield l[g]
        }
        D.slice = p
        function i(l, g = Number.POSITIVE_INFINITY) {
          const v = []
          if (g === 0) return [v, l]
          const o = l[Symbol.iterator]()
          for (let _ = 0; _ < g; _++) {
            const L = o.next()
            if (L.done) return [v, D.empty()]
            v.push(L.value)
          }
          return [
            v,
            {
              [Symbol.iterator]() {
                return o
              },
            },
          ]
        }
        D.consume = i
        function r(l, g, v = (o, _) => o === _) {
          const o = l[Symbol.iterator](),
            _ = g[Symbol.iterator]()
          for (;;) {
            const L = o.next(),
              E = _.next()
            if (L.done !== E.done) return !1
            if (L.done) return !0
            if (!v(L.value, E.value)) return !1
          }
        }
        D.equals = r
      })((A = n.Iterable || (n.Iterable = {})))
    }),
    j(z[17], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.KeyChord =
          n.KeyCodeUtils =
          n.IMMUTABLE_KEY_CODE_TO_CODE =
          n.IMMUTABLE_CODE_TO_KEY_CODE =
          n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE =
          n.EVENT_KEY_CODE_MAP =
            void 0)
      class A {
        constructor() {
          ;(this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null))
        }
        define(f, m) {
          ;(this._keyCodeToStr[f] = m),
            (this._strToKeyCode[m.toLowerCase()] = f)
        }
        keyCodeToStr(f) {
          return this._keyCodeToStr[f]
        }
        strToKeyCode(f) {
          return this._strToKeyCode[f.toLowerCase()] || 0
        }
      }
      const D = new A(),
        w = new A(),
        s = new A()
      ;(n.EVENT_KEY_CODE_MAP = new Array(230)),
        (n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE = {})
      const d = [],
        a = Object.create(null),
        u = Object.create(null)
      ;(n.IMMUTABLE_CODE_TO_KEY_CODE = []), (n.IMMUTABLE_KEY_CODE_TO_CODE = [])
      for (let e = 0; e <= 193; e++) n.IMMUTABLE_CODE_TO_KEY_CODE[e] = -1
      for (let e = 0; e <= 126; e++) n.IMMUTABLE_KEY_CODE_TO_CODE[e] = -1
      ;(function () {
        const e = '',
          f = [
            [0, 1, 0, 'None', 0, 'unknown', 0, 'VK_UNKNOWN', e, e],
            [0, 1, 1, 'Hyper', 0, e, 0, e, e, e],
            [0, 1, 2, 'Super', 0, e, 0, e, e, e],
            [0, 1, 3, 'Fn', 0, e, 0, e, e, e],
            [0, 1, 4, 'FnLock', 0, e, 0, e, e, e],
            [0, 1, 5, 'Suspend', 0, e, 0, e, e, e],
            [0, 1, 6, 'Resume', 0, e, 0, e, e, e],
            [0, 1, 7, 'Turbo', 0, e, 0, e, e, e],
            [0, 1, 8, 'Sleep', 0, e, 0, 'VK_SLEEP', e, e],
            [0, 1, 9, 'WakeUp', 0, e, 0, e, e, e],
            [31, 0, 10, 'KeyA', 31, 'A', 65, 'VK_A', e, e],
            [32, 0, 11, 'KeyB', 32, 'B', 66, 'VK_B', e, e],
            [33, 0, 12, 'KeyC', 33, 'C', 67, 'VK_C', e, e],
            [34, 0, 13, 'KeyD', 34, 'D', 68, 'VK_D', e, e],
            [35, 0, 14, 'KeyE', 35, 'E', 69, 'VK_E', e, e],
            [36, 0, 15, 'KeyF', 36, 'F', 70, 'VK_F', e, e],
            [37, 0, 16, 'KeyG', 37, 'G', 71, 'VK_G', e, e],
            [38, 0, 17, 'KeyH', 38, 'H', 72, 'VK_H', e, e],
            [39, 0, 18, 'KeyI', 39, 'I', 73, 'VK_I', e, e],
            [40, 0, 19, 'KeyJ', 40, 'J', 74, 'VK_J', e, e],
            [41, 0, 20, 'KeyK', 41, 'K', 75, 'VK_K', e, e],
            [42, 0, 21, 'KeyL', 42, 'L', 76, 'VK_L', e, e],
            [43, 0, 22, 'KeyM', 43, 'M', 77, 'VK_M', e, e],
            [44, 0, 23, 'KeyN', 44, 'N', 78, 'VK_N', e, e],
            [45, 0, 24, 'KeyO', 45, 'O', 79, 'VK_O', e, e],
            [46, 0, 25, 'KeyP', 46, 'P', 80, 'VK_P', e, e],
            [47, 0, 26, 'KeyQ', 47, 'Q', 81, 'VK_Q', e, e],
            [48, 0, 27, 'KeyR', 48, 'R', 82, 'VK_R', e, e],
            [49, 0, 28, 'KeyS', 49, 'S', 83, 'VK_S', e, e],
            [50, 0, 29, 'KeyT', 50, 'T', 84, 'VK_T', e, e],
            [51, 0, 30, 'KeyU', 51, 'U', 85, 'VK_U', e, e],
            [52, 0, 31, 'KeyV', 52, 'V', 86, 'VK_V', e, e],
            [53, 0, 32, 'KeyW', 53, 'W', 87, 'VK_W', e, e],
            [54, 0, 33, 'KeyX', 54, 'X', 88, 'VK_X', e, e],
            [55, 0, 34, 'KeyY', 55, 'Y', 89, 'VK_Y', e, e],
            [56, 0, 35, 'KeyZ', 56, 'Z', 90, 'VK_Z', e, e],
            [22, 0, 36, 'Digit1', 22, '1', 49, 'VK_1', e, e],
            [23, 0, 37, 'Digit2', 23, '2', 50, 'VK_2', e, e],
            [24, 0, 38, 'Digit3', 24, '3', 51, 'VK_3', e, e],
            [25, 0, 39, 'Digit4', 25, '4', 52, 'VK_4', e, e],
            [26, 0, 40, 'Digit5', 26, '5', 53, 'VK_5', e, e],
            [27, 0, 41, 'Digit6', 27, '6', 54, 'VK_6', e, e],
            [28, 0, 42, 'Digit7', 28, '7', 55, 'VK_7', e, e],
            [29, 0, 43, 'Digit8', 29, '8', 56, 'VK_8', e, e],
            [30, 0, 44, 'Digit9', 30, '9', 57, 'VK_9', e, e],
            [21, 0, 45, 'Digit0', 21, '0', 48, 'VK_0', e, e],
            [3, 1, 46, 'Enter', 3, 'Enter', 13, 'VK_RETURN', e, e],
            [9, 1, 47, 'Escape', 9, 'Escape', 27, 'VK_ESCAPE', e, e],
            [1, 1, 48, 'Backspace', 1, 'Backspace', 8, 'VK_BACK', e, e],
            [2, 1, 49, 'Tab', 2, 'Tab', 9, 'VK_TAB', e, e],
            [10, 1, 50, 'Space', 10, 'Space', 32, 'VK_SPACE', e, e],
            [
              83,
              0,
              51,
              'Minus',
              83,
              '-',
              189,
              'VK_OEM_MINUS',
              '-',
              'OEM_MINUS',
            ],
            [81, 0, 52, 'Equal', 81, '=', 187, 'VK_OEM_PLUS', '=', 'OEM_PLUS'],
            [87, 0, 53, 'BracketLeft', 87, '[', 219, 'VK_OEM_4', '[', 'OEM_4'],
            [89, 0, 54, 'BracketRight', 89, ']', 221, 'VK_OEM_6', ']', 'OEM_6'],
            [88, 0, 55, 'Backslash', 88, '\\', 220, 'VK_OEM_5', '\\', 'OEM_5'],
            [0, 0, 56, 'IntlHash', 0, e, 0, e, e, e],
            [80, 0, 57, 'Semicolon', 80, ';', 186, 'VK_OEM_1', ';', 'OEM_1'],
            [90, 0, 58, 'Quote', 90, "'", 222, 'VK_OEM_7', "'", 'OEM_7'],
            [86, 0, 59, 'Backquote', 86, '`', 192, 'VK_OEM_3', '`', 'OEM_3'],
            [
              82,
              0,
              60,
              'Comma',
              82,
              ',',
              188,
              'VK_OEM_COMMA',
              ',',
              'OEM_COMMA',
            ],
            [
              84,
              0,
              61,
              'Period',
              84,
              '.',
              190,
              'VK_OEM_PERIOD',
              '.',
              'OEM_PERIOD',
            ],
            [85, 0, 62, 'Slash', 85, '/', 191, 'VK_OEM_2', '/', 'OEM_2'],
            [8, 1, 63, 'CapsLock', 8, 'CapsLock', 20, 'VK_CAPITAL', e, e],
            [59, 1, 64, 'F1', 59, 'F1', 112, 'VK_F1', e, e],
            [60, 1, 65, 'F2', 60, 'F2', 113, 'VK_F2', e, e],
            [61, 1, 66, 'F3', 61, 'F3', 114, 'VK_F3', e, e],
            [62, 1, 67, 'F4', 62, 'F4', 115, 'VK_F4', e, e],
            [63, 1, 68, 'F5', 63, 'F5', 116, 'VK_F5', e, e],
            [64, 1, 69, 'F6', 64, 'F6', 117, 'VK_F6', e, e],
            [65, 1, 70, 'F7', 65, 'F7', 118, 'VK_F7', e, e],
            [66, 1, 71, 'F8', 66, 'F8', 119, 'VK_F8', e, e],
            [67, 1, 72, 'F9', 67, 'F9', 120, 'VK_F9', e, e],
            [68, 1, 73, 'F10', 68, 'F10', 121, 'VK_F10', e, e],
            [69, 1, 74, 'F11', 69, 'F11', 122, 'VK_F11', e, e],
            [70, 1, 75, 'F12', 70, 'F12', 123, 'VK_F12', e, e],
            [0, 1, 76, 'PrintScreen', 0, e, 0, e, e, e],
            [79, 1, 77, 'ScrollLock', 79, 'ScrollLock', 145, 'VK_SCROLL', e, e],
            [7, 1, 78, 'Pause', 7, 'PauseBreak', 19, 'VK_PAUSE', e, e],
            [19, 1, 79, 'Insert', 19, 'Insert', 45, 'VK_INSERT', e, e],
            [14, 1, 80, 'Home', 14, 'Home', 36, 'VK_HOME', e, e],
            [11, 1, 81, 'PageUp', 11, 'PageUp', 33, 'VK_PRIOR', e, e],
            [20, 1, 82, 'Delete', 20, 'Delete', 46, 'VK_DELETE', e, e],
            [13, 1, 83, 'End', 13, 'End', 35, 'VK_END', e, e],
            [12, 1, 84, 'PageDown', 12, 'PageDown', 34, 'VK_NEXT', e, e],
            [
              17,
              1,
              85,
              'ArrowRight',
              17,
              'RightArrow',
              39,
              'VK_RIGHT',
              'Right',
              e,
            ],
            [15, 1, 86, 'ArrowLeft', 15, 'LeftArrow', 37, 'VK_LEFT', 'Left', e],
            [18, 1, 87, 'ArrowDown', 18, 'DownArrow', 40, 'VK_DOWN', 'Down', e],
            [16, 1, 88, 'ArrowUp', 16, 'UpArrow', 38, 'VK_UP', 'Up', e],
            [78, 1, 89, 'NumLock', 78, 'NumLock', 144, 'VK_NUMLOCK', e, e],
            [
              108,
              1,
              90,
              'NumpadDivide',
              108,
              'NumPad_Divide',
              111,
              'VK_DIVIDE',
              e,
              e,
            ],
            [
              103,
              1,
              91,
              'NumpadMultiply',
              103,
              'NumPad_Multiply',
              106,
              'VK_MULTIPLY',
              e,
              e,
            ],
            [
              106,
              1,
              92,
              'NumpadSubtract',
              106,
              'NumPad_Subtract',
              109,
              'VK_SUBTRACT',
              e,
              e,
            ],
            [104, 1, 93, 'NumpadAdd', 104, 'NumPad_Add', 107, 'VK_ADD', e, e],
            [3, 1, 94, 'NumpadEnter', 3, e, 0, e, e, e],
            [94, 1, 95, 'Numpad1', 94, 'NumPad1', 97, 'VK_NUMPAD1', e, e],
            [95, 1, 96, 'Numpad2', 95, 'NumPad2', 98, 'VK_NUMPAD2', e, e],
            [96, 1, 97, 'Numpad3', 96, 'NumPad3', 99, 'VK_NUMPAD3', e, e],
            [97, 1, 98, 'Numpad4', 97, 'NumPad4', 100, 'VK_NUMPAD4', e, e],
            [98, 1, 99, 'Numpad5', 98, 'NumPad5', 101, 'VK_NUMPAD5', e, e],
            [99, 1, 100, 'Numpad6', 99, 'NumPad6', 102, 'VK_NUMPAD6', e, e],
            [100, 1, 101, 'Numpad7', 100, 'NumPad7', 103, 'VK_NUMPAD7', e, e],
            [101, 1, 102, 'Numpad8', 101, 'NumPad8', 104, 'VK_NUMPAD8', e, e],
            [102, 1, 103, 'Numpad9', 102, 'NumPad9', 105, 'VK_NUMPAD9', e, e],
            [93, 1, 104, 'Numpad0', 93, 'NumPad0', 96, 'VK_NUMPAD0', e, e],
            [
              107,
              1,
              105,
              'NumpadDecimal',
              107,
              'NumPad_Decimal',
              110,
              'VK_DECIMAL',
              e,
              e,
            ],
            [
              92,
              0,
              106,
              'IntlBackslash',
              92,
              'OEM_102',
              226,
              'VK_OEM_102',
              e,
              e,
            ],
            [58, 1, 107, 'ContextMenu', 58, 'ContextMenu', 93, e, e, e],
            [0, 1, 108, 'Power', 0, e, 0, e, e, e],
            [0, 1, 109, 'NumpadEqual', 0, e, 0, e, e, e],
            [71, 1, 110, 'F13', 71, 'F13', 124, 'VK_F13', e, e],
            [72, 1, 111, 'F14', 72, 'F14', 125, 'VK_F14', e, e],
            [73, 1, 112, 'F15', 73, 'F15', 126, 'VK_F15', e, e],
            [74, 1, 113, 'F16', 74, 'F16', 127, 'VK_F16', e, e],
            [75, 1, 114, 'F17', 75, 'F17', 128, 'VK_F17', e, e],
            [76, 1, 115, 'F18', 76, 'F18', 129, 'VK_F18', e, e],
            [77, 1, 116, 'F19', 77, 'F19', 130, 'VK_F19', e, e],
            [0, 1, 117, 'F20', 0, e, 0, 'VK_F20', e, e],
            [0, 1, 118, 'F21', 0, e, 0, 'VK_F21', e, e],
            [0, 1, 119, 'F22', 0, e, 0, 'VK_F22', e, e],
            [0, 1, 120, 'F23', 0, e, 0, 'VK_F23', e, e],
            [0, 1, 121, 'F24', 0, e, 0, 'VK_F24', e, e],
            [0, 1, 122, 'Open', 0, e, 0, e, e, e],
            [0, 1, 123, 'Help', 0, e, 0, e, e, e],
            [0, 1, 124, 'Select', 0, e, 0, e, e, e],
            [0, 1, 125, 'Again', 0, e, 0, e, e, e],
            [0, 1, 126, 'Undo', 0, e, 0, e, e, e],
            [0, 1, 127, 'Cut', 0, e, 0, e, e, e],
            [0, 1, 128, 'Copy', 0, e, 0, e, e, e],
            [0, 1, 129, 'Paste', 0, e, 0, e, e, e],
            [0, 1, 130, 'Find', 0, e, 0, e, e, e],
            [
              0,
              1,
              131,
              'AudioVolumeMute',
              112,
              'AudioVolumeMute',
              173,
              'VK_VOLUME_MUTE',
              e,
              e,
            ],
            [
              0,
              1,
              132,
              'AudioVolumeUp',
              113,
              'AudioVolumeUp',
              175,
              'VK_VOLUME_UP',
              e,
              e,
            ],
            [
              0,
              1,
              133,
              'AudioVolumeDown',
              114,
              'AudioVolumeDown',
              174,
              'VK_VOLUME_DOWN',
              e,
              e,
            ],
            [
              105,
              1,
              134,
              'NumpadComma',
              105,
              'NumPad_Separator',
              108,
              'VK_SEPARATOR',
              e,
              e,
            ],
            [110, 0, 135, 'IntlRo', 110, 'ABNT_C1', 193, 'VK_ABNT_C1', e, e],
            [0, 1, 136, 'KanaMode', 0, e, 0, e, e, e],
            [0, 0, 137, 'IntlYen', 0, e, 0, e, e, e],
            [0, 1, 138, 'Convert', 0, e, 0, e, e, e],
            [0, 1, 139, 'NonConvert', 0, e, 0, e, e, e],
            [0, 1, 140, 'Lang1', 0, e, 0, e, e, e],
            [0, 1, 141, 'Lang2', 0, e, 0, e, e, e],
            [0, 1, 142, 'Lang3', 0, e, 0, e, e, e],
            [0, 1, 143, 'Lang4', 0, e, 0, e, e, e],
            [0, 1, 144, 'Lang5', 0, e, 0, e, e, e],
            [0, 1, 145, 'Abort', 0, e, 0, e, e, e],
            [0, 1, 146, 'Props', 0, e, 0, e, e, e],
            [0, 1, 147, 'NumpadParenLeft', 0, e, 0, e, e, e],
            [0, 1, 148, 'NumpadParenRight', 0, e, 0, e, e, e],
            [0, 1, 149, 'NumpadBackspace', 0, e, 0, e, e, e],
            [0, 1, 150, 'NumpadMemoryStore', 0, e, 0, e, e, e],
            [0, 1, 151, 'NumpadMemoryRecall', 0, e, 0, e, e, e],
            [0, 1, 152, 'NumpadMemoryClear', 0, e, 0, e, e, e],
            [0, 1, 153, 'NumpadMemoryAdd', 0, e, 0, e, e, e],
            [0, 1, 154, 'NumpadMemorySubtract', 0, e, 0, e, e, e],
            [0, 1, 155, 'NumpadClear', 0, e, 0, e, e, e],
            [0, 1, 156, 'NumpadClearEntry', 0, e, 0, e, e, e],
            [5, 1, 0, e, 5, 'Ctrl', 17, 'VK_CONTROL', e, e],
            [4, 1, 0, e, 4, 'Shift', 16, 'VK_SHIFT', e, e],
            [6, 1, 0, e, 6, 'Alt', 18, 'VK_MENU', e, e],
            [57, 1, 0, e, 57, 'Meta', 0, 'VK_COMMAND', e, e],
            [5, 1, 157, 'ControlLeft', 5, e, 0, 'VK_LCONTROL', e, e],
            [4, 1, 158, 'ShiftLeft', 4, e, 0, 'VK_LSHIFT', e, e],
            [6, 1, 159, 'AltLeft', 6, e, 0, 'VK_LMENU', e, e],
            [57, 1, 160, 'MetaLeft', 57, e, 0, 'VK_LWIN', e, e],
            [5, 1, 161, 'ControlRight', 5, e, 0, 'VK_RCONTROL', e, e],
            [4, 1, 162, 'ShiftRight', 4, e, 0, 'VK_RSHIFT', e, e],
            [6, 1, 163, 'AltRight', 6, e, 0, 'VK_RMENU', e, e],
            [57, 1, 164, 'MetaRight', 57, e, 0, 'VK_RWIN', e, e],
            [0, 1, 165, 'BrightnessUp', 0, e, 0, e, e, e],
            [0, 1, 166, 'BrightnessDown', 0, e, 0, e, e, e],
            [0, 1, 167, 'MediaPlay', 0, e, 0, e, e, e],
            [0, 1, 168, 'MediaRecord', 0, e, 0, e, e, e],
            [0, 1, 169, 'MediaFastForward', 0, e, 0, e, e, e],
            [0, 1, 170, 'MediaRewind', 0, e, 0, e, e, e],
            [
              114,
              1,
              171,
              'MediaTrackNext',
              119,
              'MediaTrackNext',
              176,
              'VK_MEDIA_NEXT_TRACK',
              e,
              e,
            ],
            [
              115,
              1,
              172,
              'MediaTrackPrevious',
              120,
              'MediaTrackPrevious',
              177,
              'VK_MEDIA_PREV_TRACK',
              e,
              e,
            ],
            [
              116,
              1,
              173,
              'MediaStop',
              121,
              'MediaStop',
              178,
              'VK_MEDIA_STOP',
              e,
              e,
            ],
            [0, 1, 174, 'Eject', 0, e, 0, e, e, e],
            [
              117,
              1,
              175,
              'MediaPlayPause',
              122,
              'MediaPlayPause',
              179,
              'VK_MEDIA_PLAY_PAUSE',
              e,
              e,
            ],
            [
              0,
              1,
              176,
              'MediaSelect',
              123,
              'LaunchMediaPlayer',
              181,
              'VK_MEDIA_LAUNCH_MEDIA_SELECT',
              e,
              e,
            ],
            [
              0,
              1,
              177,
              'LaunchMail',
              124,
              'LaunchMail',
              180,
              'VK_MEDIA_LAUNCH_MAIL',
              e,
              e,
            ],
            [
              0,
              1,
              178,
              'LaunchApp2',
              125,
              'LaunchApp2',
              183,
              'VK_MEDIA_LAUNCH_APP2',
              e,
              e,
            ],
            [0, 1, 179, 'LaunchApp1', 0, e, 0, 'VK_MEDIA_LAUNCH_APP1', e, e],
            [0, 1, 180, 'SelectTask', 0, e, 0, e, e, e],
            [0, 1, 181, 'LaunchScreenSaver', 0, e, 0, e, e, e],
            [
              0,
              1,
              182,
              'BrowserSearch',
              115,
              'BrowserSearch',
              170,
              'VK_BROWSER_SEARCH',
              e,
              e,
            ],
            [
              0,
              1,
              183,
              'BrowserHome',
              116,
              'BrowserHome',
              172,
              'VK_BROWSER_HOME',
              e,
              e,
            ],
            [
              112,
              1,
              184,
              'BrowserBack',
              117,
              'BrowserBack',
              166,
              'VK_BROWSER_BACK',
              e,
              e,
            ],
            [
              113,
              1,
              185,
              'BrowserForward',
              118,
              'BrowserForward',
              167,
              'VK_BROWSER_FORWARD',
              e,
              e,
            ],
            [0, 1, 186, 'BrowserStop', 0, e, 0, 'VK_BROWSER_STOP', e, e],
            [0, 1, 187, 'BrowserRefresh', 0, e, 0, 'VK_BROWSER_REFRESH', e, e],
            [
              0,
              1,
              188,
              'BrowserFavorites',
              0,
              e,
              0,
              'VK_BROWSER_FAVORITES',
              e,
              e,
            ],
            [0, 1, 189, 'ZoomToggle', 0, e, 0, e, e, e],
            [0, 1, 190, 'MailReply', 0, e, 0, e, e, e],
            [0, 1, 191, 'MailForward', 0, e, 0, e, e, e],
            [0, 1, 192, 'MailSend', 0, e, 0, e, e, e],
            [109, 1, 0, e, 109, 'KeyInComposition', 229, e, e, e],
            [111, 1, 0, e, 111, 'ABNT_C2', 194, 'VK_ABNT_C2', e, e],
            [91, 1, 0, e, 91, 'OEM_8', 223, 'VK_OEM_8', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_CLEAR', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_KANA', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_HANGUL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_JUNJA', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_FINAL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_HANJA', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_KANJI', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_CONVERT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_NONCONVERT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_ACCEPT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_MODECHANGE', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_SELECT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PRINT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_EXECUTE', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_SNAPSHOT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_HELP', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_APPS', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PROCESSKEY', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PACKET', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_DBE_SBCSCHAR', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_DBE_DBCSCHAR', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_ATTN', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_CRSEL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_EXSEL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_EREOF', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PLAY', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_ZOOM', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_NONAME', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PA1', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_OEM_CLEAR', e, e],
          ]
        let m = [],
          N = []
        for (const b of f) {
          const [h, S, p, i, r, l, g, v, o, _] = b
          if (
            (N[p] ||
              ((N[p] = !0),
              (d[p] = i),
              (a[i] = p),
              (u[i.toLowerCase()] = p),
              S &&
                ((n.IMMUTABLE_CODE_TO_KEY_CODE[p] = r),
                r !== 0 &&
                  r !== 3 &&
                  r !== 5 &&
                  r !== 4 &&
                  r !== 6 &&
                  r !== 57 &&
                  (n.IMMUTABLE_KEY_CODE_TO_CODE[r] = p))),
            !m[r])
          ) {
            if (((m[r] = !0), !l))
              throw new Error(
                `String representation missing for key code ${r} around scan code ${i}`
              )
            D.define(r, l), w.define(r, o || l), s.define(r, _ || o || l)
          }
          g && (n.EVENT_KEY_CODE_MAP[g] = r),
            v && (n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE[v] = r)
        }
        n.IMMUTABLE_KEY_CODE_TO_CODE[3] = 46
      })()
      var c
      ;(function (e) {
        function f(p) {
          return D.keyCodeToStr(p)
        }
        e.toString = f
        function m(p) {
          return D.strToKeyCode(p)
        }
        e.fromString = m
        function N(p) {
          return w.keyCodeToStr(p)
        }
        e.toUserSettingsUS = N
        function b(p) {
          return s.keyCodeToStr(p)
        }
        e.toUserSettingsGeneral = b
        function h(p) {
          return w.strToKeyCode(p) || s.strToKeyCode(p)
        }
        e.fromUserSettings = h
        function S(p) {
          if (p >= 93 && p <= 108) return null
          switch (p) {
            case 16:
              return 'Up'
            case 18:
              return 'Down'
            case 15:
              return 'Left'
            case 17:
              return 'Right'
          }
          return D.keyCodeToStr(p)
        }
        e.toElectronAccelerator = S
      })((c = n.KeyCodeUtils || (n.KeyCodeUtils = {})))
      function C(e, f) {
        const m = ((f & 65535) << 16) >>> 0
        return (e | m) >>> 0
      }
      n.KeyChord = C
    }),
    j(z[8], G([0, 1, 15, 16]), function (F, n, A, D) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.ImmortalReference =
          n.MutableDisposable =
          n.Disposable =
          n.DisposableStore =
          n.toDisposable =
          n.combinedDisposable =
          n.dispose =
          n.isDisposable =
          n.MultiDisposeError =
          n.markAsSingleton =
          n.setDisposableTracker =
            void 0)
      const w = !1
      let s = null
      function d(l) {
        s = l
      }
      if (((n.setDisposableTracker = d), w)) {
        const l = '__is_disposable_tracked__'
        d(
          new (class {
            trackDisposable(g) {
              const v = new Error('Potentially leaked disposable').stack
              setTimeout(() => {
                g[l] || console.log(v)
              }, 3e3)
            }
            setParent(g, v) {
              if (g && g !== p.None)
                try {
                  g[l] = !0
                } catch (o) {}
            }
            markAsDisposed(g) {
              if (g && g !== p.None)
                try {
                  g[l] = !0
                } catch (v) {}
            }
            markAsSingleton(g) {}
          })()
        )
      }
      function a(l) {
        return s == null || s.trackDisposable(l), l
      }
      function u(l) {
        s == null || s.markAsDisposed(l)
      }
      function c(l, g) {
        s == null || s.setParent(l, g)
      }
      function C(l, g) {
        if (!!s) for (const v of l) s.setParent(v, g)
      }
      function e(l) {
        return s == null || s.markAsSingleton(l), l
      }
      n.markAsSingleton = e
      class f extends Error {
        constructor(g) {
          super(
            `Encountered errors while disposing of store. Errors: [${g.join(
              ', '
            )}]`
          )
          this.errors = g
        }
      }
      n.MultiDisposeError = f
      function m(l) {
        return typeof l.dispose == 'function' && l.dispose.length === 0
      }
      n.isDisposable = m
      function N(l) {
        if (D.Iterable.is(l)) {
          let g = []
          for (const v of l)
            if (v)
              try {
                v.dispose()
              } catch (o) {
                g.push(o)
              }
          if (g.length === 1) throw g[0]
          if (g.length > 1) throw new f(g)
          return Array.isArray(l) ? [] : l
        } else if (l) return l.dispose(), l
      }
      n.dispose = N
      function b(...l) {
        const g = h(() => N(l))
        return C(l, g), g
      }
      n.combinedDisposable = b
      function h(l) {
        const g = a({
          dispose: (0, A.once)(() => {
            u(g), l()
          }),
        })
        return g
      }
      n.toDisposable = h
      class S {
        constructor() {
          ;(this._toDispose = new Set()), (this._isDisposed = !1), a(this)
        }
        dispose() {
          this._isDisposed || (u(this), (this._isDisposed = !0), this.clear())
        }
        clear() {
          try {
            N(this._toDispose.values())
          } finally {
            this._toDispose.clear()
          }
        }
        add(g) {
          if (!g) return g
          if (g === this)
            throw new Error('Cannot register a disposable on itself!')
          return (
            c(g, this),
            this._isDisposed
              ? S.DISABLE_DISPOSED_WARNING ||
                console.warn(
                  new Error(
                    'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!'
                  ).stack
                )
              : this._toDispose.add(g),
            g
          )
        }
      }
      ;(n.DisposableStore = S), (S.DISABLE_DISPOSED_WARNING = !1)
      class p {
        constructor() {
          ;(this._store = new S()), a(this), c(this._store, this)
        }
        dispose() {
          u(this), this._store.dispose()
        }
        _register(g) {
          if (g === this)
            throw new Error('Cannot register a disposable on itself!')
          return this._store.add(g)
        }
      }
      ;(n.Disposable = p), (p.None = Object.freeze({ dispose() {} }))
      class i {
        constructor() {
          ;(this._isDisposed = !1), a(this)
        }
        get value() {
          return this._isDisposed ? void 0 : this._value
        }
        set value(g) {
          var v
          this._isDisposed ||
            g === this._value ||
            ((v = this._value) === null || v === void 0 || v.dispose(),
            g && c(g, this),
            (this._value = g))
        }
        clear() {
          this.value = void 0
        }
        dispose() {
          var g
          ;(this._isDisposed = !0),
            u(this),
            (g = this._value) === null || g === void 0 || g.dispose(),
            (this._value = void 0)
        }
        clearAndLeak() {
          const g = this._value
          return (this._value = void 0), g && c(g, null), g
        }
      }
      n.MutableDisposable = i
      class r {
        constructor(g) {
          this.object = g
        }
        dispose() {}
      }
      n.ImmortalReference = r
    }),
    j(z[18], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.LinkedList = void 0)
      class A {
        constructor(s) {
          ;(this.element = s),
            (this.next = A.Undefined),
            (this.prev = A.Undefined)
        }
      }
      A.Undefined = new A(void 0)
      class D {
        constructor() {
          ;(this._first = A.Undefined),
            (this._last = A.Undefined),
            (this._size = 0)
        }
        get size() {
          return this._size
        }
        isEmpty() {
          return this._first === A.Undefined
        }
        clear() {
          let s = this._first
          for (; s !== A.Undefined; ) {
            const d = s.next
            ;(s.prev = A.Undefined), (s.next = A.Undefined), (s = d)
          }
          ;(this._first = A.Undefined),
            (this._last = A.Undefined),
            (this._size = 0)
        }
        unshift(s) {
          return this._insert(s, !1)
        }
        push(s) {
          return this._insert(s, !0)
        }
        _insert(s, d) {
          const a = new A(s)
          if (this._first === A.Undefined) (this._first = a), (this._last = a)
          else if (d) {
            const c = this._last
            ;(this._last = a), (a.prev = c), (c.next = a)
          } else {
            const c = this._first
            ;(this._first = a), (a.next = c), (c.prev = a)
          }
          this._size += 1
          let u = !1
          return () => {
            u || ((u = !0), this._remove(a))
          }
        }
        shift() {
          if (this._first !== A.Undefined) {
            const s = this._first.element
            return this._remove(this._first), s
          }
        }
        pop() {
          if (this._last !== A.Undefined) {
            const s = this._last.element
            return this._remove(this._last), s
          }
        }
        _remove(s) {
          if (s.prev !== A.Undefined && s.next !== A.Undefined) {
            const d = s.prev
            ;(d.next = s.next), (s.next.prev = d)
          } else s.prev === A.Undefined && s.next === A.Undefined ? ((this._first = A.Undefined), (this._last = A.Undefined)) : s.next === A.Undefined ? ((this._last = this._last.prev), (this._last.next = A.Undefined)) : s.prev === A.Undefined && ((this._first = this._first.next), (this._first.prev = A.Undefined))
          this._size -= 1
        }
        *[Symbol.iterator]() {
          let s = this._first
          for (; s !== A.Undefined; ) yield s.element, (s = s.next)
        }
      }
      n.LinkedList = D
    }),
    j(z[2], G([0, 1]), function (F, n) {
      'use strict'
      var A
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.isLittleEndian =
          n.OS =
          n.setImmediate =
          n.userAgent =
          n.isIOS =
          n.isWeb =
          n.isNative =
          n.isLinux =
          n.isMacintosh =
          n.isWindows =
          n.globals =
            void 0)
      const D = 'en'
      let w = !1,
        s = !1,
        d = !1,
        a = !1,
        u = !1,
        c = !1,
        C = !1,
        e,
        f = D,
        m,
        N
      n.globals =
        typeof self == 'object' ? self : typeof global == 'object' ? global : {}
      let b
      typeof n.globals.vscode != 'undefined' &&
      typeof n.globals.vscode.process != 'undefined'
        ? (b = n.globals.vscode.process)
        : typeof process != 'undefined' && (b = process)
      const h =
        typeof ((A = b == null ? void 0 : b.versions) === null || A === void 0
          ? void 0
          : A.electron) == 'string' && b.type === 'renderer'
      if (typeof navigator == 'object' && !h)
        (N = navigator.userAgent),
          (w = N.indexOf('Windows') >= 0),
          (s = N.indexOf('Macintosh') >= 0),
          (C =
            (N.indexOf('Macintosh') >= 0 ||
              N.indexOf('iPad') >= 0 ||
              N.indexOf('iPhone') >= 0) &&
            !!navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0),
          (d = N.indexOf('Linux') >= 0),
          (c = !0),
          (e = navigator.language),
          (f = e)
      else if (typeof b == 'object') {
        ;(w = b.platform === 'win32'),
          (s = b.platform === 'darwin'),
          (d = b.platform === 'linux'),
          (a = d && !!b.env.SNAP && !!b.env.SNAP_REVISION),
          (e = D),
          (f = D)
        const l = b.env.VSCODE_NLS_CONFIG
        if (l)
          try {
            const g = JSON.parse(l),
              v = g.availableLanguages['*']
            ;(e = g.locale), (f = v || D), (m = g._translationsConfigFile)
          } catch (g) {}
        u = !0
      } else console.error('Unable to resolve platform.')
      let S = 0
      s ? (S = 1) : w ? (S = 3) : d && (S = 2),
        (n.isWindows = w),
        (n.isMacintosh = s),
        (n.isLinux = d),
        (n.isNative = u),
        (n.isWeb = c),
        (n.isIOS = C),
        (n.userAgent = N),
        (n.setImmediate = (function () {
          if (n.globals.setImmediate)
            return n.globals.setImmediate.bind(n.globals)
          if (
            typeof n.globals.postMessage == 'function' &&
            !n.globals.importScripts
          ) {
            let v = []
            n.globals.addEventListener('message', (_) => {
              if (_.data && _.data.vscodeSetImmediateId)
                for (let L = 0, E = v.length; L < E; L++) {
                  const y = v[L]
                  if (y.id === _.data.vscodeSetImmediateId) {
                    v.splice(L, 1), y.callback()
                    return
                  }
                }
            })
            let o = 0
            return (_) => {
              const L = ++o
              v.push({ id: L, callback: _ }),
                n.globals.postMessage({ vscodeSetImmediateId: L }, '*')
            }
          }
          if (typeof (b == null ? void 0 : b.nextTick) == 'function')
            return b.nextTick.bind(b)
          const g = Promise.resolve()
          return (v) => g.then(v)
        })()),
        (n.OS = s || C ? 2 : w ? 1 : 3)
      let p = !0,
        i = !1
      function r() {
        if (!i) {
          i = !0
          const l = new Uint8Array(2)
          ;(l[0] = 1),
            (l[1] = 2),
            (p = new Uint16Array(l.buffer)[0] === (2 << 8) + 1)
        }
        return p
      }
      n.isLittleEndian = r
    }),
    j(z[19], G([0, 1, 2]), function (F, n, A) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.platform = n.env = n.cwd = void 0)
      let D
      if (
        typeof A.globals.vscode != 'undefined' &&
        typeof A.globals.vscode.process != 'undefined'
      ) {
        const w = A.globals.vscode.process
        D = {
          get platform() {
            return w.platform
          },
          get arch() {
            return w.arch
          },
          get env() {
            return w.env
          },
          cwd() {
            return w.cwd()
          },
          nextTick(s) {
            return (0, A.setImmediate)(s)
          },
        }
      } else
        typeof process != 'undefined'
          ? (D = {
              get platform() {
                return process.platform
              },
              get arch() {
                return process.arch
              },
              get env() {
                return process.env
              },
              cwd() {
                return process.env.VSCODE_CWD || process.cwd()
              },
              nextTick(w) {
                return process.nextTick(w)
              },
            })
          : (D = {
              get platform() {
                return A.isWindows
                  ? 'win32'
                  : A.isMacintosh
                  ? 'darwin'
                  : 'linux'
              },
              get arch() {},
              nextTick(w) {
                return (0, A.setImmediate)(w)
              },
              get env() {
                return {}
              },
              cwd() {
                return '/'
              },
            })
      ;(n.cwd = D.cwd), (n.env = D.env), (n.platform = D.platform)
    }),
    j(z[20], G([0, 1, 19]), function (F, n, A) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.sep =
          n.extname =
          n.basename =
          n.dirname =
          n.relative =
          n.resolve =
          n.normalize =
          n.posix =
          n.win32 =
            void 0)
      const D = 65,
        w = 97,
        s = 90,
        d = 122,
        a = 46,
        u = 47,
        c = 92,
        C = 58,
        e = 63
      class f extends Error {
        constructor(r, l, g) {
          let v
          typeof l == 'string' && l.indexOf('not ') === 0
            ? ((v = 'must not be'), (l = l.replace(/^not /, '')))
            : (v = 'must be')
          const o = r.indexOf('.') !== -1 ? 'property' : 'argument'
          let _ = `The "${r}" ${o} ${v} of type ${l}`
          ;(_ += `. Received type ${typeof g}`),
            super(_),
            (this.code = 'ERR_INVALID_ARG_TYPE')
        }
      }
      function m(i, r) {
        if (typeof i != 'string') throw new f(r, 'string', i)
      }
      function N(i) {
        return i === u || i === c
      }
      function b(i) {
        return i === u
      }
      function h(i) {
        return (i >= D && i <= s) || (i >= w && i <= d)
      }
      function S(i, r, l, g) {
        let v = '',
          o = 0,
          _ = -1,
          L = 0,
          E = 0
        for (let y = 0; y <= i.length; ++y) {
          if (y < i.length) E = i.charCodeAt(y)
          else {
            if (g(E)) break
            E = u
          }
          if (g(E)) {
            if (!(_ === y - 1 || L === 1))
              if (L === 2) {
                if (
                  v.length < 2 ||
                  o !== 2 ||
                  v.charCodeAt(v.length - 1) !== a ||
                  v.charCodeAt(v.length - 2) !== a
                ) {
                  if (v.length > 2) {
                    const P = v.lastIndexOf(l)
                    P === -1
                      ? ((v = ''), (o = 0))
                      : ((v = v.slice(0, P)),
                        (o = v.length - 1 - v.lastIndexOf(l))),
                      (_ = y),
                      (L = 0)
                    continue
                  } else if (v.length !== 0) {
                    ;(v = ''), (o = 0), (_ = y), (L = 0)
                    continue
                  }
                }
                r && ((v += v.length > 0 ? `${l}..` : '..'), (o = 2))
              } else
                v.length > 0
                  ? (v += `${l}${i.slice(_ + 1, y)}`)
                  : (v = i.slice(_ + 1, y)),
                  (o = y - _ - 1)
            ;(_ = y), (L = 0)
          } else E === a && L !== -1 ? ++L : (L = -1)
        }
        return v
      }
      function p(i, r) {
        if (r === null || typeof r != 'object')
          throw new f('pathObject', 'Object', r)
        const l = r.dir || r.root,
          g = r.base || `${r.name || ''}${r.ext || ''}`
        return l ? (l === r.root ? `${l}${g}` : `${l}${i}${g}`) : g
      }
      ;(n.win32 = {
        resolve(...i) {
          let r = '',
            l = '',
            g = !1
          for (let v = i.length - 1; v >= -1; v--) {
            let o
            if (v >= 0) {
              if (((o = i[v]), m(o, 'path'), o.length === 0)) continue
            } else
              r.length === 0
                ? (o = A.cwd())
                : ((o = A.env[`=${r}`] || A.cwd()),
                  (o === void 0 ||
                    (o.slice(0, 2).toLowerCase() !== r.toLowerCase() &&
                      o.charCodeAt(2) === c)) &&
                    (o = `${r}\\`))
            const _ = o.length
            let L = 0,
              E = '',
              y = !1
            const P = o.charCodeAt(0)
            if (_ === 1) N(P) && ((L = 1), (y = !0))
            else if (N(P))
              if (((y = !0), N(o.charCodeAt(1)))) {
                let R = 2,
                  V = R
                for (; R < _ && !N(o.charCodeAt(R)); ) R++
                if (R < _ && R !== V) {
                  const B = o.slice(V, R)
                  for (V = R; R < _ && N(o.charCodeAt(R)); ) R++
                  if (R < _ && R !== V) {
                    for (V = R; R < _ && !N(o.charCodeAt(R)); ) R++
                    ;(R === _ || R !== V) &&
                      ((E = `\\\\${B}\\${o.slice(V, R)}`), (L = R))
                  }
                }
              } else L = 1
            else
              h(P) &&
                o.charCodeAt(1) === C &&
                ((E = o.slice(0, 2)),
                (L = 2),
                _ > 2 && N(o.charCodeAt(2)) && ((y = !0), (L = 3)))
            if (E.length > 0)
              if (r.length > 0) {
                if (E.toLowerCase() !== r.toLowerCase()) continue
              } else r = E
            if (g) {
              if (r.length > 0) break
            } else if (
              ((l = `${o.slice(L)}\\${l}`), (g = y), y && r.length > 0)
            )
              break
          }
          return (l = S(l, !g, '\\', N)), g ? `${r}\\${l}` : `${r}${l}` || '.'
        },
        normalize(i) {
          m(i, 'path')
          const r = i.length
          if (r === 0) return '.'
          let l = 0,
            g,
            v = !1
          const o = i.charCodeAt(0)
          if (r === 1) return b(o) ? '\\' : i
          if (N(o))
            if (((v = !0), N(i.charCodeAt(1)))) {
              let L = 2,
                E = L
              for (; L < r && !N(i.charCodeAt(L)); ) L++
              if (L < r && L !== E) {
                const y = i.slice(E, L)
                for (E = L; L < r && N(i.charCodeAt(L)); ) L++
                if (L < r && L !== E) {
                  for (E = L; L < r && !N(i.charCodeAt(L)); ) L++
                  if (L === r) return `\\\\${y}\\${i.slice(E)}\\`
                  L !== E && ((g = `\\\\${y}\\${i.slice(E, L)}`), (l = L))
                }
              }
            } else l = 1
          else
            h(o) &&
              i.charCodeAt(1) === C &&
              ((g = i.slice(0, 2)),
              (l = 2),
              r > 2 && N(i.charCodeAt(2)) && ((v = !0), (l = 3)))
          let _ = l < r ? S(i.slice(l), !v, '\\', N) : ''
          return (
            _.length === 0 && !v && (_ = '.'),
            _.length > 0 && N(i.charCodeAt(r - 1)) && (_ += '\\'),
            g === void 0 ? (v ? `\\${_}` : _) : v ? `${g}\\${_}` : `${g}${_}`
          )
        },
        isAbsolute(i) {
          m(i, 'path')
          const r = i.length
          if (r === 0) return !1
          const l = i.charCodeAt(0)
          return (
            N(l) ||
            (r > 2 && h(l) && i.charCodeAt(1) === C && N(i.charCodeAt(2)))
          )
        },
        join(...i) {
          if (i.length === 0) return '.'
          let r, l
          for (let o = 0; o < i.length; ++o) {
            const _ = i[o]
            m(_, 'path'),
              _.length > 0 && (r === void 0 ? (r = l = _) : (r += `\\${_}`))
          }
          if (r === void 0) return '.'
          let g = !0,
            v = 0
          if (typeof l == 'string' && N(l.charCodeAt(0))) {
            ++v
            const o = l.length
            o > 1 &&
              N(l.charCodeAt(1)) &&
              (++v, o > 2 && (N(l.charCodeAt(2)) ? ++v : (g = !1)))
          }
          if (g) {
            for (; v < r.length && N(r.charCodeAt(v)); ) v++
            v >= 2 && (r = `\\${r.slice(v)}`)
          }
          return n.win32.normalize(r)
        },
        relative(i, r) {
          if ((m(i, 'from'), m(r, 'to'), i === r)) return ''
          const l = n.win32.resolve(i),
            g = n.win32.resolve(r)
          if (
            l === g ||
            ((i = l.toLowerCase()), (r = g.toLowerCase()), i === r)
          )
            return ''
          let v = 0
          for (; v < i.length && i.charCodeAt(v) === c; ) v++
          let o = i.length
          for (; o - 1 > v && i.charCodeAt(o - 1) === c; ) o--
          const _ = o - v
          let L = 0
          for (; L < r.length && r.charCodeAt(L) === c; ) L++
          let E = r.length
          for (; E - 1 > L && r.charCodeAt(E - 1) === c; ) E--
          const y = E - L,
            P = _ < y ? _ : y
          let R = -1,
            V = 0
          for (; V < P; V++) {
            const U = i.charCodeAt(v + V)
            if (U !== r.charCodeAt(L + V)) break
            U === c && (R = V)
          }
          if (V !== P) {
            if (R === -1) return g
          } else {
            if (y > P) {
              if (r.charCodeAt(L + V) === c) return g.slice(L + V + 1)
              if (V === 2) return g.slice(L + V)
            }
            _ > P && (i.charCodeAt(v + V) === c ? (R = V) : V === 2 && (R = 3)),
              R === -1 && (R = 0)
          }
          let B = ''
          for (V = v + R + 1; V <= o; ++V)
            (V === o || i.charCodeAt(V) === c) &&
              (B += B.length === 0 ? '..' : '\\..')
          return (
            (L += R),
            B.length > 0
              ? `${B}${g.slice(L, E)}`
              : (g.charCodeAt(L) === c && ++L, g.slice(L, E))
          )
        },
        toNamespacedPath(i) {
          if (typeof i != 'string') return i
          if (i.length === 0) return ''
          const r = n.win32.resolve(i)
          if (r.length <= 2) return i
          if (r.charCodeAt(0) === c) {
            if (r.charCodeAt(1) === c) {
              const l = r.charCodeAt(2)
              if (l !== e && l !== a) return `\\\\?\\UNC\\${r.slice(2)}`
            }
          } else if (
            h(r.charCodeAt(0)) &&
            r.charCodeAt(1) === C &&
            r.charCodeAt(2) === c
          )
            return `\\\\?\\${r}`
          return i
        },
        dirname(i) {
          m(i, 'path')
          const r = i.length
          if (r === 0) return '.'
          let l = -1,
            g = 0
          const v = i.charCodeAt(0)
          if (r === 1) return N(v) ? i : '.'
          if (N(v)) {
            if (((l = g = 1), N(i.charCodeAt(1)))) {
              let L = 2,
                E = L
              for (; L < r && !N(i.charCodeAt(L)); ) L++
              if (L < r && L !== E) {
                for (E = L; L < r && N(i.charCodeAt(L)); ) L++
                if (L < r && L !== E) {
                  for (E = L; L < r && !N(i.charCodeAt(L)); ) L++
                  if (L === r) return i
                  L !== E && (l = g = L + 1)
                }
              }
            }
          } else
            h(v) &&
              i.charCodeAt(1) === C &&
              ((l = r > 2 && N(i.charCodeAt(2)) ? 3 : 2), (g = l))
          let o = -1,
            _ = !0
          for (let L = r - 1; L >= g; --L)
            if (N(i.charCodeAt(L))) {
              if (!_) {
                o = L
                break
              }
            } else _ = !1
          if (o === -1) {
            if (l === -1) return '.'
            o = l
          }
          return i.slice(0, o)
        },
        basename(i, r) {
          r !== void 0 && m(r, 'ext'), m(i, 'path')
          let l = 0,
            g = -1,
            v = !0,
            o
          if (
            (i.length >= 2 &&
              h(i.charCodeAt(0)) &&
              i.charCodeAt(1) === C &&
              (l = 2),
            r !== void 0 && r.length > 0 && r.length <= i.length)
          ) {
            if (r === i) return ''
            let _ = r.length - 1,
              L = -1
            for (o = i.length - 1; o >= l; --o) {
              const E = i.charCodeAt(o)
              if (N(E)) {
                if (!v) {
                  l = o + 1
                  break
                }
              } else
                L === -1 && ((v = !1), (L = o + 1)),
                  _ >= 0 &&
                    (E === r.charCodeAt(_)
                      ? --_ == -1 && (g = o)
                      : ((_ = -1), (g = L)))
            }
            return l === g ? (g = L) : g === -1 && (g = i.length), i.slice(l, g)
          }
          for (o = i.length - 1; o >= l; --o)
            if (N(i.charCodeAt(o))) {
              if (!v) {
                l = o + 1
                break
              }
            } else g === -1 && ((v = !1), (g = o + 1))
          return g === -1 ? '' : i.slice(l, g)
        },
        extname(i) {
          m(i, 'path')
          let r = 0,
            l = -1,
            g = 0,
            v = -1,
            o = !0,
            _ = 0
          i.length >= 2 &&
            i.charCodeAt(1) === C &&
            h(i.charCodeAt(0)) &&
            (r = g = 2)
          for (let L = i.length - 1; L >= r; --L) {
            const E = i.charCodeAt(L)
            if (N(E)) {
              if (!o) {
                g = L + 1
                break
              }
              continue
            }
            v === -1 && ((o = !1), (v = L + 1)),
              E === a
                ? l === -1
                  ? (l = L)
                  : _ !== 1 && (_ = 1)
                : l !== -1 && (_ = -1)
          }
          return l === -1 ||
            v === -1 ||
            _ === 0 ||
            (_ === 1 && l === v - 1 && l === g + 1)
            ? ''
            : i.slice(l, v)
        },
        format: p.bind(null, '\\'),
        parse(i) {
          m(i, 'path')
          const r = { root: '', dir: '', base: '', ext: '', name: '' }
          if (i.length === 0) return r
          const l = i.length
          let g = 0,
            v = i.charCodeAt(0)
          if (l === 1)
            return N(v) ? ((r.root = r.dir = i), r) : ((r.base = r.name = i), r)
          if (N(v)) {
            if (((g = 1), N(i.charCodeAt(1)))) {
              let R = 2,
                V = R
              for (; R < l && !N(i.charCodeAt(R)); ) R++
              if (R < l && R !== V) {
                for (V = R; R < l && N(i.charCodeAt(R)); ) R++
                if (R < l && R !== V) {
                  for (V = R; R < l && !N(i.charCodeAt(R)); ) R++
                  R === l ? (g = R) : R !== V && (g = R + 1)
                }
              }
            }
          } else if (h(v) && i.charCodeAt(1) === C) {
            if (l <= 2) return (r.root = r.dir = i), r
            if (((g = 2), N(i.charCodeAt(2)))) {
              if (l === 3) return (r.root = r.dir = i), r
              g = 3
            }
          }
          g > 0 && (r.root = i.slice(0, g))
          let o = -1,
            _ = g,
            L = -1,
            E = !0,
            y = i.length - 1,
            P = 0
          for (; y >= g; --y) {
            if (((v = i.charCodeAt(y)), N(v))) {
              if (!E) {
                _ = y + 1
                break
              }
              continue
            }
            L === -1 && ((E = !1), (L = y + 1)),
              v === a
                ? o === -1
                  ? (o = y)
                  : P !== 1 && (P = 1)
                : o !== -1 && (P = -1)
          }
          return (
            L !== -1 &&
              (o === -1 || P === 0 || (P === 1 && o === L - 1 && o === _ + 1)
                ? (r.base = r.name = i.slice(_, L))
                : ((r.name = i.slice(_, o)),
                  (r.base = i.slice(_, L)),
                  (r.ext = i.slice(o, L)))),
            _ > 0 && _ !== g ? (r.dir = i.slice(0, _ - 1)) : (r.dir = r.root),
            r
          )
        },
        sep: '\\',
        delimiter: ';',
        win32: null,
        posix: null,
      }),
        (n.posix = {
          resolve(...i) {
            let r = '',
              l = !1
            for (let g = i.length - 1; g >= -1 && !l; g--) {
              const v = g >= 0 ? i[g] : A.cwd()
              m(v, 'path'),
                v.length !== 0 &&
                  ((r = `${v}/${r}`), (l = v.charCodeAt(0) === u))
            }
            return (r = S(r, !l, '/', b)), l ? `/${r}` : r.length > 0 ? r : '.'
          },
          normalize(i) {
            if ((m(i, 'path'), i.length === 0)) return '.'
            const r = i.charCodeAt(0) === u,
              l = i.charCodeAt(i.length - 1) === u
            return (
              (i = S(i, !r, '/', b)),
              i.length === 0
                ? r
                  ? '/'
                  : l
                  ? './'
                  : '.'
                : (l && (i += '/'), r ? `/${i}` : i)
            )
          },
          isAbsolute(i) {
            return m(i, 'path'), i.length > 0 && i.charCodeAt(0) === u
          },
          join(...i) {
            if (i.length === 0) return '.'
            let r
            for (let l = 0; l < i.length; ++l) {
              const g = i[l]
              m(g, 'path'),
                g.length > 0 && (r === void 0 ? (r = g) : (r += `/${g}`))
            }
            return r === void 0 ? '.' : n.posix.normalize(r)
          },
          relative(i, r) {
            if (
              (m(i, 'from'),
              m(r, 'to'),
              i === r ||
                ((i = n.posix.resolve(i)), (r = n.posix.resolve(r)), i === r))
            )
              return ''
            const l = 1,
              g = i.length,
              v = g - l,
              o = 1,
              _ = r.length - o,
              L = v < _ ? v : _
            let E = -1,
              y = 0
            for (; y < L; y++) {
              const R = i.charCodeAt(l + y)
              if (R !== r.charCodeAt(o + y)) break
              R === u && (E = y)
            }
            if (y === L)
              if (_ > L) {
                if (r.charCodeAt(o + y) === u) return r.slice(o + y + 1)
                if (y === 0) return r.slice(o + y)
              } else
                v > L &&
                  (i.charCodeAt(l + y) === u ? (E = y) : y === 0 && (E = 0))
            let P = ''
            for (y = l + E + 1; y <= g; ++y)
              (y === g || i.charCodeAt(y) === u) &&
                (P += P.length === 0 ? '..' : '/..')
            return `${P}${r.slice(o + E)}`
          },
          toNamespacedPath(i) {
            return i
          },
          dirname(i) {
            if ((m(i, 'path'), i.length === 0)) return '.'
            const r = i.charCodeAt(0) === u
            let l = -1,
              g = !0
            for (let v = i.length - 1; v >= 1; --v)
              if (i.charCodeAt(v) === u) {
                if (!g) {
                  l = v
                  break
                }
              } else g = !1
            return l === -1
              ? r
                ? '/'
                : '.'
              : r && l === 1
              ? '//'
              : i.slice(0, l)
          },
          basename(i, r) {
            r !== void 0 && m(r, 'ext'), m(i, 'path')
            let l = 0,
              g = -1,
              v = !0,
              o
            if (r !== void 0 && r.length > 0 && r.length <= i.length) {
              if (r === i) return ''
              let _ = r.length - 1,
                L = -1
              for (o = i.length - 1; o >= 0; --o) {
                const E = i.charCodeAt(o)
                if (E === u) {
                  if (!v) {
                    l = o + 1
                    break
                  }
                } else
                  L === -1 && ((v = !1), (L = o + 1)),
                    _ >= 0 &&
                      (E === r.charCodeAt(_)
                        ? --_ == -1 && (g = o)
                        : ((_ = -1), (g = L)))
              }
              return (
                l === g ? (g = L) : g === -1 && (g = i.length), i.slice(l, g)
              )
            }
            for (o = i.length - 1; o >= 0; --o)
              if (i.charCodeAt(o) === u) {
                if (!v) {
                  l = o + 1
                  break
                }
              } else g === -1 && ((v = !1), (g = o + 1))
            return g === -1 ? '' : i.slice(l, g)
          },
          extname(i) {
            m(i, 'path')
            let r = -1,
              l = 0,
              g = -1,
              v = !0,
              o = 0
            for (let _ = i.length - 1; _ >= 0; --_) {
              const L = i.charCodeAt(_)
              if (L === u) {
                if (!v) {
                  l = _ + 1
                  break
                }
                continue
              }
              g === -1 && ((v = !1), (g = _ + 1)),
                L === a
                  ? r === -1
                    ? (r = _)
                    : o !== 1 && (o = 1)
                  : r !== -1 && (o = -1)
            }
            return r === -1 ||
              g === -1 ||
              o === 0 ||
              (o === 1 && r === g - 1 && r === l + 1)
              ? ''
              : i.slice(r, g)
          },
          format: p.bind(null, '/'),
          parse(i) {
            m(i, 'path')
            const r = { root: '', dir: '', base: '', ext: '', name: '' }
            if (i.length === 0) return r
            const l = i.charCodeAt(0) === u
            let g
            l ? ((r.root = '/'), (g = 1)) : (g = 0)
            let v = -1,
              o = 0,
              _ = -1,
              L = !0,
              E = i.length - 1,
              y = 0
            for (; E >= g; --E) {
              const P = i.charCodeAt(E)
              if (P === u) {
                if (!L) {
                  o = E + 1
                  break
                }
                continue
              }
              _ === -1 && ((L = !1), (_ = E + 1)),
                P === a
                  ? v === -1
                    ? (v = E)
                    : y !== 1 && (y = 1)
                  : v !== -1 && (y = -1)
            }
            if (_ !== -1) {
              const P = o === 0 && l ? 1 : o
              v === -1 || y === 0 || (y === 1 && v === _ - 1 && v === o + 1)
                ? (r.base = r.name = i.slice(P, _))
                : ((r.name = i.slice(P, v)),
                  (r.base = i.slice(P, _)),
                  (r.ext = i.slice(v, _)))
            }
            return o > 0 ? (r.dir = i.slice(0, o - 1)) : l && (r.dir = '/'), r
          },
          sep: '/',
          delimiter: ':',
          win32: null,
          posix: null,
        }),
        (n.posix.win32 = n.win32.win32 = n.win32),
        (n.posix.posix = n.win32.posix = n.posix),
        (n.normalize =
          A.platform === 'win32' ? n.win32.normalize : n.posix.normalize),
        (n.resolve =
          A.platform === 'win32' ? n.win32.resolve : n.posix.resolve),
        (n.relative =
          A.platform === 'win32' ? n.win32.relative : n.posix.relative),
        (n.dirname =
          A.platform === 'win32' ? n.win32.dirname : n.posix.dirname),
        (n.basename =
          A.platform === 'win32' ? n.win32.basename : n.posix.basename),
        (n.extname =
          A.platform === 'win32' ? n.win32.extname : n.posix.extname),
        (n.sep = A.platform === 'win32' ? n.win32.sep : n.posix.sep)
    }),
    j(z[9], G([0, 1, 2]), function (F, n, A) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.StopWatch = void 0)
      const D =
        A.globals.performance && typeof A.globals.performance.now == 'function'
      class w {
        constructor(d) {
          ;(this._highResolution = D && d),
            (this._startTime = this._now()),
            (this._stopTime = -1)
        }
        static create(d = !0) {
          return new w(d)
        }
        stop() {
          this._stopTime = this._now()
        }
        elapsed() {
          return this._stopTime !== -1
            ? this._stopTime - this._startTime
            : this._now() - this._startTime
        }
        _now() {
          return this._highResolution ? A.globals.performance.now() : Date.now()
        }
      }
      n.StopWatch = w
    }),
    j(z[5], G([0, 1, 7, 8, 18, 9]), function (F, n, A, D, w, s) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Relay =
          n.EventBufferer =
          n.DebounceEmitter =
          n.PauseableEmitter =
          n.Emitter =
          n.Event =
            void 0)
      var d
      ;(function (b) {
        b.None = () => D.Disposable.None
        function h(U) {
          return (T, q = null, O) => {
            let t = !1,
              W
            return (
              (W = U(
                (Y) => {
                  if (!t) return W ? W.dispose() : (t = !0), T.call(q, Y)
                },
                null,
                O
              )),
              t && W.dispose(),
              W
            )
          }
        }
        b.once = h
        function S(U, T) {
          return v((q, O = null, t) => U((W) => q.call(O, T(W)), null, t))
        }
        b.map = S
        function p(U, T) {
          return v((q, O = null, t) =>
            U(
              (W) => {
                T(W), q.call(O, W)
              },
              null,
              t
            )
          )
        }
        b.forEach = p
        function i(U, T) {
          return v((q, O = null, t) => U((W) => T(W) && q.call(O, W), null, t))
        }
        b.filter = i
        function r(U) {
          return U
        }
        b.signal = r
        function l(...U) {
          return (T, q = null, O) =>
            (0, D.combinedDisposable)(
              ...U.map((t) => t((W) => T.call(q, W), null, O))
            )
        }
        b.any = l
        function g(U, T, q) {
          let O = q
          return S(U, (t) => ((O = T(O, t)), O))
        }
        b.reduce = g
        function v(U) {
          let T
          const q = new C({
            onFirstListenerAdd() {
              T = U(q.fire, q)
            },
            onLastListenerRemove() {
              T.dispose()
            },
          })
          return q.event
        }
        function o(U, T, q = 100, O = !1, t) {
          let W,
            Y,
            Z,
            ie = 0
          const re = new C({
            leakWarningThreshold: t,
            onFirstListenerAdd() {
              W = U((oe) => {
                ie++,
                  (Y = T(Y, oe)),
                  O && !Z && (re.fire(Y), (Y = void 0)),
                  clearTimeout(Z),
                  (Z = setTimeout(() => {
                    const se = Y
                    ;(Y = void 0),
                      (Z = void 0),
                      (!O || ie > 1) && re.fire(se),
                      (ie = 0)
                  }, q))
              })
            },
            onLastListenerRemove() {
              W.dispose()
            },
          })
          return re.event
        }
        b.debounce = o
        function _(U, T = (q, O) => q === O) {
          let q = !0,
            O
          return i(U, (t) => {
            const W = q || !T(t, O)
            return (q = !1), (O = t), W
          })
        }
        b.latch = _
        function L(U, T) {
          return [b.filter(U, T), b.filter(U, (q) => !T(q))]
        }
        b.split = L
        function E(U, T = !1, q = []) {
          let O = q.slice(),
            t = U((Z) => {
              O ? O.push(Z) : Y.fire(Z)
            })
          const W = () => {
              O && O.forEach((Z) => Y.fire(Z)), (O = null)
            },
            Y = new C({
              onFirstListenerAdd() {
                t || (t = U((Z) => Y.fire(Z)))
              },
              onFirstListenerDidAdd() {
                O && (T ? setTimeout(W) : W())
              },
              onLastListenerRemove() {
                t && t.dispose(), (t = null)
              },
            })
          return Y.event
        }
        b.buffer = E
        class y {
          constructor(T) {
            this.event = T
          }
          map(T) {
            return new y(S(this.event, T))
          }
          forEach(T) {
            return new y(p(this.event, T))
          }
          filter(T) {
            return new y(i(this.event, T))
          }
          reduce(T, q) {
            return new y(g(this.event, T, q))
          }
          latch() {
            return new y(_(this.event))
          }
          debounce(T, q = 100, O = !1, t) {
            return new y(o(this.event, T, q, O, t))
          }
          on(T, q, O) {
            return this.event(T, q, O)
          }
          once(T, q, O) {
            return h(this.event)(T, q, O)
          }
        }
        function P(U) {
          return new y(U)
        }
        b.chain = P
        function R(U, T, q = (O) => O) {
          const O = (...Z) => Y.fire(q(...Z)),
            t = () => U.on(T, O),
            W = () => U.removeListener(T, O),
            Y = new C({ onFirstListenerAdd: t, onLastListenerRemove: W })
          return Y.event
        }
        b.fromNodeEventEmitter = R
        function V(U, T, q = (O) => O) {
          const O = (...Z) => Y.fire(q(...Z)),
            t = () => U.addEventListener(T, O),
            W = () => U.removeEventListener(T, O),
            Y = new C({ onFirstListenerAdd: t, onLastListenerRemove: W })
          return Y.event
        }
        b.fromDOMEventEmitter = V
        function B(U) {
          return new Promise((T) => h(U)(T))
        }
        b.toPromise = B
      })((d = n.Event || (n.Event = {})))
      class a {
        constructor(h) {
          ;(this._listenerCount = 0),
            (this._invocationCount = 0),
            (this._elapsedOverall = 0),
            (this._name = `${h}_${a._idPool++}`)
        }
        start(h) {
          ;(this._stopWatch = new s.StopWatch(!0)), (this._listenerCount = h)
        }
        stop() {
          if (this._stopWatch) {
            const h = this._stopWatch.elapsed()
            ;(this._elapsedOverall += h),
              (this._invocationCount += 1),
              console.info(
                `did FIRE ${this._name}: elapsed_ms: ${h.toFixed(
                  5
                )}, listener: ${
                  this._listenerCount
                } (elapsed_overall: ${this._elapsedOverall.toFixed(
                  2
                )}, invocations: ${this._invocationCount})`
              ),
              (this._stopWatch = void 0)
          }
        }
      }
      a._idPool = 0
      let u = -1
      class c {
        constructor(h, S = Math.random().toString(18).slice(2, 5)) {
          ;(this.customThreshold = h),
            (this.name = S),
            (this._warnCountdown = 0)
        }
        dispose() {
          this._stacks && this._stacks.clear()
        }
        check(h) {
          let S = u
          if (
            (typeof this.customThreshold == 'number' &&
              (S = this.customThreshold),
            S <= 0 || h < S)
          )
            return
          this._stacks || (this._stacks = new Map())
          const p = new Error().stack
              .split(
                `
`
              )
              .slice(3).join(`
`),
            i = this._stacks.get(p) || 0
          if (
            (this._stacks.set(p, i + 1),
            (this._warnCountdown -= 1),
            this._warnCountdown <= 0)
          ) {
            this._warnCountdown = S * 0.5
            let r,
              l = 0
            for (const [g, v] of this._stacks)
              (!r || l < v) && ((r = g), (l = v))
            console.warn(
              `[${this.name}] potential listener LEAK detected, having ${h} listeners already. MOST frequent listener (${l}):`
            ),
              console.warn(r)
          }
          return () => {
            const r = this._stacks.get(p) || 0
            this._stacks.set(p, r - 1)
          }
        }
      }
      class C {
        constructor(h) {
          var S
          ;(this._disposed = !1),
            (this._options = h),
            (this._leakageMon =
              u > 0
                ? new c(this._options && this._options.leakWarningThreshold)
                : void 0),
            (this._perfMon = (
              (S = this._options) === null || S === void 0
                ? void 0
                : S._profName
            )
              ? new a(this._options._profName)
              : void 0)
        }
        get event() {
          return (
            this._event ||
              (this._event = (h, S, p) => {
                var i
                this._listeners || (this._listeners = new w.LinkedList())
                const r = this._listeners.isEmpty()
                r &&
                  this._options &&
                  this._options.onFirstListenerAdd &&
                  this._options.onFirstListenerAdd(this)
                const l = this._listeners.push(S ? [h, S] : h)
                r &&
                  this._options &&
                  this._options.onFirstListenerDidAdd &&
                  this._options.onFirstListenerDidAdd(this),
                  this._options &&
                    this._options.onListenerDidAdd &&
                    this._options.onListenerDidAdd(this, h, S)
                const g =
                    (i = this._leakageMon) === null || i === void 0
                      ? void 0
                      : i.check(this._listeners.size),
                  v = (0, D.toDisposable)(() => {
                    g && g(),
                      this._disposed ||
                        (l(),
                        this._options &&
                          this._options.onLastListenerRemove &&
                          ((this._listeners && !this._listeners.isEmpty()) ||
                            this._options.onLastListenerRemove(this)))
                  })
                return (
                  p instanceof D.DisposableStore
                    ? p.add(v)
                    : Array.isArray(p) && p.push(v),
                  v
                )
              }),
            this._event
          )
        }
        fire(h) {
          var S, p
          if (this._listeners) {
            this._deliveryQueue || (this._deliveryQueue = new w.LinkedList())
            for (let i of this._listeners) this._deliveryQueue.push([i, h])
            for (
              (S = this._perfMon) === null ||
              S === void 0 ||
              S.start(this._deliveryQueue.size);
              this._deliveryQueue.size > 0;

            ) {
              const [i, r] = this._deliveryQueue.shift()
              try {
                typeof i == 'function' ? i.call(void 0, r) : i[0].call(i[1], r)
              } catch (l) {
                ;(0, A.onUnexpectedError)(l)
              }
            }
            ;(p = this._perfMon) === null || p === void 0 || p.stop()
          }
        }
        dispose() {
          var h, S, p, i, r
          this._disposed ||
            ((this._disposed = !0),
            (h = this._listeners) === null || h === void 0 || h.clear(),
            (S = this._deliveryQueue) === null || S === void 0 || S.clear(),
            (i =
              (p = this._options) === null || p === void 0
                ? void 0
                : p.onLastListenerRemove) === null ||
              i === void 0 ||
              i.call(p),
            (r = this._leakageMon) === null || r === void 0 || r.dispose())
        }
      }
      n.Emitter = C
      class e extends C {
        constructor(h) {
          super(h)
          ;(this._isPaused = 0),
            (this._eventQueue = new w.LinkedList()),
            (this._mergeFn = h == null ? void 0 : h.merge)
        }
        pause() {
          this._isPaused++
        }
        resume() {
          if (this._isPaused !== 0 && --this._isPaused == 0)
            if (this._mergeFn) {
              const h = Array.from(this._eventQueue)
              this._eventQueue.clear(), super.fire(this._mergeFn(h))
            } else
              for (; !this._isPaused && this._eventQueue.size !== 0; )
                super.fire(this._eventQueue.shift())
        }
        fire(h) {
          this._listeners &&
            (this._isPaused !== 0 ? this._eventQueue.push(h) : super.fire(h))
        }
      }
      n.PauseableEmitter = e
      class f extends e {
        constructor(h) {
          var S
          super(h)
          this._delay = (S = h.delay) !== null && S !== void 0 ? S : 100
        }
        fire(h) {
          this._handle ||
            (this.pause(),
            (this._handle = setTimeout(() => {
              ;(this._handle = void 0), this.resume()
            }, this._delay))),
            super.fire(h)
        }
      }
      n.DebounceEmitter = f
      class m {
        constructor() {
          this.buffers = []
        }
        wrapEvent(h) {
          return (S, p, i) =>
            h(
              (r) => {
                const l = this.buffers[this.buffers.length - 1]
                l ? l.push(() => S.call(p, r)) : S.call(p, r)
              },
              void 0,
              i
            )
        }
        bufferEvents(h) {
          const S = []
          this.buffers.push(S)
          const p = h()
          return this.buffers.pop(), S.forEach((i) => i()), p
        }
      }
      n.EventBufferer = m
      class N {
        constructor() {
          ;(this.listening = !1),
            (this.inputEvent = d.None),
            (this.inputEventListener = D.Disposable.None),
            (this.emitter = new C({
              onFirstListenerDidAdd: () => {
                ;(this.listening = !0),
                  (this.inputEventListener = this.inputEvent(
                    this.emitter.fire,
                    this.emitter
                  ))
              },
              onLastListenerRemove: () => {
                ;(this.listening = !1), this.inputEventListener.dispose()
              },
            })),
            (this.event = this.emitter.event)
        }
        set input(h) {
          ;(this.inputEvent = h),
            this.listening &&
              (this.inputEventListener.dispose(),
              (this.inputEventListener = h(this.emitter.fire, this.emitter)))
        }
        dispose() {
          this.inputEventListener.dispose(), this.emitter.dispose()
        }
      }
      n.Relay = N
    }),
    j(z[21], G([0, 1, 5]), function (F, n, A) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.CancellationTokenSource = n.CancellationToken = void 0)
      const D = Object.freeze(function (a, u) {
        const c = setTimeout(a.bind(u), 0)
        return {
          dispose() {
            clearTimeout(c)
          },
        }
      })
      var w
      ;(function (a) {
        function u(c) {
          return c === a.None || c === a.Cancelled || c instanceof s
            ? !0
            : !c || typeof c != 'object'
            ? !1
            : typeof c.isCancellationRequested == 'boolean' &&
              typeof c.onCancellationRequested == 'function'
        }
        ;(a.isCancellationToken = u),
          (a.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: A.Event.None,
          })),
          (a.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: D,
          }))
      })((w = n.CancellationToken || (n.CancellationToken = {})))
      class s {
        constructor() {
          ;(this._isCancelled = !1), (this._emitter = null)
        }
        cancel() {
          this._isCancelled ||
            ((this._isCancelled = !0),
            this._emitter && (this._emitter.fire(void 0), this.dispose()))
        }
        get isCancellationRequested() {
          return this._isCancelled
        }
        get onCancellationRequested() {
          return this._isCancelled
            ? D
            : (this._emitter || (this._emitter = new A.Emitter()),
              this._emitter.event)
        }
        dispose() {
          this._emitter && (this._emitter.dispose(), (this._emitter = null))
        }
      }
      class d {
        constructor(u) {
          ;(this._token = void 0),
            (this._parentListener = void 0),
            (this._parentListener =
              u && u.onCancellationRequested(this.cancel, this))
        }
        get token() {
          return this._token || (this._token = new s()), this._token
        }
        cancel() {
          this._token
            ? this._token instanceof s && this._token.cancel()
            : (this._token = w.Cancelled)
        }
        dispose(u = !1) {
          u && this.cancel(),
            this._parentListener && this._parentListener.dispose(),
            this._token
              ? this._token instanceof s && this._token.dispose()
              : (this._token = w.None)
        }
      }
      n.CancellationTokenSource = d
    }),
    j(z[4], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.getLeftDeleteOffset =
          n.breakBetweenGraphemeBreakType =
          n.getGraphemeBreakType =
          n.singleLetterHash =
          n.containsUppercaseCharacter =
          n.startsWithUTF8BOM =
          n.UTF8_BOM_CHARACTER =
          n.isEmojiImprecise =
          n.isFullWidthCharacter =
          n.containsFullWidthCharacter =
          n.containsUnusualLineTerminators =
          n.UNUSUAL_LINE_TERMINATORS =
          n.isBasicASCII =
          n.containsEmoji =
          n.containsRTL =
          n.prevCharLength =
          n.nextCharLength =
          n.getNextCodePoint =
          n.computeCodePoint =
          n.isLowSurrogate =
          n.isHighSurrogate =
          n.commonSuffixLength =
          n.commonPrefixLength =
          n.startsWithIgnoreCase =
          n.equalsIgnoreCase =
          n.isUpperAsciiLetter =
          n.isLowerAsciiLetter =
          n.compareSubstringIgnoreCase =
          n.compareIgnoreCase =
          n.compareSubstring =
          n.compare =
          n.lastNonWhitespaceIndex =
          n.getLeadingWhitespace =
          n.firstNonWhitespaceIndex =
          n.splitLines =
          n.regExpFlags =
          n.regExpLeadsToEndlessLoop =
          n.createRegExp =
          n.stripWildcards =
          n.convertSimple2RegExpPattern =
          n.rtrim =
          n.ltrim =
          n.trim =
          n.escapeRegExpCharacters =
          n.escape =
          n.format =
          n.isFalsyOrWhitespace =
            void 0)
      function A(M) {
        return !M || typeof M != 'string' ? !0 : M.trim().length === 0
      }
      n.isFalsyOrWhitespace = A
      const D = /{(\d+)}/g
      function w(M, ...I) {
        return I.length === 0
          ? M
          : M.replace(D, function (k, H) {
              const $ = parseInt(H, 10)
              return isNaN($) || $ < 0 || $ >= I.length ? k : I[$]
            })
      }
      n.format = w
      function s(M) {
        return M.replace(/[<>&]/g, function (I) {
          switch (I) {
            case '<':
              return '&lt;'
            case '>':
              return '&gt;'
            case '&':
              return '&amp;'
            default:
              return I
          }
        })
      }
      n.escape = s
      function d(M) {
        return M.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&')
      }
      n.escapeRegExpCharacters = d
      function a(M, I = ' ') {
        const k = u(M, I)
        return c(k, I)
      }
      n.trim = a
      function u(M, I) {
        if (!M || !I) return M
        const k = I.length
        if (k === 0 || M.length === 0) return M
        let H = 0
        for (; M.indexOf(I, H) === H; ) H = H + k
        return M.substring(H)
      }
      n.ltrim = u
      function c(M, I) {
        if (!M || !I) return M
        const k = I.length,
          H = M.length
        if (k === 0 || H === 0) return M
        let $ = H,
          X = -1
        for (; (X = M.lastIndexOf(I, $ - 1)), !(X === -1 || X + k !== $); ) {
          if (X === 0) return ''
          $ = X
        }
        return M.substring(0, $)
      }
      n.rtrim = c
      function C(M) {
        return M.replace(
          /[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,
          '\\$&'
        ).replace(/[\*]/g, '.*')
      }
      n.convertSimple2RegExpPattern = C
      function e(M) {
        return M.replace(/\*/g, '')
      }
      n.stripWildcards = e
      function f(M, I, k = {}) {
        if (!M) throw new Error('Cannot create regex from empty string')
        I || (M = d(M)),
          k.wholeWord &&
            (/\B/.test(M.charAt(0)) || (M = '\\b' + M),
            /\B/.test(M.charAt(M.length - 1)) || (M = M + '\\b'))
        let H = ''
        return (
          k.global && (H += 'g'),
          k.matchCase || (H += 'i'),
          k.multiline && (H += 'm'),
          k.unicode && (H += 'u'),
          new RegExp(M, H)
        )
      }
      n.createRegExp = f
      function m(M) {
        return M.source === '^' ||
          M.source === '^$' ||
          M.source === '$' ||
          M.source === '^\\s*$'
          ? !1
          : !!(M.exec('') && M.lastIndex === 0)
      }
      n.regExpLeadsToEndlessLoop = m
      function N(M) {
        return (
          (M.global ? 'g' : '') +
          (M.ignoreCase ? 'i' : '') +
          (M.multiline ? 'm' : '') +
          (M.unicode ? 'u' : '')
        )
      }
      n.regExpFlags = N
      function b(M) {
        return M.split(/\r\n|\r|\n/)
      }
      n.splitLines = b
      function h(M) {
        for (let I = 0, k = M.length; I < k; I++) {
          const H = M.charCodeAt(I)
          if (H !== 32 && H !== 9) return I
        }
        return -1
      }
      n.firstNonWhitespaceIndex = h
      function S(M, I = 0, k = M.length) {
        for (let H = I; H < k; H++) {
          const $ = M.charCodeAt(H)
          if ($ !== 32 && $ !== 9) return M.substring(I, H)
        }
        return M.substring(I, k)
      }
      n.getLeadingWhitespace = S
      function p(M, I = M.length - 1) {
        for (let k = I; k >= 0; k--) {
          const H = M.charCodeAt(k)
          if (H !== 32 && H !== 9) return k
        }
        return -1
      }
      n.lastNonWhitespaceIndex = p
      function i(M, I) {
        return M < I ? -1 : M > I ? 1 : 0
      }
      n.compare = i
      function r(M, I, k = 0, H = M.length, $ = 0, X = I.length) {
        for (; k < H && $ < X; k++, $++) {
          let x = M.charCodeAt(k),
            te = I.charCodeAt($)
          if (x < te) return -1
          if (x > te) return 1
        }
        const J = H - k,
          K = X - $
        return J < K ? -1 : J > K ? 1 : 0
      }
      n.compareSubstring = r
      function l(M, I) {
        return g(M, I, 0, M.length, 0, I.length)
      }
      n.compareIgnoreCase = l
      function g(M, I, k = 0, H = M.length, $ = 0, X = I.length) {
        for (; k < H && $ < X; k++, $++) {
          let x = M.charCodeAt(k),
            te = I.charCodeAt($)
          if (x === te) continue
          if (x >= 128 || te >= 128)
            return r(M.toLowerCase(), I.toLowerCase(), k, H, $, X)
          v(x) && (x -= 32), v(te) && (te -= 32)
          const ce = x - te
          if (ce !== 0) return ce
        }
        const J = H - k,
          K = X - $
        return J < K ? -1 : J > K ? 1 : 0
      }
      n.compareSubstringIgnoreCase = g
      function v(M) {
        return M >= 97 && M <= 122
      }
      n.isLowerAsciiLetter = v
      function o(M) {
        return M >= 65 && M <= 90
      }
      n.isUpperAsciiLetter = o
      function _(M, I) {
        return M.length === I.length && g(M, I) === 0
      }
      n.equalsIgnoreCase = _
      function L(M, I) {
        const k = I.length
        return I.length > M.length ? !1 : g(M, I, 0, k) === 0
      }
      n.startsWithIgnoreCase = L
      function E(M, I) {
        let k,
          H = Math.min(M.length, I.length)
        for (k = 0; k < H; k++)
          if (M.charCodeAt(k) !== I.charCodeAt(k)) return k
        return H
      }
      n.commonPrefixLength = E
      function y(M, I) {
        let k,
          H = Math.min(M.length, I.length)
        const $ = M.length - 1,
          X = I.length - 1
        for (k = 0; k < H; k++)
          if (M.charCodeAt($ - k) !== I.charCodeAt(X - k)) return k
        return H
      }
      n.commonSuffixLength = y
      function P(M) {
        return 55296 <= M && M <= 56319
      }
      n.isHighSurrogate = P
      function R(M) {
        return 56320 <= M && M <= 57343
      }
      n.isLowSurrogate = R
      function V(M, I) {
        return ((M - 55296) << 10) + (I - 56320) + 65536
      }
      n.computeCodePoint = V
      function B(M, I, k) {
        const H = M.charCodeAt(k)
        if (P(H) && k + 1 < I) {
          const $ = M.charCodeAt(k + 1)
          if (R($)) return V(H, $)
        }
        return H
      }
      n.getNextCodePoint = B
      function U(M, I) {
        const k = M.charCodeAt(I - 1)
        if (R(k) && I > 1) {
          const H = M.charCodeAt(I - 2)
          if (P(H)) return V(H, k)
        }
        return k
      }
      function T(M, I) {
        const k = ee.getInstance(),
          H = I,
          $ = M.length,
          X = B(M, $, I)
        I += X >= 65536 ? 2 : 1
        let J = k.getGraphemeBreakType(X)
        for (; I < $; ) {
          const K = B(M, $, I),
            x = k.getGraphemeBreakType(K)
          if (ue(J, x)) break
          ;(I += K >= 65536 ? 2 : 1), (J = x)
        }
        return I - H
      }
      n.nextCharLength = T
      function q(M, I) {
        const k = ee.getInstance(),
          H = I,
          $ = U(M, I)
        I -= $ >= 65536 ? 2 : 1
        let X = k.getGraphemeBreakType($)
        for (; I > 0; ) {
          const J = U(M, I),
            K = k.getGraphemeBreakType(J)
          if (ue(K, X)) break
          ;(I -= J >= 65536 ? 2 : 1), (X = K)
        }
        return H - I
      }
      n.prevCharLength = q
      const O =
        /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/
      function t(M) {
        return O.test(M)
      }
      n.containsRTL = t
      const W =
        /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD00-\uDDFF\uDE70-\uDED6])/
      function Y(M) {
        return W.test(M)
      }
      n.containsEmoji = Y
      const Z = /^[\t\n\r\x20-\x7E]*$/
      function ie(M) {
        return Z.test(M)
      }
      ;(n.isBasicASCII = ie), (n.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/)
      function re(M) {
        return n.UNUSUAL_LINE_TERMINATORS.test(M)
      }
      n.containsUnusualLineTerminators = re
      function oe(M) {
        for (let I = 0, k = M.length; I < k; I++)
          if (se(M.charCodeAt(I))) return !0
        return !1
      }
      n.containsFullWidthCharacter = oe
      function se(M) {
        return (
          (M = +M),
          (M >= 11904 && M <= 55215) ||
            (M >= 63744 && M <= 64255) ||
            (M >= 65281 && M <= 65374)
        )
      }
      n.isFullWidthCharacter = se
      function ae(M) {
        return (
          (M >= 127462 && M <= 127487) ||
          M === 8986 ||
          M === 8987 ||
          M === 9200 ||
          M === 9203 ||
          (M >= 9728 && M <= 10175) ||
          M === 11088 ||
          M === 11093 ||
          (M >= 127744 && M <= 128591) ||
          (M >= 128640 && M <= 128764) ||
          (M >= 128992 && M <= 129003) ||
          (M >= 129280 && M <= 129535) ||
          (M >= 129648 && M <= 129750)
        )
      }
      ;(n.isEmojiImprecise = ae),
        (n.UTF8_BOM_CHARACTER = String.fromCharCode(65279))
      function de(M) {
        return !!(M && M.length > 0 && M.charCodeAt(0) === 65279)
      }
      n.startsWithUTF8BOM = de
      function me(M, I = !1) {
        return M
          ? (I && (M = M.replace(/\\./g, '')), M.toLowerCase() !== M)
          : !1
      }
      n.containsUppercaseCharacter = me
      function ge(M) {
        const I = 90 - 65 + 1
        return (
          (M = M % (2 * I)),
          M < I ? String.fromCharCode(97 + M) : String.fromCharCode(65 + M - I)
        )
      }
      n.singleLetterHash = ge
      function _e(M) {
        return ee.getInstance().getGraphemeBreakType(M)
      }
      n.getGraphemeBreakType = _e
      function ue(M, I) {
        return M === 0
          ? I !== 5 && I !== 7
          : M === 2 && I === 3
          ? !1
          : M === 4 || M === 2 || M === 3 || I === 4 || I === 2 || I === 3
          ? !0
          : !(
              (M === 8 && (I === 8 || I === 9 || I === 11 || I === 12)) ||
              ((M === 11 || M === 9) && (I === 9 || I === 10)) ||
              ((M === 12 || M === 10) && I === 10) ||
              I === 5 ||
              I === 13 ||
              I === 7 ||
              M === 1 ||
              (M === 13 && I === 14) ||
              (M === 6 && I === 6)
            )
      }
      n.breakBetweenGraphemeBreakType = ue
      class ee {
        constructor() {
          this._data = ve()
        }
        static getInstance() {
          return ee._INSTANCE || (ee._INSTANCE = new ee()), ee._INSTANCE
        }
        getGraphemeBreakType(I) {
          if (I < 32) return I === 10 ? 3 : I === 13 ? 2 : 4
          if (I < 127) return 0
          const k = this._data,
            H = k.length / 3
          let $ = 1
          for (; $ <= H; )
            if (I < k[3 * $]) $ = 2 * $
            else if (I > k[3 * $ + 1]) $ = 2 * $ + 1
            else return k[3 * $ + 2]
          return 0
        }
      }
      ee._INSTANCE = null
      function ve() {
        return JSON.parse(
          '[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]'
        )
      }
      function Le(M, I) {
        if (M === 0) return 0
        const k = Ce(M, I)
        if (k !== void 0) return k
        const H = U(I, M)
        return (M -= le(H)), M
      }
      n.getLeftDeleteOffset = Le
      function Ce(M, I) {
        let k = U(I, M)
        for (M -= le(k); be(k) || k === 65039 || k === 8419; ) {
          if (M === 0) return
          ;(k = U(I, M)), (M -= le(k))
        }
        if (!!ae(k)) {
          if (M >= 0) {
            const H = U(I, M)
            H === 8205 && (M -= le(H))
          }
          return M
        }
      }
      function le(M) {
        return M >= 65536 ? 2 : 1
      }
      function be(M) {
        return 127995 <= M && M <= 127999
      }
    }),
    j(z[22], G([0, 1, 4]), function (F, n, A) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.StringSHA1 =
          n.toHexString =
          n.stringHash =
          n.numberHash =
          n.doHash =
          n.hash =
            void 0)
      function D(b) {
        return w(b, 0)
      }
      n.hash = D
      function w(b, h) {
        switch (typeof b) {
          case 'object':
            return b === null ? s(349, h) : Array.isArray(b) ? u(b, h) : c(b, h)
          case 'string':
            return a(b, h)
          case 'boolean':
            return d(b, h)
          case 'number':
            return s(b, h)
          case 'undefined':
            return s(937, h)
          default:
            return s(617, h)
        }
      }
      n.doHash = w
      function s(b, h) {
        return ((h << 5) - h + b) | 0
      }
      n.numberHash = s
      function d(b, h) {
        return s(b ? 433 : 863, h)
      }
      function a(b, h) {
        h = s(149417, h)
        for (let S = 0, p = b.length; S < p; S++) h = s(b.charCodeAt(S), h)
        return h
      }
      n.stringHash = a
      function u(b, h) {
        return (h = s(104579, h)), b.reduce((S, p) => w(p, S), h)
      }
      function c(b, h) {
        return (
          (h = s(181387, h)),
          Object.keys(b)
            .sort()
            .reduce((S, p) => ((S = a(p, S)), w(b[p], S)), h)
        )
      }
      function C(b, h, S = 32) {
        const p = S - h,
          i = ~((1 << p) - 1)
        return ((b << h) | ((i & b) >>> p)) >>> 0
      }
      function e(b, h = 0, S = b.byteLength, p = 0) {
        for (let i = 0; i < S; i++) b[h + i] = p
      }
      function f(b, h, S = '0') {
        for (; b.length < h; ) b = S + b
        return b
      }
      function m(b, h = 32) {
        return b instanceof ArrayBuffer
          ? Array.from(new Uint8Array(b))
              .map((S) => S.toString(16).padStart(2, '0'))
              .join('')
          : f((b >>> 0).toString(16), h / 4)
      }
      n.toHexString = m
      class N {
        constructor() {
          ;(this._h0 = 1732584193),
            (this._h1 = 4023233417),
            (this._h2 = 2562383102),
            (this._h3 = 271733878),
            (this._h4 = 3285377520),
            (this._buff = new Uint8Array(64 + 3)),
            (this._buffDV = new DataView(this._buff.buffer)),
            (this._buffLen = 0),
            (this._totalLen = 0),
            (this._leftoverHighSurrogate = 0),
            (this._finished = !1)
        }
        update(h) {
          const S = h.length
          if (S === 0) return
          const p = this._buff
          let i = this._buffLen,
            r = this._leftoverHighSurrogate,
            l,
            g
          for (
            r !== 0
              ? ((l = r), (g = -1), (r = 0))
              : ((l = h.charCodeAt(0)), (g = 0));
            ;

          ) {
            let v = l
            if (A.isHighSurrogate(l))
              if (g + 1 < S) {
                const o = h.charCodeAt(g + 1)
                A.isLowSurrogate(o)
                  ? (g++, (v = A.computeCodePoint(l, o)))
                  : (v = 65533)
              } else {
                r = l
                break
              }
            else A.isLowSurrogate(l) && (v = 65533)
            if (((i = this._push(p, i, v)), g++, g < S)) l = h.charCodeAt(g)
            else break
          }
          ;(this._buffLen = i), (this._leftoverHighSurrogate = r)
        }
        _push(h, S, p) {
          return (
            p < 128
              ? (h[S++] = p)
              : p < 2048
              ? ((h[S++] = 192 | ((p & 1984) >>> 6)),
                (h[S++] = 128 | ((p & 63) >>> 0)))
              : p < 65536
              ? ((h[S++] = 224 | ((p & 61440) >>> 12)),
                (h[S++] = 128 | ((p & 4032) >>> 6)),
                (h[S++] = 128 | ((p & 63) >>> 0)))
              : ((h[S++] = 240 | ((p & 1835008) >>> 18)),
                (h[S++] = 128 | ((p & 258048) >>> 12)),
                (h[S++] = 128 | ((p & 4032) >>> 6)),
                (h[S++] = 128 | ((p & 63) >>> 0))),
            S >= 64 &&
              (this._step(),
              (S -= 64),
              (this._totalLen += 64),
              (h[0] = h[64 + 0]),
              (h[1] = h[64 + 1]),
              (h[2] = h[64 + 2])),
            S
          )
        }
        digest() {
          return (
            this._finished ||
              ((this._finished = !0),
              this._leftoverHighSurrogate &&
                ((this._leftoverHighSurrogate = 0),
                (this._buffLen = this._push(this._buff, this._buffLen, 65533))),
              (this._totalLen += this._buffLen),
              this._wrapUp()),
            m(this._h0) + m(this._h1) + m(this._h2) + m(this._h3) + m(this._h4)
          )
        }
        _wrapUp() {
          ;(this._buff[this._buffLen++] = 128),
            e(this._buff, this._buffLen),
            this._buffLen > 56 && (this._step(), e(this._buff))
          const h = 8 * this._totalLen
          this._buffDV.setUint32(56, Math.floor(h / 4294967296), !1),
            this._buffDV.setUint32(60, h % 4294967296, !1),
            this._step()
        }
        _step() {
          const h = N._bigBlock32,
            S = this._buffDV
          for (let L = 0; L < 64; L += 4) h.setUint32(L, S.getUint32(L, !1), !1)
          for (let L = 64; L < 320; L += 4)
            h.setUint32(
              L,
              C(
                h.getUint32(L - 12, !1) ^
                  h.getUint32(L - 32, !1) ^
                  h.getUint32(L - 56, !1) ^
                  h.getUint32(L - 64, !1),
                1
              ),
              !1
            )
          let p = this._h0,
            i = this._h1,
            r = this._h2,
            l = this._h3,
            g = this._h4,
            v,
            o,
            _
          for (let L = 0; L < 80; L++)
            L < 20
              ? ((v = (i & r) | (~i & l)), (o = 1518500249))
              : L < 40
              ? ((v = i ^ r ^ l), (o = 1859775393))
              : L < 60
              ? ((v = (i & r) | (i & l) | (r & l)), (o = 2400959708))
              : ((v = i ^ r ^ l), (o = 3395469782)),
              (_ = (C(p, 5) + v + g + o + h.getUint32(L * 4, !1)) & 4294967295),
              (g = l),
              (l = r),
              (r = C(i, 30)),
              (i = p),
              (p = _)
          ;(this._h0 = (this._h0 + p) & 4294967295),
            (this._h1 = (this._h1 + i) & 4294967295),
            (this._h2 = (this._h2 + r) & 4294967295),
            (this._h3 = (this._h3 + l) & 4294967295),
            (this._h4 = (this._h4 + g) & 4294967295)
        }
      }
      ;(n.StringSHA1 = N), (N._bigBlock32 = new DataView(new ArrayBuffer(320)))
    }),
    j(z[10], G([0, 1, 14, 22]), function (F, n, A, D) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.LcsDiff =
          n.MyArray =
          n.Debug =
          n.stringDiff =
          n.StringDiffSequence =
            void 0)
      class w {
        constructor(e) {
          this.source = e
        }
        getElements() {
          const e = this.source,
            f = new Int32Array(e.length)
          for (let m = 0, N = e.length; m < N; m++) f[m] = e.charCodeAt(m)
          return f
        }
      }
      n.StringDiffSequence = w
      function s(C, e, f) {
        return new c(new w(C), new w(e)).ComputeDiff(f).changes
      }
      n.stringDiff = s
      class d {
        static Assert(e, f) {
          if (!e) throw new Error(f)
        }
      }
      n.Debug = d
      class a {
        static Copy(e, f, m, N, b) {
          for (let h = 0; h < b; h++) m[N + h] = e[f + h]
        }
        static Copy2(e, f, m, N, b) {
          for (let h = 0; h < b; h++) m[N + h] = e[f + h]
        }
      }
      n.MyArray = a
      class u {
        constructor() {
          ;(this.m_changes = []),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0)
        }
        MarkNextChange() {
          ;(this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
            this.m_changes.push(
              new A.DiffChange(
                this.m_originalStart,
                this.m_originalCount,
                this.m_modifiedStart,
                this.m_modifiedCount
              )
            ),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824)
        }
        AddOriginalElement(e, f) {
          ;(this.m_originalStart = Math.min(this.m_originalStart, e)),
            (this.m_modifiedStart = Math.min(this.m_modifiedStart, f)),
            this.m_originalCount++
        }
        AddModifiedElement(e, f) {
          ;(this.m_originalStart = Math.min(this.m_originalStart, e)),
            (this.m_modifiedStart = Math.min(this.m_modifiedStart, f)),
            this.m_modifiedCount++
        }
        getChanges() {
          return (
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
              this.MarkNextChange(),
            this.m_changes
          )
        }
        getReverseChanges() {
          return (
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
              this.MarkNextChange(),
            this.m_changes.reverse(),
            this.m_changes
          )
        }
      }
      class c {
        constructor(e, f, m = null) {
          ;(this.ContinueProcessingPredicate = m),
            (this._originalSequence = e),
            (this._modifiedSequence = f)
          const [N, b, h] = c._getElements(e),
            [S, p, i] = c._getElements(f)
          ;(this._hasStrings = h && i),
            (this._originalStringElements = N),
            (this._originalElementsOrHash = b),
            (this._modifiedStringElements = S),
            (this._modifiedElementsOrHash = p),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = [])
        }
        static _isStringArray(e) {
          return e.length > 0 && typeof e[0] == 'string'
        }
        static _getElements(e) {
          const f = e.getElements()
          if (c._isStringArray(f)) {
            const m = new Int32Array(f.length)
            for (let N = 0, b = f.length; N < b; N++)
              m[N] = (0, D.stringHash)(f[N], 0)
            return [f, m, !0]
          }
          return f instanceof Int32Array
            ? [[], f, !1]
            : [[], new Int32Array(f), !1]
        }
        ElementsAreEqual(e, f) {
          return this._originalElementsOrHash[e] !==
            this._modifiedElementsOrHash[f]
            ? !1
            : this._hasStrings
            ? this._originalStringElements[e] ===
              this._modifiedStringElements[f]
            : !0
        }
        ElementsAreStrictEqual(e, f) {
          if (!this.ElementsAreEqual(e, f)) return !1
          const m = c._getStrictElement(this._originalSequence, e),
            N = c._getStrictElement(this._modifiedSequence, f)
          return m === N
        }
        static _getStrictElement(e, f) {
          return typeof e.getStrictElement == 'function'
            ? e.getStrictElement(f)
            : null
        }
        OriginalElementsAreEqual(e, f) {
          return this._originalElementsOrHash[e] !==
            this._originalElementsOrHash[f]
            ? !1
            : this._hasStrings
            ? this._originalStringElements[e] ===
              this._originalStringElements[f]
            : !0
        }
        ModifiedElementsAreEqual(e, f) {
          return this._modifiedElementsOrHash[e] !==
            this._modifiedElementsOrHash[f]
            ? !1
            : this._hasStrings
            ? this._modifiedStringElements[e] ===
              this._modifiedStringElements[f]
            : !0
        }
        ComputeDiff(e) {
          return this._ComputeDiff(
            0,
            this._originalElementsOrHash.length - 1,
            0,
            this._modifiedElementsOrHash.length - 1,
            e
          )
        }
        _ComputeDiff(e, f, m, N, b) {
          const h = [!1]
          let S = this.ComputeDiffRecursive(e, f, m, N, h)
          return (
            b && (S = this.PrettifyChanges(S)), { quitEarly: h[0], changes: S }
          )
        }
        ComputeDiffRecursive(e, f, m, N, b) {
          for (b[0] = !1; e <= f && m <= N && this.ElementsAreEqual(e, m); )
            e++, m++
          for (; f >= e && N >= m && this.ElementsAreEqual(f, N); ) f--, N--
          if (e > f || m > N) {
            let l
            return (
              m <= N
                ? (d.Assert(
                    e === f + 1,
                    'originalStart should only be one more than originalEnd'
                  ),
                  (l = [new A.DiffChange(e, 0, m, N - m + 1)]))
                : e <= f
                ? (d.Assert(
                    m === N + 1,
                    'modifiedStart should only be one more than modifiedEnd'
                  ),
                  (l = [new A.DiffChange(e, f - e + 1, m, 0)]))
                : (d.Assert(
                    e === f + 1,
                    'originalStart should only be one more than originalEnd'
                  ),
                  d.Assert(
                    m === N + 1,
                    'modifiedStart should only be one more than modifiedEnd'
                  ),
                  (l = [])),
              l
            )
          }
          const h = [0],
            S = [0],
            p = this.ComputeRecursionPoint(e, f, m, N, h, S, b),
            i = h[0],
            r = S[0]
          if (p !== null) return p
          if (!b[0]) {
            const l = this.ComputeDiffRecursive(e, i, m, r, b)
            let g = []
            return (
              b[0]
                ? (g = [
                    new A.DiffChange(
                      i + 1,
                      f - (i + 1) + 1,
                      r + 1,
                      N - (r + 1) + 1
                    ),
                  ])
                : (g = this.ComputeDiffRecursive(i + 1, f, r + 1, N, b)),
              this.ConcatenateChanges(l, g)
            )
          }
          return [new A.DiffChange(e, f - e + 1, m, N - m + 1)]
        }
        WALKTRACE(e, f, m, N, b, h, S, p, i, r, l, g, v, o, _, L, E, y) {
          let P = null,
            R = null,
            V = new u(),
            B = f,
            U = m,
            T = v[0] - L[0] - N,
            q = -1073741824,
            O = this.m_forwardHistory.length - 1
          do {
            const t = T + e
            t === B || (t < U && i[t - 1] < i[t + 1])
              ? ((l = i[t + 1]),
                (o = l - T - N),
                l < q && V.MarkNextChange(),
                (q = l),
                V.AddModifiedElement(l + 1, o),
                (T = t + 1 - e))
              : ((l = i[t - 1] + 1),
                (o = l - T - N),
                l < q && V.MarkNextChange(),
                (q = l - 1),
                V.AddOriginalElement(l, o + 1),
                (T = t - 1 - e)),
              O >= 0 &&
                ((i = this.m_forwardHistory[O]),
                (e = i[0]),
                (B = 1),
                (U = i.length - 1))
          } while (--O >= -1)
          if (((P = V.getReverseChanges()), y[0])) {
            let t = v[0] + 1,
              W = L[0] + 1
            if (P !== null && P.length > 0) {
              const Y = P[P.length - 1]
              ;(t = Math.max(t, Y.getOriginalEnd())),
                (W = Math.max(W, Y.getModifiedEnd()))
            }
            R = [new A.DiffChange(t, g - t + 1, W, _ - W + 1)]
          } else {
            ;(V = new u()),
              (B = h),
              (U = S),
              (T = v[0] - L[0] - p),
              (q = 1073741824),
              (O = E
                ? this.m_reverseHistory.length - 1
                : this.m_reverseHistory.length - 2)
            do {
              const t = T + b
              t === B || (t < U && r[t - 1] >= r[t + 1])
                ? ((l = r[t + 1] - 1),
                  (o = l - T - p),
                  l > q && V.MarkNextChange(),
                  (q = l + 1),
                  V.AddOriginalElement(l + 1, o + 1),
                  (T = t + 1 - b))
                : ((l = r[t - 1]),
                  (o = l - T - p),
                  l > q && V.MarkNextChange(),
                  (q = l),
                  V.AddModifiedElement(l + 1, o + 1),
                  (T = t - 1 - b)),
                O >= 0 &&
                  ((r = this.m_reverseHistory[O]),
                  (b = r[0]),
                  (B = 1),
                  (U = r.length - 1))
            } while (--O >= -1)
            R = V.getChanges()
          }
          return this.ConcatenateChanges(P, R)
        }
        ComputeRecursionPoint(e, f, m, N, b, h, S) {
          let p = 0,
            i = 0,
            r = 0,
            l = 0,
            g = 0,
            v = 0
          e--,
            m--,
            (b[0] = 0),
            (h[0] = 0),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = [])
          const o = f - e + (N - m),
            _ = o + 1,
            L = new Int32Array(_),
            E = new Int32Array(_),
            y = N - m,
            P = f - e,
            R = e - m,
            V = f - N,
            U = (P - y) % 2 == 0
          ;(L[y] = e), (E[P] = f), (S[0] = !1)
          for (let T = 1; T <= o / 2 + 1; T++) {
            let q = 0,
              O = 0
            ;(r = this.ClipDiagonalBound(y - T, T, y, _)),
              (l = this.ClipDiagonalBound(y + T, T, y, _))
            for (let W = r; W <= l; W += 2) {
              W === r || (W < l && L[W - 1] < L[W + 1])
                ? (p = L[W + 1])
                : (p = L[W - 1] + 1),
                (i = p - (W - y) - R)
              const Y = p
              for (; p < f && i < N && this.ElementsAreEqual(p + 1, i + 1); )
                p++, i++
              if (
                ((L[W] = p),
                p + i > q + O && ((q = p), (O = i)),
                !U && Math.abs(W - P) <= T - 1 && p >= E[W])
              )
                return (
                  (b[0] = p),
                  (h[0] = i),
                  Y <= E[W] && 1447 > 0 && T <= 1447 + 1
                    ? this.WALKTRACE(
                        y,
                        r,
                        l,
                        R,
                        P,
                        g,
                        v,
                        V,
                        L,
                        E,
                        p,
                        f,
                        b,
                        i,
                        N,
                        h,
                        U,
                        S
                      )
                    : null
                )
            }
            const t = (q - e + (O - m) - T) / 2
            if (
              this.ContinueProcessingPredicate !== null &&
              !this.ContinueProcessingPredicate(q, t)
            )
              return (
                (S[0] = !0),
                (b[0] = q),
                (h[0] = O),
                t > 0 && 1447 > 0 && T <= 1447 + 1
                  ? this.WALKTRACE(
                      y,
                      r,
                      l,
                      R,
                      P,
                      g,
                      v,
                      V,
                      L,
                      E,
                      p,
                      f,
                      b,
                      i,
                      N,
                      h,
                      U,
                      S
                    )
                  : (e++, m++, [new A.DiffChange(e, f - e + 1, m, N - m + 1)])
              )
            ;(g = this.ClipDiagonalBound(P - T, T, P, _)),
              (v = this.ClipDiagonalBound(P + T, T, P, _))
            for (let W = g; W <= v; W += 2) {
              W === g || (W < v && E[W - 1] >= E[W + 1])
                ? (p = E[W + 1] - 1)
                : (p = E[W - 1]),
                (i = p - (W - P) - V)
              const Y = p
              for (; p > e && i > m && this.ElementsAreEqual(p, i); ) p--, i--
              if (((E[W] = p), U && Math.abs(W - y) <= T && p <= L[W]))
                return (
                  (b[0] = p),
                  (h[0] = i),
                  Y >= L[W] && 1447 > 0 && T <= 1447 + 1
                    ? this.WALKTRACE(
                        y,
                        r,
                        l,
                        R,
                        P,
                        g,
                        v,
                        V,
                        L,
                        E,
                        p,
                        f,
                        b,
                        i,
                        N,
                        h,
                        U,
                        S
                      )
                    : null
                )
            }
            if (T <= 1447) {
              let W = new Int32Array(l - r + 2)
              ;(W[0] = y - r + 1),
                a.Copy2(L, r, W, 1, l - r + 1),
                this.m_forwardHistory.push(W),
                (W = new Int32Array(v - g + 2)),
                (W[0] = P - g + 1),
                a.Copy2(E, g, W, 1, v - g + 1),
                this.m_reverseHistory.push(W)
            }
          }
          return this.WALKTRACE(
            y,
            r,
            l,
            R,
            P,
            g,
            v,
            V,
            L,
            E,
            p,
            f,
            b,
            i,
            N,
            h,
            U,
            S
          )
        }
        PrettifyChanges(e) {
          for (let f = 0; f < e.length; f++) {
            const m = e[f],
              N =
                f < e.length - 1
                  ? e[f + 1].originalStart
                  : this._originalElementsOrHash.length,
              b =
                f < e.length - 1
                  ? e[f + 1].modifiedStart
                  : this._modifiedElementsOrHash.length,
              h = m.originalLength > 0,
              S = m.modifiedLength > 0
            for (
              ;
              m.originalStart + m.originalLength < N &&
              m.modifiedStart + m.modifiedLength < b &&
              (!h ||
                this.OriginalElementsAreEqual(
                  m.originalStart,
                  m.originalStart + m.originalLength
                )) &&
              (!S ||
                this.ModifiedElementsAreEqual(
                  m.modifiedStart,
                  m.modifiedStart + m.modifiedLength
                ));

            ) {
              const i = this.ElementsAreStrictEqual(
                m.originalStart,
                m.modifiedStart
              )
              if (
                this.ElementsAreStrictEqual(
                  m.originalStart + m.originalLength,
                  m.modifiedStart + m.modifiedLength
                ) &&
                !i
              )
                break
              m.originalStart++, m.modifiedStart++
            }
            let p = [null]
            if (f < e.length - 1 && this.ChangesOverlap(e[f], e[f + 1], p)) {
              ;(e[f] = p[0]), e.splice(f + 1, 1), f--
              continue
            }
          }
          for (let f = e.length - 1; f >= 0; f--) {
            const m = e[f]
            let N = 0,
              b = 0
            if (f > 0) {
              const l = e[f - 1]
              ;(N = l.originalStart + l.originalLength),
                (b = l.modifiedStart + l.modifiedLength)
            }
            const h = m.originalLength > 0,
              S = m.modifiedLength > 0
            let p = 0,
              i = this._boundaryScore(
                m.originalStart,
                m.originalLength,
                m.modifiedStart,
                m.modifiedLength
              )
            for (let l = 1; ; l++) {
              const g = m.originalStart - l,
                v = m.modifiedStart - l
              if (
                g < N ||
                v < b ||
                (h &&
                  !this.OriginalElementsAreEqual(g, g + m.originalLength)) ||
                (S && !this.ModifiedElementsAreEqual(v, v + m.modifiedLength))
              )
                break
              const _ =
                (g === N && v === b ? 5 : 0) +
                this._boundaryScore(g, m.originalLength, v, m.modifiedLength)
              _ > i && ((i = _), (p = l))
            }
            ;(m.originalStart -= p), (m.modifiedStart -= p)
            const r = [null]
            if (f > 0 && this.ChangesOverlap(e[f - 1], e[f], r)) {
              ;(e[f - 1] = r[0]), e.splice(f, 1), f++
              continue
            }
          }
          if (this._hasStrings)
            for (let f = 1, m = e.length; f < m; f++) {
              const N = e[f - 1],
                b = e[f],
                h = b.originalStart - N.originalStart - N.originalLength,
                S = N.originalStart,
                p = b.originalStart + b.originalLength,
                i = p - S,
                r = N.modifiedStart,
                l = b.modifiedStart + b.modifiedLength,
                g = l - r
              if (h < 5 && i < 20 && g < 20) {
                const v = this._findBetterContiguousSequence(S, i, r, g, h)
                if (v) {
                  const [o, _] = v
                  ;(o !== N.originalStart + N.originalLength ||
                    _ !== N.modifiedStart + N.modifiedLength) &&
                    ((N.originalLength = o - N.originalStart),
                    (N.modifiedLength = _ - N.modifiedStart),
                    (b.originalStart = o + h),
                    (b.modifiedStart = _ + h),
                    (b.originalLength = p - b.originalStart),
                    (b.modifiedLength = l - b.modifiedStart))
                }
              }
            }
          return e
        }
        _findBetterContiguousSequence(e, f, m, N, b) {
          if (f < b || N < b) return null
          const h = e + f - b + 1,
            S = m + N - b + 1
          let p = 0,
            i = 0,
            r = 0
          for (let l = e; l < h; l++)
            for (let g = m; g < S; g++) {
              const v = this._contiguousSequenceScore(l, g, b)
              v > 0 && v > p && ((p = v), (i = l), (r = g))
            }
          return p > 0 ? [i, r] : null
        }
        _contiguousSequenceScore(e, f, m) {
          let N = 0
          for (let b = 0; b < m; b++) {
            if (!this.ElementsAreEqual(e + b, f + b)) return 0
            N += this._originalStringElements[e + b].length
          }
          return N
        }
        _OriginalIsBoundary(e) {
          return e <= 0 || e >= this._originalElementsOrHash.length - 1
            ? !0
            : this._hasStrings && /^\s*$/.test(this._originalStringElements[e])
        }
        _OriginalRegionIsBoundary(e, f) {
          if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1))
            return !0
          if (f > 0) {
            const m = e + f
            if (this._OriginalIsBoundary(m - 1) || this._OriginalIsBoundary(m))
              return !0
          }
          return !1
        }
        _ModifiedIsBoundary(e) {
          return e <= 0 || e >= this._modifiedElementsOrHash.length - 1
            ? !0
            : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e])
        }
        _ModifiedRegionIsBoundary(e, f) {
          if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1))
            return !0
          if (f > 0) {
            const m = e + f
            if (this._ModifiedIsBoundary(m - 1) || this._ModifiedIsBoundary(m))
              return !0
          }
          return !1
        }
        _boundaryScore(e, f, m, N) {
          const b = this._OriginalRegionIsBoundary(e, f) ? 1 : 0,
            h = this._ModifiedRegionIsBoundary(m, N) ? 1 : 0
          return b + h
        }
        ConcatenateChanges(e, f) {
          let m = []
          if (e.length === 0 || f.length === 0) return f.length > 0 ? f : e
          if (this.ChangesOverlap(e[e.length - 1], f[0], m)) {
            const N = new Array(e.length + f.length - 1)
            return (
              a.Copy(e, 0, N, 0, e.length - 1),
              (N[e.length - 1] = m[0]),
              a.Copy(f, 1, N, e.length, f.length - 1),
              N
            )
          } else {
            const N = new Array(e.length + f.length)
            return (
              a.Copy(e, 0, N, 0, e.length),
              a.Copy(f, 0, N, e.length, f.length),
              N
            )
          }
        }
        ChangesOverlap(e, f, m) {
          if (
            (d.Assert(
              e.originalStart <= f.originalStart,
              'Left change is not less than or equal to right change'
            ),
            d.Assert(
              e.modifiedStart <= f.modifiedStart,
              'Left change is not less than or equal to right change'
            ),
            e.originalStart + e.originalLength >= f.originalStart ||
              e.modifiedStart + e.modifiedLength >= f.modifiedStart)
          ) {
            const N = e.originalStart
            let b = e.originalLength
            const h = e.modifiedStart
            let S = e.modifiedLength
            return (
              e.originalStart + e.originalLength >= f.originalStart &&
                (b = f.originalStart + f.originalLength - e.originalStart),
              e.modifiedStart + e.modifiedLength >= f.modifiedStart &&
                (S = f.modifiedStart + f.modifiedLength - e.modifiedStart),
              (m[0] = new A.DiffChange(N, b, h, S)),
              !0
            )
          } else return (m[0] = null), !1
        }
        ClipDiagonalBound(e, f, m, N) {
          if (e >= 0 && e < N) return e
          const b = m,
            h = N - m - 1,
            S = f % 2 == 0
          if (e < 0) {
            const p = b % 2 == 0
            return S === p ? 0 : 1
          } else {
            const p = h % 2 == 0
            return S === p ? N - 1 : N - 2
          }
        }
      }
      n.LcsDiff = c
    }),
    j(z[11], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.assertNever =
          n.withNullAsUndefined =
          n.createProxyObject =
          n.getAllMethodNames =
          n.getAllPropertyNames =
          n.validateConstraint =
          n.validateConstraints =
          n.isFunction =
          n.assertIsDefined =
          n.assertType =
          n.isUndefinedOrNull =
          n.isDefined =
          n.isUndefined =
          n.isBoolean =
          n.isNumber =
          n.isObject =
          n.isString =
          n.isArray =
            void 0)
      function A(r) {
        return Array.isArray(r)
      }
      n.isArray = A
      function D(r) {
        return typeof r == 'string'
      }
      n.isString = D
      function w(r) {
        return (
          typeof r == 'object' &&
          r !== null &&
          !Array.isArray(r) &&
          !(r instanceof RegExp) &&
          !(r instanceof Date)
        )
      }
      n.isObject = w
      function s(r) {
        return typeof r == 'number' && !isNaN(r)
      }
      n.isNumber = s
      function d(r) {
        return r === !0 || r === !1
      }
      n.isBoolean = d
      function a(r) {
        return typeof r == 'undefined'
      }
      n.isUndefined = a
      function u(r) {
        return !c(r)
      }
      n.isDefined = u
      function c(r) {
        return a(r) || r === null
      }
      n.isUndefinedOrNull = c
      function C(r, l) {
        if (!r)
          throw new Error(
            l ? `Unexpected type, expected '${l}'` : 'Unexpected type'
          )
      }
      n.assertType = C
      function e(r) {
        if (c(r))
          throw new Error('Assertion Failed: argument is undefined or null')
        return r
      }
      n.assertIsDefined = e
      function f(r) {
        return typeof r == 'function'
      }
      n.isFunction = f
      function m(r, l) {
        const g = Math.min(r.length, l.length)
        for (let v = 0; v < g; v++) N(r[v], l[v])
      }
      n.validateConstraints = m
      function N(r, l) {
        if (D(l)) {
          if (typeof r !== l)
            throw new Error(`argument does not match constraint: typeof ${l}`)
        } else if (f(l)) {
          try {
            if (r instanceof l) return
          } catch (g) {}
          if (
            (!c(r) && r.constructor === l) ||
            (l.length === 1 && l.call(void 0, r) === !0)
          )
            return
          throw new Error(
            'argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true'
          )
        }
      }
      n.validateConstraint = N
      function b(r) {
        let l = [],
          g = Object.getPrototypeOf(r)
        for (; Object.prototype !== g; )
          (l = l.concat(Object.getOwnPropertyNames(g))),
            (g = Object.getPrototypeOf(g))
        return l
      }
      n.getAllPropertyNames = b
      function h(r) {
        const l = []
        for (const g of b(r)) typeof r[g] == 'function' && l.push(g)
        return l
      }
      n.getAllMethodNames = h
      function S(r, l) {
        const g = (o) =>
          function () {
            const _ = Array.prototype.slice.call(arguments, 0)
            return l(o, _)
          }
        let v = {}
        for (const o of r) v[o] = g(o)
        return v
      }
      n.createProxyObject = S
      function p(r) {
        return r === null ? void 0 : r
      }
      n.withNullAsUndefined = p
      function i(r, l = 'Unreachable') {
        throw new Error(l)
      }
      n.assertNever = i
    }),
    j(z[12], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.toUint32 = n.toUint8 = void 0)
      function A(w) {
        return w < 0 ? 0 : w > 255 ? 255 : w | 0
      }
      n.toUint8 = A
      function D(w) {
        return w < 0 ? 0 : w > 4294967295 ? 4294967295 : w | 0
      }
      n.toUint32 = D
    }),
    j(z[13], G([0, 1, 20, 2]), function (F, n, A, D) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.uriToFsPath = n.URI = void 0)
      const w = /^\w[\w\d+.-]*$/,
        s = /^\//,
        d = /^\/\//
      function a(o, _) {
        if (!o.scheme && _)
          throw new Error(
            `[UriError]: Scheme is missing: {scheme: "", authority: "${o.authority}", path: "${o.path}", query: "${o.query}", fragment: "${o.fragment}"}`
          )
        if (o.scheme && !w.test(o.scheme))
          throw new Error('[UriError]: Scheme contains illegal characters.')
        if (o.path) {
          if (o.authority) {
            if (!s.test(o.path))
              throw new Error(
                '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
              )
          } else if (d.test(o.path))
            throw new Error(
              '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
            )
        }
      }
      function u(o, _) {
        return !o && !_ ? 'file' : o
      }
      function c(o, _) {
        switch (o) {
          case 'https':
          case 'http':
          case 'file':
            _ ? _[0] !== e && (_ = e + _) : (_ = e)
            break
        }
        return _
      }
      const C = '',
        e = '/',
        f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
      class m {
        constructor(_, L, E, y, P, R = !1) {
          typeof _ == 'object'
            ? ((this.scheme = _.scheme || C),
              (this.authority = _.authority || C),
              (this.path = _.path || C),
              (this.query = _.query || C),
              (this.fragment = _.fragment || C))
            : ((this.scheme = u(_, R)),
              (this.authority = L || C),
              (this.path = c(this.scheme, E || C)),
              (this.query = y || C),
              (this.fragment = P || C),
              a(this, R))
        }
        static isUri(_) {
          return _ instanceof m
            ? !0
            : _
            ? typeof _.authority == 'string' &&
              typeof _.fragment == 'string' &&
              typeof _.path == 'string' &&
              typeof _.query == 'string' &&
              typeof _.scheme == 'string' &&
              typeof _.fsPath == 'string' &&
              typeof _.with == 'function' &&
              typeof _.toString == 'function'
            : !1
        }
        get fsPath() {
          return i(this, !1)
        }
        with(_) {
          if (!_) return this
          let { scheme: L, authority: E, path: y, query: P, fragment: R } = _
          return (
            L === void 0 ? (L = this.scheme) : L === null && (L = C),
            E === void 0 ? (E = this.authority) : E === null && (E = C),
            y === void 0 ? (y = this.path) : y === null && (y = C),
            P === void 0 ? (P = this.query) : P === null && (P = C),
            R === void 0 ? (R = this.fragment) : R === null && (R = C),
            L === this.scheme &&
            E === this.authority &&
            y === this.path &&
            P === this.query &&
            R === this.fragment
              ? this
              : new b(L, E, y, P, R)
          )
        }
        static parse(_, L = !1) {
          const E = f.exec(_)
          return E
            ? new b(
                E[2] || C,
                v(E[4] || C),
                v(E[5] || C),
                v(E[7] || C),
                v(E[9] || C),
                L
              )
            : new b(C, C, C, C, C)
        }
        static file(_) {
          let L = C
          if (
            (D.isWindows && (_ = _.replace(/\\/g, e)), _[0] === e && _[1] === e)
          ) {
            const E = _.indexOf(e, 2)
            E === -1
              ? ((L = _.substring(2)), (_ = e))
              : ((L = _.substring(2, E)), (_ = _.substring(E) || e))
          }
          return new b('file', L, _, C, C)
        }
        static from(_) {
          const L = new b(_.scheme, _.authority, _.path, _.query, _.fragment)
          return a(L, !0), L
        }
        static joinPath(_, ...L) {
          if (!_.path)
            throw new Error(
              '[UriError]: cannot call joinPath on URI without path'
            )
          let E
          return (
            D.isWindows && _.scheme === 'file'
              ? (E = m.file(A.win32.join(i(_, !0), ...L)).path)
              : (E = A.posix.join(_.path, ...L)),
            _.with({ path: E })
          )
        }
        toString(_ = !1) {
          return r(this, _)
        }
        toJSON() {
          return this
        }
        static revive(_) {
          if (_) {
            if (_ instanceof m) return _
            {
              const L = new b(_)
              return (
                (L._formatted = _.external),
                (L._fsPath = _._sep === N ? _.fsPath : null),
                L
              )
            }
          } else return _
        }
      }
      n.URI = m
      const N = D.isWindows ? 1 : void 0
      class b extends m {
        constructor() {
          super(...arguments)
          ;(this._formatted = null), (this._fsPath = null)
        }
        get fsPath() {
          return this._fsPath || (this._fsPath = i(this, !1)), this._fsPath
        }
        toString(_ = !1) {
          return _
            ? r(this, !0)
            : (this._formatted || (this._formatted = r(this, !1)),
              this._formatted)
        }
        toJSON() {
          const _ = { $mid: 1 }
          return (
            this._fsPath && ((_.fsPath = this._fsPath), (_._sep = N)),
            this._formatted && (_.external = this._formatted),
            this.path && (_.path = this.path),
            this.scheme && (_.scheme = this.scheme),
            this.authority && (_.authority = this.authority),
            this.query && (_.query = this.query),
            this.fragment && (_.fragment = this.fragment),
            _
          )
        }
      }
      const h = {
        [58]: '%3A',
        [47]: '%2F',
        [63]: '%3F',
        [35]: '%23',
        [91]: '%5B',
        [93]: '%5D',
        [64]: '%40',
        [33]: '%21',
        [36]: '%24',
        [38]: '%26',
        [39]: '%27',
        [40]: '%28',
        [41]: '%29',
        [42]: '%2A',
        [43]: '%2B',
        [44]: '%2C',
        [59]: '%3B',
        [61]: '%3D',
        [32]: '%20',
      }
      function S(o, _) {
        let L,
          E = -1
        for (let y = 0; y < o.length; y++) {
          const P = o.charCodeAt(y)
          if (
            (P >= 97 && P <= 122) ||
            (P >= 65 && P <= 90) ||
            (P >= 48 && P <= 57) ||
            P === 45 ||
            P === 46 ||
            P === 95 ||
            P === 126 ||
            (_ && P === 47)
          )
            E !== -1 &&
              ((L += encodeURIComponent(o.substring(E, y))), (E = -1)),
              L !== void 0 && (L += o.charAt(y))
          else {
            L === void 0 && (L = o.substr(0, y))
            const R = h[P]
            R !== void 0
              ? (E !== -1 &&
                  ((L += encodeURIComponent(o.substring(E, y))), (E = -1)),
                (L += R))
              : E === -1 && (E = y)
          }
        }
        return (
          E !== -1 && (L += encodeURIComponent(o.substring(E))),
          L !== void 0 ? L : o
        )
      }
      function p(o) {
        let _
        for (let L = 0; L < o.length; L++) {
          const E = o.charCodeAt(L)
          E === 35 || E === 63
            ? (_ === void 0 && (_ = o.substr(0, L)), (_ += h[E]))
            : _ !== void 0 && (_ += o[L])
        }
        return _ !== void 0 ? _ : o
      }
      function i(o, _) {
        let L
        return (
          o.authority && o.path.length > 1 && o.scheme === 'file'
            ? (L = `//${o.authority}${o.path}`)
            : o.path.charCodeAt(0) === 47 &&
              ((o.path.charCodeAt(1) >= 65 && o.path.charCodeAt(1) <= 90) ||
                (o.path.charCodeAt(1) >= 97 && o.path.charCodeAt(1) <= 122)) &&
              o.path.charCodeAt(2) === 58
            ? _
              ? (L = o.path.substr(1))
              : (L = o.path[1].toLowerCase() + o.path.substr(2))
            : (L = o.path),
          D.isWindows && (L = L.replace(/\//g, '\\')),
          L
        )
      }
      n.uriToFsPath = i
      function r(o, _) {
        const L = _ ? p : S
        let E = '',
          { scheme: y, authority: P, path: R, query: V, fragment: B } = o
        if (
          (y && ((E += y), (E += ':')),
          (P || y === 'file') && ((E += e), (E += e)),
          P)
        ) {
          let U = P.indexOf('@')
          if (U !== -1) {
            const T = P.substr(0, U)
            ;(P = P.substr(U + 1)),
              (U = T.indexOf(':')),
              U === -1
                ? (E += L(T, !1))
                : ((E += L(T.substr(0, U), !1)),
                  (E += ':'),
                  (E += L(T.substr(U + 1), !1))),
              (E += '@')
          }
          ;(P = P.toLowerCase()),
            (U = P.indexOf(':')),
            U === -1
              ? (E += L(P, !1))
              : ((E += L(P.substr(0, U), !1)), (E += P.substr(U)))
        }
        if (R) {
          if (
            R.length >= 3 &&
            R.charCodeAt(0) === 47 &&
            R.charCodeAt(2) === 58
          ) {
            const U = R.charCodeAt(1)
            U >= 65 &&
              U <= 90 &&
              (R = `/${String.fromCharCode(U + 32)}:${R.substr(3)}`)
          } else if (R.length >= 2 && R.charCodeAt(1) === 58) {
            const U = R.charCodeAt(0)
            U >= 65 &&
              U <= 90 &&
              (R = `${String.fromCharCode(U + 32)}:${R.substr(2)}`)
          }
          E += L(R, !0)
        }
        return (
          V && ((E += '?'), (E += L(V, !1))),
          B && ((E += '#'), (E += _ ? B : S(B, !1))),
          E
        )
      }
      function l(o) {
        try {
          return decodeURIComponent(o)
        } catch (_) {
          return o.length > 3 ? o.substr(0, 3) + l(o.substr(3)) : o
        }
      }
      const g = /(%[0-9A-Za-z][0-9A-Za-z])+/g
      function v(o) {
        return o.match(g) ? o.replace(g, (_) => l(_)) : o
      }
    }),
    j(z[34], G([0, 1, 7, 5, 8, 2, 11, 4]), function (F, n, A, D, w, s, d, a) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.create =
          n.SimpleWorkerServer =
          n.SimpleWorkerClient =
          n.logOnceWebWorkerWarning =
            void 0)
      const u = '$initialize'
      let c = !1
      function C(v) {
        !s.isWeb ||
          (c ||
            ((c = !0),
            console.warn(
              'Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq'
            )),
          console.warn(v.message))
      }
      n.logOnceWebWorkerWarning = C
      class e {
        constructor(o, _, L, E) {
          ;(this.vsWorker = o),
            (this.req = _),
            (this.method = L),
            (this.args = E),
            (this.type = 0)
        }
      }
      class f {
        constructor(o, _, L, E) {
          ;(this.vsWorker = o),
            (this.seq = _),
            (this.res = L),
            (this.err = E),
            (this.type = 1)
        }
      }
      class m {
        constructor(o, _, L, E) {
          ;(this.vsWorker = o),
            (this.req = _),
            (this.eventName = L),
            (this.arg = E),
            (this.type = 2)
        }
      }
      class N {
        constructor(o, _, L) {
          ;(this.vsWorker = o),
            (this.req = _),
            (this.event = L),
            (this.type = 3)
        }
      }
      class b {
        constructor(o, _) {
          ;(this.vsWorker = o), (this.req = _), (this.type = 4)
        }
      }
      class h {
        constructor(o) {
          ;(this._workerId = -1),
            (this._handler = o),
            (this._lastSentReq = 0),
            (this._pendingReplies = Object.create(null)),
            (this._pendingEmitters = new Map()),
            (this._pendingEvents = new Map())
        }
        setWorkerId(o) {
          this._workerId = o
        }
        sendMessage(o, _) {
          const L = String(++this._lastSentReq)
          return new Promise((E, y) => {
            ;(this._pendingReplies[L] = { resolve: E, reject: y }),
              this._send(new e(this._workerId, L, o, _))
          })
        }
        listen(o, _) {
          let L = null
          const E = new D.Emitter({
            onFirstListenerAdd: () => {
              ;(L = String(++this._lastSentReq)),
                this._pendingEmitters.set(L, E),
                this._send(new m(this._workerId, L, o, _))
            },
            onLastListenerRemove: () => {
              this._pendingEmitters.delete(L),
                this._send(new b(this._workerId, L)),
                (L = null)
            },
          })
          return E.event
        }
        handleMessage(o) {
          !o ||
            !o.vsWorker ||
            (this._workerId !== -1 && o.vsWorker !== this._workerId) ||
            this._handleMessage(o)
        }
        _handleMessage(o) {
          switch (o.type) {
            case 1:
              return this._handleReplyMessage(o)
            case 0:
              return this._handleRequestMessage(o)
            case 2:
              return this._handleSubscribeEventMessage(o)
            case 3:
              return this._handleEventMessage(o)
            case 4:
              return this._handleUnsubscribeEventMessage(o)
          }
        }
        _handleReplyMessage(o) {
          if (!this._pendingReplies[o.seq]) {
            console.warn('Got reply to unknown seq')
            return
          }
          let _ = this._pendingReplies[o.seq]
          if ((delete this._pendingReplies[o.seq], o.err)) {
            let L = o.err
            o.err.$isError &&
              ((L = new Error()),
              (L.name = o.err.name),
              (L.message = o.err.message),
              (L.stack = o.err.stack)),
              _.reject(L)
            return
          }
          _.resolve(o.res)
        }
        _handleRequestMessage(o) {
          let _ = o.req
          this._handler.handleMessage(o.method, o.args).then(
            (E) => {
              this._send(new f(this._workerId, _, E, void 0))
            },
            (E) => {
              E.detail instanceof Error &&
                (E.detail = (0, A.transformErrorForSerialization)(E.detail)),
                this._send(
                  new f(
                    this._workerId,
                    _,
                    void 0,
                    (0, A.transformErrorForSerialization)(E)
                  )
                )
            }
          )
        }
        _handleSubscribeEventMessage(o) {
          const _ = o.req,
            L = this._handler.handleEvent(
              o.eventName,
              o.arg
            )((E) => {
              this._send(new N(this._workerId, _, E))
            })
          this._pendingEvents.set(_, L)
        }
        _handleEventMessage(o) {
          if (!this._pendingEmitters.has(o.req)) {
            console.warn('Got event for unknown req')
            return
          }
          this._pendingEmitters.get(o.req).fire(o.event)
        }
        _handleUnsubscribeEventMessage(o) {
          if (!this._pendingEvents.has(o.req)) {
            console.warn('Got unsubscribe for unknown req')
            return
          }
          this._pendingEvents.get(o.req).dispose(),
            this._pendingEvents.delete(o.req)
        }
        _send(o) {
          let _ = []
          if (o.type === 0)
            for (let L = 0; L < o.args.length; L++)
              o.args[L] instanceof ArrayBuffer && _.push(o.args[L])
          else o.type === 1 && o.res instanceof ArrayBuffer && _.push(o.res)
          this._handler.sendMessage(o, _)
        }
      }
      class S extends w.Disposable {
        constructor(o, _, L) {
          super()
          let E = null
          ;(this._worker = this._register(
            o.create(
              'vs/base/common/worker/simpleWorker',
              (B) => {
                this._protocol.handleMessage(B)
              },
              (B) => {
                E && E(B)
              }
            )
          )),
            (this._protocol = new h({
              sendMessage: (B, U) => {
                this._worker.postMessage(B, U)
              },
              handleMessage: (B, U) => {
                if (typeof L[B] != 'function')
                  return Promise.reject(
                    new Error('Missing method ' + B + ' on main thread host.')
                  )
                try {
                  return Promise.resolve(L[B].apply(L, U))
                } catch (T) {
                  return Promise.reject(T)
                }
              },
              handleEvent: (B, U) => {
                if (i(B)) {
                  const T = L[B].call(L, U)
                  if (typeof T != 'function')
                    throw new Error(
                      `Missing dynamic event ${B} on main thread host.`
                    )
                  return T
                }
                if (p(B)) {
                  const T = L[B]
                  if (typeof T != 'function')
                    throw new Error(`Missing event ${B} on main thread host.`)
                  return T
                }
                throw new Error(`Malformed event name ${B}`)
              },
            })),
            this._protocol.setWorkerId(this._worker.getId())
          let y = null
          typeof s.globals.require != 'undefined' &&
          typeof s.globals.require.getConfig == 'function'
            ? (y = s.globals.require.getConfig())
            : typeof s.globals.requirejs != 'undefined' &&
              (y = s.globals.requirejs.s.contexts._.config)
          const P = d.getAllMethodNames(L)
          this._onModuleLoaded = this._protocol.sendMessage(u, [
            this._worker.getId(),
            JSON.parse(JSON.stringify(y)),
            _,
            P,
          ])
          const R = (B, U) => this._request(B, U),
            V = (B, U) => this._protocol.listen(B, U)
          this._lazyProxy = new Promise((B, U) => {
            ;(E = U),
              this._onModuleLoaded.then(
                (T) => {
                  B(r(T, R, V))
                },
                (T) => {
                  U(T), this._onError('Worker failed to load ' + _, T)
                }
              )
          })
        }
        getProxyObject() {
          return this._lazyProxy
        }
        _request(o, _) {
          return new Promise((L, E) => {
            this._onModuleLoaded.then(() => {
              this._protocol.sendMessage(o, _).then(L, E)
            }, E)
          })
        }
        _onError(o, _) {
          console.error(o), console.info(_)
        }
      }
      n.SimpleWorkerClient = S
      function p(v) {
        return (
          v[0] === 'o' && v[1] === 'n' && a.isUpperAsciiLetter(v.charCodeAt(2))
        )
      }
      function i(v) {
        return /^onDynamic/.test(v) && a.isUpperAsciiLetter(v.charCodeAt(9))
      }
      function r(v, o, _) {
        const L = (P) =>
            function () {
              const R = Array.prototype.slice.call(arguments, 0)
              return o(P, R)
            },
          E = (P) =>
            function (R) {
              return _(P, R)
            }
        let y = {}
        for (const P of v) {
          if (i(P)) {
            y[P] = E(P)
            continue
          }
          if (p(P)) {
            y[P] = _(P, void 0)
            continue
          }
          y[P] = L(P)
        }
        return y
      }
      class l {
        constructor(o, _) {
          ;(this._requestHandlerFactory = _),
            (this._requestHandler = null),
            (this._protocol = new h({
              sendMessage: (L, E) => {
                o(L, E)
              },
              handleMessage: (L, E) => this._handleMessage(L, E),
              handleEvent: (L, E) => this._handleEvent(L, E),
            }))
        }
        onmessage(o) {
          this._protocol.handleMessage(o)
        }
        _handleMessage(o, _) {
          if (o === u) return this.initialize(_[0], _[1], _[2], _[3])
          if (
            !this._requestHandler ||
            typeof this._requestHandler[o] != 'function'
          )
            return Promise.reject(
              new Error('Missing requestHandler or method: ' + o)
            )
          try {
            return Promise.resolve(
              this._requestHandler[o].apply(this._requestHandler, _)
            )
          } catch (L) {
            return Promise.reject(L)
          }
        }
        _handleEvent(o, _) {
          if (!this._requestHandler) throw new Error('Missing requestHandler')
          if (i(o)) {
            const L = this._requestHandler[o].call(this._requestHandler, _)
            if (typeof L != 'function')
              throw new Error(`Missing dynamic event ${o} on request handler.`)
            return L
          }
          if (p(o)) {
            const L = this._requestHandler[o]
            if (typeof L != 'function')
              throw new Error(`Missing event ${o} on request handler.`)
            return L
          }
          throw new Error(`Malformed event name ${o}`)
        }
        initialize(o, _, L, E) {
          this._protocol.setWorkerId(o)
          const R = r(
            E,
            (V, B) => this._protocol.sendMessage(V, B),
            (V, B) => this._protocol.listen(V, B)
          )
          return this._requestHandlerFactory
            ? ((this._requestHandler = this._requestHandlerFactory(R)),
              Promise.resolve(d.getAllMethodNames(this._requestHandler)))
            : (_ &&
                (typeof _.baseUrl != 'undefined' && delete _.baseUrl,
                typeof _.paths != 'undefined' &&
                  typeof _.paths.vs != 'undefined' &&
                  delete _.paths.vs,
                typeof _.trustedTypesPolicy !== void 0 &&
                  delete _.trustedTypesPolicy,
                (_.catchError = !0),
                s.globals.require.config(_)),
              new Promise((V, B) => {
                ;(s.globals.require || F)(
                  [L],
                  (T) => {
                    if (
                      ((this._requestHandler = T.create(R)),
                      !this._requestHandler)
                    ) {
                      B(new Error('No RequestHandler!'))
                      return
                    }
                    V(d.getAllMethodNames(this._requestHandler))
                  },
                  B
                )
              }))
        }
      }
      n.SimpleWorkerServer = l
      function g(v) {
        return new l(v, null)
      }
      n.create = g
    }),
    j(z[23], G([0, 1, 12]), function (F, n, A) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.CharacterSet = n.CharacterClassifier = void 0)
      class D {
        constructor(d) {
          let a = (0, A.toUint8)(d)
          ;(this._defaultValue = a),
            (this._asciiMap = D._createAsciiMap(a)),
            (this._map = new Map())
        }
        static _createAsciiMap(d) {
          let a = new Uint8Array(256)
          for (let u = 0; u < 256; u++) a[u] = d
          return a
        }
        set(d, a) {
          let u = (0, A.toUint8)(a)
          d >= 0 && d < 256 ? (this._asciiMap[d] = u) : this._map.set(d, u)
        }
        get(d) {
          return d >= 0 && d < 256
            ? this._asciiMap[d]
            : this._map.get(d) || this._defaultValue
        }
      }
      n.CharacterClassifier = D
      class w {
        constructor() {
          this._actual = new D(0)
        }
        add(d) {
          this._actual.set(d, 1)
        }
        has(d) {
          return this._actual.get(d) === 1
        }
      }
      n.CharacterSet = w
    }),
    j(z[3], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Position = void 0)
      class A {
        constructor(w, s) {
          ;(this.lineNumber = w), (this.column = s)
        }
        with(w = this.lineNumber, s = this.column) {
          return w === this.lineNumber && s === this.column ? this : new A(w, s)
        }
        delta(w = 0, s = 0) {
          return this.with(this.lineNumber + w, this.column + s)
        }
        equals(w) {
          return A.equals(this, w)
        }
        static equals(w, s) {
          return !w && !s
            ? !0
            : !!w &&
                !!s &&
                w.lineNumber === s.lineNumber &&
                w.column === s.column
        }
        isBefore(w) {
          return A.isBefore(this, w)
        }
        static isBefore(w, s) {
          return w.lineNumber < s.lineNumber
            ? !0
            : s.lineNumber < w.lineNumber
            ? !1
            : w.column < s.column
        }
        isBeforeOrEqual(w) {
          return A.isBeforeOrEqual(this, w)
        }
        static isBeforeOrEqual(w, s) {
          return w.lineNumber < s.lineNumber
            ? !0
            : s.lineNumber < w.lineNumber
            ? !1
            : w.column <= s.column
        }
        static compare(w, s) {
          let d = w.lineNumber | 0,
            a = s.lineNumber | 0
          if (d === a) {
            let u = w.column | 0,
              c = s.column | 0
            return u - c
          }
          return d - a
        }
        clone() {
          return new A(this.lineNumber, this.column)
        }
        toString() {
          return '(' + this.lineNumber + ',' + this.column + ')'
        }
        static lift(w) {
          return new A(w.lineNumber, w.column)
        }
        static isIPosition(w) {
          return (
            w && typeof w.lineNumber == 'number' && typeof w.column == 'number'
          )
        }
      }
      n.Position = A
    }),
    j(z[6], G([0, 1, 3]), function (F, n, A) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.Range = void 0)
      class D {
        constructor(s, d, a, u) {
          s > a || (s === a && d > u)
            ? ((this.startLineNumber = a),
              (this.startColumn = u),
              (this.endLineNumber = s),
              (this.endColumn = d))
            : ((this.startLineNumber = s),
              (this.startColumn = d),
              (this.endLineNumber = a),
              (this.endColumn = u))
        }
        isEmpty() {
          return D.isEmpty(this)
        }
        static isEmpty(s) {
          return (
            s.startLineNumber === s.endLineNumber &&
            s.startColumn === s.endColumn
          )
        }
        containsPosition(s) {
          return D.containsPosition(this, s)
        }
        static containsPosition(s, d) {
          return !(
            d.lineNumber < s.startLineNumber ||
            d.lineNumber > s.endLineNumber ||
            (d.lineNumber === s.startLineNumber && d.column < s.startColumn) ||
            (d.lineNumber === s.endLineNumber && d.column > s.endColumn)
          )
        }
        containsRange(s) {
          return D.containsRange(this, s)
        }
        static containsRange(s, d) {
          return !(
            d.startLineNumber < s.startLineNumber ||
            d.endLineNumber < s.startLineNumber ||
            d.startLineNumber > s.endLineNumber ||
            d.endLineNumber > s.endLineNumber ||
            (d.startLineNumber === s.startLineNumber &&
              d.startColumn < s.startColumn) ||
            (d.endLineNumber === s.endLineNumber && d.endColumn > s.endColumn)
          )
        }
        strictContainsRange(s) {
          return D.strictContainsRange(this, s)
        }
        static strictContainsRange(s, d) {
          return !(
            d.startLineNumber < s.startLineNumber ||
            d.endLineNumber < s.startLineNumber ||
            d.startLineNumber > s.endLineNumber ||
            d.endLineNumber > s.endLineNumber ||
            (d.startLineNumber === s.startLineNumber &&
              d.startColumn <= s.startColumn) ||
            (d.endLineNumber === s.endLineNumber && d.endColumn >= s.endColumn)
          )
        }
        plusRange(s) {
          return D.plusRange(this, s)
        }
        static plusRange(s, d) {
          let a, u, c, C
          return (
            d.startLineNumber < s.startLineNumber
              ? ((a = d.startLineNumber), (u = d.startColumn))
              : d.startLineNumber === s.startLineNumber
              ? ((a = d.startLineNumber),
                (u = Math.min(d.startColumn, s.startColumn)))
              : ((a = s.startLineNumber), (u = s.startColumn)),
            d.endLineNumber > s.endLineNumber
              ? ((c = d.endLineNumber), (C = d.endColumn))
              : d.endLineNumber === s.endLineNumber
              ? ((c = d.endLineNumber),
                (C = Math.max(d.endColumn, s.endColumn)))
              : ((c = s.endLineNumber), (C = s.endColumn)),
            new D(a, u, c, C)
          )
        }
        intersectRanges(s) {
          return D.intersectRanges(this, s)
        }
        static intersectRanges(s, d) {
          let a = s.startLineNumber,
            u = s.startColumn,
            c = s.endLineNumber,
            C = s.endColumn,
            e = d.startLineNumber,
            f = d.startColumn,
            m = d.endLineNumber,
            N = d.endColumn
          return (
            a < e ? ((a = e), (u = f)) : a === e && (u = Math.max(u, f)),
            c > m ? ((c = m), (C = N)) : c === m && (C = Math.min(C, N)),
            a > c || (a === c && u > C) ? null : new D(a, u, c, C)
          )
        }
        equalsRange(s) {
          return D.equalsRange(this, s)
        }
        static equalsRange(s, d) {
          return (
            !!s &&
            !!d &&
            s.startLineNumber === d.startLineNumber &&
            s.startColumn === d.startColumn &&
            s.endLineNumber === d.endLineNumber &&
            s.endColumn === d.endColumn
          )
        }
        getEndPosition() {
          return D.getEndPosition(this)
        }
        static getEndPosition(s) {
          return new A.Position(s.endLineNumber, s.endColumn)
        }
        getStartPosition() {
          return D.getStartPosition(this)
        }
        static getStartPosition(s) {
          return new A.Position(s.startLineNumber, s.startColumn)
        }
        toString() {
          return (
            '[' +
            this.startLineNumber +
            ',' +
            this.startColumn +
            ' -> ' +
            this.endLineNumber +
            ',' +
            this.endColumn +
            ']'
          )
        }
        setEndPosition(s, d) {
          return new D(this.startLineNumber, this.startColumn, s, d)
        }
        setStartPosition(s, d) {
          return new D(s, d, this.endLineNumber, this.endColumn)
        }
        collapseToStart() {
          return D.collapseToStart(this)
        }
        static collapseToStart(s) {
          return new D(
            s.startLineNumber,
            s.startColumn,
            s.startLineNumber,
            s.startColumn
          )
        }
        static fromPositions(s, d = s) {
          return new D(s.lineNumber, s.column, d.lineNumber, d.column)
        }
        static lift(s) {
          return s
            ? new D(
                s.startLineNumber,
                s.startColumn,
                s.endLineNumber,
                s.endColumn
              )
            : null
        }
        static isIRange(s) {
          return (
            s &&
            typeof s.startLineNumber == 'number' &&
            typeof s.startColumn == 'number' &&
            typeof s.endLineNumber == 'number' &&
            typeof s.endColumn == 'number'
          )
        }
        static areIntersectingOrTouching(s, d) {
          return !(
            s.endLineNumber < d.startLineNumber ||
            (s.endLineNumber === d.startLineNumber &&
              s.endColumn < d.startColumn) ||
            d.endLineNumber < s.startLineNumber ||
            (d.endLineNumber === s.startLineNumber &&
              d.endColumn < s.startColumn)
          )
        }
        static areIntersecting(s, d) {
          return !(
            s.endLineNumber < d.startLineNumber ||
            (s.endLineNumber === d.startLineNumber &&
              s.endColumn <= d.startColumn) ||
            d.endLineNumber < s.startLineNumber ||
            (d.endLineNumber === s.startLineNumber &&
              d.endColumn <= s.startColumn)
          )
        }
        static compareRangesUsingStarts(s, d) {
          if (s && d) {
            const c = s.startLineNumber | 0,
              C = d.startLineNumber | 0
            if (c === C) {
              const e = s.startColumn | 0,
                f = d.startColumn | 0
              if (e === f) {
                const m = s.endLineNumber | 0,
                  N = d.endLineNumber | 0
                if (m === N) {
                  const b = s.endColumn | 0,
                    h = d.endColumn | 0
                  return b - h
                }
                return m - N
              }
              return e - f
            }
            return c - C
          }
          return (s ? 1 : 0) - (d ? 1 : 0)
        }
        static compareRangesUsingEnds(s, d) {
          return s.endLineNumber === d.endLineNumber
            ? s.endColumn === d.endColumn
              ? s.startLineNumber === d.startLineNumber
                ? s.startColumn - d.startColumn
                : s.startLineNumber - d.startLineNumber
              : s.endColumn - d.endColumn
            : s.endLineNumber - d.endLineNumber
        }
        static spansMultipleLines(s) {
          return s.endLineNumber > s.startLineNumber
        }
      }
      n.Range = D
    }),
    j(z[24], G([0, 1, 3, 6]), function (F, n, A, D) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.Selection = void 0)
      class w extends D.Range {
        constructor(d, a, u, c) {
          super(d, a, u, c)
          ;(this.selectionStartLineNumber = d),
            (this.selectionStartColumn = a),
            (this.positionLineNumber = u),
            (this.positionColumn = c)
        }
        toString() {
          return (
            '[' +
            this.selectionStartLineNumber +
            ',' +
            this.selectionStartColumn +
            ' -> ' +
            this.positionLineNumber +
            ',' +
            this.positionColumn +
            ']'
          )
        }
        equalsSelection(d) {
          return w.selectionsEqual(this, d)
        }
        static selectionsEqual(d, a) {
          return (
            d.selectionStartLineNumber === a.selectionStartLineNumber &&
            d.selectionStartColumn === a.selectionStartColumn &&
            d.positionLineNumber === a.positionLineNumber &&
            d.positionColumn === a.positionColumn
          )
        }
        getDirection() {
          return this.selectionStartLineNumber === this.startLineNumber &&
            this.selectionStartColumn === this.startColumn
            ? 0
            : 1
        }
        setEndPosition(d, a) {
          return this.getDirection() === 0
            ? new w(this.startLineNumber, this.startColumn, d, a)
            : new w(d, a, this.startLineNumber, this.startColumn)
        }
        getPosition() {
          return new A.Position(this.positionLineNumber, this.positionColumn)
        }
        setStartPosition(d, a) {
          return this.getDirection() === 0
            ? new w(d, a, this.endLineNumber, this.endColumn)
            : new w(this.endLineNumber, this.endColumn, d, a)
        }
        static fromPositions(d, a = d) {
          return new w(d.lineNumber, d.column, a.lineNumber, a.column)
        }
        static liftSelection(d) {
          return new w(
            d.selectionStartLineNumber,
            d.selectionStartColumn,
            d.positionLineNumber,
            d.positionColumn
          )
        }
        static selectionsArrEqual(d, a) {
          if ((d && !a) || (!d && a)) return !1
          if (!d && !a) return !0
          if (d.length !== a.length) return !1
          for (let u = 0, c = d.length; u < c; u++)
            if (!this.selectionsEqual(d[u], a[u])) return !1
          return !0
        }
        static isISelection(d) {
          return (
            d &&
            typeof d.selectionStartLineNumber == 'number' &&
            typeof d.selectionStartColumn == 'number' &&
            typeof d.positionLineNumber == 'number' &&
            typeof d.positionColumn == 'number'
          )
        }
        static createWithDirection(d, a, u, c, C) {
          return C === 0 ? new w(d, a, u, c) : new w(u, c, d, a)
        }
      }
      n.Selection = w
    }),
    j(z[25], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.TokenizationResult2 = n.TokenizationResult = n.Token = void 0)
      class A {
        constructor(d, a, u) {
          ;(this._tokenBrand = void 0),
            (this.offset = d | 0),
            (this.type = a),
            (this.language = u)
        }
        toString() {
          return '(' + this.offset + ', ' + this.type + ')'
        }
      }
      n.Token = A
      class D {
        constructor(d, a) {
          ;(this._tokenizationResultBrand = void 0),
            (this.tokens = d),
            (this.endState = a)
        }
      }
      n.TokenizationResult = D
      class w {
        constructor(d, a) {
          ;(this._tokenizationResult2Brand = void 0),
            (this.tokens = d),
            (this.endState = a)
        }
      }
      n.TokenizationResult2 = w
    }),
    j(z[26], G([0, 1, 10, 4]), function (F, n, A, D) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.DiffComputer = void 0)
      const w = 3
      function s(b, h, S, p) {
        return new A.LcsDiff(b, h, S).ComputeDiff(p)
      }
      class d {
        constructor(h) {
          const S = [],
            p = []
          for (let i = 0, r = h.length; i < r; i++)
            (S[i] = f(h[i], 1)), (p[i] = m(h[i], 1))
          ;(this.lines = h), (this._startColumns = S), (this._endColumns = p)
        }
        getElements() {
          const h = []
          for (let S = 0, p = this.lines.length; S < p; S++)
            h[S] = this.lines[S].substring(
              this._startColumns[S] - 1,
              this._endColumns[S] - 1
            )
          return h
        }
        getStrictElement(h) {
          return this.lines[h]
        }
        getStartLineNumber(h) {
          return h + 1
        }
        getEndLineNumber(h) {
          return h + 1
        }
        createCharSequence(h, S, p) {
          const i = [],
            r = [],
            l = []
          let g = 0
          for (let v = S; v <= p; v++) {
            const o = this.lines[v],
              _ = h ? this._startColumns[v] : 1,
              L = h ? this._endColumns[v] : o.length + 1
            for (let E = _; E < L; E++)
              (i[g] = o.charCodeAt(E - 1)), (r[g] = v + 1), (l[g] = E), g++
          }
          return new a(i, r, l)
        }
      }
      class a {
        constructor(h, S, p) {
          ;(this._charCodes = h), (this._lineNumbers = S), (this._columns = p)
        }
        getElements() {
          return this._charCodes
        }
        getStartLineNumber(h) {
          return this._lineNumbers[h]
        }
        getStartColumn(h) {
          return this._columns[h]
        }
        getEndLineNumber(h) {
          return this._lineNumbers[h]
        }
        getEndColumn(h) {
          return this._columns[h] + 1
        }
      }
      class u {
        constructor(h, S, p, i, r, l, g, v) {
          ;(this.originalStartLineNumber = h),
            (this.originalStartColumn = S),
            (this.originalEndLineNumber = p),
            (this.originalEndColumn = i),
            (this.modifiedStartLineNumber = r),
            (this.modifiedStartColumn = l),
            (this.modifiedEndLineNumber = g),
            (this.modifiedEndColumn = v)
        }
        static createFromDiffChange(h, S, p) {
          let i, r, l, g, v, o, _, L
          return (
            h.originalLength === 0
              ? ((i = 0), (r = 0), (l = 0), (g = 0))
              : ((i = S.getStartLineNumber(h.originalStart)),
                (r = S.getStartColumn(h.originalStart)),
                (l = S.getEndLineNumber(
                  h.originalStart + h.originalLength - 1
                )),
                (g = S.getEndColumn(h.originalStart + h.originalLength - 1))),
            h.modifiedLength === 0
              ? ((v = 0), (o = 0), (_ = 0), (L = 0))
              : ((v = p.getStartLineNumber(h.modifiedStart)),
                (o = p.getStartColumn(h.modifiedStart)),
                (_ = p.getEndLineNumber(
                  h.modifiedStart + h.modifiedLength - 1
                )),
                (L = p.getEndColumn(h.modifiedStart + h.modifiedLength - 1))),
            new u(i, r, l, g, v, o, _, L)
          )
        }
      }
      function c(b) {
        if (b.length <= 1) return b
        const h = [b[0]]
        let S = h[0]
        for (let p = 1, i = b.length; p < i; p++) {
          const r = b[p],
            l = r.originalStart - (S.originalStart + S.originalLength),
            g = r.modifiedStart - (S.modifiedStart + S.modifiedLength)
          Math.min(l, g) < w
            ? ((S.originalLength =
                r.originalStart + r.originalLength - S.originalStart),
              (S.modifiedLength =
                r.modifiedStart + r.modifiedLength - S.modifiedStart))
            : (h.push(r), (S = r))
        }
        return h
      }
      class C {
        constructor(h, S, p, i, r) {
          ;(this.originalStartLineNumber = h),
            (this.originalEndLineNumber = S),
            (this.modifiedStartLineNumber = p),
            (this.modifiedEndLineNumber = i),
            (this.charChanges = r)
        }
        static createFromDiffResult(h, S, p, i, r, l, g) {
          let v, o, _, L, E
          if (
            (S.originalLength === 0
              ? ((v = p.getStartLineNumber(S.originalStart) - 1), (o = 0))
              : ((v = p.getStartLineNumber(S.originalStart)),
                (o = p.getEndLineNumber(
                  S.originalStart + S.originalLength - 1
                ))),
            S.modifiedLength === 0
              ? ((_ = i.getStartLineNumber(S.modifiedStart) - 1), (L = 0))
              : ((_ = i.getStartLineNumber(S.modifiedStart)),
                (L = i.getEndLineNumber(
                  S.modifiedStart + S.modifiedLength - 1
                ))),
            l &&
              S.originalLength > 0 &&
              S.originalLength < 20 &&
              S.modifiedLength > 0 &&
              S.modifiedLength < 20 &&
              r())
          ) {
            const y = p.createCharSequence(
                h,
                S.originalStart,
                S.originalStart + S.originalLength - 1
              ),
              P = i.createCharSequence(
                h,
                S.modifiedStart,
                S.modifiedStart + S.modifiedLength - 1
              )
            let R = s(y, P, r, !0).changes
            g && (R = c(R)), (E = [])
            for (let V = 0, B = R.length; V < B; V++)
              E.push(u.createFromDiffChange(R[V], y, P))
          }
          return new C(v, o, _, L, E)
        }
      }
      class e {
        constructor(h, S, p) {
          ;(this.shouldComputeCharChanges = p.shouldComputeCharChanges),
            (this.shouldPostProcessCharChanges =
              p.shouldPostProcessCharChanges),
            (this.shouldIgnoreTrimWhitespace = p.shouldIgnoreTrimWhitespace),
            (this.shouldMakePrettyDiff = p.shouldMakePrettyDiff),
            (this.originalLines = h),
            (this.modifiedLines = S),
            (this.original = new d(h)),
            (this.modified = new d(S)),
            (this.continueLineDiff = N(p.maxComputationTime)),
            (this.continueCharDiff = N(
              p.maxComputationTime === 0
                ? 0
                : Math.min(p.maxComputationTime, 5e3)
            ))
        }
        computeDiff() {
          if (
            this.original.lines.length === 1 &&
            this.original.lines[0].length === 0
          )
            return this.modified.lines.length === 1 &&
              this.modified.lines[0].length === 0
              ? { quitEarly: !1, changes: [] }
              : {
                  quitEarly: !1,
                  changes: [
                    {
                      originalStartLineNumber: 1,
                      originalEndLineNumber: 1,
                      modifiedStartLineNumber: 1,
                      modifiedEndLineNumber: this.modified.lines.length,
                      charChanges: [
                        {
                          modifiedEndColumn: 0,
                          modifiedEndLineNumber: 0,
                          modifiedStartColumn: 0,
                          modifiedStartLineNumber: 0,
                          originalEndColumn: 0,
                          originalEndLineNumber: 0,
                          originalStartColumn: 0,
                          originalStartLineNumber: 0,
                        },
                      ],
                    },
                  ],
                }
          if (
            this.modified.lines.length === 1 &&
            this.modified.lines[0].length === 0
          )
            return {
              quitEarly: !1,
              changes: [
                {
                  originalStartLineNumber: 1,
                  originalEndLineNumber: this.original.lines.length,
                  modifiedStartLineNumber: 1,
                  modifiedEndLineNumber: 1,
                  charChanges: [
                    {
                      modifiedEndColumn: 0,
                      modifiedEndLineNumber: 0,
                      modifiedStartColumn: 0,
                      modifiedStartLineNumber: 0,
                      originalEndColumn: 0,
                      originalEndLineNumber: 0,
                      originalStartColumn: 0,
                      originalStartLineNumber: 0,
                    },
                  ],
                },
              ],
            }
          const h = s(
              this.original,
              this.modified,
              this.continueLineDiff,
              this.shouldMakePrettyDiff
            ),
            S = h.changes,
            p = h.quitEarly
          if (this.shouldIgnoreTrimWhitespace) {
            const g = []
            for (let v = 0, o = S.length; v < o; v++)
              g.push(
                C.createFromDiffResult(
                  this.shouldIgnoreTrimWhitespace,
                  S[v],
                  this.original,
                  this.modified,
                  this.continueCharDiff,
                  this.shouldComputeCharChanges,
                  this.shouldPostProcessCharChanges
                )
              )
            return { quitEarly: p, changes: g }
          }
          const i = []
          let r = 0,
            l = 0
          for (let g = -1, v = S.length; g < v; g++) {
            const o = g + 1 < v ? S[g + 1] : null,
              _ = o ? o.originalStart : this.originalLines.length,
              L = o ? o.modifiedStart : this.modifiedLines.length
            for (; r < _ && l < L; ) {
              const E = this.originalLines[r],
                y = this.modifiedLines[l]
              if (E !== y) {
                {
                  let P = f(E, 1),
                    R = f(y, 1)
                  for (; P > 1 && R > 1; ) {
                    const V = E.charCodeAt(P - 2),
                      B = y.charCodeAt(R - 2)
                    if (V !== B) break
                    P--, R--
                  }
                  ;(P > 1 || R > 1) &&
                    this._pushTrimWhitespaceCharChange(
                      i,
                      r + 1,
                      1,
                      P,
                      l + 1,
                      1,
                      R
                    )
                }
                {
                  let P = m(E, 1),
                    R = m(y, 1)
                  const V = E.length + 1,
                    B = y.length + 1
                  for (; P < V && R < B; ) {
                    const U = E.charCodeAt(P - 1),
                      T = E.charCodeAt(R - 1)
                    if (U !== T) break
                    P++, R++
                  }
                  ;(P < V || R < B) &&
                    this._pushTrimWhitespaceCharChange(
                      i,
                      r + 1,
                      P,
                      V,
                      l + 1,
                      R,
                      B
                    )
                }
              }
              r++, l++
            }
            o &&
              (i.push(
                C.createFromDiffResult(
                  this.shouldIgnoreTrimWhitespace,
                  o,
                  this.original,
                  this.modified,
                  this.continueCharDiff,
                  this.shouldComputeCharChanges,
                  this.shouldPostProcessCharChanges
                )
              ),
              (r += o.originalLength),
              (l += o.modifiedLength))
          }
          return { quitEarly: p, changes: i }
        }
        _pushTrimWhitespaceCharChange(h, S, p, i, r, l, g) {
          if (this._mergeTrimWhitespaceCharChange(h, S, p, i, r, l, g)) return
          let v
          this.shouldComputeCharChanges &&
            (v = [new u(S, p, S, i, r, l, r, g)]),
            h.push(new C(S, S, r, r, v))
        }
        _mergeTrimWhitespaceCharChange(h, S, p, i, r, l, g) {
          const v = h.length
          if (v === 0) return !1
          const o = h[v - 1]
          return o.originalEndLineNumber === 0 || o.modifiedEndLineNumber === 0
            ? !1
            : o.originalEndLineNumber + 1 === S &&
              o.modifiedEndLineNumber + 1 === r
            ? ((o.originalEndLineNumber = S),
              (o.modifiedEndLineNumber = r),
              this.shouldComputeCharChanges &&
                o.charChanges &&
                o.charChanges.push(new u(S, p, S, i, r, l, r, g)),
              !0)
            : !1
        }
      }
      n.DiffComputer = e
      function f(b, h) {
        const S = D.firstNonWhitespaceIndex(b)
        return S === -1 ? h : S + 1
      }
      function m(b, h) {
        const S = D.lastNonWhitespaceIndex(b)
        return S === -1 ? h : S + 2
      }
      function N(b) {
        if (b === 0) return () => !0
        const h = Date.now()
        return () => Date.now() - h < b
      }
    }),
    j(z[27], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.getWordAtText =
          n.ensureValidWordDefinition =
          n.DEFAULT_WORD_REGEXP =
          n.USUAL_WORD_SEPARATORS =
            void 0),
        (n.USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?')
      function A(a = '') {
        let u = '(-?\\d*\\.\\d\\w*)|([^'
        for (const c of n.USUAL_WORD_SEPARATORS)
          a.indexOf(c) >= 0 || (u += '\\' + c)
        return (u += '\\s]+)'), new RegExp(u, 'g')
      }
      n.DEFAULT_WORD_REGEXP = A()
      function D(a) {
        let u = n.DEFAULT_WORD_REGEXP
        if (a && a instanceof RegExp)
          if (a.global) u = a
          else {
            let c = 'g'
            a.ignoreCase && (c += 'i'),
              a.multiline && (c += 'm'),
              a.unicode && (c += 'u'),
              (u = new RegExp(a.source, c))
          }
        return (u.lastIndex = 0), u
      }
      n.ensureValidWordDefinition = D
      const w = { maxLen: 1e3, windowSize: 15, timeBudget: 150 }
      function s(a, u, c, C, e = w) {
        if (c.length > e.maxLen) {
          let h = a - e.maxLen / 2
          return (
            h < 0 ? (h = 0) : (C += h),
            (c = c.substring(h, a + e.maxLen / 2)),
            s(a, u, c, C, e)
          )
        }
        const f = Date.now(),
          m = a - 1 - C
        let N = -1,
          b = null
        for (let h = 1; !(Date.now() - f >= e.timeBudget); h++) {
          const S = m - e.windowSize * h
          u.lastIndex = Math.max(0, S)
          const p = d(u, c, m, N)
          if ((!p && b) || ((b = p), S <= 0)) break
          N = S
        }
        if (b) {
          let h = {
            word: b[0],
            startColumn: C + 1 + b.index,
            endColumn: C + 1 + b.index + b[0].length,
          }
          return (u.lastIndex = 0), h
        }
        return null
      }
      n.getWordAtText = s
      function d(a, u, c, C) {
        let e
        for (; (e = a.exec(u)); ) {
          const f = e.index || 0
          if (f <= c && a.lastIndex >= c) return e
          if (C > 0 && f > C) return null
        }
        return null
      }
    }),
    j(z[28], G([0, 1, 23]), function (F, n, A) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.computeLinks =
          n.LinkComputer =
          n.StateMachine =
          n.Uint8Matrix =
            void 0)
      class D {
        constructor(f, m, N) {
          const b = new Uint8Array(f * m)
          for (let h = 0, S = f * m; h < S; h++) b[h] = N
          ;(this._data = b), (this.rows = f), (this.cols = m)
        }
        get(f, m) {
          return this._data[f * this.cols + m]
        }
        set(f, m, N) {
          this._data[f * this.cols + m] = N
        }
      }
      n.Uint8Matrix = D
      class w {
        constructor(f) {
          let m = 0,
            N = 0
          for (let h = 0, S = f.length; h < S; h++) {
            let [p, i, r] = f[h]
            i > m && (m = i), p > N && (N = p), r > N && (N = r)
          }
          m++, N++
          let b = new D(N, m, 0)
          for (let h = 0, S = f.length; h < S; h++) {
            let [p, i, r] = f[h]
            b.set(p, i, r)
          }
          ;(this._states = b), (this._maxCharCode = m)
        }
        nextState(f, m) {
          return m < 0 || m >= this._maxCharCode ? 0 : this._states.get(f, m)
        }
      }
      n.StateMachine = w
      let s = null
      function d() {
        return (
          s === null &&
            (s = new w([
              [1, 104, 2],
              [1, 72, 2],
              [1, 102, 6],
              [1, 70, 6],
              [2, 116, 3],
              [2, 84, 3],
              [3, 116, 4],
              [3, 84, 4],
              [4, 112, 5],
              [4, 80, 5],
              [5, 115, 9],
              [5, 83, 9],
              [5, 58, 10],
              [6, 105, 7],
              [6, 73, 7],
              [7, 108, 8],
              [7, 76, 8],
              [8, 101, 9],
              [8, 69, 9],
              [9, 58, 10],
              [10, 47, 11],
              [11, 47, 12],
            ])),
          s
        )
      }
      let a = null
      function u() {
        if (a === null) {
          a = new A.CharacterClassifier(0)
          const e = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`
          for (let m = 0; m < e.length; m++) a.set(e.charCodeAt(m), 1)
          const f = '.,;'
          for (let m = 0; m < f.length; m++) a.set(f.charCodeAt(m), 2)
        }
        return a
      }
      class c {
        static _createLink(f, m, N, b, h) {
          let S = h - 1
          do {
            const p = m.charCodeAt(S)
            if (f.get(p) !== 2) break
            S--
          } while (S > b)
          if (b > 0) {
            const p = m.charCodeAt(b - 1),
              i = m.charCodeAt(S)
            ;((p === 40 && i === 41) ||
              (p === 91 && i === 93) ||
              (p === 123 && i === 125)) &&
              S--
          }
          return {
            range: {
              startLineNumber: N,
              startColumn: b + 1,
              endLineNumber: N,
              endColumn: S + 2,
            },
            url: m.substring(b, S + 1),
          }
        }
        static computeLinks(f, m = d()) {
          const N = u()
          let b = []
          for (let h = 1, S = f.getLineCount(); h <= S; h++) {
            const p = f.getLineContent(h),
              i = p.length
            let r = 0,
              l = 0,
              g = 0,
              v = 1,
              o = !1,
              _ = !1,
              L = !1,
              E = !1
            for (; r < i; ) {
              let y = !1
              const P = p.charCodeAt(r)
              if (v === 13) {
                let R
                switch (P) {
                  case 40:
                    ;(o = !0), (R = 0)
                    break
                  case 41:
                    R = o ? 0 : 1
                    break
                  case 91:
                    ;(L = !0), (_ = !0), (R = 0)
                    break
                  case 93:
                    ;(L = !1), (R = _ ? 0 : 1)
                    break
                  case 123:
                    ;(E = !0), (R = 0)
                    break
                  case 125:
                    R = E ? 0 : 1
                    break
                  case 39:
                    R = g === 34 || g === 96 ? 0 : 1
                    break
                  case 34:
                    R = g === 39 || g === 96 ? 0 : 1
                    break
                  case 96:
                    R = g === 39 || g === 34 ? 0 : 1
                    break
                  case 42:
                    R = g === 42 ? 1 : 0
                    break
                  case 124:
                    R = g === 124 ? 1 : 0
                    break
                  case 32:
                    R = L ? 0 : 1
                    break
                  default:
                    R = N.get(P)
                }
                R === 1 && (b.push(c._createLink(N, p, h, l, r)), (y = !0))
              } else if (v === 12) {
                let R
                P === 91 ? ((_ = !0), (R = 0)) : (R = N.get(P)),
                  R === 1 ? (y = !0) : (v = 13)
              } else (v = m.nextState(v, P)), v === 0 && (y = !0)
              y &&
                ((v = 1), (o = !1), (_ = !1), (E = !1), (l = r + 1), (g = P)),
                r++
            }
            v === 13 && b.push(c._createLink(N, p, h, l, i))
          }
          return b
        }
      }
      n.LinkComputer = c
      function C(e) {
        return !e ||
          typeof e.getLineCount != 'function' ||
          typeof e.getLineContent != 'function'
          ? []
          : c.computeLinks(e)
      }
      n.computeLinks = C
    }),
    j(z[29], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.BasicInplaceReplace = void 0)
      class A {
        constructor() {
          this._defaultValueSet = [
            ['true', 'false'],
            ['True', 'False'],
            [
              'Private',
              'Public',
              'Friend',
              'ReadOnly',
              'Partial',
              'Protected',
              'WriteOnly',
            ],
            ['public', 'protected', 'private'],
          ]
        }
        navigateValueSet(w, s, d, a, u) {
          if (w && s) {
            let c = this.doNavigateValueSet(s, u)
            if (c) return { range: w, value: c }
          }
          if (d && a) {
            let c = this.doNavigateValueSet(a, u)
            if (c) return { range: d, value: c }
          }
          return null
        }
        doNavigateValueSet(w, s) {
          let d = this.numberReplace(w, s)
          return d !== null ? d : this.textReplace(w, s)
        }
        numberReplace(w, s) {
          let d = Math.pow(10, w.length - (w.lastIndexOf('.') + 1)),
            a = Number(w),
            u = parseFloat(w)
          return !isNaN(a) && !isNaN(u) && a === u
            ? a === 0 && !s
              ? null
              : ((a = Math.floor(a * d)), (a += s ? d : -d), String(a / d))
            : null
        }
        textReplace(w, s) {
          return this.valueSetsReplace(this._defaultValueSet, w, s)
        }
        valueSetsReplace(w, s, d) {
          let a = null
          for (let u = 0, c = w.length; a === null && u < c; u++)
            a = this.valueSetReplace(w[u], s, d)
          return a
        }
        valueSetReplace(w, s, d) {
          let a = w.indexOf(s)
          return a >= 0
            ? ((a += d ? 1 : -1),
              a < 0 ? (a = w.length - 1) : (a %= w.length),
              w[a])
            : null
        }
      }
      ;(n.BasicInplaceReplace = A), (A.INSTANCE = new A())
    }),
    j(z[30], G([0, 1]), function (F, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.WrappingIndent =
          n.TrackedRangeStickiness =
          n.TextEditorCursorStyle =
          n.TextEditorCursorBlinkingStyle =
          n.SymbolTag =
          n.SymbolKind =
          n.SignatureHelpTriggerKind =
          n.SelectionDirection =
          n.ScrollbarVisibility =
          n.ScrollType =
          n.RenderMinimap =
          n.RenderLineNumbersType =
          n.OverviewRulerLane =
          n.OverlayWidgetPositionPreference =
          n.MouseTargetType =
          n.MinimapPosition =
          n.MarkerTag =
          n.MarkerSeverity =
          n.KeyCode =
          n.InlineCompletionTriggerKind =
          n.InlayHintKind =
          n.IndentAction =
          n.EndOfLineSequence =
          n.EndOfLinePreference =
          n.EditorOption =
          n.EditorAutoIndentStrategy =
          n.DocumentHighlightKind =
          n.DefaultEndOfLine =
          n.CursorChangeReason =
          n.ContentWidgetPositionPreference =
          n.CompletionTriggerKind =
          n.CompletionItemTag =
          n.CompletionItemKind =
          n.CompletionItemInsertTextRule =
          n.AccessibilitySupport =
            void 0)
      var A
      ;(function (t) {
        ;(t[(t.Unknown = 0)] = 'Unknown'),
          (t[(t.Disabled = 1)] = 'Disabled'),
          (t[(t.Enabled = 2)] = 'Enabled')
      })((A = n.AccessibilitySupport || (n.AccessibilitySupport = {})))
      var D
      ;(function (t) {
        ;(t[(t.KeepWhitespace = 1)] = 'KeepWhitespace'),
          (t[(t.InsertAsSnippet = 4)] = 'InsertAsSnippet')
      })(
        (D =
          n.CompletionItemInsertTextRule ||
          (n.CompletionItemInsertTextRule = {}))
      )
      var w
      ;(function (t) {
        ;(t[(t.Method = 0)] = 'Method'),
          (t[(t.Function = 1)] = 'Function'),
          (t[(t.Constructor = 2)] = 'Constructor'),
          (t[(t.Field = 3)] = 'Field'),
          (t[(t.Variable = 4)] = 'Variable'),
          (t[(t.Class = 5)] = 'Class'),
          (t[(t.Struct = 6)] = 'Struct'),
          (t[(t.Interface = 7)] = 'Interface'),
          (t[(t.Module = 8)] = 'Module'),
          (t[(t.Property = 9)] = 'Property'),
          (t[(t.Event = 10)] = 'Event'),
          (t[(t.Operator = 11)] = 'Operator'),
          (t[(t.Unit = 12)] = 'Unit'),
          (t[(t.Value = 13)] = 'Value'),
          (t[(t.Constant = 14)] = 'Constant'),
          (t[(t.Enum = 15)] = 'Enum'),
          (t[(t.EnumMember = 16)] = 'EnumMember'),
          (t[(t.Keyword = 17)] = 'Keyword'),
          (t[(t.Text = 18)] = 'Text'),
          (t[(t.Color = 19)] = 'Color'),
          (t[(t.File = 20)] = 'File'),
          (t[(t.Reference = 21)] = 'Reference'),
          (t[(t.Customcolor = 22)] = 'Customcolor'),
          (t[(t.Folder = 23)] = 'Folder'),
          (t[(t.TypeParameter = 24)] = 'TypeParameter'),
          (t[(t.User = 25)] = 'User'),
          (t[(t.Issue = 26)] = 'Issue'),
          (t[(t.Snippet = 27)] = 'Snippet')
      })((w = n.CompletionItemKind || (n.CompletionItemKind = {})))
      var s
      ;(function (t) {
        t[(t.Deprecated = 1)] = 'Deprecated'
      })((s = n.CompletionItemTag || (n.CompletionItemTag = {})))
      var d
      ;(function (t) {
        ;(t[(t.Invoke = 0)] = 'Invoke'),
          (t[(t.TriggerCharacter = 1)] = 'TriggerCharacter'),
          (t[(t.TriggerForIncompleteCompletions = 2)] =
            'TriggerForIncompleteCompletions')
      })((d = n.CompletionTriggerKind || (n.CompletionTriggerKind = {})))
      var a
      ;(function (t) {
        ;(t[(t.EXACT = 0)] = 'EXACT'),
          (t[(t.ABOVE = 1)] = 'ABOVE'),
          (t[(t.BELOW = 2)] = 'BELOW')
      })(
        (a =
          n.ContentWidgetPositionPreference ||
          (n.ContentWidgetPositionPreference = {}))
      )
      var u
      ;(function (t) {
        ;(t[(t.NotSet = 0)] = 'NotSet'),
          (t[(t.ContentFlush = 1)] = 'ContentFlush'),
          (t[(t.RecoverFromMarkers = 2)] = 'RecoverFromMarkers'),
          (t[(t.Explicit = 3)] = 'Explicit'),
          (t[(t.Paste = 4)] = 'Paste'),
          (t[(t.Undo = 5)] = 'Undo'),
          (t[(t.Redo = 6)] = 'Redo')
      })((u = n.CursorChangeReason || (n.CursorChangeReason = {})))
      var c
      ;(function (t) {
        ;(t[(t.LF = 1)] = 'LF'), (t[(t.CRLF = 2)] = 'CRLF')
      })((c = n.DefaultEndOfLine || (n.DefaultEndOfLine = {})))
      var C
      ;(function (t) {
        ;(t[(t.Text = 0)] = 'Text'),
          (t[(t.Read = 1)] = 'Read'),
          (t[(t.Write = 2)] = 'Write')
      })((C = n.DocumentHighlightKind || (n.DocumentHighlightKind = {})))
      var e
      ;(function (t) {
        ;(t[(t.None = 0)] = 'None'),
          (t[(t.Keep = 1)] = 'Keep'),
          (t[(t.Brackets = 2)] = 'Brackets'),
          (t[(t.Advanced = 3)] = 'Advanced'),
          (t[(t.Full = 4)] = 'Full')
      })((e = n.EditorAutoIndentStrategy || (n.EditorAutoIndentStrategy = {})))
      var f
      ;(function (t) {
        ;(t[(t.acceptSuggestionOnCommitCharacter = 0)] =
          'acceptSuggestionOnCommitCharacter'),
          (t[(t.acceptSuggestionOnEnter = 1)] = 'acceptSuggestionOnEnter'),
          (t[(t.accessibilitySupport = 2)] = 'accessibilitySupport'),
          (t[(t.accessibilityPageSize = 3)] = 'accessibilityPageSize'),
          (t[(t.ariaLabel = 4)] = 'ariaLabel'),
          (t[(t.autoClosingBrackets = 5)] = 'autoClosingBrackets'),
          (t[(t.autoClosingDelete = 6)] = 'autoClosingDelete'),
          (t[(t.autoClosingOvertype = 7)] = 'autoClosingOvertype'),
          (t[(t.autoClosingQuotes = 8)] = 'autoClosingQuotes'),
          (t[(t.autoIndent = 9)] = 'autoIndent'),
          (t[(t.automaticLayout = 10)] = 'automaticLayout'),
          (t[(t.autoSurround = 11)] = 'autoSurround'),
          (t[(t.bracketPairColorization = 12)] = 'bracketPairColorization'),
          (t[(t.guides = 13)] = 'guides'),
          (t[(t.codeLens = 14)] = 'codeLens'),
          (t[(t.codeLensFontFamily = 15)] = 'codeLensFontFamily'),
          (t[(t.codeLensFontSize = 16)] = 'codeLensFontSize'),
          (t[(t.colorDecorators = 17)] = 'colorDecorators'),
          (t[(t.columnSelection = 18)] = 'columnSelection'),
          (t[(t.comments = 19)] = 'comments'),
          (t[(t.contextmenu = 20)] = 'contextmenu'),
          (t[(t.copyWithSyntaxHighlighting = 21)] =
            'copyWithSyntaxHighlighting'),
          (t[(t.cursorBlinking = 22)] = 'cursorBlinking'),
          (t[(t.cursorSmoothCaretAnimation = 23)] =
            'cursorSmoothCaretAnimation'),
          (t[(t.cursorStyle = 24)] = 'cursorStyle'),
          (t[(t.cursorSurroundingLines = 25)] = 'cursorSurroundingLines'),
          (t[(t.cursorSurroundingLinesStyle = 26)] =
            'cursorSurroundingLinesStyle'),
          (t[(t.cursorWidth = 27)] = 'cursorWidth'),
          (t[(t.disableLayerHinting = 28)] = 'disableLayerHinting'),
          (t[(t.disableMonospaceOptimizations = 29)] =
            'disableMonospaceOptimizations'),
          (t[(t.domReadOnly = 30)] = 'domReadOnly'),
          (t[(t.dragAndDrop = 31)] = 'dragAndDrop'),
          (t[(t.emptySelectionClipboard = 32)] = 'emptySelectionClipboard'),
          (t[(t.extraEditorClassName = 33)] = 'extraEditorClassName'),
          (t[(t.fastScrollSensitivity = 34)] = 'fastScrollSensitivity'),
          (t[(t.find = 35)] = 'find'),
          (t[(t.fixedOverflowWidgets = 36)] = 'fixedOverflowWidgets'),
          (t[(t.folding = 37)] = 'folding'),
          (t[(t.foldingStrategy = 38)] = 'foldingStrategy'),
          (t[(t.foldingHighlight = 39)] = 'foldingHighlight'),
          (t[(t.foldingImportsByDefault = 40)] = 'foldingImportsByDefault'),
          (t[(t.unfoldOnClickAfterEndOfLine = 41)] =
            'unfoldOnClickAfterEndOfLine'),
          (t[(t.fontFamily = 42)] = 'fontFamily'),
          (t[(t.fontInfo = 43)] = 'fontInfo'),
          (t[(t.fontLigatures = 44)] = 'fontLigatures'),
          (t[(t.fontSize = 45)] = 'fontSize'),
          (t[(t.fontWeight = 46)] = 'fontWeight'),
          (t[(t.formatOnPaste = 47)] = 'formatOnPaste'),
          (t[(t.formatOnType = 48)] = 'formatOnType'),
          (t[(t.glyphMargin = 49)] = 'glyphMargin'),
          (t[(t.gotoLocation = 50)] = 'gotoLocation'),
          (t[(t.hideCursorInOverviewRuler = 51)] = 'hideCursorInOverviewRuler'),
          (t[(t.hover = 52)] = 'hover'),
          (t[(t.inDiffEditor = 53)] = 'inDiffEditor'),
          (t[(t.inlineSuggest = 54)] = 'inlineSuggest'),
          (t[(t.letterSpacing = 55)] = 'letterSpacing'),
          (t[(t.lightbulb = 56)] = 'lightbulb'),
          (t[(t.lineDecorationsWidth = 57)] = 'lineDecorationsWidth'),
          (t[(t.lineHeight = 58)] = 'lineHeight'),
          (t[(t.lineNumbers = 59)] = 'lineNumbers'),
          (t[(t.lineNumbersMinChars = 60)] = 'lineNumbersMinChars'),
          (t[(t.linkedEditing = 61)] = 'linkedEditing'),
          (t[(t.links = 62)] = 'links'),
          (t[(t.matchBrackets = 63)] = 'matchBrackets'),
          (t[(t.minimap = 64)] = 'minimap'),
          (t[(t.mouseStyle = 65)] = 'mouseStyle'),
          (t[(t.mouseWheelScrollSensitivity = 66)] =
            'mouseWheelScrollSensitivity'),
          (t[(t.mouseWheelZoom = 67)] = 'mouseWheelZoom'),
          (t[(t.multiCursorMergeOverlapping = 68)] =
            'multiCursorMergeOverlapping'),
          (t[(t.multiCursorModifier = 69)] = 'multiCursorModifier'),
          (t[(t.multiCursorPaste = 70)] = 'multiCursorPaste'),
          (t[(t.occurrencesHighlight = 71)] = 'occurrencesHighlight'),
          (t[(t.overviewRulerBorder = 72)] = 'overviewRulerBorder'),
          (t[(t.overviewRulerLanes = 73)] = 'overviewRulerLanes'),
          (t[(t.padding = 74)] = 'padding'),
          (t[(t.parameterHints = 75)] = 'parameterHints'),
          (t[(t.peekWidgetDefaultFocus = 76)] = 'peekWidgetDefaultFocus'),
          (t[(t.definitionLinkOpensInPeek = 77)] = 'definitionLinkOpensInPeek'),
          (t[(t.quickSuggestions = 78)] = 'quickSuggestions'),
          (t[(t.quickSuggestionsDelay = 79)] = 'quickSuggestionsDelay'),
          (t[(t.readOnly = 80)] = 'readOnly'),
          (t[(t.renameOnType = 81)] = 'renameOnType'),
          (t[(t.renderControlCharacters = 82)] = 'renderControlCharacters'),
          (t[(t.renderFinalNewline = 83)] = 'renderFinalNewline'),
          (t[(t.renderLineHighlight = 84)] = 'renderLineHighlight'),
          (t[(t.renderLineHighlightOnlyWhenFocus = 85)] =
            'renderLineHighlightOnlyWhenFocus'),
          (t[(t.renderValidationDecorations = 86)] =
            'renderValidationDecorations'),
          (t[(t.renderWhitespace = 87)] = 'renderWhitespace'),
          (t[(t.revealHorizontalRightPadding = 88)] =
            'revealHorizontalRightPadding'),
          (t[(t.roundedSelection = 89)] = 'roundedSelection'),
          (t[(t.rulers = 90)] = 'rulers'),
          (t[(t.scrollbar = 91)] = 'scrollbar'),
          (t[(t.scrollBeyondLastColumn = 92)] = 'scrollBeyondLastColumn'),
          (t[(t.scrollBeyondLastLine = 93)] = 'scrollBeyondLastLine'),
          (t[(t.scrollPredominantAxis = 94)] = 'scrollPredominantAxis'),
          (t[(t.selectionClipboard = 95)] = 'selectionClipboard'),
          (t[(t.selectionHighlight = 96)] = 'selectionHighlight'),
          (t[(t.selectOnLineNumbers = 97)] = 'selectOnLineNumbers'),
          (t[(t.showFoldingControls = 98)] = 'showFoldingControls'),
          (t[(t.showUnused = 99)] = 'showUnused'),
          (t[(t.snippetSuggestions = 100)] = 'snippetSuggestions'),
          (t[(t.smartSelect = 101)] = 'smartSelect'),
          (t[(t.smoothScrolling = 102)] = 'smoothScrolling'),
          (t[(t.stickyTabStops = 103)] = 'stickyTabStops'),
          (t[(t.stopRenderingLineAfter = 104)] = 'stopRenderingLineAfter'),
          (t[(t.suggest = 105)] = 'suggest'),
          (t[(t.suggestFontSize = 106)] = 'suggestFontSize'),
          (t[(t.suggestLineHeight = 107)] = 'suggestLineHeight'),
          (t[(t.suggestOnTriggerCharacters = 108)] =
            'suggestOnTriggerCharacters'),
          (t[(t.suggestSelection = 109)] = 'suggestSelection'),
          (t[(t.tabCompletion = 110)] = 'tabCompletion'),
          (t[(t.tabIndex = 111)] = 'tabIndex'),
          (t[(t.unusualLineTerminators = 112)] = 'unusualLineTerminators'),
          (t[(t.useShadowDOM = 113)] = 'useShadowDOM'),
          (t[(t.useTabStops = 114)] = 'useTabStops'),
          (t[(t.wordSeparators = 115)] = 'wordSeparators'),
          (t[(t.wordWrap = 116)] = 'wordWrap'),
          (t[(t.wordWrapBreakAfterCharacters = 117)] =
            'wordWrapBreakAfterCharacters'),
          (t[(t.wordWrapBreakBeforeCharacters = 118)] =
            'wordWrapBreakBeforeCharacters'),
          (t[(t.wordWrapColumn = 119)] = 'wordWrapColumn'),
          (t[(t.wordWrapOverride1 = 120)] = 'wordWrapOverride1'),
          (t[(t.wordWrapOverride2 = 121)] = 'wordWrapOverride2'),
          (t[(t.wrappingIndent = 122)] = 'wrappingIndent'),
          (t[(t.wrappingStrategy = 123)] = 'wrappingStrategy'),
          (t[(t.showDeprecated = 124)] = 'showDeprecated'),
          (t[(t.inlayHints = 125)] = 'inlayHints'),
          (t[(t.editorClassName = 126)] = 'editorClassName'),
          (t[(t.pixelRatio = 127)] = 'pixelRatio'),
          (t[(t.tabFocusMode = 128)] = 'tabFocusMode'),
          (t[(t.layoutInfo = 129)] = 'layoutInfo'),
          (t[(t.wrappingInfo = 130)] = 'wrappingInfo')
      })((f = n.EditorOption || (n.EditorOption = {})))
      var m
      ;(function (t) {
        ;(t[(t.TextDefined = 0)] = 'TextDefined'),
          (t[(t.LF = 1)] = 'LF'),
          (t[(t.CRLF = 2)] = 'CRLF')
      })((m = n.EndOfLinePreference || (n.EndOfLinePreference = {})))
      var N
      ;(function (t) {
        ;(t[(t.LF = 0)] = 'LF'), (t[(t.CRLF = 1)] = 'CRLF')
      })((N = n.EndOfLineSequence || (n.EndOfLineSequence = {})))
      var b
      ;(function (t) {
        ;(t[(t.None = 0)] = 'None'),
          (t[(t.Indent = 1)] = 'Indent'),
          (t[(t.IndentOutdent = 2)] = 'IndentOutdent'),
          (t[(t.Outdent = 3)] = 'Outdent')
      })((b = n.IndentAction || (n.IndentAction = {})))
      var h
      ;(function (t) {
        ;(t[(t.Other = 0)] = 'Other'),
          (t[(t.Type = 1)] = 'Type'),
          (t[(t.Parameter = 2)] = 'Parameter')
      })((h = n.InlayHintKind || (n.InlayHintKind = {})))
      var S
      ;(function (t) {
        ;(t[(t.Automatic = 0)] = 'Automatic'),
          (t[(t.Explicit = 1)] = 'Explicit')
      })(
        (S =
          n.InlineCompletionTriggerKind || (n.InlineCompletionTriggerKind = {}))
      )
      var p
      ;(function (t) {
        ;(t[(t.DependsOnKbLayout = -1)] = 'DependsOnKbLayout'),
          (t[(t.Unknown = 0)] = 'Unknown'),
          (t[(t.Backspace = 1)] = 'Backspace'),
          (t[(t.Tab = 2)] = 'Tab'),
          (t[(t.Enter = 3)] = 'Enter'),
          (t[(t.Shift = 4)] = 'Shift'),
          (t[(t.Ctrl = 5)] = 'Ctrl'),
          (t[(t.Alt = 6)] = 'Alt'),
          (t[(t.PauseBreak = 7)] = 'PauseBreak'),
          (t[(t.CapsLock = 8)] = 'CapsLock'),
          (t[(t.Escape = 9)] = 'Escape'),
          (t[(t.Space = 10)] = 'Space'),
          (t[(t.PageUp = 11)] = 'PageUp'),
          (t[(t.PageDown = 12)] = 'PageDown'),
          (t[(t.End = 13)] = 'End'),
          (t[(t.Home = 14)] = 'Home'),
          (t[(t.LeftArrow = 15)] = 'LeftArrow'),
          (t[(t.UpArrow = 16)] = 'UpArrow'),
          (t[(t.RightArrow = 17)] = 'RightArrow'),
          (t[(t.DownArrow = 18)] = 'DownArrow'),
          (t[(t.Insert = 19)] = 'Insert'),
          (t[(t.Delete = 20)] = 'Delete'),
          (t[(t.Digit0 = 21)] = 'Digit0'),
          (t[(t.Digit1 = 22)] = 'Digit1'),
          (t[(t.Digit2 = 23)] = 'Digit2'),
          (t[(t.Digit3 = 24)] = 'Digit3'),
          (t[(t.Digit4 = 25)] = 'Digit4'),
          (t[(t.Digit5 = 26)] = 'Digit5'),
          (t[(t.Digit6 = 27)] = 'Digit6'),
          (t[(t.Digit7 = 28)] = 'Digit7'),
          (t[(t.Digit8 = 29)] = 'Digit8'),
          (t[(t.Digit9 = 30)] = 'Digit9'),
          (t[(t.KeyA = 31)] = 'KeyA'),
          (t[(t.KeyB = 32)] = 'KeyB'),
          (t[(t.KeyC = 33)] = 'KeyC'),
          (t[(t.KeyD = 34)] = 'KeyD'),
          (t[(t.KeyE = 35)] = 'KeyE'),
          (t[(t.KeyF = 36)] = 'KeyF'),
          (t[(t.KeyG = 37)] = 'KeyG'),
          (t[(t.KeyH = 38)] = 'KeyH'),
          (t[(t.KeyI = 39)] = 'KeyI'),
          (t[(t.KeyJ = 40)] = 'KeyJ'),
          (t[(t.KeyK = 41)] = 'KeyK'),
          (t[(t.KeyL = 42)] = 'KeyL'),
          (t[(t.KeyM = 43)] = 'KeyM'),
          (t[(t.KeyN = 44)] = 'KeyN'),
          (t[(t.KeyO = 45)] = 'KeyO'),
          (t[(t.KeyP = 46)] = 'KeyP'),
          (t[(t.KeyQ = 47)] = 'KeyQ'),
          (t[(t.KeyR = 48)] = 'KeyR'),
          (t[(t.KeyS = 49)] = 'KeyS'),
          (t[(t.KeyT = 50)] = 'KeyT'),
          (t[(t.KeyU = 51)] = 'KeyU'),
          (t[(t.KeyV = 52)] = 'KeyV'),
          (t[(t.KeyW = 53)] = 'KeyW'),
          (t[(t.KeyX = 54)] = 'KeyX'),
          (t[(t.KeyY = 55)] = 'KeyY'),
          (t[(t.KeyZ = 56)] = 'KeyZ'),
          (t[(t.Meta = 57)] = 'Meta'),
          (t[(t.ContextMenu = 58)] = 'ContextMenu'),
          (t[(t.F1 = 59)] = 'F1'),
          (t[(t.F2 = 60)] = 'F2'),
          (t[(t.F3 = 61)] = 'F3'),
          (t[(t.F4 = 62)] = 'F4'),
          (t[(t.F5 = 63)] = 'F5'),
          (t[(t.F6 = 64)] = 'F6'),
          (t[(t.F7 = 65)] = 'F7'),
          (t[(t.F8 = 66)] = 'F8'),
          (t[(t.F9 = 67)] = 'F9'),
          (t[(t.F10 = 68)] = 'F10'),
          (t[(t.F11 = 69)] = 'F11'),
          (t[(t.F12 = 70)] = 'F12'),
          (t[(t.F13 = 71)] = 'F13'),
          (t[(t.F14 = 72)] = 'F14'),
          (t[(t.F15 = 73)] = 'F15'),
          (t[(t.F16 = 74)] = 'F16'),
          (t[(t.F17 = 75)] = 'F17'),
          (t[(t.F18 = 76)] = 'F18'),
          (t[(t.F19 = 77)] = 'F19'),
          (t[(t.NumLock = 78)] = 'NumLock'),
          (t[(t.ScrollLock = 79)] = 'ScrollLock'),
          (t[(t.Semicolon = 80)] = 'Semicolon'),
          (t[(t.Equal = 81)] = 'Equal'),
          (t[(t.Comma = 82)] = 'Comma'),
          (t[(t.Minus = 83)] = 'Minus'),
          (t[(t.Period = 84)] = 'Period'),
          (t[(t.Slash = 85)] = 'Slash'),
          (t[(t.Backquote = 86)] = 'Backquote'),
          (t[(t.BracketLeft = 87)] = 'BracketLeft'),
          (t[(t.Backslash = 88)] = 'Backslash'),
          (t[(t.BracketRight = 89)] = 'BracketRight'),
          (t[(t.Quote = 90)] = 'Quote'),
          (t[(t.OEM_8 = 91)] = 'OEM_8'),
          (t[(t.IntlBackslash = 92)] = 'IntlBackslash'),
          (t[(t.Numpad0 = 93)] = 'Numpad0'),
          (t[(t.Numpad1 = 94)] = 'Numpad1'),
          (t[(t.Numpad2 = 95)] = 'Numpad2'),
          (t[(t.Numpad3 = 96)] = 'Numpad3'),
          (t[(t.Numpad4 = 97)] = 'Numpad4'),
          (t[(t.Numpad5 = 98)] = 'Numpad5'),
          (t[(t.Numpad6 = 99)] = 'Numpad6'),
          (t[(t.Numpad7 = 100)] = 'Numpad7'),
          (t[(t.Numpad8 = 101)] = 'Numpad8'),
          (t[(t.Numpad9 = 102)] = 'Numpad9'),
          (t[(t.NumpadMultiply = 103)] = 'NumpadMultiply'),
          (t[(t.NumpadAdd = 104)] = 'NumpadAdd'),
          (t[(t.NUMPAD_SEPARATOR = 105)] = 'NUMPAD_SEPARATOR'),
          (t[(t.NumpadSubtract = 106)] = 'NumpadSubtract'),
          (t[(t.NumpadDecimal = 107)] = 'NumpadDecimal'),
          (t[(t.NumpadDivide = 108)] = 'NumpadDivide'),
          (t[(t.KEY_IN_COMPOSITION = 109)] = 'KEY_IN_COMPOSITION'),
          (t[(t.ABNT_C1 = 110)] = 'ABNT_C1'),
          (t[(t.ABNT_C2 = 111)] = 'ABNT_C2'),
          (t[(t.AudioVolumeMute = 112)] = 'AudioVolumeMute'),
          (t[(t.AudioVolumeUp = 113)] = 'AudioVolumeUp'),
          (t[(t.AudioVolumeDown = 114)] = 'AudioVolumeDown'),
          (t[(t.BrowserSearch = 115)] = 'BrowserSearch'),
          (t[(t.BrowserHome = 116)] = 'BrowserHome'),
          (t[(t.BrowserBack = 117)] = 'BrowserBack'),
          (t[(t.BrowserForward = 118)] = 'BrowserForward'),
          (t[(t.MediaTrackNext = 119)] = 'MediaTrackNext'),
          (t[(t.MediaTrackPrevious = 120)] = 'MediaTrackPrevious'),
          (t[(t.MediaStop = 121)] = 'MediaStop'),
          (t[(t.MediaPlayPause = 122)] = 'MediaPlayPause'),
          (t[(t.LaunchMediaPlayer = 123)] = 'LaunchMediaPlayer'),
          (t[(t.LaunchMail = 124)] = 'LaunchMail'),
          (t[(t.LaunchApp2 = 125)] = 'LaunchApp2'),
          (t[(t.MAX_VALUE = 126)] = 'MAX_VALUE')
      })((p = n.KeyCode || (n.KeyCode = {})))
      var i
      ;(function (t) {
        ;(t[(t.Hint = 1)] = 'Hint'),
          (t[(t.Info = 2)] = 'Info'),
          (t[(t.Warning = 4)] = 'Warning'),
          (t[(t.Error = 8)] = 'Error')
      })((i = n.MarkerSeverity || (n.MarkerSeverity = {})))
      var r
      ;(function (t) {
        ;(t[(t.Unnecessary = 1)] = 'Unnecessary'),
          (t[(t.Deprecated = 2)] = 'Deprecated')
      })((r = n.MarkerTag || (n.MarkerTag = {})))
      var l
      ;(function (t) {
        ;(t[(t.Inline = 1)] = 'Inline'), (t[(t.Gutter = 2)] = 'Gutter')
      })((l = n.MinimapPosition || (n.MinimapPosition = {})))
      var g
      ;(function (t) {
        ;(t[(t.UNKNOWN = 0)] = 'UNKNOWN'),
          (t[(t.TEXTAREA = 1)] = 'TEXTAREA'),
          (t[(t.GUTTER_GLYPH_MARGIN = 2)] = 'GUTTER_GLYPH_MARGIN'),
          (t[(t.GUTTER_LINE_NUMBERS = 3)] = 'GUTTER_LINE_NUMBERS'),
          (t[(t.GUTTER_LINE_DECORATIONS = 4)] = 'GUTTER_LINE_DECORATIONS'),
          (t[(t.GUTTER_VIEW_ZONE = 5)] = 'GUTTER_VIEW_ZONE'),
          (t[(t.CONTENT_TEXT = 6)] = 'CONTENT_TEXT'),
          (t[(t.CONTENT_EMPTY = 7)] = 'CONTENT_EMPTY'),
          (t[(t.CONTENT_VIEW_ZONE = 8)] = 'CONTENT_VIEW_ZONE'),
          (t[(t.CONTENT_WIDGET = 9)] = 'CONTENT_WIDGET'),
          (t[(t.OVERVIEW_RULER = 10)] = 'OVERVIEW_RULER'),
          (t[(t.SCROLLBAR = 11)] = 'SCROLLBAR'),
          (t[(t.OVERLAY_WIDGET = 12)] = 'OVERLAY_WIDGET'),
          (t[(t.OUTSIDE_EDITOR = 13)] = 'OUTSIDE_EDITOR')
      })((g = n.MouseTargetType || (n.MouseTargetType = {})))
      var v
      ;(function (t) {
        ;(t[(t.TOP_RIGHT_CORNER = 0)] = 'TOP_RIGHT_CORNER'),
          (t[(t.BOTTOM_RIGHT_CORNER = 1)] = 'BOTTOM_RIGHT_CORNER'),
          (t[(t.TOP_CENTER = 2)] = 'TOP_CENTER')
      })(
        (v =
          n.OverlayWidgetPositionPreference ||
          (n.OverlayWidgetPositionPreference = {}))
      )
      var o
      ;(function (t) {
        ;(t[(t.Left = 1)] = 'Left'),
          (t[(t.Center = 2)] = 'Center'),
          (t[(t.Right = 4)] = 'Right'),
          (t[(t.Full = 7)] = 'Full')
      })((o = n.OverviewRulerLane || (n.OverviewRulerLane = {})))
      var _
      ;(function (t) {
        ;(t[(t.Off = 0)] = 'Off'),
          (t[(t.On = 1)] = 'On'),
          (t[(t.Relative = 2)] = 'Relative'),
          (t[(t.Interval = 3)] = 'Interval'),
          (t[(t.Custom = 4)] = 'Custom')
      })((_ = n.RenderLineNumbersType || (n.RenderLineNumbersType = {})))
      var L
      ;(function (t) {
        ;(t[(t.None = 0)] = 'None'),
          (t[(t.Text = 1)] = 'Text'),
          (t[(t.Blocks = 2)] = 'Blocks')
      })((L = n.RenderMinimap || (n.RenderMinimap = {})))
      var E
      ;(function (t) {
        ;(t[(t.Smooth = 0)] = 'Smooth'), (t[(t.Immediate = 1)] = 'Immediate')
      })((E = n.ScrollType || (n.ScrollType = {})))
      var y
      ;(function (t) {
        ;(t[(t.Auto = 1)] = 'Auto'),
          (t[(t.Hidden = 2)] = 'Hidden'),
          (t[(t.Visible = 3)] = 'Visible')
      })((y = n.ScrollbarVisibility || (n.ScrollbarVisibility = {})))
      var P
      ;(function (t) {
        ;(t[(t.LTR = 0)] = 'LTR'), (t[(t.RTL = 1)] = 'RTL')
      })((P = n.SelectionDirection || (n.SelectionDirection = {})))
      var R
      ;(function (t) {
        ;(t[(t.Invoke = 1)] = 'Invoke'),
          (t[(t.TriggerCharacter = 2)] = 'TriggerCharacter'),
          (t[(t.ContentChange = 3)] = 'ContentChange')
      })((R = n.SignatureHelpTriggerKind || (n.SignatureHelpTriggerKind = {})))
      var V
      ;(function (t) {
        ;(t[(t.File = 0)] = 'File'),
          (t[(t.Module = 1)] = 'Module'),
          (t[(t.Namespace = 2)] = 'Namespace'),
          (t[(t.Package = 3)] = 'Package'),
          (t[(t.Class = 4)] = 'Class'),
          (t[(t.Method = 5)] = 'Method'),
          (t[(t.Property = 6)] = 'Property'),
          (t[(t.Field = 7)] = 'Field'),
          (t[(t.Constructor = 8)] = 'Constructor'),
          (t[(t.Enum = 9)] = 'Enum'),
          (t[(t.Interface = 10)] = 'Interface'),
          (t[(t.Function = 11)] = 'Function'),
          (t[(t.Variable = 12)] = 'Variable'),
          (t[(t.Constant = 13)] = 'Constant'),
          (t[(t.String = 14)] = 'String'),
          (t[(t.Number = 15)] = 'Number'),
          (t[(t.Boolean = 16)] = 'Boolean'),
          (t[(t.Array = 17)] = 'Array'),
          (t[(t.Object = 18)] = 'Object'),
          (t[(t.Key = 19)] = 'Key'),
          (t[(t.Null = 20)] = 'Null'),
          (t[(t.EnumMember = 21)] = 'EnumMember'),
          (t[(t.Struct = 22)] = 'Struct'),
          (t[(t.Event = 23)] = 'Event'),
          (t[(t.Operator = 24)] = 'Operator'),
          (t[(t.TypeParameter = 25)] = 'TypeParameter')
      })((V = n.SymbolKind || (n.SymbolKind = {})))
      var B
      ;(function (t) {
        t[(t.Deprecated = 1)] = 'Deprecated'
      })((B = n.SymbolTag || (n.SymbolTag = {})))
      var U
      ;(function (t) {
        ;(t[(t.Hidden = 0)] = 'Hidden'),
          (t[(t.Blink = 1)] = 'Blink'),
          (t[(t.Smooth = 2)] = 'Smooth'),
          (t[(t.Phase = 3)] = 'Phase'),
          (t[(t.Expand = 4)] = 'Expand'),
          (t[(t.Solid = 5)] = 'Solid')
      })(
        (U =
          n.TextEditorCursorBlinkingStyle ||
          (n.TextEditorCursorBlinkingStyle = {}))
      )
      var T
      ;(function (t) {
        ;(t[(t.Line = 1)] = 'Line'),
          (t[(t.Block = 2)] = 'Block'),
          (t[(t.Underline = 3)] = 'Underline'),
          (t[(t.LineThin = 4)] = 'LineThin'),
          (t[(t.BlockOutline = 5)] = 'BlockOutline'),
          (t[(t.UnderlineThin = 6)] = 'UnderlineThin')
      })((T = n.TextEditorCursorStyle || (n.TextEditorCursorStyle = {})))
      var q
      ;(function (t) {
        ;(t[(t.AlwaysGrowsWhenTypingAtEdges = 0)] =
          'AlwaysGrowsWhenTypingAtEdges'),
          (t[(t.NeverGrowsWhenTypingAtEdges = 1)] =
            'NeverGrowsWhenTypingAtEdges'),
          (t[(t.GrowsOnlyWhenTypingBefore = 2)] = 'GrowsOnlyWhenTypingBefore'),
          (t[(t.GrowsOnlyWhenTypingAfter = 3)] = 'GrowsOnlyWhenTypingAfter')
      })((q = n.TrackedRangeStickiness || (n.TrackedRangeStickiness = {})))
      var O
      ;(function (t) {
        ;(t[(t.None = 0)] = 'None'),
          (t[(t.Same = 1)] = 'Same'),
          (t[(t.Indent = 2)] = 'Indent'),
          (t[(t.DeepIndent = 3)] = 'DeepIndent')
      })((O = n.WrappingIndent || (n.WrappingIndent = {})))
    }),
    j(
      z[31],
      G([0, 1, 21, 5, 17, 13, 3, 6, 24, 25, 30]),
      function (F, n, A, D, w, s, d, a, u, c, C) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.createMonacoBaseAPI = n.KeyMod = void 0)
        class e {
          static chord(N, b) {
            return (0, w.KeyChord)(N, b)
          }
        }
        ;(n.KeyMod = e),
          (e.CtrlCmd = 2048),
          (e.Shift = 1024),
          (e.Alt = 512),
          (e.WinCtrl = 256)
        function f() {
          return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: A.CancellationTokenSource,
            Emitter: D.Emitter,
            KeyCode: C.KeyCode,
            KeyMod: e,
            Position: d.Position,
            Range: a.Range,
            Selection: u.Selection,
            SelectionDirection: C.SelectionDirection,
            MarkerSeverity: C.MarkerSeverity,
            MarkerTag: C.MarkerTag,
            Uri: s.URI,
            Token: c.Token,
          }
        }
        n.createMonacoBaseAPI = f
      }
    ),
    j(z[32], G([0, 1, 12]), function (F, n, A) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.PrefixSumComputer = n.PrefixSumIndexOfResult = void 0)
      class D {
        constructor(d, a) {
          ;(this._prefixSumIndexOfResultBrand = void 0),
            (this.index = d),
            (this.remainder = a)
        }
      }
      n.PrefixSumIndexOfResult = D
      class w {
        constructor(d) {
          ;(this.values = d),
            (this.prefixSum = new Uint32Array(d.length)),
            (this.prefixSumValidIndex = new Int32Array(1)),
            (this.prefixSumValidIndex[0] = -1)
        }
        insertValues(d, a) {
          d = (0, A.toUint32)(d)
          const u = this.values,
            c = this.prefixSum,
            C = a.length
          return C === 0
            ? !1
            : ((this.values = new Uint32Array(u.length + C)),
              this.values.set(u.subarray(0, d), 0),
              this.values.set(u.subarray(d), d + C),
              this.values.set(a, d),
              d - 1 < this.prefixSumValidIndex[0] &&
                (this.prefixSumValidIndex[0] = d - 1),
              (this.prefixSum = new Uint32Array(this.values.length)),
              this.prefixSumValidIndex[0] >= 0 &&
                this.prefixSum.set(
                  c.subarray(0, this.prefixSumValidIndex[0] + 1)
                ),
              !0)
        }
        changeValue(d, a) {
          return (
            (d = (0, A.toUint32)(d)),
            (a = (0, A.toUint32)(a)),
            this.values[d] === a
              ? !1
              : ((this.values[d] = a),
                d - 1 < this.prefixSumValidIndex[0] &&
                  (this.prefixSumValidIndex[0] = d - 1),
                !0)
          )
        }
        removeValues(d, a) {
          ;(d = (0, A.toUint32)(d)), (a = (0, A.toUint32)(a))
          const u = this.values,
            c = this.prefixSum
          if (d >= u.length) return !1
          let C = u.length - d
          return (
            a >= C && (a = C),
            a === 0
              ? !1
              : ((this.values = new Uint32Array(u.length - a)),
                this.values.set(u.subarray(0, d), 0),
                this.values.set(u.subarray(d + a), d),
                (this.prefixSum = new Uint32Array(this.values.length)),
                d - 1 < this.prefixSumValidIndex[0] &&
                  (this.prefixSumValidIndex[0] = d - 1),
                this.prefixSumValidIndex[0] >= 0 &&
                  this.prefixSum.set(
                    c.subarray(0, this.prefixSumValidIndex[0] + 1)
                  ),
                !0)
          )
        }
        getTotalSum() {
          return this.values.length === 0
            ? 0
            : this._getPrefixSum(this.values.length - 1)
        }
        getPrefixSum(d) {
          return d < 0 ? 0 : ((d = (0, A.toUint32)(d)), this._getPrefixSum(d))
        }
        _getPrefixSum(d) {
          if (d <= this.prefixSumValidIndex[0]) return this.prefixSum[d]
          let a = this.prefixSumValidIndex[0] + 1
          a === 0 && ((this.prefixSum[0] = this.values[0]), a++),
            d >= this.values.length && (d = this.values.length - 1)
          for (let u = a; u <= d; u++)
            this.prefixSum[u] = this.prefixSum[u - 1] + this.values[u]
          return (
            (this.prefixSumValidIndex[0] = Math.max(
              this.prefixSumValidIndex[0],
              d
            )),
            this.prefixSum[d]
          )
        }
        getIndexOf(d) {
          ;(d = Math.floor(d)), this.getTotalSum()
          let a = 0,
            u = this.values.length - 1,
            c = 0,
            C = 0,
            e = 0
          for (; a <= u; )
            if (
              ((c = (a + (u - a) / 2) | 0),
              (C = this.prefixSum[c]),
              (e = C - this.values[c]),
              d < e)
            )
              u = c - 1
            else if (d >= C) a = c + 1
            else break
          return new D(c, d - e)
        }
      }
      n.PrefixSumComputer = w
    }),
    j(z[33], G([0, 1, 4, 3, 32]), function (F, n, A, D, w) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.MirrorTextModel = void 0)
      class s {
        constructor(a, u, c, C) {
          ;(this._uri = a),
            (this._lines = u),
            (this._eol = c),
            (this._versionId = C),
            (this._lineStarts = null),
            (this._cachedTextValue = null)
        }
        dispose() {
          this._lines.length = 0
        }
        get version() {
          return this._versionId
        }
        getText() {
          return (
            this._cachedTextValue === null &&
              (this._cachedTextValue = this._lines.join(this._eol)),
            this._cachedTextValue
          )
        }
        onEvents(a) {
          a.eol &&
            a.eol !== this._eol &&
            ((this._eol = a.eol), (this._lineStarts = null))
          const u = a.changes
          for (const c of u)
            this._acceptDeleteRange(c.range),
              this._acceptInsertText(
                new D.Position(c.range.startLineNumber, c.range.startColumn),
                c.text
              )
          ;(this._versionId = a.versionId), (this._cachedTextValue = null)
        }
        _ensureLineStarts() {
          if (!this._lineStarts) {
            const a = this._eol.length,
              u = this._lines.length,
              c = new Uint32Array(u)
            for (let C = 0; C < u; C++) c[C] = this._lines[C].length + a
            this._lineStarts = new w.PrefixSumComputer(c)
          }
        }
        _setLineText(a, u) {
          ;(this._lines[a] = u),
            this._lineStarts &&
              this._lineStarts.changeValue(
                a,
                this._lines[a].length + this._eol.length
              )
        }
        _acceptDeleteRange(a) {
          if (a.startLineNumber === a.endLineNumber) {
            if (a.startColumn === a.endColumn) return
            this._setLineText(
              a.startLineNumber - 1,
              this._lines[a.startLineNumber - 1].substring(
                0,
                a.startColumn - 1
              ) + this._lines[a.startLineNumber - 1].substring(a.endColumn - 1)
            )
            return
          }
          this._setLineText(
            a.startLineNumber - 1,
            this._lines[a.startLineNumber - 1].substring(0, a.startColumn - 1) +
              this._lines[a.endLineNumber - 1].substring(a.endColumn - 1)
          ),
            this._lines.splice(
              a.startLineNumber,
              a.endLineNumber - a.startLineNumber
            ),
            this._lineStarts &&
              this._lineStarts.removeValues(
                a.startLineNumber,
                a.endLineNumber - a.startLineNumber
              )
        }
        _acceptInsertText(a, u) {
          if (u.length === 0) return
          let c = (0, A.splitLines)(u)
          if (c.length === 1) {
            this._setLineText(
              a.lineNumber - 1,
              this._lines[a.lineNumber - 1].substring(0, a.column - 1) +
                c[0] +
                this._lines[a.lineNumber - 1].substring(a.column - 1)
            )
            return
          }
          ;(c[c.length - 1] += this._lines[a.lineNumber - 1].substring(
            a.column - 1
          )),
            this._setLineText(
              a.lineNumber - 1,
              this._lines[a.lineNumber - 1].substring(0, a.column - 1) + c[0]
            )
          let C = new Uint32Array(c.length - 1)
          for (let e = 1; e < c.length; e++)
            this._lines.splice(a.lineNumber + e - 1, 0, c[e]),
              (C[e - 1] = c[e].length + this._eol.length)
          this._lineStarts && this._lineStarts.insertValues(a.lineNumber, C)
        }
      }
      n.MirrorTextModel = s
    })
  var ne =
    (this && this.__awaiter) ||
    function (F, n, A, D) {
      function w(s) {
        return s instanceof A
          ? s
          : new A(function (d) {
              d(s)
            })
      }
      return new (A || (A = Promise))(function (s, d) {
        function a(C) {
          try {
            c(D.next(C))
          } catch (e) {
            d(e)
          }
        }
        function u(C) {
          try {
            c(D.throw(C))
          } catch (e) {
            d(e)
          }
        }
        function c(C) {
          C.done ? s(C.value) : w(C.value).then(a, u)
        }
        c((D = D.apply(F, n || [])).next())
      })
    }
  j(
    z[35],
    G([0, 1, 10, 2, 13, 3, 6, 26, 33, 27, 28, 29, 31, 11, 9]),
    function (F, n, A, D, w, s, d, a, u, c, C, e, f, m, N) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.create = n.EditorSimpleWorker = n.MirrorModel = void 0)
      class b extends u.MirrorTextModel {
        get uri() {
          return this._uri
        }
        get eol() {
          return this._eol
        }
        getValue() {
          return this.getText()
        }
        getLinesContent() {
          return this._lines.slice(0)
        }
        getLineCount() {
          return this._lines.length
        }
        getLineContent(i) {
          return this._lines[i - 1]
        }
        getWordAtPosition(i, r) {
          let l = (0, c.getWordAtText)(
            i.column,
            (0, c.ensureValidWordDefinition)(r),
            this._lines[i.lineNumber - 1],
            0
          )
          return l
            ? new d.Range(
                i.lineNumber,
                l.startColumn,
                i.lineNumber,
                l.endColumn
              )
            : null
        }
        words(i) {
          const r = this._lines,
            l = this._wordenize.bind(this)
          let g = 0,
            v = '',
            o = 0,
            _ = []
          return {
            *[Symbol.iterator]() {
              for (;;)
                if (o < _.length) {
                  const L = v.substring(_[o].start, _[o].end)
                  ;(o += 1), yield L
                } else if (g < r.length)
                  (v = r[g]), (_ = l(v, i)), (o = 0), (g += 1)
                else break
            },
          }
        }
        getLineWords(i, r) {
          let l = this._lines[i - 1],
            g = this._wordenize(l, r),
            v = []
          for (const o of g)
            v.push({
              word: l.substring(o.start, o.end),
              startColumn: o.start + 1,
              endColumn: o.end + 1,
            })
          return v
        }
        _wordenize(i, r) {
          const l = []
          let g
          for (r.lastIndex = 0; (g = r.exec(i)) && g[0].length !== 0; )
            l.push({ start: g.index, end: g.index + g[0].length })
          return l
        }
        getValueInRange(i) {
          if (
            ((i = this._validateRange(i)),
            i.startLineNumber === i.endLineNumber)
          )
            return this._lines[i.startLineNumber - 1].substring(
              i.startColumn - 1,
              i.endColumn - 1
            )
          let r = this._eol,
            l = i.startLineNumber - 1,
            g = i.endLineNumber - 1,
            v = []
          v.push(this._lines[l].substring(i.startColumn - 1))
          for (let o = l + 1; o < g; o++) v.push(this._lines[o])
          return v.push(this._lines[g].substring(0, i.endColumn - 1)), v.join(r)
        }
        offsetAt(i) {
          return (
            (i = this._validatePosition(i)),
            this._ensureLineStarts(),
            this._lineStarts.getPrefixSum(i.lineNumber - 2) + (i.column - 1)
          )
        }
        positionAt(i) {
          ;(i = Math.floor(i)), (i = Math.max(0, i)), this._ensureLineStarts()
          let r = this._lineStarts.getIndexOf(i),
            l = this._lines[r.index].length
          return {
            lineNumber: 1 + r.index,
            column: 1 + Math.min(r.remainder, l),
          }
        }
        _validateRange(i) {
          const r = this._validatePosition({
              lineNumber: i.startLineNumber,
              column: i.startColumn,
            }),
            l = this._validatePosition({
              lineNumber: i.endLineNumber,
              column: i.endColumn,
            })
          return r.lineNumber !== i.startLineNumber ||
            r.column !== i.startColumn ||
            l.lineNumber !== i.endLineNumber ||
            l.column !== i.endColumn
            ? {
                startLineNumber: r.lineNumber,
                startColumn: r.column,
                endLineNumber: l.lineNumber,
                endColumn: l.column,
              }
            : i
        }
        _validatePosition(i) {
          if (!s.Position.isIPosition(i)) throw new Error('bad position')
          let { lineNumber: r, column: l } = i,
            g = !1
          if (r < 1) (r = 1), (l = 1), (g = !0)
          else if (r > this._lines.length)
            (r = this._lines.length),
              (l = this._lines[r - 1].length + 1),
              (g = !0)
          else {
            let v = this._lines[r - 1].length + 1
            l < 1 ? ((l = 1), (g = !0)) : l > v && ((l = v), (g = !0))
          }
          return g ? { lineNumber: r, column: l } : i
        }
      }
      n.MirrorModel = b
      class h {
        constructor(i, r) {
          ;(this._host = i),
            (this._models = Object.create(null)),
            (this._foreignModuleFactory = r),
            (this._foreignModule = null)
        }
        dispose() {
          this._models = Object.create(null)
        }
        _getModel(i) {
          return this._models[i]
        }
        _getModels() {
          let i = []
          return (
            Object.keys(this._models).forEach((r) => i.push(this._models[r])), i
          )
        }
        acceptNewModel(i) {
          this._models[i.url] = new b(
            w.URI.parse(i.url),
            i.lines,
            i.EOL,
            i.versionId
          )
        }
        acceptModelChanged(i, r) {
          if (!this._models[i]) return
          this._models[i].onEvents(r)
        }
        acceptRemovedModel(i) {
          !this._models[i] || delete this._models[i]
        }
        computeDiff(i, r, l, g) {
          return ne(this, void 0, void 0, function* () {
            const v = this._getModel(i),
              o = this._getModel(r)
            if (!v || !o) return null
            const _ = v.getLinesContent(),
              L = o.getLinesContent(),
              y = new a.DiffComputer(_, L, {
                shouldComputeCharChanges: !0,
                shouldPostProcessCharChanges: !0,
                shouldIgnoreTrimWhitespace: l,
                shouldMakePrettyDiff: !0,
                maxComputationTime: g,
              }).computeDiff(),
              P = y.changes.length > 0 ? !1 : this._modelsAreIdentical(v, o)
            return { quitEarly: y.quitEarly, identical: P, changes: y.changes }
          })
        }
        _modelsAreIdentical(i, r) {
          const l = i.getLineCount(),
            g = r.getLineCount()
          if (l !== g) return !1
          for (let v = 1; v <= l; v++) {
            const o = i.getLineContent(v),
              _ = r.getLineContent(v)
            if (o !== _) return !1
          }
          return !0
        }
        computeMoreMinimalEdits(i, r) {
          return ne(this, void 0, void 0, function* () {
            const l = this._getModel(i)
            if (!l) return r
            const g = []
            let v
            r = r.slice(0).sort((o, _) => {
              if (o.range && _.range)
                return d.Range.compareRangesUsingStarts(o.range, _.range)
              let L = o.range ? 0 : 1,
                E = _.range ? 0 : 1
              return L - E
            })
            for (let { range: o, text: _, eol: L } of r) {
              if ((typeof L == 'number' && (v = L), d.Range.isEmpty(o) && !_))
                continue
              const E = l.getValueInRange(o)
              if (((_ = _.replace(/\r\n|\n|\r/g, l.eol)), E === _)) continue
              if (Math.max(_.length, E.length) > h._diffLimit) {
                g.push({ range: o, text: _ })
                continue
              }
              const y = (0, A.stringDiff)(E, _, !1),
                P = l.offsetAt(d.Range.lift(o).getStartPosition())
              for (const R of y) {
                const V = l.positionAt(P + R.originalStart),
                  B = l.positionAt(P + R.originalStart + R.originalLength),
                  U = {
                    text: _.substr(R.modifiedStart, R.modifiedLength),
                    range: {
                      startLineNumber: V.lineNumber,
                      startColumn: V.column,
                      endLineNumber: B.lineNumber,
                      endColumn: B.column,
                    },
                  }
                l.getValueInRange(U.range) !== U.text && g.push(U)
              }
            }
            return (
              typeof v == 'number' &&
                g.push({
                  eol: v,
                  text: '',
                  range: {
                    startLineNumber: 0,
                    startColumn: 0,
                    endLineNumber: 0,
                    endColumn: 0,
                  },
                }),
              g
            )
          })
        }
        computeLinks(i) {
          return ne(this, void 0, void 0, function* () {
            let r = this._getModel(i)
            return r ? (0, C.computeLinks)(r) : null
          })
        }
        textualSuggest(i, r, l, g) {
          return ne(this, void 0, void 0, function* () {
            const v = new N.StopWatch(!0),
              o = new RegExp(l, g),
              _ = new Set()
            e: for (let L of i) {
              const E = this._getModel(L)
              if (!!E) {
                for (let y of E.words(o))
                  if (
                    !(y === r || !isNaN(Number(y))) &&
                    (_.add(y), _.size > h._suggestionsLimit)
                  )
                    break e
              }
            }
            return { words: Array.from(_), duration: v.elapsed() }
          })
        }
        computeWordRanges(i, r, l, g) {
          return ne(this, void 0, void 0, function* () {
            let v = this._getModel(i)
            if (!v) return Object.create(null)
            const o = new RegExp(l, g),
              _ = Object.create(null)
            for (let L = r.startLineNumber; L < r.endLineNumber; L++) {
              let E = v.getLineWords(L, o)
              for (const y of E) {
                if (!isNaN(Number(y.word))) continue
                let P = _[y.word]
                P || ((P = []), (_[y.word] = P)),
                  P.push({
                    startLineNumber: L,
                    startColumn: y.startColumn,
                    endLineNumber: L,
                    endColumn: y.endColumn,
                  })
              }
            }
            return _
          })
        }
        navigateValueSet(i, r, l, g, v) {
          return ne(this, void 0, void 0, function* () {
            let o = this._getModel(i)
            if (!o) return null
            let _ = new RegExp(g, v)
            r.startColumn === r.endColumn &&
              (r = {
                startLineNumber: r.startLineNumber,
                startColumn: r.startColumn,
                endLineNumber: r.endLineNumber,
                endColumn: r.endColumn + 1,
              })
            let L = o.getValueInRange(r),
              E = o.getWordAtPosition(
                { lineNumber: r.startLineNumber, column: r.startColumn },
                _
              )
            if (!E) return null
            let y = o.getValueInRange(E)
            return e.BasicInplaceReplace.INSTANCE.navigateValueSet(
              r,
              L,
              E,
              y,
              l
            )
          })
        }
        loadForeignModule(i, r, l) {
          const g = (_, L) => this._host.fhr(_, L)
          let o = {
            host: m.createProxyObject(l, g),
            getMirrorModels: () => this._getModels(),
          }
          return this._foreignModuleFactory
            ? ((this._foreignModule = this._foreignModuleFactory(o, r)),
              Promise.resolve(m.getAllMethodNames(this._foreignModule)))
            : new Promise((_, L) => {
                F(
                  [i],
                  (E) => {
                    ;(this._foreignModule = E.create(o, r)),
                      _(m.getAllMethodNames(this._foreignModule))
                  },
                  L
                )
              })
        }
        fmr(i, r) {
          if (
            !this._foreignModule ||
            typeof this._foreignModule[i] != 'function'
          )
            return Promise.reject(
              new Error('Missing requestHandler or method: ' + i)
            )
          try {
            return Promise.resolve(
              this._foreignModule[i].apply(this._foreignModule, r)
            )
          } catch (l) {
            return Promise.reject(l)
          }
        }
      }
      ;(n.EditorSimpleWorker = h),
        (h._diffLimit = 1e5),
        (h._suggestionsLimit = 1e4)
      function S(p) {
        return new h(p, null)
      }
      ;(n.create = S),
        typeof importScripts == 'function' &&
          (D.globals.monaco = (0, f.createMonacoBaseAPI)())
    }
  ),
    (function () {
      var F, n
      const A = self.MonacoEnvironment,
        D = A && A.baseUrl ? A.baseUrl : '../../../',
        w =
          typeof ((F = self.trustedTypes) === null || F === void 0
            ? void 0
            : F.createPolicy) == 'function'
            ? (n = self.trustedTypes) === null || n === void 0
              ? void 0
              : n.createPolicy('amdLoader', {
                  createScriptURL: (C) => C,
                  createScript: (C, ...e) => {
                    const f = e.slice(0, -1).join(','),
                      m = e.pop().toString()
                    return `(function anonymous(${f}) {
${m}
})`
                  },
                })
            : void 0
      function s() {
        try {
          return (
            (w
              ? self.eval(w.createScript('', 'true'))
              : new Function('true')
            ).call(self),
            !0
          )
        } catch (C) {
          return !1
        }
      }
      function d() {
        return new Promise((C, e) => {
          if (typeof self.define == 'function' && self.define.amd) return C()
          const f = D + 'vs/loader.js'
          if (
            !(
              /^((http:)|(https:)|(file:))/.test(f) &&
              f.substring(0, self.origin.length) !== self.origin
            ) &&
            s()
          ) {
            fetch(f)
              .then((N) => {
                if (N.status !== 200) throw new Error(N.statusText)
                return N.text()
              })
              .then((N) => {
                ;(N = `${N}
//# sourceURL=${f}`),
                  (w ? self.eval(w.createScript('', N)) : new Function(N)).call(
                    self
                  ),
                  C()
              })
              .then(void 0, e)
            return
          }
          w ? importScripts(w.createScriptURL(f)) : importScripts(f), C()
        })
      }
      const a = function (C) {
        d().then(() => {
          require.config({
            baseUrl: D,
            catchError: !0,
            trustedTypesPolicy: w,
            amdModulesPattern: /^vs\//,
          }),
            require([C], function (e) {
              setTimeout(function () {
                let f = e.create((m, N) => {
                  self.postMessage(m, N)
                }, null)
                for (
                  self.onmessage = (m) => f.onmessage(m.data, m.ports);
                  c.length > 0;

                )
                  self.onmessage(c.shift())
              }, 0)
            })
        })
      }
      let u = !0,
        c = []
      self.onmessage = (C) => {
        if (!u) {
          c.push(C)
          return
        }
        ;(u = !1), a(C.data)
      }
    })()
}.call(this))

//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map
