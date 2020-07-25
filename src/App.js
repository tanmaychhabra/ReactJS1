import React, {Fragment} from "react"
import Provider from "./Provider.js"
import Context from "./context.js"


const Agents =() =>{
    return(
        <AgentOne />
    )
}

const AgentOne =() =>{
    return(
        <AgentTwo />
    )
}

const AgentTwo =() =>{
    return(
        <AgentBond />
    )
}

const AgentBond =() =>{
    return(
        <Context.Consumer>
            {
                (context) = (
                    <Fragment>
                        <h3>Agent Information</h3>
                        <p>Mission Name:{Context.data.mname}</p>
                    </Fragment>
                )
            }
        </Context.Consumer>
    )
}

const App =() =>{
    return(
        <div>
            <h1>Context API</h1>
            <Provider>
                <Agents />
            </Provider>
        </div>

    )
}

export default App;