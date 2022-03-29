import { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import Stars from "../Stars/Stars";
import "./movieform.css";

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Row className="mb-3">
//             <Form.Group as={Col}>
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="test"
//                 placeholder="Enter movie title"
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group as={Col}>
//               <Form.Label>Year</Form.Label>
//               <Form.Control type="text" placeholder="Enter movie year" />
//             </Form.Group>
//           </Row>

//           {/* <Form.Group className="mb-3" controlId="formGridAddress1">
//             <Form.Label>Rating</Form.Label>
//             <Form.Control type="number" placeholder="Enter movie rate" />
//           </Form.Group> */}

//           <Form.Group className="mb-3" controlId="formGridAddress2">
//             <Form.Label>Movie Image</Form.Label>
//             <Form.Control placeholder="Enter movie image" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formGridAddress2">
//             <Form.Label>Movie Link</Form.Label>
//             <Form.Control placeholder="Enter movie link" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formGridAddress2">
//             <Form.Label>Movie Trailer</Form.Label>
//             <Form.Control placeholder="Enter movie trailer" />
//           </Form.Group>

//           <Stars isEdit={true} />

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

const MovieForm = ({ isEdit, addMovie }) => {
  const [modalShow, setModalShow] = useState(false);

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [rate, setRate] = useState(0);
  const [link, setLink] = useState("");
  const [trailer, setTrailer] = useState("");

  const add = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Math.random(),
      title,
      year,
      image,
      desc,
      rate,
      link,
      trailer,
    };

    if (
      title === "" ||
      desc === "" ||
      image === "" ||
      link === "" ||
      trailer === "" ||
      year === ""
    ) {
      return alert("Missing some fields");
    }

    if (rate === 0) {
      return alert("You should rate the movie");
    }

    addMovie(newMovie);
    setTitle("");
    setDesc("");
    setImage("");
    setLink("");
    setTrailer("");
    setYear("");
    setRate("");
    setModalShow(false);
  };

  return (
    <>
      <Button
        variant="light"
        className={isEdit ? "editbutton" : "addbutton"}
        onClick={() => setModalShow(true)}
      >
        {isEdit ? "Edit Movie" : "Add movie"}
      </Button>

      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}

      <Modal
        // {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="test"
                  placeholder="Enter movie title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  value={year}
                  placeholder="Enter movie year"
                  onChange={(e) => setYear(e.target.value)}
                />
              </Form.Group>
            </Row>

            {/* <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" placeholder="Enter movie rate" />
          </Form.Group> */}

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control
                placeholder="Enter movie image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Link</Form.Label>
              <Form.Control
                placeholder="Enter movie link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Trailer</Form.Label>
              <Form.Control
                placeholder="Enter movie trailer"
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter your description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>

            <Stars isEdit={true} setRate={setRate} isAdd={true} />
            <Form.Group as={Col}>
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rate movie"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={(e) => add(e)}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieForm;
