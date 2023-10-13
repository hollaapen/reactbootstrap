import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../shared";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Customer() {
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

  // return (
  //   <>
  //     <p className="mb-4 text-lg font-bold">Customer Details</p>
  //     {customer ? (
  //       <div className="container mx-auto mt-8">
  //         <p>{customer.id}</p>
  //         <p>{customer.name}</p>
  //         <p>{customer.industry}</p>
  //       </div>
  //     ) : null}
  //     <Link to="/customers">Back</Link> <br />
  //   </>
  // );

  return (
    <>
      <p className="mb-4 text-lg font-bold">Customer Details</p>
      {customer ? (
        <div className="container mx-auto mt-8">
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>

          <Button variant="danger" onClick={handleShow}>
            Delete
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
              Are you sure you want to delete this record?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                class="btn btn-danger"
                onClick={(e) => {
                  const url = baseUrl + "api/customers/" + id;
                  fetch(url, {
                    method: "DELETE",
                  }).then((response) => {
                    if (!response.ok) {
                      throw new Error("Something went wrong");
                    }
                    navigate("/customers");
                  });
                }}
                variant="danger"
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : null}
      <br />
      <Link to="/customers">Back</Link> <br />
    </>
  );
}
