import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar';
import HomePage from './components/Home';
import MyEvents from './components/events';
import LeftNavbar from './components/leftNavigationBar';
import UserProfileCard from './components/profileCard';
import ProfileManager from './components/profileManager';
import LoginPage from './components/login';
import SignUpPage from './components/signUp';
import RegistrationForm from './components/RegistrationForm';
import UploadCSV from './components/uploadAllowedUser';
import AlumniProfiles from './components/alumniProfiles';
import Logout from './components/Logout';
import MyProfile from './components/myprofile';
import ManageEvents from './components/manageEvents.jsx';
import EventForm from './components/addEventForm.js';
import EditProfile from './components/editProfile.js';
import Donation from './components/Donation.js';
import JobPosting from './components/JobPosting.js';
import Dashboard from './components/dashboard.jsx'
import Details from './components/Details.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import AddJobPosting from './components/addJob.js';
import JobForm from './components/addJobForm.js';
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState({_id: '',email: ' '});
  const [eventId,setEventId] = useState("")
  const [prof,setProfile]=useState({})
  const [to,setto]=useState(false)

  function handleto(tok){
    setto(tok)
    console.log(to)
  }

  function handleSingleProfile(profile){
    setProfile(profile)

  }
  return (
    <BrowserRouter>
      <div className="bg-slate-900">
      <Nav isLoggedIn={isLoggedIn}  setisLoggedIn={setisLoggedIn} />
      </div>
      <div className="flex" >
      {isLoggedIn && <LeftNavbar user={user} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<MyEvents />} />
        <Route path="/job" element={<JobPosting />} />
        <Route path="/details" element={<Details prof={prof}/>} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/events/form" element={<EventForm eventId={eventId}/>} />
        <Route path="/job/form" element={<JobForm/>} />
        <Route path="/editProfile" element={<EditProfile userId={user._id}/>} />
        <Route path="/manage-events" element={<ManageEvents setEventId={setEventId}/>} />
        <Route path="/manage-jobs" element={<AddJobPosting />} />
        <Route path="/profile" element={<MyProfile user={user} />} />
        <Route path="/profileCard" element={<UserProfileCard />} />
        <Route path="/profileManager" element={<ProfileManager />} />
        <Route path="/login"  element={<LoginPage isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} setUser={setUser}
          sst={handleto}
        />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/uploadAllowedUser" element={<UploadCSV />} />
        <Route path="/alumniProfiles" element={<AlumniProfiles isLoggedIn={isLoggedIn} singleProfile={handleSingleProfile} />} />

        <Route path="/logout" element={<Logout setisLoggedIn={setisLoggedIn} />} />
        
      </Routes>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
