import React  from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('TestStore')
@withRouter
@observer

export default  class App extends React.Component {

    render(){
        this.props.TestStore.data = 'HAI'
        return(
            <div>
                <h1>{this.props.TestStore.data}</h1>
            </div>
        )
    }
}