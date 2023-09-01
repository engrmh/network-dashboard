import DashNav from "../../Components/DashNav/DashNav.jsx";
import { Outlet } from "react-router-dom";
import DashSideBar from "../../Components/DashSideBar/DashSideBar.jsx";
import { Col, Row } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Row className="d-flex justify-content-between">
      <Col md={3} lg={3} className="d-none d-md-block">
        <DashSideBar />
      </Col>
      <Col md={9} lg={9} className="">
        <div className="">
          <DashNav />
        </div>
        <div className="">
          <Outlet />
        </div>
      </Col>
    </Row>
  );
}
