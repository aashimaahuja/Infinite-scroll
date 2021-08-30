import React, { useState, useEffect, useCallback } from 'react';
import { StoryItem } from './StoryItem';
export const Story = () => {
  const BASE_URL = 'https://picsum.photos/id';

  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);

  const [paddingTop, setPaddingTop] = useState('0px');
  const [paddingBottom, setPaddingBottom] = useState('0px');

  let count = 1;
  let prevScrollTop = 0;

  const getRandomImage = () => {
    const randId = Math.floor(Math.random() * 1000);
    const url = `${BASE_URL}/${randId}/200/300`;
    return url;
  };

  const loadData = () => {
    for (let i = 0; i < 10; i++) {
      let url = getRandomImage();
      data.push({ id: i, url: url, count: count });
      count++;
    }
  };

  const handleScroll = () => {
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= 0.95 * scrollHeight) {
      loadData();
    } else if (Math.abs(scrollTop - prevScrollTop) < 300) {
      return;
    }

    prevScrollTop = scrollTop;

    let startNode = Math.floor(scrollTop / 300) - 2;
    startNode = Math.max(0, startNode);

    let endNode = data.length - (startNode + 10);

    setStart(startNode);
    setPaddingTop(startNode * 300);
    setPaddingBottom(endNode * 300);
  };
  
  useEffect(() => {
    loadData();
    setPaddingTop(0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <>
      <dl style={{ paddingTop: paddingTop, paddingBottom: paddingBottom }}>
        {data.slice(start, start + 10).map(item => (
          <StoryItem item={item} />
        ))}
      </dl>
    </>
  );
};
