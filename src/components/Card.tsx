import { Calendar } from "lucide-react";
import ProjectType from "../assets/ProjectType";

interface CardProps extends ProjectType {}

export default function Card({
  title,
  description,
  tags,
  imagePath,
  link,
  date,
}: CardProps) {
  return (
    <div className="h-fit p-2 bg-violet-50 rounded-lg border-2 border-violet-100 shadow-md group">
      <div>
        {imagePath && (
          <div className="relative">
            <div className="absolute z-10 w-full h-full bg-gradient-to-r from-violet-300/60 to-violet-400/60 scale-105 group-hover:opacity-0 transition-all duration-300 rounded-sm"></div>
            <img
              src={imagePath}
              alt=""
              className="relative w-full scale-105 transition-all duration-300 border-b-4 group-hover:scale-100  group-hover:border-4 border-white mb-4 z-0 rounded-sm"
            />
          </div>
        )}
        <h3 className="font-medium text-violet-800">{title}</h3>
        <p className="text-xs">{description}</p>
        <p className="font-medium mt-4 text-violet-700">Tags:</p>
        <div className="mb-2">
          {tags.map((tag) => {
            return (
              <p
                key={`${tag} ${Math.random()} ${Math.random()}`}
                className="text-xs rounded-full border-2 odd:bg-violet-400 odd:border-violet-500 even:bg-violet-300 even:border-violet-400 px-1 text-white font-medium m-1 shadow-sm inline-block"
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <a
          href={link}
          target="_blank"
          className="text-violet-500 font-medium border-b border-violet-500 hover:font-bold "
        >
          Acessar repositório
        </a>
        <span className="flex items-center text-violet-400 text-xs gap-1">
          <Calendar size={16} /> {date}
        </span>
      </div>
    </div>
  );
}
