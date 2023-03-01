import '../styles/components/socialnetworks.sass';

import Avatar from '../images/emanuella.jpg';

import '../styles/components/sidebar.sass';
import SocialNetworks from './Networks';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Emanuella Gomes Ribeiro"/>
            <p className="title">Desenvolvedora de Software</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/uc?export=download&id=1TpMFeXX5obzjIO2vvq52IOxacOJ9Qk75" className="btn">Download currículo</a>
        </aside>
    );
};

export default Sidebar;