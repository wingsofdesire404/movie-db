import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      bg: "gray.900",  // Sets the background color for the dark mode
      color: "white",  // Sets the default text color for dark mode
    },
    a: {
      color: "teal.500",  // Sets the default link color
      _hover: {
        textDecoration: "underline",
      },
    },
  },
};

const colors = {
  brand: {
    50: "#e3f8ff",
    100: "#b3ecff",
    200: "#81defd",
    300: "#5ed0fa",
    400: "#40c3f7",
    500: "#2bb0ed",
    600: "#1992d4",
    700: "#127fbf",
    800: "#0b69a3",
    900: "#035388",
  },
};

const theme = extendTheme({ config, styles, colors });

export default theme;
