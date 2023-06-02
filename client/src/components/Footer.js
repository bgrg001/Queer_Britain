import { useState } from "react";
import Modal from "./Modal";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <footer>
      <div id="newsletter">
        <h2>Sign up to our newsletter</h2>
        <input
          id="newsletterinput"
          name="name"
          placeholder="enter your email"
        />
        <button onClick={handleModal} id="submit">
          Sign up here
        </button>
        {showModal && <Modal handleModal={handleModal} />}
      </div>
      <h2>&#169; Queer Britain</h2>
    </footer>
  );
}

export default Footer;
