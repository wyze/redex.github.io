webpackJsonp([41702823270652],{1246:function(s,e){s.exports={data:{package:{id:"unpublished/reasonml-community/bs-glob",stars:2,name:"reasonml-community/bs-glob",version:"0.1.1",category:"binding",flags:[],platforms:["node"],description:"BuckleScript bindings to node-glob. Match files using the patterns the shell uses, like stars and stuff.",keywords:["utilities","filesystem"],license:"MIT",updated:"2018-03-30T19:30:46.019Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-glob"><a href="#bs-glob" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-glob</h1>\n<p>BuckleScript bindings to <a href="https://github.com/isaacs/node-glob">node-glob</a>.</p>\n<p>Status: Very basic, but functional</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Glob</span>.glob(<span class="hljs-string">"**/*.js"</span>, (<span class="hljs-number">_</span>, files) =&gt; <span class="hljs-type">Array</span>.iter(<span class="hljs-type">Js</span>.log, files));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">Glob</span>.glob <span class="hljs-string">"**/*.js"</span> (<span class="hljs-keyword">fun</span> _  -&gt; <span class="hljs-keyword">fun</span> files  -&gt; <span class="hljs-type">Array</span>.iter <span class="hljs-type">Js</span>.log files)</code></pre>\n      </div>\n    </div>\n  \n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save reasonml-community/bs-glob</code></pre></div>\n<p>Then add <code>bs-glob</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-glob"</span>]\n}</code></pre></div>\n',homepageUrl:"https://github.com/reasonml-community/bs-glob#readme",repositoryUrl:"https://github.com/reasonml-community/bs-glob",npmUrl:null,issuesUrl:"https://github.com/reasonml-community/bs-glob/issues",slug:"/package/unpublished/reasonml-community/bs-glob"}},pathContext:{id:"unpublished/reasonml-community/bs-glob"}}}});
//# sourceMappingURL=path---package-unpublished-reasonml-community-bs-glob-8799f0a7e5769716ad59.js.map