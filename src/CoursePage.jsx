import { NavLink, useLoaderData} from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";
import { useState } from "react";

const lesStatus = {
  ["LOCKED"]: "🔒",
  ["UNLOCKED"]: "🔓",
};

const TESTVIDEOLINK = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

export const Course = () => {
  const selectedCourse = useLoaderData();
  const { title, lessons, description } = selectedCourse;

  const [currentLesson, setCurrentLesson] = useState({
    currentLessonIndex: 1,
    currentLessonVideoLink:
      lessons && lessons.length > 0 ? lessons[0].link : TESTVIDEOLINK,
  });
  const { currentLessonIndex, currentLessonVideoLink } = currentLesson;

  return (
    <div className="lesson__page">
      <h2 className="lesson__title">Course Name: {title}</h2>
      <p>Description: {description}</p>

      <div className="lesson__content">
        <div>
          <ReactHlsPlayer className={"lesson__video"} src={currentLessonVideoLink} controls />
        </div>
        <div className="lesson__list">
          {lessons.map((lesson, index) => {
            return (
              <div key={"les" + index}>
                <NavLink
                  className={
                    lesson.status.toUpperCase() === "LOCKED"
                      ? "lesson__item--disabled"
                      : "lesson__item--active"
                  }
                  onClick={() =>
                    setCurrentLesson({
                      ...currentLesson,
                      currentLessonIndex: index + 1,
                      currentLessonVideoLink: lesson.link,
                    })
                  }
                >
                  <li
                    className={
                      "lesson__item" +
                      (lesson.status.toUpperCase() === "LOCKED"
                        ? " lesson__item--disabled"
                        : " lesson__item--active") +
                      (currentLessonIndex === index + 1
                        ? " lesson__item--current__lesson"
                        : "")
                    }
                    key={"lesson" + index}
                  >
                    {lesStatus[lesson.status.toUpperCase()] +
                      (index + 1) +
                      " " +
                      lesson.title}
                  </li>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
