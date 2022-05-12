import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Navigationbar from './Navigationbar';
import { useState } from 'react';
import Footer from './Footer';
import BootstrapTable from 'react-bootstrap-table-next';
import customerData from '../data/customer';
import paginationFactory from 'react-bootstrap-table2-paginator';
import '../assets/css/homescreen.css';

const CreateCustomer = (props) => {
  const [customer, setCustomer] = useState( { id: props.customerlist.length + 1 ,
    name: '',
    address: ''
  }); 
  const handleChange = (event) => {
    const {name,value} = event.target
    setCustomer((prevState)=>{
      return {
        ...prevState,
        [name] : value
      }
    })
  }
  const addNewCustomer = (event) => {
    props.customerlist.push(customer)
    props.onHide()
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Customer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onChange={handleChange} type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control name="address" onChange={handleChange} type="text" placeholder="Address" />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant='dark' onClick={props.onHide}>Cancel</Button>
        <Button variant="success" type="submit" onClick={addNewCustomer}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
const EditCustomer = (props) => {
  const [customer, setCustomer] = useState( { id: 0 ,
    name: '',
    address: ''
  });
  const handleChange = (event) => {
    const {name,value} = event.target
    setCustomer((prevState)=>{
      return {
        ...prevState,
        [name] : value
      }
    })
  }
  const EditCustomerFunction = () => {
    customer['id'] = props.customerlist[props.editid].id
    props.customerlist[props.editid] = customer
    props.onHide()
    console.log(props.customerlist)
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Customer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"  name="name" onChange={handleChange} placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control  name="address" onChange={handleChange} type="text" placeholder="Address" />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant='dark' onClick={props.onHide}>Cancel</Button>
        <Button variant="success" type="submit" onClick={EditCustomerFunction}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const DeleteCustomer = (props) => {
  const deleteCustomerFunction = () => {
    props.customerlist.splice(props.deleteid,1)
    props.onHide()
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Customer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>   
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label><strong>Are you Sure?</strong></Form.Label>
         
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant='dark' onClick={props.onHide}>Cancel</Button>
        <Button variant="danger" type="submit" onClick={deleteCustomerFunction}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const HomeScreen = () => {
    const customerlist = customerData;
    const [createCustomerShow, setCustomerShow] = useState(false);
    const [editCustomerShow, setEditShow] = useState(false);
    const [deleteCustomerShow, setDeleteShow] = useState(false);
    const [editid, setEditId] = useState(0);
    const [deleteid, setDeleteId] = useState(0);
    const columns = [ {
      dataField: 'name',
      text: 'Name'
    }, {
      dataField: 'address',
      text: 'Address'
    },{
      dataField: 'editButton',
      isDummyField: true,
      text: 'Edit',
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          <td><Button variant='warning'  onClick={() => {setEditShow(true);setEditId(rowIndex)}} >Edit</Button></td>
        </div>
      )
    },{
      dataField: 'deleteButton',
      isDummyField: true,
      text: 'Delete',
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          <td><Button variant='danger' onClick={() => {setDeleteShow(true);setDeleteId(rowIndex)}} >Delete</Button></td>
        </div>
      )
    }];
    return (
        <>
            <Navigationbar />
            <div className='m-3'>
            <Button className='mb-2' type='primary'  onClick={() => setCustomerShow(true)}>New Customer</Button>
            <BootstrapTable keyField='id' data={ customerlist } columns={ columns } pagination={ paginationFactory() } />
           
            <CreateCustomer
              customerlist = {customerlist}
              show={createCustomerShow}
              onHide={() => setCustomerShow(false)}
            />
             <EditCustomer
              customerlist = {customerlist}
              show={editCustomerShow}
              editid = {editid}
              onHide={() => setEditShow(false)}
            />
            <DeleteCustomer
              customerlist = {customerlist}
              show={deleteCustomerShow}
              deleteid = {deleteid}
              onHide={() => setDeleteShow(false)}
            />
            <hr/>
            <Footer />
            </div>
        </>
    )
}

export default HomeScreen;