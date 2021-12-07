import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getPDFCards } from "../actions/PDFCard";
import _ from "lodash";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Button from "./common/Button";

const CoursesBlock = () => {
  const dispatch = useDispatch();
  const [id] = useState(uuidv4());

  useEffect(() => {
    dispatch(getPDFCards("A", id));
  }, [dispatch]);

  let data = useSelector((state) =>
    state.PDFCardReducer.PDFCards.find((e) => e.id === id)
  );

  let courses;
  data && (courses = _.chunk(data.data, 3));

  return (
    <div className='courses-block'>
      <div className='courses-block__content'>
        <div className='courses-block__content-title'>
          <h3>FORMATIONS</h3>
        </div>
        <div className='courses-block__content-slider'>
          <Carousel
            selectedItem={0}
            swipeable={true}
            autoPlay={true}
            interval={4500}
            stopOnHover
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
          >
            {data &&
              courses.map((element) => (
                <div key={courses.indexOf(element)} className='slide-content'>
                  <div className='slide-content__PDF-cards'>
                    {element.map((course) => (
                      <div key={course._id} className='PDF-card'>
                        <div className='PDF-card__title'>
                          <p>{course.title}</p>
                        </div>
                        <Button className='pdf-button' text='Voir le PDF' />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CoursesBlock;
