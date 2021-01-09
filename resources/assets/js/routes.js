import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Classes from "./pages/Classes";
import ClassesEsportsCoding from "./pages/ClassesEsportsCoding";
import Compete from "./pages/Compete";
import ClassesCodingTech from "./pages/ClassesCodingTech";
import CompeteAcLeague from "./pages/CompeteAcLeague";
import FightForChange from "./pages/FightForChange";
import NflFlag from "./pages/NflFlag";
import OnlineCoaching from "./pages/OnlineCoaching";
import Contact from "./pages/Contact";
import DBRegister from "./pages/DBRegister";


export const routes = [

    { path: '/', redirect: 'home'},
    {
        path: '/login', component: Login, name: 'login', meta: {
            auth: false
        }
    },
    {
        path: '/register', component: Register, name: 'register', meta: {
            auth: false
        }
    },

    { path: '/home', component: Home, name:'home'},
    { path: '/db_register/:entity_id', component: DBRegister, name:'db_register' },
    { path: '/classes', component: Classes, name:'classes'},
    { path: '/classes/esports_coding', component: ClassesEsportsCoding, name:'classes_esports_coding'},
    { path: '/classes/coding_tech', component: ClassesCodingTech, name:'classes_coding_tech'},

    { path: '/compete', component: Compete, name:'compete'},
    { path: '/compete/ac_league', component: CompeteAcLeague, name:'compete_ac_league'},
    { path: '/compete/fight_for_change', component: FightForChange, name:'fight_for_change'},

    { path: '/nfl_flag', component: NflFlag, name:'nfl_flag'},
    { path: '/online_coaching', component: OnlineCoaching, name:'online_coaching'},
    { path: '/contact', component: Contact, name:'contact'},
];
