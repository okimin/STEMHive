import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { courseList } from "../../mockData";

export const Home = () => {
  return (
    <div>
      Recommended Courses for You
      <Row className="d-flex justify-content-start gap-4">
        {courseList.map((course) => (
          <Card style={{ width: "18rem" }}>
            <Link to={`/courses/${course.courseNumber}`}>
              <Card.Img variant="top" src={course.bannerImgURL} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </Row>
    </div>
  );
};
