import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import TextField from '@mui/material/TextField';
const Account = () => {
    const { user } = useAuth0();

    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <div style={{ padding: '80px', background: '#f9f9fb' }}>
            <div style={{ textAlign: 'right', justifyContent: 'right', width: '98%' }} >
                <a style={{ color: 'black', textAlign: 'right', justifyContent: 'right' }} href="">Logout</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        className="account-first-name"
                        label="First Name"
                        placeholder="First Name"
                    />
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <TextField
                        required
                        id="outlined-required"
                        className="account-last-name"
                        label="Last Name"
                        placeholder="Last Name"
                    />
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <Button style={{ width: '150px', height: '55px', fontSize: '18px', backgroundColor: 'black' }}>Update</Button>
                </div>
            </div>
            <Row>
                <Col lg={8}>
                    <Row>
                        <Col style={{ textAlign: 'left', fontWeight: '800', fontSize: '24px', marginTop: '20px' }}>MY ACCOUNT</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'left', marginTop: '20px', fontWeight: '600' }}>ORDER HISTORY</Col>
                    </Row>
                    <Row style={{ marginTop: '20px' }}>
                        <Col>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Order</th>
                                        <th>Date</th>
                                        <th>Payment Status</th>
                                        <th>Fulfillment Status</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Desc</td>
                                        <td>Desc</td>
                                        <td>Desc</td>
                                        <td>Desc</td>
                                        <td>Desc</td>
                                    </tr>
                                    <tr>
                                        <td>Desc</td>
                                        <td>Desc</td>
                                        <td>Desc</td>
                                        <td>Desc</td>
                                        <td>Desc</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Col>
                <Col style={{ padding: '50px' }}>
                    <Row>
                        <Col style={{ textAlign: 'left', fontWeight: '600' }}>ACCOUNT DETAILS</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'left', marginTop: '20px' }}>MADHU MIDA</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'left', marginTop: '20px' }}>
                            <h6>Dr.S.Sanjeeviraj</h6>
                            <h6>21B/1 Ponnagaram</h6>
                            <h6>Rajapalayam 626108</h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Account;