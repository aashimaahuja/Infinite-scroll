import React from 'react';
export const StoryItem = ({ item }) => {
  const { id, url, count } = item;
  return (
    <div class='img-cntr'>
      <dt key={id}>
        <h2>Image {count}</h2>
        <img src={url} alt={`img_${id}`} />
      </dt>
    </div>
  );
  // const { id, subject, short_description } = item;
  // return (
  //   <dt key={id} className="list-item">
  //     <h1>{id}</h1>
  //     <h3>{subject}</h3>
  //     <div>{short_description}</div>
  //   </dt>
  // );
};
