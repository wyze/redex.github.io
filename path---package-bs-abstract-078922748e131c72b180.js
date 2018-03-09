webpackJsonp([61494623449151],{1052:function(s,a){s.exports={data:{package:{id:"bs-abstract",stars:29,name:"bs-abstract",version:"0.12.0",category:"library",flags:[],platforms:["any"],description:"Bucklescript interfaces and implementations for category theory and abstract algebra",keywords:["utilities"],license:"BSD-3-Clause",updated:"2018-03-02T13:36:25.124Z",type:"published",score:.5932417159397452,quality:.7021887491296179,popularity:.0982316301163475,maintenance:.9948686304575376,readme:'<h1 id="bs-abstract"><a href="#bs-abstract" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-abstract</h1>\n<p>Bucklescript interfaces and implementations for category theory and abstract algebra</p>\n<img src="https://raw.githubusercontent.com/Risto-Stevcev/bs-abstract/master/cantellated_tesseract.png" height="100" width="100"/>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Install the project:</p>\n<p><code>npm install bs-abstract --save</code></p>\n<p>And add the dependency to your bs-dependencies in <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"bs-abstract"</span>\n]</code></pre></div>\n<p>The project will be available under the <code>BsAbstract</code> namespace</p>\n<h2 id="project-layout"><a href="#project-layout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Project Layout</h2>\n<p>This is the current layout of the project. It\'s subject to change:</p>\n<ul>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/interfaces/Interface.re">src/interfaces/Interface.re</a> - Contains the category theory and abstract algebra interfaces</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/interfaces/Verify.re">src/interfaces/Verify.re</a> - Contains property based tests to verify that implementations are lawful</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/interfaces/Infix.re">src/interfaces/Infix.re</a> - Contains functors to generate infix operators for the interfaces. Modules implementing interfaces contain an already instantiated Infix module for convenience where appropriate</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/utilities/Default.re">src/utilities/Default.re</a> - Contains default implementations for interface functions</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/utilities/Functors.re">src/utilities/Functors.re</a> - Contains already instantiated functors for common data combinations for convenience</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/functions/Functions.re">src/functions/Functions.re</a> - Contains generic functions that are built on top the abstract interfaces</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/master/src/implementations">src/implementations/</a> - Contains implementations for common bucklescript types </li>\n</ul>\n<p>The rest of the files under <code>src</code> are implementations based on data type (ie: <code>String.re</code> for strings). These files and their corresponding unit tests in the <code>test</code> folder will give you an idea on how to use and implement the interfaces for your own data structures.</p>\n<h2 id="suggested-usage"><a href="#suggested-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Suggested Usage</h2>\n<ul>\n<li>\n<p>The suggested way to combine monadic code is to use kliesli composition instead of <code>flat_map</code>. For example, given a\ntype that\'s a monad, a very common pattern is to get the inner value and pass it in as an argument to a\nsubsequent function, like so:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">I</span> = <span class="hljs-title">Functions</span>.<span class="hljs-title">Infix</span>.<span class="hljs-title">Monad</span>(<span class="hljs-title">BsEffects</span>.<span class="hljs-title">Effect</span>.<span class="hljs-title">Monad</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">exclaim_file</span> = <span class="hljs-title">path</span> =&gt; <span class="hljs-title">BsEffects</span>.<span class="hljs-title">Effect</span>.<span class="hljs-title">Infix</span>.(</span>{\n  read_file(path) &gt;&gt;= contents =&gt; {\n    write_file(path, contents ++ <span class="hljs-string">"!"</span>)\n  }\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code>module I = Functions.Infix.Monad(BsEffects.Effect.Monad)\nlet exclaim_file path =\n  let open BsEffects.Effect.Infix in\n    (read_file path) &gt;&gt;= (fun contents  -&gt; write_file path (contents ^ "!"))</code></pre>\n      </div>\n    </div>\n  \n<p>Which looks like this using do notation (in haskell):</p>\n<div class="redex-codeblock"><pre class="hljs lang-haskell"><code>contents &lt;- <span class="hljs-built_in">read</span>_file <span class="hljs-string">"foo"</span>\n_ &lt;- write_file <span class="hljs-string">"foo"</span> (contents ++ <span class="hljs-string">"!"</span>)</code></pre></div>\n<p>This can be written with kliesli composition like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Effect_Infix</span> = <span class="hljs-title">Functions</span>.<span class="hljs-title">Infix</span>.<span class="hljs-title">Monad</span>(<span class="hljs-title">BsEffects</span>.<span class="hljs-title">Effect</span>.<span class="hljs-title">Monad</span>);\n<span class="hljs-title">let</span> ((&gt;=&gt;), (&gt;.)) = (<span class="hljs-title">Effect_Infix</span>.(&gt;=&gt;), <span class="hljs-title">Function</span>.<span class="hljs-title">Infix</span>.(&gt;.));\n\n<span class="hljs-title">let</span> <span class="hljs-title">exclaim</span> = <span class="hljs-title">Function</span>.<span class="hljs-title">flip</span>((++))("!");\n<span class="hljs-title">let</span> <span class="hljs-title">exclaim_file</span> = <span class="hljs-title">path</span> =&gt; <span class="hljs-title">Function</span>.<span class="hljs-title">const</span>(<span class="hljs-title">read_file</span>(<span class="hljs-title">path</span>)) &gt;=&gt; (<span class="hljs-title">exclaim</span> &gt;. <span class="hljs-title">write_file</span>(<span class="hljs-title">path</span>));</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Effect_Infix</span> = <span class="hljs-type">Functions</span>.<span class="hljs-type">Infix</span>.<span class="hljs-type">Monad</span>(<span class="hljs-type">BsEffects</span>.<span class="hljs-type">Effect</span>.<span class="hljs-type">Monad</span>)\n<span class="hljs-keyword">let</span> ((&gt;=&gt;),(&gt;.)) = (<span class="hljs-type">Effect_Infix</span>.(&gt;=&gt;), <span class="hljs-type">Function</span>.<span class="hljs-type">Infix</span>.(&gt;.))\n<span class="hljs-keyword">let</span> exclaim = <span class="hljs-type">Function</span>.flip (^) <span class="hljs-string">"!"</span>\n<span class="hljs-keyword">let</span> exclaim_file path =\n  (<span class="hljs-type">Function</span>.const (read_file path)) &gt;=&gt; (exclaim &gt;. (write_file path))</code></pre>\n      </div>\n    </div>\n  \n<p>Building up functions using function and kliesli composition is a good litmus test that your program\nis built up from generic, pure abstractions. Which means that the code is easy to abstract to make it reusable in many\nother contexts, and abstractions are easy to decompose when requirements change.</p>\n</li>\n</ul>\n<ul>\n<li>\n<p>For interfaces based on functors, Use already instantiated functors if available to avoid the extra boilerplate, ie:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">ArrayF</span>.<span class="hljs-type">Int</span>.<span class="hljs-type">Additive</span>.<span class="hljs-type">Fold_Map</span>.fold_map</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">ArrayF</span>.<span class="hljs-type">Int</span>.<span class="hljs-type">Additive</span>.<span class="hljs-type">Fold_Map</span>.fold_map</code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Don\'t overuse infix operators. If the code is combinatorial it can make it more readable, but a lot of times prefix operators are simpler and easier to read</p>\n</li>\n<li>\n<p>If you do use infix operators, prefer local opens over global opens, and prefer explicit unpacking over local opens, ie:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> ((&lt;.), (&gt;.)) = <span class="hljs-type">Function</span>.<span class="hljs-type">Infix</span>.((&lt;.), (&gt;.))</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> ((&lt;.),(&gt;.)) = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Function</span>.<span class="hljs-type">Infix</span> <span class="hljs-keyword">in</span> ((&lt;.), (&gt;.))</code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Abbreviated modules can make code terser and easier to read in some situations (ie: <code>A.map</code>), especially in situations where infix operators can\'t be used because they would introduce ambiguity, like for example when two different monoids are used in the same function.</p>\n</li>\n</ul>\n<p>Example code:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">T</span> = <span class="hljs-title">ListF</span>.<span class="hljs-title">Option</span>.<span class="hljs-title">Traversable</span>;\n<span class="hljs-title">assert</span>(<span class="hljs-title">T</span>.<span class="hljs-title">sequence</span>([<span class="hljs-title">Some</span>("<span class="hljs-title">foo</span>"), <span class="hljs-title">Some</span>("<span class="hljs-title">bar</span>")]) == <span class="hljs-title">Some</span>(["<span class="hljs-title">foo</span>", "<span class="hljs-title">bar</span>"]));\n<span class="hljs-title">Js</span>.<span class="hljs-title">log</span>(<span class="hljs-title">ListF</span>.<span class="hljs-title">Int</span>.<span class="hljs-title">Show</span>.<span class="hljs-title">show</span>([1,1,2,3,5,8]));</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">T</span> = <span class="hljs-type">ListF</span>.<span class="hljs-type">Option</span>.<span class="hljs-type">Traversable</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">assert</span>\n    ((<span class="hljs-type">T</span>.sequence\n        [((<span class="hljs-type">Some</span> (<span class="hljs-string">"foo"</span>))[@explicit_arity ]);\n        ((<span class="hljs-type">Some</span> (<span class="hljs-string">"bar"</span>))[@explicit_arity ])])\n       = ((<span class="hljs-type">Some</span> ([<span class="hljs-string">"foo"</span>; <span class="hljs-string">"bar"</span>]))[@explicit_arity ]))\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log (<span class="hljs-type">ListF</span>.<span class="hljs-type">Int</span>.<span class="hljs-type">Show</span>.show [<span class="hljs-number">1</span>; <span class="hljs-number">1</span>; <span class="hljs-number">2</span>; <span class="hljs-number">3</span>; <span class="hljs-number">5</span>; <span class="hljs-number">8</span>])</code></pre>\n      </div>\n    </div>\n  \n<p>See the unit tests for many more examples</p>\n<h2 id="side-effects--io"><a href="#side-effects--io" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Side effects / IO</h2>\n<p>See the <a href="https://github.com/Risto-Stevcev/bs-effects">bs-effects</a> package for sync and async implementations of the "IO monad", and\nthe <a href="https://github.com/Risto-Stevcev/bs-free">bs-free</a> package for free monads and other free structures.</p>\n<h2 id="use-with-ppx_let"><a href="#use-with-ppx_let" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use with ppx_let</h2>\n<p>You can integrate monads with <a href="https://opam.ocaml.org/packages/ppx_let/">ppx_let</a>, a ppx rewriter that provides\n"do notation" sugar for monads. The rewriter expects a <code>Let_syntax</code> module to be in scope, which you can construct\nusing <code>PPX_Let.Make</code>, like so: </p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">OptionLet</span> = <span class="hljs-type">PPX_Let</span>.<span class="hljs-type">Make</span>(<span class="hljs-type">Option</span>.<span class="hljs-type">Monad</span>);;\n\n<span class="hljs-keyword">let</span> add_optionals = <span class="hljs-keyword">fun</span> x y -&gt;\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">OptionLet</span> <span class="hljs-keyword">in</span>\n  <span class="hljs-keyword">let</span>%bind x\' = x <span class="hljs-keyword">in</span> \n  <span class="hljs-keyword">let</span>%bind y\' = y <span class="hljs-keyword">in</span>\n  <span class="hljs-type">Some</span> (x\' + y\');;\n\n<span class="hljs-type">Js</span>.log @@ add_optionals (<span class="hljs-type">Some</span> <span class="hljs-number">123</span>) (<span class="hljs-type">Some</span> <span class="hljs-number">456</span>);; <span class="hljs-comment">(* Some 579 *)</span></code></pre></div>\n<p>Currently as of this writing, there\'s no support for <code>let%bind</code> style syntax for ReasonML, but it\nshould be available in one of the next releases</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>Licensed under the BSD-3-Clause license. See <code>LICENSE</code></p>\n',homepageUrl:"https://github.com/Risto-Stevcev/bs-abstract",repositoryUrl:"https://github.com/Risto-Stevcev/bs-abstract",npmUrl:"https://www.npmjs.com/package/bs-abstract",issuesUrl:"https://github.com/Risto-Stevcev/bs-abstract/issues",slug:"/package/bs-abstract"}},pathContext:{id:"bs-abstract"}}}});
//# sourceMappingURL=path---package-bs-abstract-078922748e131c72b180.js.map