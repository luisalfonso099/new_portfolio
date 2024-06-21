import useTheme from "../../hooks/useTheme";

const Footer = () => {
  const { darkTheme } = useTheme();

  return (
    <footer className={"content-footer " + (darkTheme && ' text-white')}>
      © Desarrollado por luisalfonso099@gmail.com
    </footer>
  )
}

export default Footer
