import Link from "next/link";

const LinkCard = ({ title, icn, link = "#" }) => {
  return (
    <>
      <div className='link-card'>
        <Link href={link}>
          <a>
            <div className='link-card__icon'>
              <i className={icn}></i>
            </div>
            <div className='link-card__title'>
              <h5>{title}</h5>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default LinkCard;
