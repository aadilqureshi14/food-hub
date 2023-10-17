import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function MenuForm(props) {
  return (
    <Form className="d-flex justify-content-center align-items-center mt-3">
      {/* Search */}
      <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search Menu Items"
          value={props.search}
          onChange={props.onSearchChange}
        />
      </Form.Group>

      {/* Filter */}
      <Dropdown className="ms-3" onSelect={props.handleFilterChange}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {props.filter || "Filter"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Veg">Veg</Dropdown.Item>
          <Dropdown.Item eventKey="Non-Veg">Non-veg</Dropdown.Item>
          <Dropdown.Item eventKey="Egg">Egg</Dropdown.Item>
          <Dropdown.Item eventKey="Filter">Clear Filter</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Sort */}
      <Dropdown className="ms-3" onSelect={props.handleSortChange}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {props.sort || "Sort By"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Price Low to High">
            Price Low to High
          </Dropdown.Item>
          <Dropdown.Item eventKey="Price High to Low">
            Price High to Low
          </Dropdown.Item>
          <Dropdown.Item eventKey="">Clear Sort</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
}

export default MenuForm;
