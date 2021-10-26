import Link from "next/link";

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link href='/'>
          <a>
            <img src='./vercel.svg' width='200rem' height='100rem' />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
