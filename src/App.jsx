import CustomerReview from "./components/CustomerReview";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PopularProducts from "./components/PopularProducts";
import SpecialOffer from "./components/SpecialOffer";
import SuperQuality from "./components/SuperQuality";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {

  return (
    <Provider store={store}>
      <Nav />

      <main className="relative">

        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReview />
        <Subscribe />

      </main>

      <footer className="relative">
        <Footer />
      </footer>

    </Provider>
  );
};

export default App;