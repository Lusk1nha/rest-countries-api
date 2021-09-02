import { useHistory } from 'react-router-dom'

export function BorderButton(props) {
  const history = useHistory()

  const handlePushTo = () => {
    history.push(`/country/${props.children}`)
  }
  
  return (
    <button className="border" onClick={handlePushTo} aria-pressed>
      {props.children}
    </button>   
  );
}