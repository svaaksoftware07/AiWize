import NotFound from "../components/error/NotFound";
import About from "../pages/about/About";
import Blogs from "../pages/blogs/Blogs";
import BlogPage from "../pages/blogs/RecentBlog/BlogPage/BlogPage";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";


const data=[
    {path:"*", name:"Not found",element:<NotFound/> , isPrivate:false},
    {path:"/", name:"Home",element:<Home/> , isPrivate:false},
    {path:"/about", name:"About",element:<About/> , isPrivate:false},
    {path:"/blogs", name:"Blogs",element:<Blogs/> , isPrivate:false},
    {path:"/contact", name:"Contact",element:<Contact/> , isPrivate:false},
    {path:"/product/:name", name:"Product Name",element:<Products/> , isPrivate:false},
    {path:"/blog/:id", name:"Blog Name",element:<BlogPage/> , isPrivate:false},
]

export default data