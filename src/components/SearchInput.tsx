import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import ProjectType from "../assets/ProjectType";

interface SearchInputProps {
  filterValue: string;
  filterList: (value: string) => void;
  setFilterValue: Dispatch<SetStateAction<string>>;
  projects: ProjectType[];
}

export default function SearchInput({
  filterValue,
  filterList,
  setFilterValue,
  projects,
}: SearchInputProps) {
  const inputRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div className="w-[45%]" ref={inputRef}>
      <div
        className={`bg-white px-4 py-1 placeholder-violet-400  rounded-full flex items-center justify-between z-10 relative`}
      >
        <input
          type="text"
          placeholder="Frontend mentor challenge..."
          className="w-[88%] focus:outline-none placeholder:italic"
          value={filterValue}
          onChange={(e) => {
            e.target.value.length !== 0
              ? setIsVisible(true)
              : setIsVisible(false);
            setFilterValue(e.target.value);
            filterList(e.target.value);
          }}
        />
        <Search
          color="#5b21b6"
          size={32}
          className="cursor-pointer"
          onClick={() => filterList(filterValue)}
        />
      </div>
      {isVisible && (
        <>
          <div className="absolute bg-white h-10 z-0 w-[27.86%] -mt-5"></div>
          <div className="bg-white py-4 px-2 absolute z-20 w-[27.86%] rounded-b-lg shadow-lg border-2 border-violet-100">
            {projects.length > 0 ? (
              projects.map((project) => {
                return (
                  <p
                    key={project.title}
                    className="text-xs"
                    onClick={() => {
                      setFilterValue(project.title);
                      filterList(project.title);
                    }}
                  >
                    {project.title}
                  </p>
                );
              })
            ) : (
              <p>Nenhum resultado encontrado!</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
