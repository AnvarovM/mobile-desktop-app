import React from 'react';
import Post from './Post';

const posts = [
  {
    id: '1',
    username: 'anvarovm',
    img: 'https://www.meme-arsenal.com/memes/7b34cae7bb65e8f5a65aa0dceb46a40a.jpg',
    userImg: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
    caption: 'SUBSCRIBE TO ME AND CLICK LIKE BUTTON beacose instagram recomended algarithm work like tihis',
  },
  {
    id: '2',
    username: 'anvaroov_97',
    img: 'https://media.istockphoto.com/photos/barber-shaves-the-beard-of-the-client-picture-id1185955900?k=20&m=1185955900&s=612x612&w=0&h=07FSUmrk3NT8AvnGHHQLbT0mqArwocvnN3XnEVx-iyk=',
    userImg: 'https://i.pinimg.com/474x/d0/61/c3/d061c319ef54754147fffb6fd5309e21.jpg',
    caption: 'This is a caption',
  },
];

function Posts() {
  return (
    <div>
     {posts.map((post) => (
        <Post
        key={post.id}
        username={post.username}
        img={post.img}
        userImg={post.userImg}
        caption={post.caption}
      />
     ))}

    </div>
  );
}

export default Posts;
