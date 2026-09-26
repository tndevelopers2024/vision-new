import HeroSlider from '../components/sections/HeroSlider/HeroSlider.jsx'
import BusinessSetup from '../components/sections/BusinessSetup/BusinessSetup.jsx'
import OurStory from '../components/sections/OurStory/OurStory.jsx'
import WhoWeWorkWith from '../components/sections/WhoWeWorkWith/WhoWeWorkWith.jsx'
import OurServices from '../components/sections/OurServices/OurServices.jsx'
import CoreValues from '../components/sections/CoreValues/CoreValues.jsx'
import Testimonials from '../components/sections/Testimonials/Testimonials.jsx'
import MinimalContact from '../components/sections/MinimalContact/MinimalContact.jsx'

/** Vision Business Setup — homepage sections, in order. */
export default function Home() {
  return (
    <>
      <HeroSlider />       {/* 1  hero: "Every Business starts with Vision" */}
      <BusinessSetup />    {/* 2  Mainland / Free Zone / Offshore           */}
      <OurServices />      {/* 3  Licence / Visa / Finance & Banking        */}
      <OurStory />         {/* 4  About Us / Why Vision (est. 2015)         */}
      <MinimalContact />   {/* 5  Every Business starts with Vision form    */}
      <WhoWeWorkWith />    {/* 6  five industries                           */}
      <CoreValues />       {/* 7  seven core values                         */}
      <Testimonials />     {/* 8  client testimonials slider                */}
    </>
  )
}
