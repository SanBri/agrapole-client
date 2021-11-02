import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className='header__logo'>
          <Link href='/'>
            <a>
              <img src='./vercel.svg' width='200rem' height='100rem' />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
