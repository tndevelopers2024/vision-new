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
      <OurStory />         {/* 3  Why Vision / Our Story (est. 2015)        */}
      <WhoWeWorkWith />    {/* 4  five industries                          */}
      <OurServices />      {/* 5  Licence / Visa / Finance & Banking        */}
      <CoreValues />       {/* 6  seven core values                        */}
      <Testimonials />     {/* 7  client testimonials slider               */}
      <MinimalContact />   {/* 8  minimal callback form                    */}
    </>
  )
}
