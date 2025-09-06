import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${nameRef.current.value}, Age: ${ageRef.current.value}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>

      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <br />

      <label>
        Age:
        <input type="number" ref={ageRef} />
      </label>
      <br />

      <button type="submit">Send</button>
    </form>
  );
}

export default UncontrolledForm;
