import Home from './component/Home/index'
import AutomationTools from './component/AutomationTools';
import LeadingCompanies from './component/LeadingCompanies';
import SocialSelling from './component/SocialSelling';
import MoreDeals from './component/MoreDeals';
import SaveTime from './component/SaveTime';
import HowBreakingWorks from './component/HowBreakingWorks';
import Features from './component/Features';
import Integration from './component/Integrations';
import AdvancedAlgorithm from './component/AdvancedAlgorithm';
import WhatUsersSay from './component/WhatUsersSay';
import UpComingFeatures from './component/UpComingFeatures';
import LookAround from './component/LookAround';
import FAQ from './component/FAQ';
import Footer from './component/Footer';
import GetRewards from './component/GetRewards';
import WithBreaking from './component/WithBreaking';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <LeadingCompanies/>
      <SocialSelling/>
      <MoreDeals/>
      <SaveTime/>
      <HowBreakingWorks/>
      <AutomationTools/>
      <Features/>
      <Integration/>
      <WithBreaking/>
      <GetRewards/>
      <AdvancedAlgorithm/>
      <WhatUsersSay/>
      <UpComingFeatures/>
      <LookAround/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
