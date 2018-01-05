webpackJsonp([0x631bf98b18ee],{1051:function(e,o){e.exports={data:{package:{id:"bs-most",score:.5721985254676822,name:"bs-most",version:"0.1.1",description:"Reason/BuckleScript bindings for the Most.js reactive toolkit Edit",keywords:["async","reactive","most","functional","streams","most.js","promise","ocaml","bucklescript"],license:"MIT",updated:"2017-12-23T01:13:56.379Z",stars:16,type:"published",quality:.6948740795327276,popularity:.04545634395998546,maintenance:.993790232062483,readme:'<h1>bs-most</h1>\n<p>BuckleScript bindings for <a href="https://github.com/cujojs/most">Most.js</a>.</p>\n<p>In <a href="https://reasonml.github.io/">Reason</a>:</p>\n<pre><code class="language-reason">let add x y => x + y;\nlet isEven x => x mod 2 === 0;\n\nMost.(\n  fromList [0,1,2,3,4,5,6,7,8]\n  |> map (add 2)\n  |> filter isEven\n  |> observe (fun x => Js.log x)\n  |> Js.Promise.then_ (fun _ => {\n    Js.log "Stream completed";\n    Js.Promise.resolve ()\n  })\n);\n\n/**\n * Logs:\n * 2\n * 4\n * 6\n * 8\n * 10\n * Stream completed\n **/\n</code></pre>\n<h2>How do I install it?</h2>\n<p>Inside of a BuckleScript project:</p>\n<pre><code>npm install --save bs-most\n</code></pre>\n<p>Then add <code>bs-most</code> to your <code>bs-dependencies</code> in <code>bsconfig.json</code>:</p>\n<pre><code>{\n  ...\n  "bs-dependencies": [\n    "bs-most"\n  ]\n}\n</code></pre>\n<h2>How do I use it?</h2>\n<p>The Most.js <a href="https://github.com/cujojs/most/blob/master/docs/api.md">API docs</a> are probably the best source of information about each method. This library attempts to provide very low-level bindings, except for what\'s noted in the <strong>What\'s different</strong> section.</p>\n<p>The bindings are a single file in <code>src/most.re</code>. I try to provide comments next to each binding and am working on flushing out tests so that users can refer to them.</p>\n<p>I am also available by e-mail or DM on the Reason discord (username: @lilactown). </p>\n<h2>What\'s missing</h2>\n<ol>\n<li><code>generate</code> - Reason doesn\'t have generator support yet</li>\n<li><code>transduce</code> - Awkward to use in Reason/OCaml without a solid transducer impl (maybe coming soon?? 😉)</li>\n<li><code>combineArray</code> - the callback for this is variadic (depending on how many streams you have in the array), not sure how to type it yet 😞</li>\n</ol>\n<h2>What\'s different</h2>\n<ol>\n<li>Predicates that normally return "truthy" values, now only accept returning booleans</li>\n<li><code>sample</code> is variadic so we offer <code>sample1</code>, <code>sample2</code>, <code>sample3</code>... <code>sample6</code></li>\n<li><code>fromEvent</code> - DOM events are supported, but generic <code>EventEmitter</code>\'s are not yet</li>\n<li><code>from</code> only works on arrays right now; generic iterators must be coerced</li>\n<li><code>fromList</code> is a function that creates a stream from a Reason <code>List</code> type, e.g. <code>fromList([1, 2, 3])</code></li>\n<li><code>unfold</code> is modeled a bit differently - instead of taking in a JS object <code>{ done, value, seed }</code>, it takes an <code>option (value, seed)</code>.\nExample:</li>\n</ol>\n<pre><code class="language-reason">/* emits 2,4,6 then completes */\nMost.unfold\n  (\n    fun seed =>\n      if (seed &#x3C; 4) {\n        let nextSeed = seed + 1;\n        Some (seed * 2, nextSeed)\n      } else {\n        None\n      }\n  )\n  1;\n</code></pre>\n<h1>Subjects</h1>\n<p>This library also includes some bindings for <a href="https://github.com/mostjs-community/subject">Subjects</a>. Subjects are very useful for e.g. implementing a state store/dispatch system. The API is a little bit different from the raw <code>most-subject</code> library:</p>\n<ul>\n<li><code>Subject.make</code>: creates an <a href="https://github.com/mostjs-community/subject#asynct-subjectt">asynchronous Subject</a></li>\n<li><code>Subject.asStream</code>: casts a subject to a stream, to be used by the rest of the <code>Most</code> module</li>\n<li><code>Subject.next</code>: emits a value on a subject</li>\n<li><code>Subject.error</code>: emits an error on a subject</li>\n<li><code>Subject.complete</code>: completes a subject with no value</li>\n<li><code>Subject.completeWith</code>: completes a subject with a value</li>\n</ul>\n<h2>Build</h2>\n<pre><code>npm run build\n</code></pre>\n<h2>Build + Watch</h2>\n<pre><code>npm run watch\n</code></pre>\n<h2>Testing</h2>\n<pre><code>npm run test\n</code></pre>\n',homepageUrl:"https://github.com/Lokeh/bs-most#readme",repositoryUrl:"https://github.com/Lokeh/bs-most",npmUrl:"https://www.npmjs.com/package/bs-most",issuesUrl:"https://github.com/Lokeh/bs-most/issues",slug:"packages/bs-most"}},pathContext:{id:"bs-most"}}}});
//# sourceMappingURL=path---packages-bs-most-142a8ced1891e2c92398.js.map