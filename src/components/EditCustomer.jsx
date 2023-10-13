import { Link, useParams, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { baseUrl } from "../shared";
export default function EditCustomer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();

  const navigate = useNavigate();

  const [customer, setCustomer] = useState();

  useEffect(() => {
    const url = baseUrl + "api/customers/" + id;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, []);

  return (
    <>
      {customer ? (
        <div className="container mx-auto mt-8">
          <Button variant="warning" onClick={handleShow}>
            Edit Customer
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{customer.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="">
                <label htmlFor="">Name:</label>
                <input
                  className="form-control mb-2"
                  type="text"
                  defaultValue={customer.name}
                />
                <label htmlFor="">Industry:</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={customer.industries}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : null}
    </>
  );
}
