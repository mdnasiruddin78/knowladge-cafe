import './App.css'
import Header from './components/header/header'
import Blogs from './components/Blogs/blogs'
import Bookmark from './components/bookmarks/bookmark'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
