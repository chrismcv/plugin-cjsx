React = System.amdRequire 'react'


App = React.createClass
  render: ->
    <div id="cjsx">Hello CJSX!!</div>


React.render(<App />, document.body)
