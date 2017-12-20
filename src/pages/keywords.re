open! Rebase;
open! Helpers;

let getPackages = keyword =>
  keyword##packages |> Array.map(Js.toOption)
                    |> Array.filter(
                       fun | Some(value) => true
                           | None => {
                             Js.log("missing package on keyword: " ++ keyword##name);
                             false
                           })
                    |> Array.map(Option.getOrRaise)
                    |> Js.Array.sortInPlaceWith((a, b) => compare(a##name, b##name));

let component = ReasonReact.statelessComponent("Keywords");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div>
      <Control.Map items=(data##keywords |> Graphql.getNodes)>
        ...(keyword => 
          <div key=keyword##name>
            <h2> {keyword##name |> text} </h2>
            <Control.Map items=getPackages(keyword)>
              ...(package => <PackageSummary key=package##id package />)
            </Control.Map>
          </div>
        )
       </Control.Map>
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component=component, jsProps => make(~data=jsProps##data, [||]));

[%%raw {|
  export const query = graphql`
    query KeywordsQuery {
      keywords: allKeywords(sort: { fields: [name] }) {
        edges {
          node {
            name

            packages {
              type
              id
              name
              version
              description
              keywords
              license
              updated
              stars
              slug
            }
          }
        }
      }
    }
  `
|}];
