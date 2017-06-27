import styles from './styles'

export const getStyles = (path, themes) => {
  console.log('path ', path);
  if (path == '/chat' || path == undefined) {
      return styles(false, themes)
  } else {
      return styles(true, themes)
  }
}
