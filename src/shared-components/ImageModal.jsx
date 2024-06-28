import { Button, Image, Modal } from "react-bootstrap";

const ImageModal = ({ image, setShowModal }) => {
  return (
    <Modal size="lg" centered show={true}>
      <Modal.Body>
        <Image src={image} style={{ width: "100%" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
