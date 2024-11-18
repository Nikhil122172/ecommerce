import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";

export default function PaymentGateway() {
  const handlePayment = () => {
    // alert("Payment processed successfully!");
    toast.success("Payment processed successfully!",{
      position:"top-center",
    });
  };

  const userDetail = {
    userD: localStorage.getItem("User")
    ? JSON.parse(localStorage.getItem("User"))
    : [],
};

// console.log("ye user detail hai->",userDetail.userD.user.email);


  return (
    <>
    <div>{userDetail.userD.user.fullname}</div>
    <div>{userDetail.userD.user.email}</div>
    <MDBContainer
      fluid
      className="py-5"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol md="8" lg="6" xl="5">
          <MDBCard className="rounded-3 shadow-lg">
            <MDBCardBody className="p-5">
              <h3 className="text-center fw-bold text-primary mb-4">
                Payment Gateway
              </h3>
              <form>
                {/* Cardholder Name */}
                <MDBInput
                  label="Cardholder's Name"
                  id="cardholderName"
                  type="text"
                  size="lg"
                  className="mb-4"
                  placeholder="Enter cardholder's name"
                />

                {/* Card Number */}
                <MDBInput
                  label="Card Number"
                  id="cardNumber"
                  type="text"
                  size="lg"
                  className="mb-4"
                  placeholder="XXXX XXXX XXXX XXXX"
                />

                {/* Expiry Date and CVV */}
                <MDBRow className="mb-4">
                  <MDBCol size="6">
                    <MDBInput
                      label="Expiry Date"
                      id="expiryDate"
                      type="text"
                      size="lg"
                      placeholder="MM/YYYY"
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput
                      label="CVV"
                      id="cvv"
                      type="text"
                      size="lg"
                      placeholder="XXX"
                    />
                  </MDBCol>
                </MDBRow>

                {/* Billing Address */}
                <MDBInput
                  label="Billing Address"
                  id="billingAddress"
                  type="text"
                  size="lg"
                  className="mb-4"
                  placeholder="Enter your billing address"
                />

                {/* Pay Now Button */}
                <MDBBtn
                  color="success"
                  size="lg"
                  block
                  onClick={handlePayment}
                >
                  Pay Now
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
}
