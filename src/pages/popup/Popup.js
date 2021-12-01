import React from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Popup() {
    
  return (
    <div>
      <button
        type="button"
        className="plus-btn btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        +
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="popup">
              <h2>Create New Team</h2>

              <div class="first-field">
                <input
                  type="text"
                  name=""
                  id="teamname"
                  placeholder="Team Name"
                />
              </div>

              <div class="options">
                <select name="" id="category">
                  <option value="">Category</option>
                  <option value="Developer">Developer</option>
                  <option value="Backend">Backend</option>
                  <option value="Frontend">Frontend</option>
                </select>
              </div>

              <div class="second-field">
                <input
                  type="text"
                  name=""
                  placeholder="Members type (Email)"
                  id="members"
                />
              </div>

              <div class="allbtn">
                <button class="btn1" onclick="createNewTeam()">
                  Create
                </button>
                <button class="btn2" data-bs-dismiss="modal">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
