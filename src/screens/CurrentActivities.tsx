import { Nav } from "@/components/common/Nav";

export const CurrentActivities: React.FC = () => {
  return (
    <>
      <Nav />
      <h1 className="text-6xl text-main-green text-center font-semibold my-16">
        Activités du moment
      </h1>
      <div className="w-full max-w-7xl h-screen grid grid-cols-3 mx-auto">
        <div className="relative cursor-pointer rounded bg-cover bg-center bg-[url('https://imgs.search.brave.com/UOSeJjaoJZ_huliFLKYe3mOXmOqnmUM8uNBQUJnHUcw/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS96/Qm5uS19sZl9XUS9t/YXhyZXNkZWZhdWx0/LmpwZw')] h-72">
          <div className="absolute bottom-0 w-full flex items-center justify-between p-3 rounded-b bg-[#3e363f]">
            <h2 className="text-white text-2xl font-semibold">Mafate</h2>
            <div className="w-10 h-10 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};
