export const ModelShips = ({ ships }) => (
  <div
    className="modal fade"
    id={`popup${ships.id}`}
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {ships.name}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div
            id={"carousel${rocket.id}Controls"}
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={ships.image} class="d-block w-100" alt="" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href={"#carousel${ships.id}Controls"}
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href={"#carousel${rocket.id}Controls"}
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div className="row rocket-info">
            <div className="col-sm-4">
              <h4>Model</h4>
              <p>{ships.legacy_id}</p>
            </div>
            <div className="col-sm-4">
              <h4>Type</h4>
              <p>{ships.type}</p>
            </div>
            <div className="col-sm-4">
              <h4>Active Status</h4>
              <p>{ships.active ? `Yes` : `No`}</p>
            </div>
            <div className="col-sm-4">
              <h4>Roles</h4>
              <p>{ships.roles[0]}</p>
            </div>
            <div className="col-sm-4">
              <h4>Year of build</h4>
              <p>{ships.year_built}</p>
            </div>
            <div className="col-sm-4">
              <h4>Home Port</h4>
              <p>{ships.home_port}</p>
            </div>
          </div>
          <a
            href={ships.link}
            className="btn btn-primary btn-block"
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
);
