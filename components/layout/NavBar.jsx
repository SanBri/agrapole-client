import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { logout } from "../../actions/auth";
import Button from "../common/Button";

const NavBar = ({ position }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  let classDefinition = "nav-bar";
  position && (classDefinition += ` ${position}`);

  const onLogoutClick = () => {
    router.push("/");
    document.getElementById("navBar").style.display = "none";
    dispatch(logout());
  };

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    screen.width < 900 && router.pathname != "/administration"
      ? setMobile(true)
      : "";
  }, []);

  return (
    <div className={classDefinition} id='navBar'>
      {router.pathname == "/dashboard" ? (
        <div className='nav-bar__links'>
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
      ) : router.pathname == "/" ? (
        <Link href='/dashboard'>
          <a>
            <Button text='Tableau de bord' className='edit' />
          </a>
        </Link>
      ) : (
        ""
      )}
      <div className='nav-bar__logout'>
        <Button
          text='Déconnexion'
          icn='fas fa-sign-out-alt'
          mobile={mobile}
          className='delete'
          onClick={() => onLogoutClick()}
        />
      </div>
    </div>
  );
};

export default NavBar;
