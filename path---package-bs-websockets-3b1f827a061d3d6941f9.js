webpackJsonp([0xad62ced1d477],{1081:function(s,e){s.exports={data:{package:{id:"bs-websockets",stars:3,name:"bs-websockets",version:"1.0.9",category:"binding",flags:["neglected"],platforms:["browser"],description:"WebSockets bindings for BuckleScript",keywords:["real-time communication"],license:"MIT",updated:"2018-01-28T18:14:13.413Z",type:"published",score:.39150309948606493,quality:.5230444522390142,popularity:.0552344374535932,maintenance:.6150220305874373,readme:'<h1 id="bs-websockets"><a href="#bs-websockets" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-websockets</h1>\n<p>WebSockets bindings for BuckleScript.</p>\n<p>Available on npm repository: <code>yarn add bs-websockets</code> or <code>npm i -S bs-websockets</code> to install. Don\'t forget to add <code>bs-websockets</code> to <code>bs-dependencies</code> of <code>bsconfig.json</code>.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> ws = <span class="hljs-type">WebSocket</span>.make webSocketUrl;\n<span class="hljs-keyword">let</span> handleOpen () =&gt; ...;\n<span class="hljs-keyword">let</span> hanhleClose evt <span class="hljs-comment">/* CloseEvent */</span> =&gt; ...;\n<span class="hljs-keyword">let</span> handleMessage evt <span class="hljs-comment">/* MessageEvent */</span> =&gt; ...;\n<span class="hljs-keyword">let</span> handleError errmsg =&gt; ...;\nws\n  |&gt; <span class="hljs-type">WebSocket</span>.setBinaryType <span class="hljs-type">ArrayBuffer</span>\n  |&gt; <span class="hljs-type">WebSocket</span>.on @@ <span class="hljs-type">Open</span> handleOpen\n  |&gt; <span class="hljs-type">WebSocket</span>.on @@ <span class="hljs-type">Close</span> handleClose\n  |&gt; <span class="hljs-type">WebSocket</span>.on @@ <span class="hljs-type">Message</span> handleMessage\n  |&gt; <span class="hljs-type">WebSocket</span>.on @@ <span class="hljs-type">Error</span> handleError\n  |&gt; ignore;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/cxa/bs-websockets#readme",repositoryUrl:"https://github.com/cxa/bs-websockets",npmUrl:"https://www.npmjs.com/package/bs-websockets",issuesUrl:"https://github.com/cxa/bs-websockets/issues",slug:"/package/bs-websockets"}},pathContext:{id:"bs-websockets"}}}});
//# sourceMappingURL=path---package-bs-websockets-3b1f827a061d3d6941f9.js.map