import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className='header__logo'>
          <Link href='/'>
            <a>
              <img src='./logo.png' width='100%' />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
