export const Filter = ({ onChange }) => (
  <div className="fliter-wrapper">
    <select name="height" className="filter-height" onChange={onChange}>
      <option value="0">Select Height</option>
      <option value="100">More then 100 ft</option>
      <option value="200">More then 200 ft</option>
      <option value="300">More then 300 ft</option>
      <option value="400">More then 400 ft</option>
    </select>
  </div>
);
