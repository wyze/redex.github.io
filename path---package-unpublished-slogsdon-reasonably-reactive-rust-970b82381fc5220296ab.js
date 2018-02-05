webpackJsonp([0x70d8053ae0e1],{1180:function(e,a){e.exports={data:{package:{id:"unpublished/slogsdon/reasonably-reactive-rust",stars:0,name:"slogsdon/reasonably-reactive-rust",version:"0.1.0",category:"boilerplate",flags:["neglected"],platforms:["node"],description:"",keywords:["boilerplate"],license:"MIT",updated:"2018-02-05T15:49:29.673Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="reasonably-reactive-rust"><a href="#reasonably-reactive-rust" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reasonably Reactive Rust</h1>\n<blockquote>\n<p>Demo/starter project using Reason + React and Rust + Rocket</p>\n</blockquote>\n<p>Featuring:</p>\n<ul>\n<li><a href="https://www.rust-lang.org/">Rust</a> + <a href="https://rocket.rs">Rocket</a></li>\n<li><a href="https://reactjs.org/">React</a></li>\n<li><a href="https://reasonml.github.io/">Reason</a> + <a href="https://reasonml.github.io/reason-react/">ReasonReact</a></li>\n<li><a href="https://parceljs.org/">Parcel</a></li>\n</ul>\n<h3 id="reasoning"><a href="#reasoning" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reasoning</h3>\n<p>This project was primarily created to combine some new technologies in order to see what a more complete project could look like and how the individual parts would work together. Specifics:</p>\n<ul>\n<li>Rust: fast and safe code without garbage collection</li>\n<li>Rocket: developer-focused conveniences over type safe code</li>\n<li>Reason and ReasonReact: type safe interactions React and JavaScript</li>\n<li>Parcel: frontend asset bundling with minimal configuration</li>\n</ul>\n<h2 id="requirements"><a href="#requirements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Requirements</h2>\n<ul>\n<li><a href="https://nodejs.org/">Node.js</a></li>\n<li><a href="https://yarnpkg.com/docs/install/">Yarn</a> or <a href="https://docs.npmjs.com/getting-started/installing-node">npm</a></li>\n<li><a href="https://reasonml.github.io/docs/global-installation.html">Reason</a></li>\n<li><a href="https://www.rust-lang.org/install.html">Rust nightly</a></li>\n<li><a href="https://github.com/passcod/cargo-watch"><code>cargo-watch</code></a> if you want to use the <code>yarn develop</code> script</li>\n</ul>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>rustup <span class="hljs-keyword">override</span> <span class="hljs-keyword">set</span> nightly\nyarn install\nyarn develop</code></pre></div>\n<p><code>yarn develop</code> will run Parcel in watch mode and leverage <code>cargo-watch</code> to rebuild frontend and backend applications on file change.</p>\n<h2 id="building-for-production"><a href="#building-for-production" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Building for Production</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn build\ncargo build --release</code></pre></div>\n<p>The result can be started with:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>ROCKET_ENV=production cargo run --release</code></pre></div>\n<p>or your preferred manner.</p>\n<h2 id="need-a-reset"><a href="#need-a-reset" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Need a Reset?</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn clean</code></pre></div>\n<h2 id="faq"><a href="#faq" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>F.A.Q.</h2>\n<dl>\n  <dt>Parcel is too new/unproven and/or is missing <code>$FEATURE</code>. Can it be changed out for <code>$PREFERRED_BUNDLER</code>?</dt>\n  <dd>Parcel was specifically chosen for this purpose because it requires minimal configuration to get started. To swap it out, remove Parcel as a dependency (e.g. <code>yarn remove parcel-bundler</code>), add another bundler (e.g. <code>yarn add --dev $PREFERRED_BUNDLER</code>), and update the <code>scripts</code> in <code>package.json</code> to use that bundler.</dd>\n  <dt>Rust nightly changes too frequently. What now?</dt>\n  <dd>Rust stable will need to be setup as the default for the project (e.g. <code>rustup override set stable</code>). This would require a change from Rocket to something else. See below.</dd>\n  <dt>Rocket has too much magic. What are alternative options?</dt>\n  <dd><a href="http://www.arewewebyet.org/">Are we <em>web</em> yet?</a> has a list of potential alternatives. Once one has been selected, replace Rocket specific dependencies in <code>Cargo.toml</code> and code in <code>src</code> with <code>$PREFERRED_WEB_FRAMEWORK</code> related goodies.</dd>\n</dl>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>This project is licensed under the MIT License. See <a href="LICENSE">LICENSE</a> for more details.</p>\n',homepageUrl:null,repositoryUrl:"https://github.com/slogsdon/reasonably-reactive-rust",npmUrl:null,issuesUrl:null,slug:"/package/unpublished/slogsdon/reasonably-reactive-rust"}},pathContext:{id:"unpublished/slogsdon/reasonably-reactive-rust"}}}});
//# sourceMappingURL=path---package-unpublished-slogsdon-reasonably-reactive-rust-970b82381fc5220296ab.js.map