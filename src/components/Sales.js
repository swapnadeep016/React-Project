import { Button, Modal, Form } from 'react-bootstrap';
import storeSalesList from '../data/sales';
import storeDataList from '../data/stores';
import productDataList from '../data/product';
import customerData from '../data/customer'
import 'bootstrap/dist/css/bootstrap.css'
import Navigationbar from './Navigationbar';
import { useState } from 'react';
import Footer from './Footer';
const CreateSales = (props) => {
  
  const [sales, setSales] = useState( { id: props.saleslist.length + 1 ,
    datesold: '',
    customer: '',
    product: '',
    store: ''
  }); 
  
  const handleChange = (event) => {
    const {name,value} = event.target
    console.log(name)
    console.log(value)
    setSales((prevState)=>{
      return {
        ...prevState,
        [name] : value
      }
    })
  }
  const addNewSales = (event) => {
    // console.log(event)
    // console.log(props.customerlist.length)
    // console.log("Adding")
    // console.log(customer)
    props.saleslist.push(sales)
    props.setModalShow(false)
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
          Create Sale
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Date Sold</Form.Label>
          <Form.Control name="datesold" onChange={handleChange} type="date" placeholder="11/29/2018" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Customer</Form.Label>
          <Form.Select  onChange={handleChange}  name='customer' aria-label="Default select example">
            <option>Open this select menu</option>
            {
                 customerData.map((val) => (
                <option value={val.name}>{val.name}</option>
            ))}
          </Form.Select>
        </Form.Group>      

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product</Form.Label>
          <Form.Select onChange={handleChange} name='product' aria-label="Default select example">
            <option>Open this select menu</option>
            {
                 productDataList.map((val) => (
                <option value={val.name}>{val.name}</option>
            ))}
          </Form.Select>
        </Form.Group>  

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Store</Form.Label>
          <Form.Select onChange={handleChange} name='store' aria-label="Default select example">
          <option>Open this select menu</option>
            {
                 storeDataList.map((val) => (
                <option value={val.name}>{val.name}</option>
            ))}
          </Form.Select>
        </Form.Group> 
      </Form>

      </Modal.Body>

      <Modal.Footer>
        <Button  variant='dark' onClick={props.onHide}>Cancel</Button>
        <Button variant="success" type="submit" onClick={addNewSales}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const EditSales = (props) => {
  const EditNewSale = () => {
    console.log("ADD")
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
          Edit Sale
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        
        
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant='dark' onClick={props.onHide}>Cancel</Button>
        <Button variant="success" type="submit" onClick={EditNewSale}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Sales = () => {
    const saleslist = storeSalesList;
    const [modalShow, setModalShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    return (
        <>
        <Navigationbar />
        <div className='m-2'>
            <Button type='primary' onClick={() => setModalShow(true)}>New Sale</Button>
        </div>
        <div className="table-responsive m-3">
          <table className={"table line-table text-dark table-bordered"}>
            <thead fixed="top">
                <tr>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Store</th>
                  <th>DateSold</th>
                  <th>Actions</th>
                  <th>Actions</th>
                </tr>
            </thead>

            <tbody>
               {
                 storeSalesList.map((val) => (
                    <tr key={val.id} id={val.id}>
                     <td>{val.customer}</td>
                     <td>{val.product}</td>
                     <td>{val.store}</td>
                     <td>{val.datesold}</td>
                     <td><Button variant='warning' onClick={() => setEditShow(true)}>Edit</Button></td>
                     <td><Button variant='danger'>Delete</Button></td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
        </div>
        <CreateSales
              saleslist = {saleslist}
              show={modalShow}
              setModalShow = {setModalShow}
              onHide={() => setModalShow(false)}
            />
        <Footer />
        <EditSales
              show={editShow}
              onHide={() => setEditShow(false)}
            />
        <Footer />
    </>
        
    )
}
    
export default Sales;