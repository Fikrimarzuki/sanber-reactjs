import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/Context";

function NavGuard({ component: Component, ...rest }) {
	const context = React.useContext(AuthContext);

	return (
		<Route 
			{...rest}
			render={({ props, location }) =>
				context.isAuth ? (
					location.pathname === "/login"
						? <Redirect
								to={{
									pathname: "/movies",
									state: { from: location }
								}}
							/>
						: <Component {...props} />
				) : (
					location.pathname === "/login"
						? <Component {...props} />
						: <Redirect
								to={{
									pathname: "/login",
									state: { from: location }
							}}
					/>
				)
			}
		/>
	)
}

export default NavGuard;
