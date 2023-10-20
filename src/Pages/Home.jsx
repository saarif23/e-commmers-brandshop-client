import Categories from "../Components/Categories";
import DealOfTheDay from "../Components/DealOfTheDay";
import OurSupport from "../Components/OurSupport";
import SpecialOffer from "../Components/SpecialOffer";
import Header from "../Header/Header";

const Home = () => {
    return (
        <>
            <Header></Header>
            <Categories></Categories>
            <DealOfTheDay></DealOfTheDay>
            <SpecialOffer></SpecialOffer>
            <OurSupport></OurSupport>
        </>

    );
};

export default Home;