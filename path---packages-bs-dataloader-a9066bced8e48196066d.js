webpackJsonp([85289507329906],{1046:function(e,a){e.exports={data:{package:{id:"bs-dataloader",score:.590161495511269,name:"bs-dataloader",version:"0.3.0",description:"This is a rewrite in reasonml of https://github.com/facebook/dataloader/blob/master/src/index.js",keywords:["dataloader","bucklescript"],license:"MIT",updated:"2018-01-12T13:27:55.565Z",stars:20,type:"published",quality:.7403090010187077,popularity:.05273310637010923,maintenance:.99889202278891,readme:'<h1>bs-dataloader</h1>\n<p><a href="https://circleci.com/gh/ulrikstrid/bs-dataloader"><img src="https://circleci.com/gh/ulrikstrid/bs-dataloader.svg?style=svg" alt="CircleCI"></a></p>\n<p>This is a rewrite of <a href="https://github.com/facebook/dataloader">dataloader js lib</a> in reasonml for use with BuckleScript. I have a goal to make it work with native OCaml in the future but I still rely on some JavaScript structures.</p>\n<h2>Usage</h2>\n<pre><code class="language-re">module UserLoaderImpl = {\n  type value = user;\n  type key = userId;\n  /* The batchLoadFun needs to wrap the returned values in Js.Result.t so that we can reject each promise instead of all */\n  let batchLoadFun userIds => batchGetUsers userIds;\n  let options: options = {batch: true, maxBatchSize: 256, cache: true};\n};\n\nmodule UserLoader = DataLoader.Make UserLoaderImpl;\n\nUserLoader.load "1"\n|> Js.Promise.then_ (\n  fun user => displayUser user;\n  Js.Promise.resolve ()\n);\n\n/* elsewhere in your app */\n\nUserLoader.load "2"\n|> Js.Promise.then_ (\n  fun user => interactWithUser user;\n  Js.Promsie.resolve()\n);\n</code></pre>\n<p>The example above will load both users at the same time with 1 request.\nIf we later need one of the loaded users again we will get a cached version of the promise, if you need a new version from the server you can clear the key.</p>\n<pre><code class="language-re">updateUser ::userId ::userPatch\n|> Js.Promise.then_ (fun _ => Js.Promise.resolve (UserLoader.clear userId))\n|> Js.Promise.then_ (fun _ => UserLoader.load "1")\n|> Js.Promise.then_ (\n  fun user => displayUser user;\n  Js.Promise.resolve ()\n)\n</code></pre>\n<h2>Development</h2>\n<h3>Build</h3>\n<pre><code>npm run build\n</code></pre>\n<h3>Build + Watch</h3>\n<pre><code>npm run watch\n</code></pre>\n<h3>Test</h3>\n<pre><code>npm run test\n</code></pre>\n<h3>Editor</h3>\n<p>If you use <code>vscode</code>, Press <code>Windows + Shift + B</code> it will build automatically</p>\n',homepageUrl:"https://github.com/ulrikstrid/bs-dataloader#readme",repositoryUrl:"https://github.com/ulrikstrid/bs-dataloader",npmUrl:"https://www.npmjs.com/package/bs-dataloader",issuesUrl:"https://github.com/ulrikstrid/bs-dataloader/issues",slug:"packages/bs-dataloader"}},pathContext:{id:"bs-dataloader"}}}});
//# sourceMappingURL=path---packages-bs-dataloader-a9066bced8e48196066d.js.map