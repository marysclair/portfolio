import { useState } from "react";
import { Heart } from "lucide-react";

import projectList from "./assets/projectsList";
import { Select } from "./components/Select";
import Card from "./components/Card";
import SearchInput from "./components/SearchInput";
import ProjectType from "./assets/ProjectType";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState([""]);
  const [projects, setProjects] = useState<ProjectType[]>(projectList);

  function searchProjectsByTitle(value: string) {
    const projectsFiltered = projectList.filter((project) => {
      return project.title.toLowerCase().includes(value.toLowerCase());
    });

    setProjects(projectsFiltered);
  }

  function filterProjectsByTag(tags: string[]) {
    const projectsFiltered = projectList.filter((project) => {
      return tags.every((tag) =>
        project.tags.some((projectTag) =>
          projectTag.toLowerCase().includes(tag.toLowerCase())
        )
      );
    });

    setProjects(projectsFiltered);
  }

  return (
    <>
      <main className="grid grid-cols-[18vw_82vw] min-h-screen font-comfortaa cursor-default text-sm">
        <aside className="bg-gradient-to-r from-violet-300 to-violet-400 flex flex-col flex-1 p-6 items-center justify-between">
          <div className="max-w-[70%] rounded-full border-4 border-white overflow-hidden inline-block">
            <img
              src="/portfolio/sidebar-image.jpg"
              alt=""
              className="w-full rounded-full hover:scale-110 duration-300 transition-transform"
            />
          </div>
          <h2 className="text-base font-semibold text-white mt-8 mb-4 border-b-2 border-b-white">
            Sobre mim
          </h2>
          <p className="text-justify">
            Eu sou <span>Maria Clara</span>, estudante do quinto período de ADS.
            Gosto muito de estudar novas tecnologias que me despertem o
            interesse, principalmente se for para desenvolvimento Web. Cats and
            plants lover! 19y fullstack developer
          </p>

          <div className="w-full list-none mt-6">
            <li className="flex items-center gap-1 border-b-2 border-white font-semibold">
              <Heart size={12} color="white" /> Amo:
            </li>
            <div className="grid grid-cols-6 gap-x-4 mt-1 p-2 rounded-lg bg-white/50 hover:shadow-md transition-all duration-300">
              {[
                "html-48",
                "css-48",
                "javascript-48",
                "typescript-48",
                "react-40",
                "tailwindcss-48",
                "prisma-orma-50",
                "sql-32",
                "postgres-48",
              ].map((imgPath) => {
                return (
                  <img
                    key={imgPath}
                    src={`/portfolio/icons/icons8-${imgPath}.png`}
                    className="w-4 h-4 hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                );
              })}
            </div>
            <li className="flex items-center gap-1 border-b-2 border-white font-semibold mt-2">
              <Heart size={12} color="white" /> Gosto:
            </li>
            <div className="grid grid-cols-6 gap-x-4 mt-1 p-2 rounded-lg bg-white/50 hover:shadow-md transition-all duration-300">
              {["nextjs-48", "python-48", "c-48", "java-48"].map((imgPath) => {
                return (
                  <img
                    key={imgPath}
                    src={`/portfolio/icons/icons8-${imgPath}.png`}
                    className="w-4 h-4 hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                );
              })}
            </div>
            <li className="flex items-center gap-1 border-b-2 border-white font-semibold mt-2">
              <Heart size={12} color="white" /> Estudando:
            </li>
            <div className="grid grid-cols-6 gap-x-4 mt-1 p-2 rounded-lg bg-white/50 hover:shadow-md transition-all duration-300">
              {["astro-js-64"].map((imgPath) => {
                return (
                  <img
                    key={imgPath}
                    src={`/portfolio/icons/icons8-${imgPath}.png`}
                    className="w-4 h-4 hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </aside>
        <div className="py-10 mx-[12%]">
          <div className="bg-gradient-to-r from-violet-300 to-violet-400 p-2 w-full rounded-sm flex justify-between">
            <SearchInput
              filterValue={searchValue}
              setFilterValue={setSearchValue}
              filterList={searchProjectsByTitle}
              projects={projects}
            />
            <Select
              filterList={filterProjectsByTag}
              filterOption={filterValue}
              setFilterOption={setFilterValue}
              options={[
                { id: "69a36152-e338-40e5-ad39-da140c2118ea", value: "React" },
                {
                  id: "a38470a8-408a-4daf-9651-7f5870f92bfe",
                  value: "Tailwind CSS",
                },
                { id: "e630d317-ba2d-479b-adce-8dd83f85a5e2", value: "Html" },
                { id: "af5f3e21-e05e-4323-8f85-a97c28395a41", value: "CSS" },
                {
                  id: "64d2386c-b8ee-40b8-865e-6e88ae0b94e3",
                  value: "React Native",
                },
                {
                  id: "a614af5d-7b83-42da-bad3-05e61da6c609",
                  value: "Typescript",
                },
                {
                  id: "07320bf5-c6dd-4c15-94bb-370b5337b550",
                  value: "Javascript",
                },
                {
                  id: "1ae952e3-bb8f-4f62-bcd5-ac64a578a6b4",
                  value: "Python",
                },
              ]}
            />
          </div>
          <div className="flex mb-6">
            <h4
              className="text-violet-300 font-bold ml-auto mt-1 border-b-2 border-b-violet-400 hover:text-violet-500 hover:border-b-violet-600 cursor-pointer"
              onClick={() => {
                setFilterValue([""]);
                setProjects(projectList);
              }}
            >
              Limpar filtro
            </h4>
          </div>
          <h1 className="text-2xl font-bold border-b-2 border-dashed border-violet-400 mb-6">
            Meus projetos
          </h1>
          <div className="grid grid-cols-3 gap-8 max-h-[65vh] overflow-y-auto">
            {projects.map((project) => {
              return (
                <Card
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imagePath={project.imagePath}
                  link={project.link}
                  tags={project.tags}
                  date={project.date}
                />
              );
            })}
          </div>
        </div>
      </main>
      <footer className="bg-violet-500 h-60 font-comfortaa">
        <img src="/portfolio/footer-bg-1.png" alt="" className="h-full" />
        <img
          src="/portfolio/footer-bg-2.png"
          alt=""
          className="absolute left-[35%] -bottom-[10%]"
        />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[22%] flex gap-4 divide-x-2 divide-white">
          <a
            className="flex items-center gap-2"
            href="https://github.com/marysclair"
          >
            <img
              src="/portfolio/icons/icons8-github-30.png"
              alt=""
              className="w-7 h-7"
            />
            <h5 className="font-semibold text-white">marysclair</h5>
          </a>
          <a
            className="pl-4 flex items-center gap-2 group"
            href="https://www.linkedin.com/in/maria-clara-ramalho-medeiros-96a94b247/"
          >
            <img
              src="/portfolio/icons/icons8-linkedin-50.png"
              alt=""
              className="w-7 h-7"
            />
            <h5 className="font-semibold text-white">
              Maria Clara Ramalho Medeiros
            </h5>
          </a>
          <a
            className="pl-4 flex items-center gap-2 group"
            href="https://codesandbox.io/u/ramalho.maria"
          >
            <img
              src="/portfolio/icons/icons8-codesandbox-48.png"
              alt=""
              className="w-7 h-7"
            />
            <h5 className="font-semibold text-white">ramalho.maria</h5>
          </a>
        </div>
        <img
          src="/portfolio/bg-footer-3.png"
          alt=""
          className="absolute right-0 -bottom-[35.2%]"
        />
      </footer>
    </>
  );
}

export default App;
