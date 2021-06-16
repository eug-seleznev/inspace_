import { observer } from "mobx-react"
import './constructor.sass'
import ComponentProperties from './components/componentProperties'
import ComponentsOfPage from './components/componentsOfPage'
import MobBrowser from './components/mobBrowser'
import PagesList from './components/pagesList'


const Constructor = observer(() => {


    return( 
        <div className='constructor__container'>
            <div className='constructor__navigator'>
                <PagesList />
                <ComponentsOfPage />
            </div>
                <MobBrowser />
                <ComponentProperties />
        </div>
    )
})


export default Constructor