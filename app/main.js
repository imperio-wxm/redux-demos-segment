import React from 'react'
import { Button } from 'antd'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers/reducers.js'
import App from './containers/App.js'
import { Provider } from 'react-redux'

//创建store Redux 应用只有一个单一的 store
let store = createStore(todoApp)

class AppTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        return (
          <div>
            <Button type="primary" shape="circle" icon="search" />
            <Button type="primary" icon="search">Search</Button>
            <Button shape="circle" icon="search" />
            <Button icon="search">Search</Button>
            <br />
            <Button type="ghost" shape="circle" icon="search" />
            <Button type="ghost" icon="search">Search</Button>
            <Button type="dashed" shape="circle" icon="search" />
            <Button type="dashed" icon="search">Search</Button>
            <Provider store={store}>
              <App />
            </Provider>
          </div>
        );
    }
}

render(<AppTest/>, document.getElementById('app'));
