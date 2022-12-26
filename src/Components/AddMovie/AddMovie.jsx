import React from 'react'
import {useState} from 'react'
import {Button, Modal} from "react-bootstrap"

const AddMovie = ({newMovie, setNewMovie ,filtredMovies, setFiltredMovies }) => {
  const [show,setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleChange = () => {
    setFiltredMovies([...filtredMovies,newMovie]) ;
    setShow(false);
  }

  const handleAdd = (e) => {
    setNewMovie({...newMovie,[e.target.name] : e.target.value});
  }
    return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <label >Title</label>
                <input type="text" name="title" onChange={handleAdd}/>
                <label >Description</label>
                <input type="text" name="description" onChange={handleAdd}/>
                <label >Poster Url</label>
                <input type="text" name="img" onChange={handleAdd}/>
                <label >Rating</label>
                <input type="number" name="rating" onChange={handleAdd}/>
            </div>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddMovie