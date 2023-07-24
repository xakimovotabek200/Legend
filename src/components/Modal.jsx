import React, { useState } from "react";

import styles from "./Modal.module.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  // const [file, setFile] = useState([])
  const [formState, setFormState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: "live",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

    // const handleChanges = (e) => {
    //   const { id, value } = e.target;
    //   if (id === "category") {
    //     setCategory(value);
    //   }else if (id ==="for_who") {
    //       setforWho(value)
    //   }else if (id === "question") {
    //       setquestion(value)
    //   }
    // };
  

  return (
    <div
      className={styles.modal_container}
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className={styles.modal}>
        <form>
          <div className={styles.form_group}>
            <label htmlFor={styles.page}>Page</label>
            <input name="page" onChange={handleChange} value={formState.page}/>
             {/* <input type="file" id={styles.upload_image} onChange={handleChanges} /> */}
          </div>
          <div className={styles.form_group}>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div className={styles.error}>{`Please include: ${errors}`}</div>}
          <button type="submit" className={styles.btn} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
