import { Button, Modal, Form } from 'react-bootstrap';
import storeDataList from '../data/stores';
import 'bootstrap/dist/css/bootstrap.css'
import Navigationbar from './Navigationbar';
import { useState } from 'react';
import Footer from './Footer';
  const CreateStore = (props) => {
  
    const [store, setStore] = useState( { id: props.storelist.length + 1 ,
      name: '',
      address: ''
    }); 

    const handleChange = (event) => {
      const {name,value} = event.target
      setStore((prevState)=>{
        return {
          ...prevState,
          [name] : value
        }
      })
    }
    const addNewStore = (event) => {
      // console.log(event)
      // console.log(props.customerlist.length)
      // console.log("Adding")
      // console.log(customer)
      props.storelist.push(store)
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
          Create Store
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
        <Button variant="success" type="submit" onClick={addNewStore}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const DeleteStore = (props) => {
 
  
  
  
  const deleteStoreFunction = () => {
    console.log(props.storelist)
    console.log(props.deleteid-1)
    
    for(var i = 0;i<props.storelist.length;i++){
      if(props.storelist[i].id == props.deleteid){
        props.storelist.splice(i,1)
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
          Delete Store
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
        <Button variant="danger" type="submit" onClick={deleteStoreFunction}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


const EditStore = (props) => {
 
  const [store, setStore] = useState( { id: 0 ,
    name: '',
    address: ''
  }); 
  const handleChange = (event) => {
    const {name,value} = event.target
    setStore((prevState)=>{
      return {
        ...prevState,
        [name] : value
      }
    })
  }
  const EditNewStore = () =>{
    store['id'] = props.editid
    for(var i = 0;i<props.storelist.length;i++){
      if(props.storelist[i].id == props.editid){
        props.storelist[i] = store
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
          Edit Store
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' onChange={handleChange} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control name='address'  onChange={handleChange} type="text" placeholder="Address" />
        </Form.Group>
        
        
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant='dark' onClick={props.onHide}>Cancel</Button>
        <Button variant="success" type="submit" onClick={EditNewStore}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}




const StoreView = () => {
    const storelist = storeDataList;
    const [modalShow, setModalShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [editid, setEditId] = useState(0);

    const [deleteShow, setDeleteShow] = useState(false);
    const [deleteid, setDeleteId] = useState(0);
    return (
        <>
        <Navigationbar />
        <div className='m-2'>
            <Button type='primary' onClick={() => setModalShow(true)}>New Store</Button>
        </div>
        <div className="table-responsive m-3">
          <table className={"table line-table text-dark table-bordered"}>
          <thead fixed="top">
                  
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Actions</th>
                    <th>Actions</th>
                  </tr>
                 
              </thead>
            <tbody>
            { storeDataList.map((val) => (
                        <tr key={val.id} id={val.id}>
                         <td>{val.name}</td>
                        <td>{val.address}</td>
                        <td><Button variant='warning'  onClick={() => {setEditShow(true);setEditId(val.id)}} >Edit</Button></td>
                        <td><Button variant='danger' onClick={() => {setDeleteShow(true);setDeleteId(val.id)}}>Delete</Button></td>
                        </tr>
                      ))
                    }
                
            </tbody>
          </table>
        </div>
        <CreateStore
              storelist = {storelist}
              show={modalShow}
              setModalShow = {setModalShow}
              onHide={() => setModalShow(false)}
            />
            <EditStore
              show={editShow}
              editid = {editid}
              storelist = {storelist}
              setEditShow = {setEditShow}
              onHide={() => setEditShow(false)}
            />
            <DeleteStore
              show={deleteShow}
              deleteid = {deleteid}
              storelist = {storelist}
              setDeleteShow = {setDeleteShow} 
              onHide={() => setDeleteShow(false)}
            />
        <Footer />
    </>
        
    )
}
    
export default StoreView;