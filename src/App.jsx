import Home from './routes/Home.component';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.component';
import SignUp from './components/signup/SignUp.component';
import LogIn from './components/login/LogIn.component';
import FAQ from './components/FAQ';
import FAQTwo from './components/FAQTwo';
import Blog from './components/blog/Blog.component';
import TechBlog from './components/techblog/TechBlog.component';
import AdditionalBlog from './components/blog/AdditionalBlog.component';
import About from './components/about/About.component';
import Modal from './components/logoutmodal/Modal.component';
import GoToTop from './gotoTopOnRouting/GoToTop.component';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Layout />}>
          <Route index element={<Home />} />
          <Route path='Blog' element={<Blog />} />
          <Route path='TechBlog' element={<TechBlog />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='LogIn' element={<LogIn />} />
          <Route path='FAQ' element={<FAQ />} />
          <Route path='FAQTwo' element={<FAQTwo />} />
          <Route path='AdditionalBlog' element={<AdditionalBlog />} />
          <Route path='About' element={<About />} />
          <Route path='Modal' element={<Modal />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;