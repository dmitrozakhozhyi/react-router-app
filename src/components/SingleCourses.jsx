import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import courses from '../data/courses';
/* import NotFound from './NotFound'; */

const SingleCourses = () => {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.courseSlug);
  const navigate = useNavigate();

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  return (
    <>
      <div className="container">
        <h1>{course?.title}</h1>
        <h2>{course?.slug}</h2>
        <h3>{course?.id}</h3>
        <Link to=".." relative="path">
          All courses
        </Link>
      </div>
    </>
  );
};

export default SingleCourses;
