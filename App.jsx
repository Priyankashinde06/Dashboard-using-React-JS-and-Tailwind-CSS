import { useState } from 'react';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Main from './ui/Main';
import Content from './ui/Content';
import Profile from './component/Profile/Profile';
import Stats from './component/Stats/Stats';
import Team from './component/Team/Team';
import Event from './component/Event/Event';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className={`${darkMode && "dark"}
    font-quickSand`}>

  <Header 
    toggleDarkMode={toggleDarkMode} 
    darkMode={darkMode}
    toggleSidebar={toggleSidebar}/>

  <Sidebar isSidebarOpen={isSidebarOpen}/>

  <Main>
    <Content>
      <Stats darkMode={darkMode} />

      <div className='flex flex-col gap-3 lg:flex-row'>
        <Team />
        <Event />
      </div>
    </Content>
    <Profile darkMode={darkMode}/>
  </Main>
  </div>
  );
};

export default App;