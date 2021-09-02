import '../styles/Region-select/region-select.scss';


export function RegionSelect(props) {
  const {countries, setSelectedCountries} = props

  const selectChange = (event)  => {
    const value = event.target.value
    setSelectedCountries('')
  }

  return (
    <section className="region-container">
      <select className="region-input" onChange={selectChange}>
        <option hidden>Filter by Region</option>
        <option value="">All Regions</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
}