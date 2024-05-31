import { useState } from 'react';

export default function useFriendCalendar() {
  const [showCalendar, setShowCalendar] = useState(false);
  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return { showCalendar, setShowCalendar, handleShowCalendar };
}
