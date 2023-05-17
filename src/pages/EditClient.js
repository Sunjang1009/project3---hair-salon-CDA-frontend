import React from "react";

function EditClient({ editForm, handleChange, updatedClient }) {
  return (
    <section>
      <h2>Edit this Person</h2>
      <form onSubmit={updatedClient}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.phoneNumber}
          name="phoneNumber"
          placeholder="phoneNumber"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.hairStyle}
          name="hairStyle"
          placeholder="hairStyle"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.services}
          name="services"
          placeholder="services"
          onChange={handleChange}
        />
        <input type="submit" value="Update" />
      </form>
    </section>
  );
}

export default EditClient;
