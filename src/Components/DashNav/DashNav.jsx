import {Button, Container, Image, Navbar , Form} from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import './DashNav.css'
export default function DashNav() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                <Form className="d-flex" style={{backgroundColor: 'var(--purple-light)' ,borderRadius:'50px'}}>
                    <Form.Control
                        type="search"
                        placeholder="جستجوی کاربر"
                        className="border-0 rounded-0 searchingUserInput"
                        style={{backgroundColor:'#fff8'}}
                    />
                    <Button style={{backgroundColor:'#fff8'}} className='border-0 rounded-0'>
                        <SearchIcon/>
                    </Button>
                </Form>
                <Navbar.Brand>
                    <Image src='/img/logoipsum-298.svg'/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
