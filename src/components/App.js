import { Fragment } from 'react'
import '../sass/App.scss'
import Header from './Header'
import Characters from './Characters'
import '../sass/main.sass'

const App = () => {
    return (
        <Fragment>
            <Header title="Rick y Morty - API"/>
            <Characters />
        </Fragment>
    )
}

export default App