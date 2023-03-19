import { NavLink } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";

const TESTDEMO = true;
const TESTVIDEOLINK =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Courses = ({ courseItem, index }) => {
  const { id, title, meta } = courseItem;
  const { skills, courseVideoPreview } = meta;
  const { link } = courseVideoPreview;

  const toPage = "/course/" + id;

  return (
    <div className="courses">
      <h3>
        {index} {title}
      </h3>
      <div className="wrapper">
        <NavLink to={toPage} className="courses__link">
          <HoverVideoPlayer
            className="player"
            videoSrc={TESTDEMO ? TESTVIDEOLINK : link}
            pausedOverlay={
              <img
                className="courses__img"
                src={courseItem.previewImageLink + "/cover.webp"}
                alt=""
                layout="fill"
              />
            }
          />
        </NavLink>
        <div className="description">
          <p className="lessons__count">
            Count lessons: {courseItem.lessonsCount}
          </p>
          <p className="rating">Rating: {courseItem.rating}</p>
          <ul>
            Skills:
            {!skills ? (
              <></>
            ) : (
              skills.map((skill, index) => (
                <li key={"skill" + index}>{skill}</li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
