import logo from './logo.svg';
import './App.css';
import { AllMeetups } from './pages/AllMeetups';
import { NewMeetup } from './pages/NewMeetup';
import { Favorites } from './pages/Favorites';
import { Layout } from './ui/Layout';
import { Routes, Route, useLocation,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FavoriteContextProvider from './store/FavoriteContextProvider';

function App() {
  let navigate = useNavigate();
  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
  let [meetups, setMeetup] = useState(DUMMY_DATA)

  let addMeetup = (meetup) => {
 
    //setMeetup([...meetups, { ...meetup, id: "m" + meetups.length + 1 }])
   // console.log(meetups);
    fetch("https://mymeetup-62c2b-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((resp) =>{console.log("success"); navigate("/");}).catch(err => console.log(err))

  }

  return (<div>
    
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups  />} >

        </Route>
        <Route path="add-meetup" element={<NewMeetup addMeetup={addMeetup} />}>

        </Route>
        <Route path="favorite" element={<Favorites />}>

        </Route>
      </Routes>
    </Layout>
 

  </div>);

}

export default App
