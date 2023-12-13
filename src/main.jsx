import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Router from "./Router.jsx"
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
}

const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Router />
		</ChakraProvider>
	</React.StrictMode>
)
