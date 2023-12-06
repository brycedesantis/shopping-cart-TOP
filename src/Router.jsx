import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import Homepage from "./Components/Homepage"
import ShoppingCart from "./Components/ShoppingCart"

function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: "homepage",
					element: <Homepage />,
				},
				{
					path: "shopping-cart",
					element: <ShoppingCart />,
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default Router
