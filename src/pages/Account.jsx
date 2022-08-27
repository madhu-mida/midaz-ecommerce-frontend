import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setCart, setUser, updateUser } from "../reducer/mainReducer";
const Account = () => {
    const { user, isAuthenticated } = useAuth0();

    const [userDetails, setUserDetails] = useState(null)

    const { logout } = useAuth0();

    const URL = "http://localhost:4000/";


    const stateUser = useSelector((state) => state.main.user);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    async function getUserDetails() {
        let data = []
        if (isAuthenticated) {
            data = await fetch(URL + "user/" + `?emailParams=${user.email}`).then(res => res.json())
            console.log("USER ALREADY EXISTS: ", data)
            if (!data || data.length === 0) {
                let userObj = {
                    userId: user.email,
                    email: user.email,
                }
                data = await fetch(URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify(userObj),
                }).then(res => res.json())
                console.log("NEW USER: ", data)
            } else {
                data = data[0];
            }
            let cartDataFromDB = await fetch(URL + "cart/" + `?userIdParams=${data._id}`).then(res => res.json())
            dispatch(setUser(data));
            console.log("cartDataFromDB", cartDataFromDB)
            dispatch(setCart(cartDataFromDB[0].products))
        }
    }

    function handleUpdate() {
        console.log("firstName", firstName);
        console.log("lastname", lastName)
        if (stateUser) {
            console.log("stateUser", stateUser)
            let stateUserData = JSON.parse(JSON.stringify(stateUser));
            stateUserData.firstName = firstName;
            stateUserData.lastName = lastName;
            console.log("stateUserData", stateUserData)
            dispatch(updateUser(stateUserData))
            setFirstName("")
            setLastName("")
        }
    }


    useEffect(() => {
        console.log("user", user)
        getUserDetails()
        console.log(userDetails)
    }, [user, isAuthenticated])

    return (
        <div style={{ padding: '80px', background: '#f9f9fb' }}>
            <div style={{ textAlign: 'right', justifyContent: 'right', width: '98%' }} >
                <a style={{ color: 'black', textAlign: 'right', justifyContent: 'right' }}
                    onClick={() => logout({ returnTo: `${window.location.protocol}//${window.location.host}` })}
                    href="#">Logout</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        className="account-first-name"
                        label="First Name"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <TextField
                        required
                        id="outlined-required"
                        className="account-last-name"
                        label="Last Name"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <Button onClick={handleUpdate} style={{ width: '150px', height: '55px', fontSize: '18px', backgroundColor: 'black' }}>Update</Button>
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
                        <Col style={{ textAlign: 'left', marginTop: '20px' }}>{stateUser?.firstName ? stateUser.firstName : ""} {stateUser?.lastName ? stateUser.lastName : ""}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'left', marginTop: '20px' }}>
                            {/* <h6>Dr.S.Sanjeeviraj</h6> */}
                            <h6>{stateUser?.addressLine1 ? stateUser.addressLine1 : ""}</h6>
                            <h6>{stateUser?.addressLine2 ? stateUser.addressLine2 : ""}</h6>
                            <h6>{stateUser?.city ? stateUser.city : ""}</h6>
                            <h6>{stateUser?.state ? stateUser.state : ""} {stateUser?.zipCode ? stateUser.zipCode : ""} </h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Account;