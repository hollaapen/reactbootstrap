import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { baseUrl } from "../shared";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddCustomer from "./AddCustomer";

export default function Customers(props) {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");

  const [customers, setCustomers] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //useState is used to monitor the state of an

  useEffect(() => {
    fetch(baseUrl + "api/customers")
      .then((response) => response.json())

      .then((data) => {
        setCustomers(data.customers);
      });

    //empty dependency array itatuokolea kuload data once
  }, []);

  function newCustomer(name, industry) {
    data = { name: name, industry: industry };
    const url = baseUrl + "api/customers/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("something went wrong");
        }
      })
      .then((data) => {
        //success
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <>
      <Container>
        <Row>
          {customers
            ? customers.map((hh) => {
                return (
                  <>
                    <Col>
                      <Card style={{ width: "18rem" }}>
                        <Card.Body>
                          <Card.Title>{hh.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            {hh.id}
                          </Card.Subtitle>
                          <Card.Text>Body</Card.Text>
                          <Card.Link href={"/customers/" + hh.id}>
                            Details
                          </Card.Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                );
              })
            : null}
        </Row>
      </Container>

      <br />

      <AddCustomer newCustomer={newCustomer} />
    </>
  );
}
