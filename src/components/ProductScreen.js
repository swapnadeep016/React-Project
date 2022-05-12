import { Button, Modal, Form } from 'react-bootstrap';
import productDataList from '../data/product';
import 'bootstrap/dist/css/bootstrap.css'
import Navigationbar from './Navigationbar';
import { useState } from 'react';
import Footer from './Footer';
const CreateProduct = (props) => {
  
  const [product, setProduct] = useState( { id: props.productlist.length + 1 ,
    name: '',
    price: ''
  }); 
  
  const handleChange = (event) => {
    const {name,value} = event.target
    setProduct((prevState)=>{
      return {
        ...prevState,
        [name] : value
      }
    })
  }
  const addNewProduct = (event) => {
    props.productlist.push(product)
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
          Create Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onChange={handleChange} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" onChange={handleChange} type="text" placeholder="Address" />
        </Form.Group>
        
        
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant='dark' onClick={props.onHide}>Cancel</Button>
        <Button variant="success" type="submit" onClick={addNewProduct}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const DeleteProduct = (props) => {
 
  
  
  
  const deleteProductFunction = () => {
    console.log(props.productlist)
    console.log(props.deleteid-1)
    
    for(var i = 0;i<props.productlist.length;i++){
      if(props.productlist[i].id == props.deleteid){
        props.productlist.splice(i,1)
      }
    }
    props.setDeleteShow(false)
   
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
          Delete Product
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
        <Button variant="danger" type="submit" onClick={deleteProductFunction}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const EditProduct = (props) => {
 
  const [product, setProduct] = useState( { id: 0 ,
    name: '',
    price: ''
  }); 
  const handleChange = (event) => {
    const {name,value} = event.target
    setProduct((prevState)=>{
      return {
        ...prevState,
        [name] : value
      }
    })
  }
  const EditNewProduct = () =>{
    product['id'] = props.editid
    for(var i = 0;i<props.productlist.length;i++){
      if(props.productlist[i].id == props.editid){
        props.productlist[i] = product
      }
    }
    props.setEditShow(false)
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
          Edit Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' onChange={handleChange} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Price</Form.Label>
          <Form.Control name='price'  onChange={handleChange} type="text" placeholder="Address" />
        </Form.Group>
        
        
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant='dark' onClick={props.onHide}>Cancel</Button>
        <Button variant="success" type="submit" onClick={EditNewProduct}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const ProductScreen = () => {
    const productlist = productDataList;
    const [modalShow, setModalShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [editid, setEditId] = useState(0);

    const [deleteShow, setDeleteShow] = useState(false);
    const [deleteid, setDeleteId] = useState(0);

    return (
        <>
        <Navigationbar />
        <div className='m-2'>
            <Button type='primary' onClick={() => setModalShow(true)}>New Product</Button>
        </div>
        <div className="table-responsive m-3">
          <table className={"table line-table text-dark table-bordered"}>
            <thead fixed="top">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                  <th>Actions</th>
                </tr>
            </thead>

            <tbody>
               {
                 productDataList.map((val) => (
                    <tr key={val.id} id={val.id}>
                     <td>{val.name}</td>
                     <td>{val.price}</td>
                     <td><Button variant='warning' onClick={() => {setEditShow(true);setEditId(val.id)}}>Edit</Button></td>
                     <td><Button variant='danger' onClick={() => {setDeleteShow(true);setDeleteId(val.id)}}>Delete</Button></td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
        </div>
        <CreateProduct
              productlist = {productlist}
              show={modalShow}
              setModalShow = {setModalShow}
              onHide={() => setModalShow(false)}
            />
        <EditProduct
              show={editShow}
              editid = {editid}
              productlist = {productlist}
              setEditShow = {setEditShow} 
              onHide={() => setEditShow(false)}
            />
        <DeleteProduct
              show={deleteShow}
              deleteid = {deleteid}
              productlist = {productlist}
              setDeleteShow = {setDeleteShow} 
              onHide={() => setDeleteShow(false)}
            />
        <Footer />
    </>
        
    )
}
    
export default ProductScreen;