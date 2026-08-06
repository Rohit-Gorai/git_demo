import { Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { findLessonByTitle } from '../data/lessons';

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Lesson navigation">
      <Link to="/">
        <strong>FinSchool</strong>
      </Link>
      {curriculum.map((section) => (
        <nav key={section.title} aria-labelledby={`${section.title}-heading`}>
          <h4 id={`${section.title}-heading`}>{section.title}</h4>
          {section.lessons.map((title) => {
            const lesson = findLessonByTitle(title);
            return lesson ? (
              <Link className="lesson-link" to={`/lessons/${lesson.slug}`} key={title}>
                {title}
              </Link>
            ) : (
              <span className="lesson-link lesson-link--disabled" key={title} aria-disabled="true">
                {title}
              </span>
            );
          })}
        </nav>
      ))}
    </aside>
  );
}
