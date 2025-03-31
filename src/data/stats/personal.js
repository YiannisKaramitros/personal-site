import React, { useState, useEffect } from 'react';

// Maybe some stats for website
// Age in days and age in seconds and age in minutes and age in hours
// Days without injury stat page stat
// water intake per day stat page stat
// Days since graduating undergrad
// Time since covid

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2001-08-17T18:27:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const NextVacation = () => {
  const [nextVacation, setNextVacation] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24; //* 365.2421897; // ms in an average year
    const vacationTime = new Date('2025-05-23T12:00:00');
    setNextVacation(((vacationTime - Date.now()) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{nextVacation}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'South Bend, Indiana',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 11,
    // link: 'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  },
  {
    key: 'language',
    label: 'Current language learning',
    value: 'Greek',
  },
  {
    key: 'puzzle',
    label: 'Biggest jigsaw puzzle completed',
    value: '1000 Pieces',
  },
  {
    key: 'photos',
    label: 'Photos in my camera roll',
    value: '9,052',
  },
  {
    key: 'mile',
    label: 'Personal best mile time',
    value: '8:35',
  },
  {
    key: 'next vacation',
    label: 'Days Until Next Vacation',
    value: <NextVacation />,
  },
];

export default data;
