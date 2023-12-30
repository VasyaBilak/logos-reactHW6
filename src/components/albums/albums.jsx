import React, { useEffect, useState } from 'react';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div>
      <h2>Album List</h2>
      {albums.map((album)=> {
                return  (
                        <div key={album.id} style={{border: '1px solid black', margin: '10px'}}>
                            <h4>{album.title}</h4>
                        </div>
                    )
            })}
    </div>
  );
};

export default AlbumList;