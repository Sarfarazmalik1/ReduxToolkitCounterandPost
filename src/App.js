import { useSelector } from 'react-redux';
import './App.css';
import { Navbar } from './components/Navbar';
import Post from './features/posts/Post';
import Product from './components/Product';
import Shop from './components/Shop';
import AddPostForm from './features/posts/AddPostForm';

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Shop />
        <Post />
        <AddPostForm />
        {/* <Product /> */}
      </div>
    </>
    
  );
}

export default App;
