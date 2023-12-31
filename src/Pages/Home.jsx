import { Helmet } from "react-helmet-async";
import Categories from "../Components/Categories";
import DealOfTheDay from "../Components/DealOfTheDay";
import OurSupport from "../Components/OurSupport";
import SpecialOffer from "../Components/SpecialOffer";
import TopRated from "../Components/TopRated";
import Header from "../Header/Header";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>MAOXAL | Home </title>
            </Helmet>
            <Header></Header>
            <Categories></Categories>
            <DealOfTheDay></DealOfTheDay>
            <SpecialOffer></SpecialOffer>
            <TopRated></TopRated>
            <OurSupport></OurSupport>

        </>

    );
};

export default Home;