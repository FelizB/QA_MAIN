import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import "../assets/styles/components.css";
import TaskStatus from "./TaskStatus";
import { FaUserCircle } from "react-icons/fa";

function ViewProfileContainer() {
  const { user } = useOutletContext();

  return (
    <div className="view-profile">
      <section>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt="avatar"
                      className="img space"
                      class="rounded-circle img-fluid"
                      style={{ width: "150px", height: "150px" }}
                    />
                  ) : (
                    <FaUserCircle className="space" />
                  )}

                  <h5 className="my-3">
                    {user.First_Name} {user.Last_Name}
                  </h5>

                  <p class="text-muted mb-2">ICT system Test Lead</p>
                  <p class="text-muted mb-4">
                    System Quality Assurance & Testing
                  </p>
                  <div class="d-flex justify-content-center mb-2">
                    <Link
                      to={"/dashboard/profile"}
                      className="btn btn-outline-primary ms-1"
                    >
                      Update Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div class="card mb-4 mb-lg-0">
                <div class="card-body p-0">
                  <ul class="list-group list-group-flush rounded-3">
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="">User Id</i>
                      <p class="mb-0">{user._id}</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fab fa-twitter fa-lg">PF Number</i>
                      <p class="mb-0">12345</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fab fa-github fa-lg">Role</i>
                      <p class="mb-0">{user.Role}</p>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fab fa-twitter fa-lg">Linked In</i>
                      <p class="mb-0">@linkedIn</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fab fa-instagram fa-lg">git</i>
                      <p class="mb-0">@git</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fab fa-facebook-f fa-lg">Azure</i>
                      <p class="mb-0">@Azure</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <p class="mb-4">
                    <span> Profile Details</span>
                  </p>
                  <br />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        {user.First_Name} {user.Second_Name} {user.Last_Name}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{user.Email}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Phone</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{user.Phone_Number}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{user.Phone_Number}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Station</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{user.Station}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Employee ID</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">PF12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <TaskStatus />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewProfileContainer;
