import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import {useMatch} from "react-router-dom";


function Navbar() {

	const searchRoute = useMatch('/search')

	return (
		<nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
			<Navigation />

	
			<Auth />
		</nav>
	)
}

export default Navbar