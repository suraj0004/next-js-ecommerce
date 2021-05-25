import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import ShopTiming from "~/components/cart/ShopTiming"
import { TimePicker, MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import GrandTotal from "~/components/cart/GrandTotal"

const Checkout = ({ show, onHide, open_at, close_at, grand_total }) => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedFromTime, handleFromTimeChange] = useState(null);
    const [selectedToTime, handleToTimeChange] = useState(null);

    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="login-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="login-modal">
                    Pickup/Delivery information
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h3 className="text-center">
                    <ShopTiming
                        from_time={open_at}
                        to_time={close_at}
                    />
                </h3>
                <hr />
                <Form>
                    <Form.Group controlId="formGroupEmail">

                        <div className="text-center h6">Pick-Up Date and Timing</div>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <DatePicker
                                autoOk
                                clearable
                                disablePast
                                value={selectedDate}
                                onChange={handleDateChange}
                                orientation="landscape"
                                variant="static"
                            />
                        </MuiPickersUtilsProvider>

                    </Form.Group>

                    <div className="row">
                        <div className="col-6">
                            <div className="text-center">
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <TimePicker
                                        label="From Time"
                                        value={selectedFromTime}
                                        minutesStep={5}
                                        onChange={handleFromTimeChange}
                                        clearable
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="text-center">
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <TimePicker
                                        label="To Time"
                                        value={selectedToTime}
                                        minutesStep={5}
                                        onChange={handleToTimeChange}
                                        clearable
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="pr-3 pl-3">
                        <GrandTotal grand_total={grand_total} />
                    </div>

                    <Button className="font-weight-bold" block variant="primary" type="submit">
                        Confirm & place order
                    </Button>
                </Form>

            </Modal.Body>
        </Modal>
    );
};


export default Checkout;