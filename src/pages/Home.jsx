import { useAuth0 } from "@auth0/auth0-react";
import CategorySection from "../components/home/CategorySection"
import Slider from "../components/home/Slider"

const Home = () => {


    return (
        <div>
            <Slider />
            <CategorySection />

            {/* <div>
                {isAuthenticated && (
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )}
            </div> */}
        </div>
    )
}

export default Home;