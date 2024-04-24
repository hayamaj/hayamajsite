import React, { useEffect, useState } from 'react';
import querystring from 'querystring';
import { Buffer } from 'buffer';
import localFont from 'next/font/local';
import { IoMusicalNote } from "react-icons/io5";

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const refresh_token = "AQBexcry5734UauuJabXUVS3KeAPCVOJvoinx5rLBG0vadi6c92sF56Jll1XnJXzZJSjP_Xv1Onz96xq4wROMMzHacbmPvGAJ8nP26EGX9hb8gi1jY1jlMAIMLZBbwJolGE";
const client_id = "90ce0ee98c6749959ac3f401ad1de0c0";
const client_secret = "930baaa6047a47b19cf6a0390e9e8499";

const direg = localFont({
  src: [
    {
      path: 'fonts/direg.otf',
      weight: '400'
    }
  ],
});
const dilight = localFont({
  src: [
    {
      path: 'fonts/dilight.otf',
      weight: '400'
    }
  ],
});

const getAccessToken = (client_id, client_secret, refresh_token) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  return fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })
  .then(response => response.json());
};

const getNowPlaying = () => {
  return getAccessToken(client_id, client_secret, refresh_token)
    .then(({ access_token }) => {
      return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    })
    .then(response => {
      if (response.status > 400) {
        throw new Error('Unable to Fetch Song');
      } else if(response.status === 204) {
        throw new Error('Currently Not Playing');
      }
      return response.json();
    })
    .then(song => {
      const title = song.item.name;
      const artist = song.item.artists.map((artist) => artist.name).join(', ');
      return { title, artist };
    })
    .catch(error => {
      console.error('Error fetching currently playing song: ', error);
      return { title: 'Failed to', artist: 'fetch song' };
    });
};

const Name = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = () => {
      getNowPlaying().then(data => {
        setNowPlaying(data);
      });
    };

    const interval = setInterval(fetchNowPlaying, 1000);
    return () => clearInterval(interval);
  }, []);

  let title = '';
  let artist = '';

  if (nowPlaying != null && nowPlaying.title) {
    title = nowPlaying.title;
    artist = nowPlaying.artist;
  } else {
    title = 'Failed to';
    artist = 'fetch song';
  }

  return (
    <div className={`${direg.className} flex flex-col ml-2`}>
      <div className={`${direg.className} text-bl text-lg mb-2`}>This is how you pronounce my name:</div>
      <div className='nowPlayingCard sm:w-72'>
        <div id='nowPlayingDetails'>
          <div className={`nowPlayingTitle ${title.length > 15 ? 'marquee-content' : ''}`}>
            {title}
          </div>
          <div className={`${dilight.className} nowPlayingArtist`}>
            {artist}
          </div>
        </div>
        <div className='nowPlayingState'>
          <IoMusicalNote size={40} />
        </div>
      </div>
    </div>
  );
};

export default Name;