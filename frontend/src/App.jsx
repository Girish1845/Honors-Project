import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./create/createBlog";
import Allpost from "./Headernavbar/allpost";
import Login from "./loginsignup/login";
import Signup from "./loginsignup/signup";
import AdminLogin from "./loginsignup/adminlogin";
import Singlepost from "./Headernavbar/onepost";
import Admin from "./bloglistcardlist/Admin";
import CardList from "./bloglistcardlist/CardList";
import BlogList from "./bloglistcardlist/BlogList";
import ProfilePage from "./create/profilePage";
import EditProfile from "./create/editProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/createblog" element={<CreateBlog />} />
          <Route exact path="/" element={<Allpost />} />
          <Route exact path="/post/:id" element={<Singlepost />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/userprofile" element={<ProfilePage />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="manage-users" element={<CardList />} />
            <Route path="manage-posts" element={<BlogList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
