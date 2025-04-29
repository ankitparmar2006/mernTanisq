import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Checkout=()=>{

    return(
        <>
        <h1>Checkout Page</h1>


        <Form style={{width:"300px",margin:"auto"}} >

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shipping Address</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact Number</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>







      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </>
    )
}

export default Checkout;