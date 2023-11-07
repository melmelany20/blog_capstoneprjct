import React, { useEffect, useState } from "react";

const Menu = () => {

  const posts = [
    {
      id: 1,
      title: "Relationships",
      desc: "We before me... without losing me.",
      img: "https://cdn.outsideonline.com/wp-content/uploads/2021/10/climate-love-silhouette_h.jpg"
    },
    {
      id: 2,
      title: "Date Night",
      desc: "Quality Time.",
      img: "https://momsla.com/wp-content/uploads/2023/04/wine-glasses-at-sunset.jpg.webp"
    },
    {
      id: 3,
      title: "Word On the Street",
      desc: "What's today's word?",
      img: "https://spokesman-recorder.com/wp-content/uploads/2020/07/WORD.jpg"
    },
    {
      id: 4,
      title: "Play At Home",
      desc: "Take this L baby!",
      img: "https://dateboxclub.com/cdn/shop/articles/Screen_Shot_2017-10-30_at_4.37.38_PM.png?v=1680543127&width=1100",
    },
    {
      id: 5,
      title: "Pigeon Post",
      desc: "Whoooo child, the tea!",
      img: "https://cdn.vectorstock.com/i/preview-1x/17/35/carrier-pigeon-cartoon-vector-4051735.jpg",
    },
  ];
  <div className="menu">
    <h1>Other posts you may like</h1>
   {posts.map(post=>(
    <div className="post" key={post.id}>
      <img src={post.img} alt="" />
      <h2>{post.title}</h2>
      <button>Read More</button>
    </div>
   ))}
  </div>
}

export default Menu;