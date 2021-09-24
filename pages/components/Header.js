import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <div
      className="flex items-center justify-between
     py-4 px-5"
    >
      <div>
        <h1
          className="font-mono text-2xl
         font-extrabold cursor-pointer"
        >
          SAMSUNG
        </h1>
      </div>

      <div
        className="flex items-center
       space-x-3 cursor-pointer"
      >
        <SearchIcon className="icons" />
        <ShoppingCartIcon className="icons" />
        <MenuIcon className="icons" />
      </div>
    </div>
  );
}
