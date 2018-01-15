webpackJsonp([0xe05d9c9a9bce],{1065:function(e,t){e.exports={data:{package:{id:"bs-next",score:.519893919079502,name:"bs-next",version:"2.0.0",description:"Reason bindings for Next.js",keywords:["reason-react","bucklescript","next.js"],license:"MIT",updated:"2018-01-15T09:11:21.961Z",stars:12,type:"published",quality:.5116063697023829,popularity:.04695793633110814,maintenance:.9999335155797122,readme:'<h1>bs-next</h1>\n<p><a href="https://reasonml.github.io">Reason</a> bindings for\n<a href="https://github.com/zeit/next.js">Next.js</a> 4.</p>\n<h2>API</h2>\n<p>Bindings are provided for the only two components provided by Next.js:</p>\n<ul>\n<li><a href="https://github.com/zeit/next.js/tree/4.1.4#populating-head"><code>Next.Head</code></a></li>\n<li><a href="https://github.com/zeit/next.js/tree/4.1.4#with-link"><code>Next.Link</code></a></li>\n</ul>\n<h2>Example</h2>\n<pre><code class="language-reason">let component = ReasonReact.statelessComponent("Index");\n\nlet make = (_children) => {\n  ...component,\n  render: (_self) =>\n    &#x3C;div>\n      &#x3C;Next.Head>\n        &#x3C;title> (ReasonReact.stringToElement("My Page Title")) &#x3C;/title>\n      &#x3C;/Next.Head>\n\n      &#x3C;Next.Link href="/about">\n        &#x3C;a> (ReasonReact.stringToElement("About")) &#x3C;/a>\n      &#x3C;/Next.Link>\n    &#x3C;/div>\n}\n</code></pre>\n',homepageUrl:"https://github.com/ulrikstrid/bs-next#readme",repositoryUrl:"https://github.com/ulrikstrid/bs-next",npmUrl:"https://www.npmjs.com/package/bs-next",issuesUrl:"https://github.com/ulrikstrid/bs-next/issues",slug:"packages/bs-next"}},pathContext:{id:"bs-next"}}}});
//# sourceMappingURL=path---packages-bs-next-a7abff5b07b4d378958b.js.map