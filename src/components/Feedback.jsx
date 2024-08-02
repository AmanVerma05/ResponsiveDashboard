import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import pic1 from "../assets/images/profile/pic1.png";
import pic2 from "../assets/images/profile/pic2.jpg";
import pic3 from "../assets/images/profile/pic3.png";
import pic4 from "../assets/images/profile/pic4.jpg";
import pic5 from "../assets/images/profile/pic5.jpg";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log(newRating);
  };
  const data = [
    {
      img: pic1,
      name: "Jenny Wilson",
      content:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome had a burger over groems(gluten-fres) which was also very gooit. They were very conscientious about gluten allergies.",
    },
    {
      img: pic2,
      name: "Willi Stac",
      content:
        "We aroyed the Eggs Benettct servest sin bread and hat coffee in homemade focaccia Perfect service.",
    },
    {
      img: pic3,
      name: "Starch Ton",
      content:
        "I had the mushroom risotto with scallops which was awesome had a burger over groems(gluten-fres) which was also very gooit.",
    },
    {
      img: pic4,
      name: "Milin Lim",
      content: "They were very conscientious about gluten allergies.",
    },
    {
      img: pic5,
      name: "Enny Wilon",
      content:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome had a burger over groems(gluten-fres) which was also very gooit. They were very conscientious about gluten allergies.",
    },
  ];

  return (
    <div className="rounded-lg bg-[#292b40] max-h-[34rem] w-auto overflow-auto">
      {data.map((datas) => {
        return (
          <div className="flex flex-col    p-2 gap-2 text-white">
            <h3 className="text-lg font-semibold  text-white">
              Customer's Feedbaack
            </h3>

            <div className=" w-full flex flex-col p-2 ">
              <div className="flex gap-2 items-center">
                <img
                  className="rounded-full h-10 w-10"
                  src={datas.img}
                  alt="User Profile"
                />
                <h1 className="text-xl font-bold">{datas.name}</h1>
              </div>

              <div className="flex flex-col">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={40}
                  activeColor="#ffd700"
                  isHalf={true}
                  value={rating}
                />
                <p className="text-gray-400">{datas.content}</p>
              </div>
            </div>
            <hr className=" mx-8" />
          </div>
        );
      })}
    </div>
  );
};

export default Feedback;
