import React from 'react'
import cssStyle from './App.module.css'
import SplitForm from './Split-Forms'
// import ControlledForm from './Forms/ControlledForm'
// import Input from './Inputs/Input'
// import UncontrolledForm from './Forms/UncontrolledForm'

class App extends React.Component {
    render() {
        return (
            <div className={cssStyle.Wrapper}>
                <h1 className={cssStyle.Heading}>This is the heading of the form</h1>
                <hr />
                <SplitForm></SplitForm>
                {/* <ControlledForm></ControlledForm> */}
                {/* <UncontrolledForm></UncontrolledForm> */}
            </div>
        )
    }
}

export default App