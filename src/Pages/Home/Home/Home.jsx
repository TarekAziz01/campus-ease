// import CollegeCard from "../../CollegeCard/CollegeCard";
import Reviews from "../../Reviews/Reviews";
import CollegeCard from "../CollegeCard/CollegeCard";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import Research from "../Research/Research";

const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            {/* <CollegeCard></CollegeCard> */}
            <CollegeCard></CollegeCard>
            <CollegeGallery></CollegeGallery>
            <Research></Research>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;