webpackJsonp([0xc2bdcac8fdba],{1156:function(s,e){s.exports={data:{package:{id:"unpublished/glennsl/bs-in-a-box",stars:6,name:"glennsl/bs-in-a-box",version:"0.1.0",category:"binding",flags:[],platforms:["browser","node"],description:"Bindings to BuckleScript compiler",keywords:["utilities"],license:"MIT",updated:"2018-02-05T15:49:29.426Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-in-a-box"><a href="#bs-in-a-box" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-in-a-box</h1>\n<p>The BuckleScript compiler stuffed into a neatly wrapped box with a bow on top, for embedding into BuckleScript apps.</p>\n<p>Or, all-in-one BuckleScript compiler compiled to JavaScript, including the standard library and BuckleScript/Reason bindings</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Run <code>npm install --save glennsl/bs-in-a-box</code> and add <code>bs-in-a-box</code> to the <code>bs-dependencies</code> in <code>bsconfig.json</code>. </p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[@bs.<span class="hljs-keyword">val</span>] external eval : string =&gt; \'a = <span class="hljs-string">""</span>;\n\n<span class="hljs-keyword">let</span> code  = {|\n  <span class="hljs-keyword">let</span> hello thing =\n    <span class="hljs-type">Js</span>.log {j|<span class="hljs-type">Hello</span> $thing!|j}\n\n  <span class="hljs-keyword">let</span> () =\n    hello <span class="hljs-string">"world"</span>\n|};\n\n<span class="hljs-keyword">let</span> result =\n  <span class="hljs-type">BsBox</span>.compile(code);\n\n<span class="hljs-keyword">switch</span> result {\n| <span class="hljs-type">Ok</span>({ code })       =&gt; eval(code);\n| <span class="hljs-type">Error</span>({ message }) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"Error: "</span>, message)\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">external</span> eval : <span class="hljs-built_in">string</span> -&gt; <span class="hljs-symbol">\'a</span> = <span class="hljs-string">""</span>[@@bs.<span class="hljs-keyword">val</span> ]\n<span class="hljs-keyword">let</span> code =\n  {|\n  <span class="hljs-keyword">let</span> hello thing =\n    <span class="hljs-type">Js</span>.log {j|<span class="hljs-type">Hello</span> $thing!|j}\n\n  <span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> =\n    hello <span class="hljs-string">"world"</span>\n|}\n<span class="hljs-keyword">let</span> result = <span class="hljs-type">BsBox</span>.compile code\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">match</span> result <span class="hljs-keyword">with</span>\n  | ((<span class="hljs-type">Ok</span> ({ code }))[@explicit_arity ]) -&gt; eval code\n  | ((<span class="hljs-type">Error</span> ({ message }))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"Error: "</span> message</code></pre>\n      </div>\n    </div>\n  \n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Compiling and running code that does not use the standard library can be as simple as the example above. But you should\nbe aware that the compiler is not modular, but instead attaches itself to <code>window.ocaml</code> or <code>global.ocaml</code> and can be\ninterferred with by other code.</p>\n<p>If you want to use the standard library it gets a bit more complicated. This package includes a standard library bundle\nthat must be evaluated in the context the compiled code will be run in. This is because the compiler will emit <code>require</code>\ncalls, and the standard library bundle includes a <code>require</code> polyfill/override that knows about the standard library\nmodules.</p>\n<p>In a browser context it is sufficient to include the bundle in a script tag:</p>\n<div class="redex-codeblock"><pre class="hljs lang-html"><code>&lt;script src=<span class="hljs-string">"node_modules/bs-in-a-box/vendor/stdlibBundle.js"</span>&gt;&lt;/script&gt;</code></pre></div>\n<p>In case you don\'t want to include all of <code>node_modules</code> in your production build, you can use <code>webpack</code>s <code>file-loader</code> to\ncopy the file to your <code>build</code> directory. This is the setup <a href="https://github.com/rebench/rebench.github.io">rebench</a> uses,\nin <code>webpack.config.js</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>...\nmodule: {\n  loaders: [{\n    <span class="hljs-built_in">test</span>: /\\.(png|jpg|gif|html|css)$|stdlibBundle.js$/,\n    loader: <span class="hljs-string">\'file-loader?name=[name].[ext]\'</span>\n  }],\n},\n...</code></pre></div>\n<p>Then in a web worker (written in JavaScript):</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>require(<span class="hljs-string">\'../node_modules/bs-in-a-box/vendor/stdlibBundle.js\'</span>);\nimportScripts(<span class="hljs-string">\'stdlibBundle.js\'</span>);</code></pre></div>\n<p>If you use a script tag, you should put the <code>require</code> in your entry point module. If it\'s in Reason, just put this at the top:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[%%raw <span class="hljs-string">"require(\'../node_modules/bs-in-a-box/vendor/stdlibBundle.js\')"</span>];</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code>[%%raw <span class="hljs-string">"require(\'../node_modules/bs-in-a-box/vendor/stdlibBundle.js\')"</span>]</code></pre>\n      </div>\n    </div>\n  \n<p>Then the script tag might look like this, depending on what your output directory is:</p>\n<div class="redex-codeblock"><pre class="hljs lang-html"><code>&lt;script src=<span class="hljs-string">"build/stdlibBundle.js"</span>&gt;&lt;/script&gt;</code></pre></div>\n<p>In a node context you can read it in as a text file and then evaluate it using <code>vm.runInContext</code> or a similar function. See\nthe node_sandbox example for details.</p>\n<p>This package does not contain the Reason preprocessor (<code>refmt</code>). For bindings to that, see <a href="https://github.com/glennsl/bs-refmt">bs-refmt</a></p>\n<h2 id="licensing"><a href="#licensing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Licensing</h2>\n<p>The <code>vendor</code> directory contains files built from code in the BuckleScript repository. Refer to its <a href="https://github.com/BuckleScript/bucklescript#licensing">Licensing</a> section. Everything else is licensed under the <a href="LICENSE">MIT license</a>.</p>\n',homepageUrl:"https://github.com/glennsl/bs-in-a-box#readme",repositoryUrl:"https://github.com/glennsl/bs-in-a-box",npmUrl:null,issuesUrl:"https://github.com/glennsl/bs-in-a-box/issues",slug:"/package/unpublished/glennsl/bs-in-a-box"}},pathContext:{id:"unpublished/glennsl/bs-in-a-box"}}}});
//# sourceMappingURL=path---package-unpublished-glennsl-bs-in-a-box-b6aae4c5697714177ec8.js.map