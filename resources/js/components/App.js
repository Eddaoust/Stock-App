import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" render={() => <h1>Hallo</h1>}/>
                    <Route path="/" render={() => <h2>Gros caca</h2>}/>
                </div>
            </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
