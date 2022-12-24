import React from "react";
import ygr from "../../assets/yeager_n.jpg";

export default function Commentaires() {
  return (
    <div className="space-y-4 mt-6 overflow-y-scroll px-4 h-[35rem]">
      {commentaires.map((comment) => (
        <div className="bg-[#D9D9D9] flex flex-col space-y-2 py-2 px-4">
          <div>{comment.date}</div>
          <div className="flex items-center">
            <img
              alt=""
              src={comment.image}
              width={50}
              className="rounded-full mr-4"
            />
            <div>
              {comment.name} :
              <span className="text-[#737373]"> {comment.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const commentaires = [
  {
    date: "24 dec 2022, 16:20",
    name: "Im Sama",
    comment: "I loved the transaction !",
    image: ygr,
  },
  {
    date: "24 dec 2022, 16:20",
    name: "Im Sama",
    comment: "I loved the transaction !",
    image: ygr,
  },
  {
    date: "24 dec 2022, 16:20",
    name: "Im Sama",
    comment: "I loved the transaction !",
    image: ygr,
  },
  {
    date: "24 dec 2022, 16:20",
    name: "Im Sama",
    comment: "I loved the transaction !",
    image: ygr,
  },
  {
    date: "24 dec 2022, 16:20",
    name: "Im Sama",
    comment: "I loved the transaction !",
    image: ygr,
  },
  {
    date: "24 dec 2022, 16:20",
    name: "Im Sama",
    comment: "I loved the transaction !",
    image: ygr,
  },
  {
    date: "24 dec 2022, 16:20",
    name: "Im Sama",
    comment: "I loved the transaction !",
    image: ygr,
  },
  {
    date: "24 dec 2022, 16:20",
    name: "Im Sama",
    comment: "I loved the transaction !",
    image: ygr,
  },
];
