webpackJsonp([0xfab2b15d553d],{1074:function(e,t){e.exports={data:{package:{id:"bs-react-pdf",score:.47138279363100744,name:"bs-react-pdf",version:"0.0.13",description:"react-pdf bindings for bucklescript",keywords:["ocaml","bucklescript","react-pdf"],license:"MIT",updated:"2018-01-09T08:12:39.873Z",stars:1,type:"published",quality:.3692621575088775,popularity:.03608400071850061,maintenance:.9942135603624829,readme:'<h1>bs-react-pdf <a href="https://www.npmjs.com/package/bs-react-pdf"><img src="https://img.shields.io/npm/v/bs-react-pdf.svg?style=flat-square" alt="npm version"></a></h1>\n<p><a href="https://github.com/diegomura/react-pdf">react-pdf</a> bindings for <a href="https://bucklescript.github.io/bucklescript/">bucklescript</a></p>\n<h2>Installation</h2>\n<ol>\n<li><code>$ npm i bs-react-pdf</code></li>\n<li>Add <code>bs-react-pdf</code> to <code>bs-dependencies</code> section of your <code>bsconfig.json</code></li>\n</ol>\n<h2><a href="https://github.com/meafmira/bs-react-pdf/tree/master/examples">Examples</a></h2>\n<h3>Document</h3>\n<pre><code class="language-reason">open ReactPdf.Core;\n\nlet styles =\n  StyleSheet.create({\n    "page": {"flexDirection": "row", "backgroundColor": "#fff"},\n    "section": {"margin": 10, "padding": 10, "flexGrow": 1}\n  });\n\nlet component = ReasonReact.reducerComponent("MyDocument");\n\nlet make = (_children) => {\n  ...component,\n  reducer: ((), _state: unit) => ReasonReact.NoUpdate,\n  render: (_self) =>\n    &#x3C;Document>\n      &#x3C;Page size="A4" style=styles##page>\n        &#x3C;View style=styles##section>\n          &#x3C;Text key="hello"> (ReasonReact.stringToElement("Section #1")) &#x3C;/Text>\n        &#x3C;/View>\n        &#x3C;View style=styles##section>\n          &#x3C;Text> (ReasonReact.stringToElement("Section #2")) &#x3C;/Text>\n        &#x3C;/View>\n      &#x3C;/Page>\n    &#x3C;/Document>\n};\n</code></pre>\n<h3>Save in a file</h3>\n<pre><code class="language-reason">ReactPdfNode.render(&#x3C;MyDocument />, "example.pdf")\n|> Js.Promise.then_(() => Js.Promise.resolve @@ Js.log("Pdf created"));\n</code></pre>\n',homepageUrl:"https://github.com/meafmira/bs-react-pdf#readme",repositoryUrl:"https://github.com/meafmira/bs-react-pdf",npmUrl:"https://www.npmjs.com/package/bs-react-pdf",issuesUrl:"https://github.com/meafmira/bs-react-pdf/issues",slug:"packages/bs-react-pdf"}},pathContext:{id:"bs-react-pdf"}}}});
//# sourceMappingURL=path---packages-bs-react-pdf-51508aed354715007889.js.map