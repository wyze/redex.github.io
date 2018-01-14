webpackJsonp([87653541032130],{1078:function(e,n){e.exports={data:{package:{id:"bs-snabbdom",score:.2581848402005234,name:"bs-snabbdom",version:"0.4.2",description:"Bucklescript bindings to Snabbdom",keywords:[],license:"MIT",updated:"2018-01-10T16:02:53.664Z",stars:null,type:"published",quality:.4555008405656197,popularity:.013908346754773811,maintenance:.3333333333333333,readme:'<h1>Bucklescript + Snabbdom</h1>\n<p>These are <em>experimental and incomplete</em> bindings to <a href="https://github.com/snabbdom/snabbdom">Snabbdom</a> for <a href="http://bucklescript.github.io/bucklescript/">Bucklescript</a>.</p>\n<p><a href="https://jordwest.github.io/bs-snabbdom/">API Documentation</a></p>\n<h2>Why</h2>\n<p><a href="https://github.com/snabbdom/snabbdom">Snabbdom</a> is a small, fast, functional and extensible virtual DOM library that meshes really well with OCaml. Using something like Snabbdom in OCaml can bring you the best parts of languages like Elm plus a tiny bundle size, without a complete architectural overhaul.</p>\n<p>If you\'re already working on a Snabbdom project in JavaScript, you can use these bindings to introduce OCaml for safer types and less runtime errors. Snabbdom components are just functions which return vnodes, so they\'re totally interchangeable between JavaScript and Bucklescript.</p>\n<p>This project was inspired by <a href="https://github.com/OvermindDL1/bucklescript-tea">bucklescript-tea</a>, which provides an almost drop-in replacement of Elm for Bucklescript. I wanted something that provided a functional, type-safe declarative UI language, without adopting the entire Elm architecture. In contrast to Elm and bucklescript-tea, Snabbdom (and <code>bs-snabbdom</code>) does not provide a data model so you\'ll need to bring your own.</p>\n<h2>Introduction</h2>\n<p>This project adds basic OCaml bindings for Snabbdom functions, as well as an OCaml friendly replacement <code>h</code> function for constructing virtual dom nodes.</p>\n<p>In JavaScript, you might write something like the following:</p>\n<pre><code class="language-js">var click_handler = function(e) {\n    console.log(\'Clicked!\', e);\n}\n\nvar vnode = h(\'ul.my-list\', {style: {\'list-style\': \'none\'}}, [\n    h(\'li\', {on: {click: click_handler}}, \'First item\')]),\n    h(\'li\', \'Second item\'),\n]);\n</code></pre>\n<p>In OCaml with bs-snabbdom, the equivalent is:</p>\n<pre><code class="language-ocaml">let click_handler e =\n    Js.log2 "Clicked!" e\nin\n\nlet vnode = h "ul.my-list" [style "list-style" "none"; children [\n    h "li" [click click_handler; text "First item";]\n    h "li" [text "Second item"];\n]]\n</code></pre>\n<p>The main difference when compared to JavaScript is that the <code>h</code> function here always takes two arguments:</p>\n<pre><code class="language-ocaml">h : string -> vnode_transformer list -> vnode\n</code></pre>\n<p>The first parameter - the element selector (eg: <code>"ul.my-list"</code>) - remains the same.</p>\n<p>The second parameter takes a list of transformer functions. These transformers describe how to alter the vnode - whether that\'s setting a property on the <code>data</code> object, adding children, or setting the node\'s text.</p>\n<h2>Getting started</h2>\n<h3>Install Bucklescript</h3>\n<p>If you\'re starting from scratch, or adding bucklescript to an existing JavaScript project, you\'ll first need to install the Bucklescript compiler:</p>\n<pre><code class="language-sh">npm install bs-platform\n./node_modules/.bin/bsb -init .\n</code></pre>\n<p>See the <a href="http://bucklescript.github.io/bucklescript/">Bucklescript docs</a> for more details.</p>\n<h3>Install <code>bs-snabbdom</code> and <code>snabbdom</code></h3>\n<ol>\n<li>Install with your package manager of choice:</li>\n</ol>\n<pre><code class="language-sh">npm install snabbdom bs-snabbdom\n</code></pre>\n<ol start="2">\n<li>Let the Bucklescript compiler know about bs-snabbdom. Add the dependency to <code>bsconfig.json</code> in your project directory:</li>\n</ol>\n<pre><code class="language-js">{\n    /* ... */\n    "bs-dependencies" : ["bs-snabbdom"],\n    /* ... */\n}\n</code></pre>\n<h3>Write some code</h3>\n<pre><code class="language-ocaml">open Snabbdom.Base\n\n(* Define a function that returns a new virtual dom node *)\nlet view title =\n  h "div" [\n    style "box-shadow" "0px 0px 10px black";\n    children [\n      h "h1" [text ("Hello, " ^ title ^ "!")];\n      h "ol" [children [\n        h "li" [text "Item 1"];\n        h "li" [text "Item 2"];\n        h "li" [text "Item 3"];\n      ]]\n    ]\n  ]\n\n(* Create a patch function from an array of Snabbdom modules *)\nlet patch = init [|module_style|]\n\n(* Patch a dom element with id "#app" to the new virtual dom node *)\nlet () = patch (VNode.from_dom_id "app") (view "Snabbdom")\n</code></pre>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/bs-snabbdom",issuesUrl:null,slug:"packages/bs-snabbdom"}},pathContext:{id:"bs-snabbdom"}}}});
//# sourceMappingURL=path---packages-bs-snabbdom-3f018ecba3d9eab7e1e7.js.map