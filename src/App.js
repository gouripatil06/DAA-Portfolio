/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import NotFoundPage from 'pages/NotFoundPage';
import TeamPage from 'pages/TeamPage';

import ProjectDetailPage from 'pages/ProjectDetailPage';
import { ContactUsPage } from 'pages/DiscussProjectPage';

import './assets/css/styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/project/" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/discuss-project" element={<ContactUsPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
