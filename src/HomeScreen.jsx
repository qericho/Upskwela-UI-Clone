import Feature from './component/Feature'
import { Hero } from './component/Hero'
import MissionVission from './component/MissionVission'
import Nav from './component/Nav'
import Status from './component/Status'

const HomeScreen = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Status />
            <Feature />
            <MissionVission />
        </>
    )
}

export default HomeScreen