import React  from 'react';
import Category from './Category';
import FeaturedProducts from './FeaturedProducts';
import ProductSmallSlider from './ProductSmallSlider';
import NewPosts from './NewPosts';
import Banner from './Banner';
import HoangNguyen from './HoangNguyen';


const Homepage = () => {
  return (
    <>
      <Category />
      <FeaturedProducts />
      <Banner />
      <ProductSmallSlider/>
      <NewPosts />
      <HoangNguyen />
    </>
  )
}

export default Homepage;
