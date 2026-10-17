import Hero from '../Components/Hero';
import AboutHome from '../Components/aboutHome';
import PopularDishes from '../Components/Dishes';
import OurStory from '../Components/OurStory';
import HowWeWork from '../Components/HowItWorks';
import Gallery from '../Components/Gallery';
import Testimonials from '../Components/Testimonials';
import Faq from '../Components/Faq';
import Contact from '../Components/contact';
import Footer from '../Components/Footer';
function Home(){
    return(
        <>
            {/* <Navbar/> */}
            <Hero/>
            <AboutHome/>
            <PopularDishes/>
            <OurStory/>
            <HowWeWork/>
            <Gallery/>
            <Testimonials/>
            <Faq/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;