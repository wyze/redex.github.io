webpackJsonp([52891028920684],{1162:function(e,s){e.exports={data:{package:{id:"bs-webworkers",stars:11,name:"bs-webworkers",version:"0.2.4",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for Web Workers",keywords:["utilities"],license:"MIT",updated:"2018-05-02T22:05:41.718Z",type:"published",score:.5749404222050999,quality:.7020094989798702,popularity:.041143757103956846,maintenance:.9998207357850113,readme:'<h1 id="reason-bindings-for-the-web-workers-api"><a href="#reason-bindings-for-the-web-workers-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason Bindings for the Web Workers API</h1>\n<p>This repository contains bindings for the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/">Web Workers API</a>.</p>\n<p>Read more about these <a href="http://davidgom.es/2017/12/23/reasonml-webworkers-bindings.html">here</a>, but keep in mind these bindings have been improved since this article was written.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>The main script creates a new Web Worker from the <code>worker.re</code> script and posts a message to it. The Web Worker replies back to that message. The main thread listens to that and prints out the message it received from the Web Worker.</p>\n<p><strong>main.re</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> worker = <span class="hljs-type">WebWorkers</span>.create_webworker(<span class="hljs-string">"worker.bs.js"</span>);\n\n<span class="hljs-keyword">let</span> msg = {<span class="hljs-string">"text"</span>: <span class="hljs-string">"Hello world"</span>};\n\n<span class="hljs-type">WebWorkers</span>.postMessage(worker, msg);\n\n<span class="hljs-keyword">let</span> msgBackHandler = (e: <span class="hljs-type">WebWorkers</span>.<span class="hljs-type">MessageEvent</span>.t) =&gt; {\n  <span class="hljs-type">Js</span>.log(<span class="hljs-string">"I am the main thread and I have received a message back from the worker:"</span>);\n  <span class="hljs-type">Js</span>.log(<span class="hljs-type">WebWorkers</span>.<span class="hljs-type">MessageEvent</span>.data(e))\n};\n\n<span class="hljs-type">WebWorkers</span>.onMessage(worker, msgBackHandler);</code></pre></div>\n<p><strong>worker.re</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-type">WebWorkers</span>.setWorkerOnMessage(\n  <span class="hljs-type">WebWorkers</span>.self,\n  (e: <span class="hljs-type">WebWorkers</span>.<span class="hljs-type">MessageEvent</span>.t) =&gt; {\n    <span class="hljs-type">Js</span>.log(<span class="hljs-string">"I am the Web Worker and I have received a message:"</span>);\n    <span class="hljs-type">Js</span>.log(<span class="hljs-type">WebWorkers</span>.<span class="hljs-type">MessageEvent</span>.data(e));\n    <span class="hljs-type">WebWorkers</span>.postMessageFromWorker(<span class="hljs-string">"my result"</span>)\n  }\n);</code></pre></div>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ol>\n<li>Install the bindings using <code>npm install --save bs-webworkers</code></li>\n<li>Add the bindings to <code>bsconfig.json</code>:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n      <span class="hljs-string">"bs-webworkers"</span>\n  ]\n}</code></pre></div>\n<p>Look in the <code>example/</code> directory for an example of how to use the bindings.</p>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install\nnpm run build</code></pre></div>\n<h2 id="tests"><a href="#tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tests</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install\nnpm run <span class="hljs-built_in">test</span></code></pre></div>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install\nnpm run example</code></pre></div>\n<h2 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Todo</h2>\n<p>The full Web Workers API is still not yet implemented (e.g. Shared Workers, Service Worker, WorkerNavigator, WorkerLocation, etc.). PRs are welcome!</p>\n',homepageUrl:"https://github.com/davidgomes/bs-webworkers",repositoryUrl:"https://github.com/davidgomes/bs-webworkers",npmUrl:"https://www.npmjs.com/package/bs-webworkers",issuesUrl:"https://github.com/davidgomes/bs-webworkers/issues",slug:"/package/bs-webworkers"}},pathContext:{id:"bs-webworkers"}}}});
//# sourceMappingURL=path---package-bs-webworkers-4f2e0ceaa632d165c0bd.js.map