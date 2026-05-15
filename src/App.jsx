import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Chefs from './pages/Chefs';
import ChefSingle from './pages/ChefSingle';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import ImageGallery from './pages/ImageGallery';
import Index2 from './pages/Index2';
import IndexSlider from './pages/IndexSlider';
import IndexVideo from './pages/IndexVideo';
import Page404 from './pages/Page404';
import Services from './pages/Services';
import ServiceSingle from './pages/ServiceSingle';
import Testimonial from './pages/Testimonial';
import VideoGallery from './pages/VideoGallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-single" element={<BlogSingle />} />
          <Route path="chefs" element={<Chefs />} />
          <Route path="chef-single" element={<ChefSingle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="image-gallery" element={<ImageGallery />} />
          <Route path="index-2" element={<Index2 />} />
          <Route path="index-slider" element={<IndexSlider />} />
          <Route path="index-video" element={<IndexVideo />} />
          <Route path="404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
          <Route path="services" element={<Services />} />
          <Route path="service-single" element={<ServiceSingle />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="video-gallery" element={<VideoGallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
