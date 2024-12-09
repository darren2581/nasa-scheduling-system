import React from 'react';
import '../styles/MainPage.css';
import Slider from '../components/Slider';

function MainPage() {
  const events = [
    {
      id: 1,
      name: 'Event Name 1',
      location: 'City Center',
      time: 'Dec 12, 2024, 10:00 AM',
      leader: 'John Doe',
    },
    {
      id: 2,
      name: 'Event Name 2',
      location: 'Riverside Park',
      time: 'Dec 14, 2024, 3:00 PM',
      leader: 'Jane Smith',
    },
    {
      id: 3,
      name: 'Event Name 3',
      location: 'Downtown Arena',
      time: 'Dec 18, 2024, 7:00 PM',
      leader: 'Alex Johnson',
    },
    {
      id: 4,
      name: 'Event Name 1',
      location: 'City Center',
      time: 'Dec 12, 2024, 10:00 AM',
      leader: 'John Doe',
    },
    {
      id: 5,
      name: 'Event Name 2',
      location: 'Riverside Park',
      time: 'Dec 14, 2024, 3:00 PM',
      leader: 'Jane Smith',
    },
    {
      id: 6,
      name: 'Event Name 3',
      location: 'Downtown Arena',
      time: 'Dec 18, 2024, 7:00 PM',
      leader: 'Alex Johnson',
    },
  ];

  return (
    <div className="container">
      <h1 className="main-h1">Upcoming Events</h1>
      <Slider events={events} />
    </div>
  );
}

export default MainPage;
