export const CardShips = (prop) => (
  <div className="col-sm-6">
    <div className="card" key={prop.ships.id}>
      <img src={prop.ships.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{prop.ships.name}</h5>
        <p className="card-text">{prop.ships.home_port}</p>
        <a
          href="#"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#popup${prop.ships.id}`}
        >
          View More
        </a>
      </div>
    </div>
  </div>
);
