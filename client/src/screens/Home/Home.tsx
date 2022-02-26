import { Card } from "../../components/Card/Card";
import { courseList } from "../../mockData";

// TODO: add image banner to each card (course.bannerImgURL)
export const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      Recommended Courses for You
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {courseList.map((course) => (
          <Card
            key={course.courseNumber}
            title={course.title}
            description={course.description}
            hasButton
            buttonText="Go to Course"
            buttonTo={`/courses/${course.courseNumber}`}
          />
        ))}
      </div>
    </div>
  );
};
