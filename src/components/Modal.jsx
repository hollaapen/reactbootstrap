<Modal
  show={props.show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton>
    <Modal.Title>Add Customer</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setName("");
        setIndustry("");
        props.newCustomer(name, industry);
      }}
      id="editmodal"
    >
      <div >
        <div >
          <label
            for="name"
          >
            Name
          </label>
        </div>
        <div >
          <input
            
            id="name"
            placeholder="Google"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </div>
      <div >
        <div >
          <label
            for="industry"
          >
            Industry
          </label>
        </div>
        <div className="md:w-2/3">
          <input
           id="industry"
            placeholder="Computing"
            type="text"
            value={industry}
            onChange={(e) => {
              setIndustry(e.target.value);
            }}
          />
        </div>
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <button
     onClick={props.toggleShow}
    >
      Close
    </button>
    <button
      form="editmodal"
    >
      Add
    </button>
  </Modal.Footer>
</Modal>;
