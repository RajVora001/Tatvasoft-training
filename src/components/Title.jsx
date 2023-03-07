import React from 'react'
import List from "./List";
import "./Title.css"

const Title = ({ title, decription }) => {
  const array = [
    {id: 0, title: "smit", decription: "lore ipsum doler sit amet"},
    {id: 1, title: "patel", decription: "lore ipsum doler sit amet"}, 
    {id: 2, title: "dsa", decription: "lore ipsum doler sit amet"}, 
    {id: 3, title: "sda", decription: "lore ipsum doler sit amet"}, 
    {id: 4, title: "dsa", decription: "lore ipsum doler sit amet"},  
  ];
  return (
    <div className='title'>
      {array.map((element) => {
        return(
          <List
          key={element.id}
          title={element.title}
          decription={element.decription}
          />
        );
      })}
    </div>
  );
}

export default Title