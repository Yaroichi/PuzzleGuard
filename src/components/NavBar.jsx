import { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

// Лого PuzzleGuard (щит + пазл)
function LogoIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 41.25 45" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient
          id="navbar-logo-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="objectBoundingBox"
          gradientTransform="matrix(0.32 -0.466 0.68 0.466 0 0.5)"
        >
          <stop offset="0" stopColor="#4CE1AE" />
          <stop offset="0.5" stopColor="#65C1DB" />
          <stop offset="1" stopColor="#75ADF7" />
        </linearGradient>
      </defs>
      <path
        fill="url(#navbar-logo-gradient)"
        d="M 24.75 0.497 C 26.272 0.497 27.74 1.058 28.875 2.073 C 30.009 3.088 30.73 4.485 30.899 5.997 L 37.125 5.997 C 38.219 5.997 39.268 6.432 40.042 7.205 C 40.815 7.979 41.25 9.028 41.25 10.122 L 41.25 19.06 L 36.438 19.06 C 35.526 19.06 34.651 19.422 34.007 20.067 C 33.362 20.711 33.0 21.586 33.0 22.497 C 33.0 23.409 33.362 24.283 34.007 24.928 C 34.651 25.573 35.526 25.935 36.438 25.935 L 41.25 25.935 L 41.25 34.872 C 41.25 35.966 40.815 37.015 40.042 37.789 C 39.268 38.563 38.219 38.997 37.125 38.997 L 30.899 38.997 C 30.73 40.509 30.009 41.906 28.874 42.92 C 27.74 43.935 26.272 44.496 24.75 44.496 C 23.228 44.496 21.76 43.935 20.626 42.92 C 19.491 41.906 18.77 40.509 18.601 38.997 L 12.375 38.997 C 11.281 38.997 10.232 38.563 9.458 37.789 C 8.685 37.015 8.25 35.966 8.25 34.872 L 8.25 24.986 L 8.489 25.074 C 9.232 25.305 10.021 25.308 10.766 25.074 L 11.0 24.991 L 11.0 34.872 C 11.0 35.237 11.145 35.587 11.403 35.844 C 11.661 36.102 12.01 36.247 12.375 36.247 L 21.312 36.247 L 21.312 38.31 C 21.312 39.221 21.675 40.096 22.319 40.74 C 22.964 41.385 23.838 41.747 24.75 41.747 C 25.662 41.747 26.536 41.385 27.181 40.74 C 27.825 40.096 28.188 39.221 28.188 38.31 L 28.188 36.247 L 37.125 36.247 C 37.49 36.247 37.839 36.102 38.097 35.844 C 38.355 35.587 38.5 35.237 38.5 34.872 L 38.5 28.685 L 36.438 28.685 C 34.796 28.685 33.223 28.033 32.062 26.872 C 30.902 25.712 30.25 24.138 30.25 22.497 C 30.25 20.856 30.902 19.282 32.062 18.122 C 33.223 16.962 34.796 16.31 36.438 16.31 L 38.5 16.31 L 38.5 10.122 C 38.5 9.758 38.355 9.408 38.097 9.15 C 37.839 8.892 37.49 8.747 37.125 8.747 L 28.188 8.747 L 28.188 6.685 C 28.187 5.953 27.953 5.24 27.519 4.65 C 27.085 4.06 26.475 3.624 25.776 3.405 C 25.077 3.187 24.327 3.197 23.634 3.435 C 22.942 3.673 22.343 4.125 21.926 4.727 C 21.735 3.755 21.173 2.897 20.358 2.334 C 20.932 1.752 21.616 1.29 22.37 0.974 C 23.123 0.659 23.933 0.497 24.75 0.497 Z M 8.58 0.395 C 8.868 0.141 9.24 0.0 9.625 0.0 C 10.01 0.0 10.382 0.141 10.67 0.395 C 12.07 1.726 14.751 3.844 18.048 4.278 C 18.708 4.364 19.25 4.861 19.25 5.48 L 19.25 11.288 C 19.25 19.093 11.594 21.928 9.938 22.448 C 9.736 22.513 9.517 22.513 9.314 22.448 C 7.659 21.925 0.0 19.093 0.0 11.288 L 0.0 5.48 C 0.0 4.861 0.542 4.364 1.202 4.278 C 4.499 3.844 7.183 1.726 8.58 0.395 Z"
      />
    </svg>
  );
}

// Іконка бургер / хрестик
function MenuIcon({ open }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}

export default function NavBar({ onSupportClick }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/", end: true },
    { label: "Guide", to: "/guide" },
  ];

  const linkClass = ({ isActive }) =>
    `transition-colors hover:text-mint ${isActive ? "text-mint" : "text-white"}`;

  // Прокрутка до секції з тарифами (id="subscriptions" на HomeSection4)
  const goToSubscriptions = () => {
    setOpen(false);
    const scroll = () =>
      document.getElementById("subscriptions")?.scrollIntoView({ behavior: "smooth" });
    if (location.pathname !== "/") {
      // якщо ми не на головній — спершу переходимо туди, тоді гортаємо
      navigate("/");
      setTimeout(scroll, 100);
    } else {
      scroll();
    }
  };

  const handleSupport = () => {
    setOpen(false);
    onSupportClick?.();
  };

  return (
    <header className="relative z-50 w-full bg-navy">
      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 md:px-8 lg:h-[102px] lg:px-16">
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-2 lg:gap-3">
          <LogoIcon className="h-9 w-auto lg:h-[55px]" />
          <span className="font-mooli text-xl leading-none text-white lg:text-[28px]">
            PUZZLE GUARD
          </span>
        </Link>

        {/* Десктопне меню */}
        <nav className="hidden items-center gap-x-12 font-sans text-[32px] lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <button type="button" onClick={goToSubscriptions} className="text-white transition-colors hover:text-mint">
            Subscriptions
          </button>
          <button type="button" onClick={handleSupport} className="text-white transition-colors hover:text-mint">
            Support
          </button>
        </nav>

        {/* Бургер */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white transition-colors hover:text-mint lg:hidden"
          aria-label="Меню"
          aria-expanded={open}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Зелена лінія-світіння знизу */}
      <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#60EEB2,transparent)]" />

      {/* Мобільне меню */}
      {open && (
        <nav className="absolute left-0 right-0 top-full flex flex-col gap-y-5 bg-navy px-5 py-6 font-sans text-xl shadow-lg lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
          <button type="button" onClick={goToSubscriptions} className="text-left text-white transition-colors hover:text-mint">
            Subscriptions
          </button>
          <button type="button" onClick={handleSupport} className="text-left text-white transition-colors hover:text-mint">
            Support
          </button>
        </nav>
      )}
    </header>
  );
}
