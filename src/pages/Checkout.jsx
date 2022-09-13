import { useAuth0 } from "@auth0/auth0-react";
import { Col, Row, Button } from "react-bootstrap";
import { Breadcrumbs } from "@mui/material";
import { Link, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FormControl, FormControlLabel, RadioGroup, FormLabel, Radio } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux'
import { calculateSubTotal } from "../util"
import { clearCart, setCart, setOrder, setUser, updateUser } from "../reducer/mainReducer";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

const Checkout = () => {
    const { user, isAuthenticated } = useAuth0();

    const stateCart = useSelector((state) => state.main.cart);

    const stateUser = useSelector((state) => state.main.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const regions = [
        {
            value: 'United States',
            label: 'United States',
        },
    ];

    const states = [
        {
            value: "Alabama",
            label: "AL"
        },
        {
            value: "Alaska",
            label: "AK"
        },
        {
            value: "American Samoa",
            label: "AS"
        },
        {
            value: "Arizona",
            label: "AZ"
        },
        {
            value: "Arkansas",
            label: "AR"
        },
        {
            value: "California",
            label: "CA"
        },
        {
            value: "Colorado",
            label: "CO"
        },
        {
            value: "Connecticut",
            label: "CT"
        },
        {
            value: "Delaware",
            label: "DE"
        },
        {
            value: "District Of Columbia",
            label: "DC"
        },
        {
            value: "Federated States Of Micronesia",
            label: "FM"
        },
        {
            value: "Florida",
            label: "FL"
        },
        {
            value: "Georgia",
            label: "GA"
        },
        {
            value: "Guam",
            label: "GU"
        },
        {
            value: "Hawaii",
            label: "HI"
        },
        {
            value: "Idaho",
            label: "ID"
        },
        {
            value: "Illinois",
            label: "IL"
        },
        {
            value: "Indiana",
            label: "IN"
        },
        {
            value: "Iowa",
            label: "IA"
        },
        {
            value: "Kansas",
            label: "KS"
        },
        {
            value: "Kentucky",
            label: "KY"
        },
        {
            value: "Louisiana",
            label: "LA"
        },
        {
            value: "Maine",
            label: "ME"
        },
        {
            value: "Marshall Islands",
            label: "MH"
        },
        {
            value: "Maryland",
            label: "MD"
        },
        {
            value: "Massachusetts",
            label: "MA"
        },
        {
            value: "Michigan",
            label: "MI"
        },
        {
            value: "Minnesota",
            label: "MN"
        },
        {
            value: "Mississippi",
            label: "MS"
        },
        {
            value: "Missouri",
            label: "MO"
        },
        {
            value: "Montana",
            label: "MT"
        },
        {
            value: "Nebraska",
            label: "NE"
        },
        {
            value: "Nevada",
            label: "NV"
        },
        {
            value: "New Hampshire",
            label: "NH"
        },
        {
            value: "New Jersey",
            label: "NJ"
        },
        {
            value: "New Mexico",
            label: "NM"
        },
        {
            value: "New York",
            label: "NY"
        },
        {
            value: "North Carolina",
            label: "NC"
        },
        {
            value: "North Dakota",
            label: "ND"
        },
        {
            value: "Northern Mariana Islands",
            label: "MP"
        },
        {
            value: "Ohio",
            label: "OH"
        },
        {
            value: "Oklahoma",
            label: "OK"
        },
        {
            value: "Oregon",
            label: "OR"
        },
        {
            value: "Palau",
            label: "PW"
        },
        {
            value: "Pennsylvania",
            label: "PA"
        },
        {
            value: "Puerto Rico",
            label: "PR"
        },
        {
            value: "Rhode Island",
            label: "RI"
        },
        {
            value: "South Carolina",
            label: "SC"
        },
        {
            value: "South Dakota",
            label: "SD"
        },
        {
            value: "Tennessee",
            label: "TN"
        },
        {
            value: "Texas",
            label: "TX"
        },
        {
            value: "Utah",
            label: "UT"
        },
        {
            value: "Vermont",
            label: "VT"
        },
        {
            value: "Virgin Islands",
            label: "VI"
        },
        {
            value: "Virginia",
            label: "VA"
        },
        {
            value: "Washington",
            label: "WA"
        },
        {
            value: "West Virginia",
            label: "WV"
        },
        {
            value: "Wisconsin",
            label: "WI"
        },
        {
            value: "Wyoming",
            label: "WY"
        }
    ];

    const [region, setRegion] = useState("US")

    const [state, setState] = useState(stateUser?.state ? stateUser.state : "AL")

    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    };

    const handleChangeState = (event) => {
        setState(event.target.value);
        validateState(event.target.value)
    };

    const [value, setValue] = useState('same');

    const [checkoutStep, setCheckoutStep] = useState(0)

    let subTotal = calculateSubTotal(stateCart);

    let tax = (subTotal * 0.07);
    let total = (subTotal * 0.07) + subTotal

    const [firstName, setFirstName] = useState(stateUser?.firstName ? stateUser.firstName : null)
    const [lastName, setLastName] = useState(stateUser?.lastName ? stateUser.lastName : null)
    const [addressLine1, setAddressLine1] = useState(stateUser?.addressLine1 ? stateUser.addressLine1 : null)
    const [addressLine2, setAddressLine2] = useState(stateUser?.addressLine2 ? stateUser.addressLine2 : null)
    const [city, setCity] = useState(stateUser?.city ? stateUser.city : null);
    const [zipCode, setZipcode] = useState(stateUser?.zipCode ? stateUser.zipCode : null);
    const [phone, setPhone] = useState(stateUser?.phone ? stateUser.phone : null);



    const [billingFirstName, setBillingFirstName] = useState("")
    const [billingLastName, setBillingLastName] = useState("")
    const [billingAddressLine1, setBillingAddressLine1] = useState("")
    const [billingAddressLine2, setBillingAddressLine2] = useState("")
    const [billingCity, setBillingCity] = useState("");
    const [billingState, setBillingState] = useState("");
    const [billingZipCode, setBillingZipcode] = useState("");
    const [billingPhone, setBillingPhone] = useState("");

    const [continueToShippingButton, setContinueToShippingButton] = useState(true)
    const [validPhoneNo, setValidPhoneNo] = useState(false)
    const [phoneErrorMessage, setPhoneErrorMessage] = useState("")
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("")
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState("")
    const [addressErrorMessage, setAddressErrorMessage] = useState("")
    const [apartmentErrorMessage, setApartmentErrorMessage] = useState("")
    const [cityErrorMessage, setCityErrorMessage] = useState("")
    const [stateErrorMessage, setStateErrorMessage] = useState("")
    const [zipCodeErrorMessage, setZipCodeErrorMessage] = useState("")

    const [ctnShipDisabled, setCtnShipDisabled] = useState(true);

    const [paymentName, setPaymentName] = useState("");
    const [paymentCard, setPaymentCard] = useState("");
    const [paymentExpirationDate, setPaymentExpirationDate] = useState("");
    const [paymentCvv, setPaymentCvv] = useState("")

    const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState("")
    const [cardNameErrorMessage, setCardNameErrorMessage] = useState("")
    const [cardExpirationErrorMessage, setCardExpirationErrorMessage] = useState("")
    const [cardCvvErrorMessage, setCardCvvErrorMessage] = useState("")

    const [completeOrderDisabled, setCompleteOrderDisabled] = useState(true);


    useEffect(() => {
        let isFormInvalid = validateBeforeContinueToShipping(); //onLoad - false

        let isDataAvailable = (firstName && lastName && addressLine1 && addressLine2 && city && zipCode && phone ? true : false);

        setCtnShipDisabled(isFormInvalid || !isDataAvailable);

    }, [stateUser, firstName, lastName, addressLine1, addressLine2, city, zipCode, phone]);

    useEffect(() => {
        let isPaymentInvalid = validateBeforeContinueToShipping(); //onLoad - false

        let isPaymentDataAvailable = (paymentName && paymentCard && paymentExpirationDate && paymentCvv ? true : false);

        setCompleteOrderDisabled(isPaymentInvalid || !isPaymentDataAvailable);

    }, [paymentName, paymentCard, paymentExpirationDate, paymentCvv]);

    const updateCart = () => {
        console.log("Update Cart called")
        const cartData = {
            "products": [],
            "user": stateUser?._id
        }
        console.log("cartData", cartData)
        fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(cartData),
        }).then(res => res.json())
        // console.log("updatedCart", updatedCart)
    }


    function handleUpdate() {
        if (stateUser) {
            console.log("stateUser", stateUser)
            let stateUserData = JSON.parse(JSON.stringify(stateUser));
            console.log("Address Line 1", addressLine1)
            stateUserData.addressLine1 = addressLine1;
            stateUserData.addressLine2 = addressLine2;
            stateUserData.city = city;
            stateUserData.state = state;
            stateUserData.zipCode = zipCode;
            stateUserData.phone = phone;
            console.log("stateUserData", stateUserData)
            dispatch(updateUser(stateUserData))
        }
    }

    function handleOrder() {
        const orderDetails = {
            "orderId": new Date().getTime(),
            "emailId": stateUser.email,
            "products": stateCart,
            "orderDate": new Date(),
            "orderTotal": total.toFixed(2),
            "orderTax": tax.toFixed(2),
            "orderSubTotal": subTotal,
            "shippigAddress": {
                "addressLine1": addressLine1,
                "addressLine2": addressLine2,
                "city": city,
                "state": state,
                "zipCode": zipCode,
            },
            "user": stateUser._id,
        }
        console.log(orderDetails)
        dispatch(setOrder(orderDetails))
        dispatch(clearCart())
        updateCart()
        navigate("/confirmation")

    }

    function validateCardNumber(cardNo) {
        let cardNumberPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        let cardNumberPatternChecked = cardNumberPattern.test(cardNo)
        setPaymentCard(cardNo)
        if (cardNumberPatternChecked) {
            setCardNumberErrorMessage("")
        } else {
            setCardNumberErrorMessage("Please Enter a valida Card Number")
        }

    }

    function validateCardName(cardName) {
        let cardNamePattern = /^((?:[A-Za-z]+ ?){1,3})$/
        let cardNameChecked = cardNamePattern.test(cardName)
        setPaymentName(cardName)
        if (cardNameChecked) {
            setCardNameErrorMessage("")
        } else {
            setCardNameErrorMessage("Please Enter a vaild Name")
        }
    }

    function validateCardCvv(cardCvv) {
        let cardCvvPattern = /^[0-9]{3,4}$/
        let cardCvvChecked = cardCvvPattern.test(cardCvv)
        setPaymentCvv(cardCvv)
        if (cardCvvChecked) {
            setCardCvvErrorMessage("")
        } else {
            setCardCvvErrorMessage("Please Enter a valid CVV")
        }
    }

    function validateCardExpiration(cardExpiration) {
        let cardExpirationPattern = /^(?:0?[1-9]|1[0-2]) *\/ *[1-9][0-9]$/
        let cardExpirationChecked = cardExpirationPattern.test(cardExpiration)
        setPaymentExpirationDate(cardExpiration)
        if (cardExpirationChecked) {
            let expirationDate = "01/" + cardExpiration;
            let expirationDateMoment = moment(expirationDate, "DD/MM/YY");
            let isValidMoment = moment().isSameOrBefore(expirationDateMoment, "month")
            if (isValidMoment) {
                setCardExpirationErrorMessage("")
            } else {
                setCardExpirationErrorMessage("Expiration Date should be in Future")
            }

        } else {
            setCardExpirationErrorMessage("Please Enter a valid Expiration")
        }
    }

    function validateBeforeCompleteOrder() {
        return (
            (cardNameErrorMessage && cardNameErrorMessage.length > 0) ||
            (cardNumberErrorMessage && cardNumberErrorMessage.length) > 0 ||
            (cardExpirationErrorMessage && cardExpirationErrorMessage.length) > 0 ||
            (cardCvvErrorMessage && cardCvvErrorMessage.length) > 0
        )
    }

    function validatePhone(phoneNo) {
        let phoneNoPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        let phoneNoChecked = phoneNoPattern.test(phoneNo)
        setPhone(phoneNo)
        if (phoneNoChecked) {
            setPhoneErrorMessage("")
        } else {
            setPhoneErrorMessage("Please Enter a valid Phone No")
        }

    }

    function validateFirstName(pFirstName) {
        if (pFirstName.length === 0) {
            setFirstNameErrorMessage("Please Enter First Name")
        } else {
            setFirstNameErrorMessage("")
        }
    }

    function validateLastName(pLastName) {
        if (pLastName.length === 0) {
            setLastNameErrorMessage("Please Enter Last Name")
        } else {
            setLastNameErrorMessage("")
        }
    }

    function validateAddress(pAddress) {
        if (pAddress.length === 0) {
            setAddressErrorMessage("Please Enter Address")
        } else {
            setAddressErrorMessage("")
        }
    }

    function validateApartment(pApartment) {
        if (pApartment.length === 0) {
            setApartmentErrorMessage("Please Enter Aparment")
        } else {
            setApartmentErrorMessage("")
        }
    }

    function validateCity(pCity) {
        if (pCity.length === 0) {
            setCityErrorMessage("Please Enter City")
        } else {
            setCityErrorMessage("")
        }
    }

    function validateState(pState) {
        if (pState.length === 0) {
            setStateErrorMessage("Please Enter State")
        } else {
            setStateErrorMessage("")
        }
    }

    function validateZipCode(pZipCode) {
        if (pZipCode.length === 0) {
            setZipCodeErrorMessage("Please Enter ZipCode")
        } else {
            setZipCodeErrorMessage("")
        }
    }
    function validateBeforeContinueToShipping() {
        return (
            (firstNameErrorMessage && firstNameErrorMessage.length > 0) ||
            (lastNameErrorMessage && lastNameErrorMessage.length) > 0 ||
            (addressErrorMessage && addressErrorMessage.length) > 0 ||
            (apartmentErrorMessage && apartmentErrorMessage.length) > 0 ||
            (cityErrorMessage && cityErrorMessage.length) > 0 ||
            (stateErrorMessage && stateErrorMessage.length > 0) ||
            (zipCodeErrorMessage && zipCodeErrorMessage.length > 0) ||
            (phoneErrorMessage && phoneErrorMessage.length) > 0
        )
    }


    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Row>
            <Col>
                <div className="checkout-data" style={{ padding: '40px' }}>
                    <div className="checkout-info-breadcrumbs">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/cart">
                                Cart
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="#"
                            >
                                Information
                            </Link>
                            {
                                checkoutStep > 0 && <Link underline="hover" color="inherit" href="#">
                                    Shipping
                                </Link>
                            }
                            {
                                checkoutStep > 1 && <Typography color="text.primary">Payment</Typography>
                            }


                        </Breadcrumbs>

                    </div>
                    <div className="checkout-contact-info">
                        <div className="checkout-info">
                            <span>Contact Information</span>
                            {/* <span>Already have an account? Log in</span> */}
                        </div>
                        <div className="checkout-email">
                            <TextField
                                required
                                id="outlined-required"
                                className="checkout-email-textbox"
                                label="Email"
                                placeholder="Email"
                                value={stateUser.email}
                                disabled={true}
                            // defaultValue="Hello World"
                            />
                        </div>
                    </div>
                    <div className="checkout-shipping-address">
                        <div className="checkout-shipping-address-title">
                            <p>Shipping Address</p>
                        </div>
                        <div className="checkout-shipping-address-country">
                            <TextField
                                id="filled-select-currency-native"
                                className="checkout-country"
                                select
                                label="Select your region/country"
                                value={region}
                                onChange={handleChangeRegion}
                                SelectProps={{
                                    native: true,
                                }}
                            // helperText="Please select your region/country"

                            >
                                {regions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </div>
                        <div className="checkout-shipping-address-name">
                            <div className="checkout-shipping-adrs-name">
                                <TextField
                                    required
                                    error={firstNameErrorMessage.length !== 0}
                                    id="outlined-required"
                                    className="checkout-email-textbox"
                                    label="First Name"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(event) => {
                                        setFirstName(event.target.value)
                                        validateFirstName(event.target.value)
                                    }}
                                    helperText={firstNameErrorMessage}
                                // defaultValue="Hello World"
                                />
                            </div>
                            <div className="checkout-shipping-adrs-name">
                                <TextField
                                    required
                                    error={lastNameErrorMessage.length !== 0}
                                    id="outlined-required"
                                    className="checkout-email-textbox"
                                    label="Last Name"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(event) => {
                                        setLastName(event.target.value)
                                        validateLastName(event.target.value)
                                    }}
                                    helperText={lastNameErrorMessage}
                                // defaultValue="Hello World"
                                />
                            </div>
                        </div>

                        <div className="checkout-address" style={{ marginTop: '14px' }}>
                            <TextField
                                required
                                error={addressErrorMessage.length !== 0}
                                id="outlined-required"
                                className="checkout-email-textbox"
                                label="Address"
                                placeholder="Address"
                                onChange={(event) => {
                                    setAddressLine1(event.target.value)
                                    validateAddress(event.target.value)
                                }}
                                value={addressLine1}
                                helperText={addressErrorMessage}
                            // defaultValue="Hello World"
                            />
                        </div>

                        <div className="checkout-apartment" style={{ marginTop: '14px' }}>
                            <TextField
                                required
                                error={apartmentErrorMessage.length !== 0}
                                id="outlined-required"
                                className="checkout-email-textbox"
                                label="Apartment, suite, etc."
                                placeholder="Apartment"
                                onChange={(event) => {
                                    setAddressLine2(event.target.value)
                                    validateApartment(event.target.value)
                                }}
                                value={addressLine2}
                                helperText={apartmentErrorMessage}
                            // defaultValue="Hello World"
                            />
                        </div>

                        <div className="checkout-shipping-address-city-state-zip">
                            <TextField
                                required
                                error={cityErrorMessage.length !== 0}
                                id="outlined-required"
                                className="checkout-adrs-csz"
                                label="City"
                                placeholder="City"
                                onChange={(event) => {
                                    setCity(event.target.value)
                                    validateCity(event.target.value)
                                }}
                                value={city}
                                helperText={cityErrorMessage}
                            // defaultValue="Hello World"
                            />
                            <TextField
                                required
                                error={stateErrorMessage.length !== 0}
                                id="filled-select-currency-native"
                                className="checkout-country checkout-adrs-csz"
                                select
                                label="State"
                                value={state}
                                onChange={handleChangeState}
                                SelectProps={{
                                    native: true,
                                }}
                                helperText={stateErrorMessage}
                            // helperText="Please select your region/country"

                            >
                                {states.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                required
                                error={zipCodeErrorMessage.length !== 0}
                                id="outlined-required"
                                className="checkout-email-textbox checkout-adrs-csz"
                                label="ZIP code"
                                placeholder="ZIP code"
                                onChange={(event) => {
                                    setZipcode(event.target.value)
                                    validateZipCode(event.target.value)
                                }}
                                value={zipCode}
                                helperText={zipCodeErrorMessage}
                            // defaultValue="Hello World"
                            />
                        </div>

                        <div className="checkout-phone" style={{ marginTop: '14px' }}>
                            <TextField
                                required
                                error={phoneErrorMessage.length !== 0}
                                id="outlined-required"
                                className="checkout-email-textbox"
                                label="Phone"
                                placeholder="Phone"
                                onChange={(event) => validatePhone(event.target.value)}
                                value={phone}
                                helperText={phoneErrorMessage}

                            // defaultValue="Hello World"
                            />
                        </div>
                        <div className="checkout-base-buttons">
                            <div>
                                <a style={{ color: 'black' }} href="/cart">Return to cart</a>
                            </div>
                            <div >
                                <Button
                                    onClick={() => {
                                        handleUpdate()
                                        setCheckoutStep(1)

                                    }}
                                    disabled={ctnShipDisabled}
                                    style={{ backgroundColor: 'black', color: 'white' }}>Continue to Shipping</Button>
                            </div>
                        </div>

                    </div>
                    {checkoutStep > 0 && <div className="checkout-shipping" >
                        <div className="shipping-contact-info" style={{ border: '1px solid #f2f2f2', padding: '20px' }}>
                            <Row style={{ borderBottom: '1px solid #f2f2f2', textAlign: 'left', marginBottom: '10px' }}>
                                <Col style={{ color: '#737373' }}>Contact</Col>
                                <Col>{stateUser.email}</Col>
                                {/* <Col style={{ textAlign: 'right' }}>
                                    <a href="">change</a>
                                </Col> */}
                            </Row>
                            <Row style={{ textAlign: 'left' }}>
                                <Col style={{ color: '#737373' }}>Ship To</Col>
                                <Col>{stateUser?.addressLine1}, {stateUser?.addressLine2}, {stateUser?.city}, {stateUser?.state} - {stateUser?.zipCode}</Col>
                                <Col style={{ textAlign: 'right' }}>
                                    <a href="">change</a>
                                </Col>
                            </Row>
                        </div>
                        <div className="shipping-method" style={{ marginTop: '14px' }}>
                            <div style={{ textAlign: 'left', fontWeight: 'bold' }}>
                                <p>Shipping method</p>
                            </div>
                            <div className="shipping-cost" style={{ border: '1px solid #f2f2f2', padding: '5px' }}>
                                <div>
                                    <p>Shipping</p>
                                </div>
                                <div>
                                    <p>$0</p>
                                </div>
                            </div>

                        </div>
                        <div className="checkout-base-buttons">
                            <div>
                                <a onClick={() => { setCheckoutStep(0) }} style={{ color: 'black' }} href="#">Return to information</a>
                            </div>
                            <div >
                                <Button onClick={() => { setCheckoutStep(2) }} style={{ backgroundColor: 'black', color: 'white' }}>Continue to Payment</Button>
                            </div>
                        </div>
                    </div>}
                    {checkoutStep > 1 && <div className="checkout-payment" style={{ textAlign: 'left' }}>
                        <div className="checkout-payment-title">
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Payment</p>
                        </div>
                        <div className="checkout-payment-secure">
                            <p style={{ fontSize: '12px' }}>All transactions are secure and encrypted.</p>
                        </div>
                        <div className="checkout-payment-name" style={{ marginTop: '14px' }}>
                            <TextField
                                required
                                error={cardNameErrorMessage.length !== 0}
                                id="outlined-required"
                                className="checkout-email-textbox"
                                label="Name on Card"
                                placeholder="Name on Card"
                                onChange={(event) => validateCardName(event.target.value)}
                                helperText={cardNameErrorMessage}
                            // defaultValue="Hello World"
                            />
                        </div>
                        <div className="checkout-payment-card-no" style={{ marginTop: '14px' }}>
                            <TextField
                                required
                                error={cardNumberErrorMessage.length !== 0}
                                id="outlined-required"
                                className="checkout-email-textbox"
                                label="Card Number"
                                placeholder="Card Number"
                                onChange={(event) => validateCardNumber(event.target.value)}
                                value={paymentCard}
                                helperText={cardNumberErrorMessage}
                            // defaultValue="Hello World"
                            />
                        </div>
                        <div className="checkout-payment-expiry-secutity">
                            <div className="checkout-payment-expiry-date" style={{ marginTop: '14px' }}>
                                <TextField
                                    required
                                    error={cardExpirationErrorMessage.length !== 0}
                                    id="outlined-required"
                                    className="checkout-email-textbox"
                                    label="Expiry Date"
                                    placeholder="MM/YY"
                                    onChange={(event) => validateCardExpiration(event.target.value)}
                                    value={paymentExpirationDate}
                                    helperText={cardExpirationErrorMessage}
                                // defaultValue="Hello World"
                                />
                            </div>
                            <div className="checkout-payment-security-code" style={{ marginTop: '14px' }}>
                                <TextField
                                    required
                                    error={cardCvvErrorMessage.length !== 0}
                                    id="outlined-required"
                                    className="checkout-email-textbox"
                                    label="Security Code"
                                    placeholder="CVV"
                                    onChange={(event) => validateCardCvv(event.target.value)}
                                    helperText={cardCvvErrorMessage}
                                // defaultValue="Hello World"
                                />
                            </div>

                        </div>
                        <div className="checkout-payment-billing" >
                            <div className="checkout-payment-billing-address">
                                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Billing address</p>
                                <p>Select the address that matches your card or payment method.</p>
                            </div>
                            <div style={{ border: '1px solid #ced4da', padding: '10px' }}>
                                <div>
                                    <FormControl>
                                        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="same" control={<Radio />} label="Same as shipping address" />
                                            <FormControlLabel value="different" control={<Radio />} label="	Use a different billing address" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>

                                {value === 'different' && <div className="checkout-billing-address-different" style={{ marginTop: '14px' }}>
                                    <div className="checkout-shipping-address-country">
                                        <TextField
                                            id="filled-select-currency-native"
                                            className="checkout-country"
                                            select
                                            label="Select your region/country"
                                            value={region}
                                            onChange={handleChangeRegion}
                                            SelectProps={{
                                                native: true,
                                            }}
                                        // helperText="Please select your region/country"

                                        >
                                            {regions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                    <div className="checkout-shipping-address-name">
                                        <div className="checkout-shipping-adrs-name">
                                            <TextField
                                                required
                                                id="outlined-required"
                                                className="checkout-email-textbox"
                                                label="First Name"
                                                placeholder="First Name"
                                                onChange={(event) => setBillingFirstName(event.target.value)}
                                                value={billingFirstName}

                                            // defaultValue="Hello World"
                                            />
                                        </div>
                                        <div className="checkout-shipping-adrs-name">
                                            <TextField
                                                required
                                                id="outlined-required"
                                                className="checkout-email-textbox"
                                                label="Last Name"
                                                placeholder="Last Name"
                                                onChange={(event) => setBillingLastName(event.target.value)}
                                                value={billingLastName}
                                            // defaultValue="Hello World"
                                            />
                                        </div>
                                    </div>

                                    <div className="checkout-address" style={{ marginTop: '14px' }}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            className="checkout-email-textbox"
                                            label="Address"
                                            placeholder="Address"
                                            onChange={(event) => setBillingAddressLine1(event.target.value)}
                                            value={billingAddressLine1}

                                        // defaultValue="Hello World"
                                        />
                                    </div>

                                    <div className="checkout-apartment" style={{ marginTop: '14px' }}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            className="checkout-email-textbox"
                                            label="Apartment, suite, etc."
                                            placeholder="Apartment"
                                            onChange={(event) => setBillingAddressLine2(event.target.value)}
                                            value={billingAddressLine2}

                                        // defaultValue="Hello World"
                                        />
                                    </div>

                                    <div className="checkout-shipping-address-city-state-zip">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            className="checkout-adrs-csz"
                                            label="City"
                                            placeholder="City"
                                            onChange={(event) => setBillingCity(event.target.value)}
                                            value={billingCity}

                                        // defaultValue="Hello World"
                                        />
                                        <TextField
                                            id="filled-select-currency-native"
                                            className="checkout-country checkout-adrs-csz"
                                            select
                                            label="State"
                                            onChange={(event) => setBillingState(event.target.value)}
                                            value={billingState}
                                            SelectProps={{
                                                native: true,
                                            }}
                                        // helperText="Please select your region/country"

                                        >
                                            {states.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            className="checkout-email-textbox checkout-adrs-csz"
                                            label="ZIP code"
                                            placeholder="ZIP code"
                                            onChange={(event) => setBillingZipcode(event.target.value)}
                                            value={billingZipCode}

                                        // defaultValue="Hello World"
                                        />
                                    </div>

                                    <div className="checkout-phone" style={{ marginTop: '14px' }}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            className="checkout-email-textbox"
                                            label="Phone"
                                            placeholder="Phone"
                                            onChange={(event) => setBillingPhone(event.target.value)}
                                            value={billingPhone}

                                        // defaultValue="Hello World"
                                        />
                                    </div>
                                </div>}
                            </div>

                            <div className="checkout-base-buttons">
                                <div>
                                    <a onClick={() => { setCheckoutStep(1) }} style={{ color: 'black' }} href="#">Return to shipping</a>
                                </div>
                                <div >
                                    <Button
                                        disabled={completeOrderDisabled}
                                        onClick={() => {
                                            handleOrder()
                                        }}
                                        style={{ backgroundColor: 'black', color: 'white' }}>Complete Order</Button>

                                </div>
                            </div>

                        </div>
                    </div>}
                </div>
            </Col>
            <Col style={{ background: '#f2f2f2' }}>
                <div id="checkout">
                    <div className="checkout-items">
                        <Row>
                            <Col></Col>
                            <Col style={{ fontWeight: 'bold', marginBottom: '15px' }}>Product</Col>
                            <Col style={{ fontWeight: 'bold' }}>Qty</Col>
                            <Col style={{ fontWeight: 'bold' }}>Price</Col>
                        </Row>
                        {
                            stateCart.map((element) => {
                                return (
                                    <Row>
                                        <Col>
                                            <div className="checkout-product-thumbnail">
                                                <img className="checkout-product-thumbnail-img" src={element.img} alt="" ></img>
                                            </div>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <div className="checkout-product-name">
                                                        <span>{element.name}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className="checkout-product-size">
                                                        <p>{element.size}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <div className="checkout-product-quantity">
                                                <span>{element.quantity}</span>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="checkout-product-price">
                                                <span>${element.price}</span>
                                            </div>
                                        </Col>
                                    </Row>
                                );
                            })
                        }

                    </div>
                    <div className="checkout-subtotal">
                        <Row>
                            <Col>
                                <p>Subtotal</p>
                            </Col>
                            <Col>
                                <p style={{ fontWeight: 'bold' }}>${calculateSubTotal(stateCart)}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Shipping</p>
                            </Col>
                            <Col>
                                <p>Free</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Tax(7%)</p>
                            </Col>
                            <Col>
                                <p>${tax.toFixed(2)}</p>
                            </Col>

                        </Row>
                    </div>
                    <div className="checkout-total">
                        <Row>
                            <Col>
                                <p>Total</p>
                            </Col>
                            <Col>
                                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>${total.toFixed(2)}</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row >

    );
}

export default Checkout;