import Link from "next/link";
import Button from "../common/Button";

const NavBar = ({ position }) => {
  let classDefinition = "nav-bar";
  position && (classDefinition += ` ${position}`);
  return (
    <div className={classDefinition}>
      <Link href='/administration'>
        <a>
          <Button text='Administration' />
        </a>
      </Link>
      <Link href='/'>
        <a>
          <Button text='Voir le site' />
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
