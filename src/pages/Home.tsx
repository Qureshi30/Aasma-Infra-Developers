import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HomeAbout from '../components/HomeAbout'
import FeaturedProjects from '../components/FeaturedProjects'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

const Home = () => {
    return (
        <>
            <Hero />
            <HomeAbout />
            <Stats />
            <FeaturedProjects />
            <Testimonials />
            <CallToAction />
        </>
    )
}

export default Home
