import {useState} from "react";
import {Button, Col, Form, Spinner, Row} from "react-bootstrap";
import {FaKey, FaUserAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import Graphic from "../../Components/Graphic/Graphic.jsx";

export default function Login() {
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const onShowSpinner = () => {
        setLoadingSpinner(true)
    }
    return (
    <>
      <Row className="px-0">
        <Col className='d-flex flex-column justify-content-between'>
            <div className="p-5">
                <h3 className="d-flex justify-content-start mb-5">حساب کاربری</h3>
                <div className="my-5">
                    <Form className='pt-5'>
                        <Form.Group className='d-flex align-items-center px-4'>
                            <FaUserAlt className='text-secondary fs-1'/>
                            <Form.Control className='border-0 mb-2' type='text' placeholder=' نام کاربری یا ایمیل'/>
                        </Form.Group>
                        <div className="lineColor mb-4">
                            <br className=''/>
                        </div>
                        <Form.Group className='d-flex align-items-center px-4'>
                            <FaKey className='text-secondary fs-1'/>
                            <Form.Control className='border-0 mb-2' type='password' placeholder='رمز عبور'/>
                        </Form.Group>
                        <div className="lineColor mb-4">
                            <br className=''/>
                        </div>
                        <Link to='/forget' className='text-secondary d-flex justify-content-start text-decoration-none ps-2 mb-5'>رمز عبور خود را فراموش کرده اید؟</Link>
                    </Form>
                </div>
                <Button className='btnBackColor w-100 d-flex justify-content-center align-items-center' onClick={() => onShowSpinner()}>
                    <h3 style={{paddingLeft:'1rem'}}>ورود</h3>
                    {
                        loadingSpinner && (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        )
                    }
                </Button>
            </div>
            <Link to='/register' className='mb-4 text-center text-decoration-none text-dark'>ثبت نام</Link>
        </Col>
        <Col className="mx-0 px-0 d-none d-lg-block">
            <Graphic/>
        </Col>
      </Row>
    </>
  );
}
