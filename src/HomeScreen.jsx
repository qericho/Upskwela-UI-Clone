import Feature from './component/Feature'
import { Hero } from './component/Hero'
import Nav from './component/Nav'
import Status from './component/Status'

const HomeScreen = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Status />
            <Feature />
        </>
    )
}

export default HomeScreen