export const TypesShip = ({ onChange }) => (
  <div className="fliter-wrapper">
    <select name="type" className="filter-type" onChange={onChange}>
      <option value="">Select Type of Ship</option>
      <option value="Tug">Tug Type</option>
      <option value="Cargo">Cargo Type</option>
      <option value="Barge">Barge Type</option>
      <option value="High Speed Craft">High Speed Craft</option>
    </select>
  </div>
);
