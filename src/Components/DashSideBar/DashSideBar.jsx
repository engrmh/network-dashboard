import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaidIcon from "@mui/icons-material/Paid";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SchoolIcon from "@mui/icons-material/School";

export default function DashSideBar() {
  return (
    <div className="BackColor1 vh-100">
      <div className="p-4">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/img/avatar.svg"
            width={100}
            height={100}
            className="rounded-circle"
          />
          <h5 className="my-4 text-white">محمد حسین سلیم بهرامی</h5>
          <h5 className="text-white">مدیر کل</h5>
        </div>
      </div>
      <hr className="bg-white" />
      <div className="py-3 px-2">
        <div className="d-flex flex-column align-items-start">
          <Link
            to=""
            className="text-white text-decoration-none d-flex align-items-center p-3"
          >
            <HomeIcon style={{ fontSize: "40px" }} />
            <h5 className="p-0 mb-0" style={{ marginRight: "10px" }}>
              صفحه اصلی
            </h5>
          </Link>
          <Link
            to="new"
            className="text-white text-decoration-none d-flex align-items-center p-3"
          >
            <PersonAddIcon style={{ fontSize: "40px" }} />
            <h5 className="p-0 mb-0" style={{ marginRight: "10px" }}>
              اضافه کردن کاربر
            </h5>
          </Link>
          <Link
            to="messages"
            className="text-white text-decoration-none d-flex align-items-center p-3 overflow-auto"
          >
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon style={{ fontSize: "40px" }} />
            </Badge>
            <h5 className="p-0 mb-0" style={{ marginRight: "10px" }}>
              پیام ها
            </h5>
          </Link>
          <Link
            to="report"
            className="text-white text-decoration-none d-flex align-items-center p-3"
          >
            <PaidIcon style={{ fontSize: "40px" }} />
            <h5 className="p-0 mb-0" style={{ marginRight: "10px" }}>
              گزارش مالی
            </h5>
          </Link>
          <Link
            to="support"
            className="text-white text-decoration-none d-flex align-items-center p-3"
          >
            <SupportAgentIcon style={{ fontSize: "40px" }} />
            <h5 className="p-0 mb-0" style={{ marginRight: "10px" }}>
              پشتیبانی
            </h5>
          </Link>
          <Link
            to="edu"
            className="text-white text-decoration-none d-flex align-items-center p-3"
          >
            <SchoolIcon style={{ fontSize: "40px" }} />
            <h5 className="p-0 mb-0" style={{ marginRight: "10px" }}>
              آموزش
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
