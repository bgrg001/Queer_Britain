function Modal({ handleModal }) {
  return (
    <div className="modal">
      <p onClick={handleModal}>Close</p>
      <p>Thank you for signing up to our mailing list</p>
    </div>
  );
}

export default Modal;
