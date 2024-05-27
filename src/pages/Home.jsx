import BestLoaction from "../components/BestLoaction";
import FindWhere from "../components/FindWhere";
import FooterContact from "../components/FooterContact";

import Header from "../components/Header";
import HighLiving from "../components/HighLiving";

const Home = () => {
  return (
    <>
      <Header />
      <HighLiving />
      <FindWhere />
      <BestLoaction />
      <FooterContact name={'Godrej Properties'}/>

    </>
  );
};

export default Home;
