import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (                   
    <div>                                                    
      <ul className="text-center navbar-nav bg-gradient-primary sidebar">
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">Library</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <span>
              <i className="fas fa-fw fa-tachometer-alt" />
              Dashboard
            </span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link className="nav-link" to="/manage">
            <span>
              <i className="fas fa-fw fa-cog" />
              Manage
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">
            <span>
              <i className="fas fa-fw fa-wrench" />
              Create
            </span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Addons Demo</div>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <span>
              <i className="fas fa-fw fa-folder" />
              Pages Demo
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">
            <span>
              <i className="fas fa-fw fa-chart-area" />
              Charts Demo
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">
            <span>
              <i className="fas fa-fw fa-table" />
              Tables Demo
            </span>
          </Link>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
};

export default Sidebar;