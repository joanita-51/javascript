import { useContext } from "react"
import {ThemeContext} from '../App'

export default function FunctionalComponent() {

  const theme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: theme? '#333':'#ccc',
    color: theme? '#ccc' : '#333',
    padding: '2rem',
    marging: '5rem',
  }
  return (
    <div style={themeStyles}>
      Function Theme
    </div>
  )
}
