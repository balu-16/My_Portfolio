import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-3 z-10 flex w-full items-center justify-center px-1 sm:px-2">
      <nav
        aria-label="Primary navigation"
        className="flex w-fit min-w-0 max-w-full flex-nowrap justify-start gap-0.5 overflow-x-auto rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur-md no-visible-scrollbar"
      >
        <Link href="#home" className="nav-items">
          Home
        </Link>
        <Link href="#about" className="nav-items">
          About
        </Link>
        <Link href="#skills" className="nav-items">
          Skills & Experience
        </Link>
        <Link href="#projects" className="nav-items">
          Projects
        </Link>
        <Link
          href="#contact"
          className="nav-items text-gray-100"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};
