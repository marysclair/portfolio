import { ChevronDown, ChevronUp } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface SelectProps {
  options: { id: string; value: string }[];
  filterOption: string[];
  setFilterOption: Dispatch<SetStateAction<string[]>>;
  filterList: (values: string[]) => void;
}

export function Select({
  options,
  filterOption,
  filterList,
  setFilterOption,
}: SelectProps) {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [divRef]);

  return (
    <div className="py-2 border-b-2 border-white w-[45%]" ref={divRef}>
      <button
        className={`flex w-full items-center justify-between`}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <p className="font-medium flex gap-1">
          Filtrar por:
          {filterOption.map((option) => {
            return <span key={option}>{option}</span>;
          })}
        </p>
        {isVisible ? (
          <ChevronUp color="white" />
        ) : (
          <ChevronDown color="#4c1d95" />
        )}
      </button>
      {isVisible && (
        <div className="absolute bg-white mt-2 w-[28%] rounded-b-lg shadow-lg px-2 py-4 border-2 border-t-0 border-violet-100">
          {options.map((obj) => {
            if (obj.value.length !== 0) {
              return (
                <button
                  key={obj.id}
                  onClick={() => {
                    if (filterOption.find((filtOpt) => filtOpt === obj.value)) {
                      const newList = filterOption.filter(
                        (item) => item !== obj.value
                      );
                      setFilterOption(newList);
                      filterList(newList);
                    } else {
                      setFilterOption([...filterOption, obj.value]);
                      filterList([...filterOption, obj.value]);
                    }
                  }}
                  className={`rounded-full text-xs border-2 odd:bg-violet-400 odd:border-violet-500 even:bg-violet-300 even:border-violet-400 px-2 py-1  font-medium m-1 shadow-sm hover:text-violet-800 transition duration-500 ease-in-out ${
                    filterOption.find((filtOpt) => filtOpt === obj.value)
                      ? "text-violet-800"
                      : "text-white"
                  }`}
                >
                  {obj.value}
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
