import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { getPartners } from "../actions/partner";

import Button from "./common/Button";

const Slider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartners());
  }, [dispatch]);

  const data = useSelector((state) => state.partnerReducer.partners);

  return (
    <section>
      <div className='slider'>
        <div className='slider__title'>
          <h2>Nos Partenaires</h2>
        </div>
        {data.length > 0 ? (
          <div className='slider__carousel'>
            <Carousel
              autoPlay
              interval={2500}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
            >
              {data.map((e) => (
                <div className='slide-content' key={e._id} id={e.key}>
                  {e.image && <img src='./logo.png' width={50} height={50} />}
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
    </section>
  );
};

export default Slider;
