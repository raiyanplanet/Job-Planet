import DiscoverJobs from "./components/DiscoverJobs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Joblist from "./components/JobList";
import Navber from "./components/Navber";
import Prosses from "./components/Prosses";
import Blog from "./components/Blog";
import Subscription from "./components/Subscription";

const App = () => {
  return (
    <>
      <Navber />
      <Hero />
      <Prosses />
      <Joblist />
      {/* Blog */}
      <Blog />

      {/* Discover popular Jobs */}
      <DiscoverJobs />

      {/* Subscription */}

      <Subscription />

      {/* footer */}
      <Footer />
    </>
  );
};

export default App;
