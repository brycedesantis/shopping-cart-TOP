import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import Homepage from "./Components/Homepage"
import ShoppingCart from "./Components/ShoppingCart"
import DefaultPage from "./Components/DefaultPage"

function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{ index: true, element: <DefaultPage /> },
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
