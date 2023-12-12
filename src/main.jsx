import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Router from "./Router.jsx"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme()

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Router />
		</ChakraProvider>
	</React.StrictMode>
)
