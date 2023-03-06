import { useTheme, useUpdateTheme } from "./ThemeContext";

export default function FunctionalComponent() {

  const theme = useTheme();
  const toggle = useUpdateTheme()

  const themeStyles = {
    backgroundColor: theme? '#333':'#ccc',
    color: theme? '#ccc' : '#333',
    padding: '2rem',
    marging: '5rem',
  }
  return (
    <>
      <button onClick={toggle}> Toggle Theme</button>
      <div style={themeStyles}>
        Function Theme
      </div>
    </>

  )
}
