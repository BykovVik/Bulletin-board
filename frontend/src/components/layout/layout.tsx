import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'

const layout = (props:any) => {

    return (
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} xl={3} lg={3} md={3} >
                    <Sidebar/>
                </Col>
                <Col xxl={9} xl={9} lg={9} md={9} className='content'>
                    {props.children}
                </Col>
            </Row>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} >
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

export default layout