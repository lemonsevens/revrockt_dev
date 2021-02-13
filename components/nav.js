import Image from "next/image";

const NavItem = (props) => (
  <li className="flex self-stretch">
    <a
      href={props.href}
      title={props.main}
      className="relative flex items-center self-stretch justify-center px-2 text-gray-400 transition-all duration-200 xl:pl-4 hover:text-gray-300"
    >
      <i className={`text-4xl fas fa-${props.icon}`} />
      <div className="flex flex-col ml-3 text-lg font-bold leading-none xl:text-xl">
        {props.main}
        <span className="mt-1 text-xs font-normal leading-none xl:-mt-2 xl:text-sm opacity-60">
          {props.sub}
        </span>
      </div>

      <i className="ml-1 text-sm opacity-50 xl:ml-3 fas fa-caret-down"></i>
    </a>
  </li>
);

export default function Nav() {
  return (
    <header className="flex items-center justify-between pl-8 mx-auto bg-indigo-900 lg:justify-start md:space-x-10">
      <div className="flex justify-start sm:w-40 logo lg:w-52">
        <Image
          src="/../public/revrockt_logo--dark.png"
          alt="RevRockt Logo"
          width="245"
          height="85"
        />
      </div>

      {/* mobile menu trigger */}
      <a
        href="#"
        className="flex items-center order-last text-3xl leading-none transition-all duration-200 lg:hidden"
      >
        <i className="mx-2 fa fa-bars"></i> Menu
      </a>

      <nav className="flex items-stretch self-stretch flex-auto">
        <ul className="hidden lg:flex">
          <NavItem
            href="/launch"
            main="Launch"
            sub="get started today"
            icon="rocket"
          />
          <NavItem
            href="/fuel"
            main="Fuel"
            sub="articles, tools & reports"
            icon="burn"
          />
          <NavItem
            href="/manifesto"
            main="Manifesto"
            sub="roadmap to success"
            icon="map"
          />
        </ul>
      </nav>
      <div className="items-stretch self-stretch justify-end hidden lg:flex-3 action-links lg:flex">
        <div className="flex flex-col justify-center mr-3 space-y-3 text-center">
          <a
            href="/jobs"
            className="text-indigo-400 transition-all duration-200"
          >
            <i className="far fa-smile"></i> We're hiring!
          </a>
          <div className="flex overflow-hidden border-b-2 rounded border-grey-dark">
            <a
              href="/login"
              class="flex group items-center transition-all duration-200"
            >
              <div className="px-4 py-3 bg-blue-200 group-hover:bg-blue-400 shadow-border">
                <div className="w-4 h-5">
                  <i className="text-white fill-current fas fa-user"></i>
                </div>
              </div>
              <span className="px-4 py-3 font-sans text-sm font-bold tracking-wide text-white uppercase bg-blue-400 shadow-border group-hover:bg-blue-600">
                Client Login
              </span>
            </a>
          </div>
        </div>
        <a
          href="#"
          className="flex flex-col justify-center p-8 font-bold leading-tight text-center text-gray-200 transition-all duration-200 bg-yellow-600 hover:bg-yellow-700 hover:text-gray-100"
        >
          <i class="fas fa-phone"></i>
          <span>
            Schedule <br />
            Call
          </span>
        </a>
      </div>
    </header>
  );
}
