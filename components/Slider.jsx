import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { getPartners } from "../actions/partner";

import Button from "./common/Button";
import PartnerLogo from "./common/PartnerLogo";

const Slider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartners());
  }, [dispatch]);

  const data = useSelector((state) => state.partnerReducer.partners);

  return (
    <div className='slider'>
      <div className='slider__title'>
        <h3>NOS PARTENAIRES</h3>
      </div>
      {data.length > 0 ? (
        <div className='slider__carousel'>
          <Carousel
            autoPlay
            stopOnHover={false}
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
          >
            {data.map((e) => (
              <div className='slide-content' key={e._id} id={e.key}>
                {e.image && (
                  <div className='slide-content__image'>
                    <PartnerLogo image={e.image} size={"100%"} />
                  </div>
                )}
                <div className='slide-content__title'>
                  <h2>{e.name}</h2>
                </div>
                {e.url && (
                  <Link href={`https://${e.url}`}>
                    <a target='_blank' rel='noopener noreferrer'>
                      <div className='slide-content__button'>
                        <Button text='Site Web' />
                      </div>
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Slider;
