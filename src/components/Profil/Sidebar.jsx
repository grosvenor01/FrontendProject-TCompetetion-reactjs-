import ygr from "../../assets/yeager_n.jpg";
import starIcon from "../../assets/icons/star.svg";
import infoIcon from "../../assets/icons/info.svg";
import personIcon from "../../assets/icons/person.svg";
import likeIcon from "../../assets/icons/like.svg";

export default function Sidebar() {
  return (
    <div className="bg-[#F3F3F3] rounded-xl">
      <div className="flex items-center border-b-2 px-6 py-4">
        <img alt="me" src={ygr} width={60} className="rounded-full mr-4" />
        <div>Ahmed Musk</div>
      </div>
      <div className="p-6">
        {describes.map((element) => (
          <div className="flex items-center py-2">
            <img alt="" src={element.icon} className="mr-3" />
            <div>
              {element.number} <span className="text-gray">{element.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const describes = [
  {
    icon: personIcon,
    number: 200,
    desc: "visiteurs",
  },
  {
    icon: likeIcon,
    number: "+50",
    desc: "favories",
  },
  {
    icon: infoIcon,
    number: 2,
    desc: "articles disponibles",
  },
  {
    icon: starIcon,
    number: 3.5,
    desc: "etoiles rate",
  },
];
