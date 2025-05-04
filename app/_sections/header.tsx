import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from '../_components/mobile-menu';

const Header = () => {
  return (
    <header className="w-full min-h-[70px] border-b-2 border-[rgba(var(--primary-color),0.2)] flex justify-center items-center">
        <Nav/>
    </header>
  );
};

const Nav = () => {
    return(
        <nav className="w-full max-w-[1120px] 2xl:max-w-[1500px] flex justify-between items-center px-[10px]">
            <Nav_Logo />
            <Nav_Onglets />
            <Nav_Auth />
            <MobileMenu/>
      </nav>
    )
}

const Nav_Logo = () => {
    return (
      <div className="flex items-center w-full max-w-[160px]">
        <Link href="/">
          <Image
            src="/logo_CareInvest.svg"
            alt="Logo CareInvest"
            width={100}
            height={40}
            className="w-[75%] h-auto md:w-[100%] cursor-pointer"
          />
        </Link>
      </div>
    );
  };

const Nav_Onglets = () => {
  return (
    <div className="hidden md:flex gap-[30px] text-center text-[12px] 2xl:text-[14px] font-medium">
      {[
        { href: '/situation', label: 'MA SITUATION' },
        { href: '/projets', label: 'MES PROJETS' },
        { href: '/rapports', label: 'MES RAPPORTS' },
        { href: '/simulateurs', label: 'MES SIMULATEURS' },
      ].map(({ href, label }) => (
        <Link href={href} key={href}>
          <button className="cursor-pointer relative bg-white text-black px-[12px] py-[8px] transition-all duration-[300ms] hover:after:w-[80%] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-[300ms]">
            {label}
          </button>
        </Link>
      ))}
    </div>
  );
};

const Nav_Auth = () => {
  return (
    <div className="hidden lg:flex gap-[24px] 2xl:gap-10">
      <Link href="auth/login">
        <button className="cursor-pointer p-[10px] text-[12px] border border-black text-black rounded-[20px] hover:bg-[#DDDDDD] transition-all 2xl:text-[14px]">
          Connexion
        </button>
      </Link>
      <Link href="auth/register">
        <button className="cursor-pointer px-[12px] py-[10px] text-[12px] bg-black text-white rounded-[20px] border border-black hover:bg-[#DDDDDD] hover:text-black transition-all 2xl:text-[14px]">
          Essayer CareInvest
        </button>
      </Link>
    </div>
  );
};


export default Header;
