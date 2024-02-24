import { register } from 'swiper/element/bundle';
// register Swiper custom elements

import { Navbar} from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedAuthors } from './components/featuredAuthors'
import { TopSellingBooks } from './components/TopSellingBooks';
import { FeaturedBooks } from './components/FeaturedBooks';
import { Weekbook } from './components/weekbook';
import { Foooter } from './components/footer';
register();

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedAuthors/>
      <TopSellingBooks/>
      <FeaturedBooks/>
      <Weekbook/>
      <Foooter/>

    </>
  )
}

export default App