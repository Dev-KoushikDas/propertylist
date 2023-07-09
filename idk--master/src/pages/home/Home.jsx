import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div className="container_home">
      <Navbar />
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">Clinics near you...</h1>
        <Featured/>
        <h1 className="homeTitle">Featured clinics</h1>
        <FeaturedProperties/>
        <MailList/>
      </div>
    </div>
  );
};

export default Home;
