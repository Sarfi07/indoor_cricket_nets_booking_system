import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import OAuthCallback from "./components/OAuthCallback";
import FindPeople from "./components/dashboard/FindPeople";
import { Feed } from "./components/utils/Feed";
import { useState, useEffect } from "react";
import { userObj } from "./components/CustomTypes";
import UserProfile from "./components/dashboard/UserProfile";
import Requests from "./components/Requests";
import Connections from "./components/Connections";
import DashboardLayout from "./components/Dashboard";
import PostDetail from "./components/PostDetail";
import PostCreation from "./components/CreatePost";
import Profile from "./components/Profile";
import Conversation from "./components/Conversations";
import Chat from "./components/Chat";
// import { useLocation } from "react-router-dom";

function App() {
  const [userInfo, setUserInfo] = useState<userObj | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  // Effect to apply the dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/oauth-callback" element={<OAuthCallback />} />
        <Route
          path="/"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <Feed isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <Profile isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/create"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <PostCreation isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/posts/:postId"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <PostDetail isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/posts/:postId/edit"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <PostCreation isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/find-people"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <FindPeople isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/conversations"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <Conversation isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/chat/:receiverId"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <Chat isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/people/:id"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <UserProfile currentUserInfo={userInfo} isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/requests"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <Requests isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route
          path="/connections"
          element={
            <DashboardLayout
              darkMode={darkMode}
              userInfo={userInfo}
              handleThemeToggle={handleThemeToggle}
              setUserInfo={setUserInfo}
            >
              <Connections isDarkMode={darkMode} />
            </DashboardLayout>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
