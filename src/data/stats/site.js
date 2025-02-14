import React, { useState, useEffect } from 'react';

const Lastupdate = () => {
  const [lastupdate, setlastupdatetime] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24; // (if I want Days) * 365.2421897 (if I want years);
    const updateTime = new Date('2025-02-14T14:27:00');
    setlastupdatetime(((Date.now() - updateTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{lastupdate}</>;
};

const SinceCreated = () => {
  const [sinceCreated, setCreatedTime] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24; // (if I want Days) * 365.2421897 (if I want years);
    const createTime = new Date('2024-01-05T12:00:00');
    setCreatedTime(((Date.now() - createTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{sinceCreated}</>;
};

const data = [
  {
    label: 'Last updated at',
    value: 'February 14th, 2025',
  },
  {
    label: 'Days since last update',
    value: <Lastupdate />,
  },
  {
    label: 'Created on',
    value: 'January 5th, 2024',
  },
  {
    label: 'Days since creating',
    value: <SinceCreated />,
  },
];

export default data;
