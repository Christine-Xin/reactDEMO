import React from 'react'
import {Row,Col} from 'antd'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'
import NavLeft from './components/NavLeft'
import "antd/dist/antd.css"
import './style/common.less'
import Login from './pages/login'

export default class Admin extends React.Component{
    render(){
        return(
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span={21} className="main">
                    <Header></Header>
                    <Row className="content">
                        {/* <Login></Login> */}
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}