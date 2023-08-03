import {useState} from "react";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {FaKey, FaUserAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import Graphic from "../../Components/Graphic/Graphic.jsx";
import {TbMailFilled} from "react-icons/tb";

export default function Register() {
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const onShowSpinner = () => {
        setLoadingSpinner(true)
    }
    return (
        <>
            <Row className="px-0">
                <Col className=''>
                    <div className="p-5">
                        <h3 className="d-flex justify-content-start mb-5">ثبت نام</h3>
                        <div className="my-5">
                            <Form className='py-5'>
                                <Form.Group className='d-flex align-items-center px-4'>
                                    <FaUserAlt className='text-secondary fs-1'/>
                                    <Form.Control className='border-0 mb-2' type='text' placeholder='نام کاربری'/>
                                </Form.Group>
                                <div className="lineColor mb-4">
                                    <br className=''/>
                                </div>
                                <Form.Group className='d-flex align-items-center px-4'>
                                    <TbMailFilled className='text-secondary fs-1'/>
                                    <Form.Control className='border-0 mb-2' type='text' placeholder='ایمیل'/>
                                </Form.Group>
                                <div className="lineColor mb-4">
                                    <br className=''/>
                                </div>
                                <Form.Group className='d-flex align-items-center px-4'>
                                    <FaKey className='text-secondary fs-1'/>
                                    <Form.Control className='border-0 mb-2' type='text' placeholder='رمز عبور'/>
                                </Form.Group>
                                <div className="lineColor mb-4">
                                    <br className=''/>
                                </div>
                                <Form.Group className='d-flex align-items-center px-4'>
                                    <FaKey className='text-secondary fs-1'/>
                                    <Form.Control className='border-0 mb-2' type='password' placeholder='تکرار رمز عبور'/>
                                </Form.Group>
                                <div className="lineColor mb-4">
                                    <br className=''/>
                                </div>
                            </Form>
                        </div>
                        <Button className='btnBackColor w-100 d-flex justify-content-center align-items-center' onClick={() => onShowSpinner()}>
                            <h3 style={{paddingLeft:'1rem'}}>ثبت نام</h3>
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
                </Col>
                <Col className="mx-0 px-0 d-none d-lg-block">
                    <Graphic/>
                </Col>
            </Row>
        </>
    );
}
