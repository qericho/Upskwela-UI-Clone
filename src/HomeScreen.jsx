import Feature from './component/Feature'
import Footer from './component/Footer'
import Hero from './component/Hero'
import MissionVission from './component/MissionVission'
import Nav from './component/Nav'
import Social from './component/Social'
import Status from './component/Status'

const HomeScreen = () => {
    return (
        <>
            <div className='px-2 lg:px-5'>
                <Nav />
                <Hero />
                <Status />
                <Feature />
                <MissionVission />
                <Social />
            </div>
            <Footer />
        </>
    )
}

export default HomeScreen
