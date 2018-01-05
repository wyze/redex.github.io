webpackJsonp([0xf10d92117399],{1060:function(t,e){t.exports={data:{package:{id:"bs-react-notification-system",score:.3853130909493231,name:"bs-react-notification-system",version:"0.0.6",description:"Reason bindings for react-notification-system",keywords:["reason-react","react","react-component","bucklescript","react-notification-system"],license:"MIT",updated:"2017-12-29T12:28:27.636Z",stars:0,type:"published",quality:.49614068758449115,popularity:.014329411268293683,maintenance:.6613016878002085,readme:'<h1>Reason bindings for react-notification-system</h1>\n<p><a href="https://www.npmjs.com/package/bs-react-notification-system"><img src="https://img.shields.io/npm/v/bs-react-notification-system.svg" alt="npm"></a>  </p>\n<p><a href="https://reasonml.github.io/">Reason</a> bindings for <a href="https://github.com/igorprado/react-notification-system">react-notification-system</a>.</p>\n<h2>Status</h2>\n<p>🚧 This is a WIP, not everything is supported yet. 🚧</p>\n<p>Feel free to create an issue or PR if you find anything missing.</p>\n<h2>Installation</h2>\n<pre><code>yarn add bs-react-notification-system\nyarn add react-notification-system@0.2.x\n</code></pre>\n<p>Then add <code>bs-react-notification-system</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<pre><code class="language-json">{\n  ...\n  "bs-dev-dependencies": ["bs-react-notification-system"]\n}\n</code></pre>\n<h2>Usage</h2>\n<pre><code class="language-reason">type action =\n  | AddNotification(string);\n\ntype state = {\n    _notificationSystem: ref(option(ReasonReact.reactRef)),\n};\n\nlet setNotificationSystemRef = (notificationRef, {ReasonReact.state}) => \n  state._notificationSystem := Js.Nullable.to_opt(notificationRef) ;\n\nlet component = ReasonReact.reducerComponent("Notifications");\n\nlet addNotification = (message, state) => {   \n    switch state._notificationSystem^ {\n    | None => ()\n    | Some(r) => ReasonReact.refToJsObj(r)##addNotification({"message": message, "level": "success"});      \n    }\n};\n\nlet make = (_children) => {\n    ...component,\n    initialState: () => {_notificationSystem: ref(None) },\n    reducer: (action, state) =>\n        switch action {\n            | AddNotification(message) =>  ReasonReact.SideEffects(((_) => addNotification(message, state)))\n        },\n    render: ({handle, reduce}) => (\n    &#x3C;div>             \n        &#x3C;ReactNotificationSystem ref=(handle(setNotificationSystemRef)) />\n        &#x3C;button onClick=(reduce( (_) => AddNotification("Hello"))) > (ReasonReact.stringToElement("Click")) &#x3C;/button> \n    &#x3C;/div>\n  )\n};\n</code></pre>\n<h2>Bindings</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> NotificationSystem</li>\n</ul>\n',homepageUrl:"https://github.com/bernalrs/bs-react-notification-system#readme",repositoryUrl:"https://github.com/bernalrs/bs-react-notification-system",npmUrl:"https://www.npmjs.com/package/bs-react-notification-system",issuesUrl:"https://github.com/bernalrs/bs-react-notification-system/issues",slug:"packages/bs-react-notification-system"}},pathContext:{id:"bs-react-notification-system"}}}});
//# sourceMappingURL=path---packages-bs-react-notification-system-15ffd192e209dbec9925.js.map