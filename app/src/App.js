import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import GroupList from "./components/GroupList";
import GroupEdit from "./components/GroupEdit";

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/groups" exact component={GroupList} />
            <Route path="/groups/:id" component={GroupEdit} />
          </Switch>
        </Router>
      </CookiesProvider>
    );
  }
}

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [groups, setGroups] = useState([]);

//   useEffect(() => {
//     const componentDidMount = async () => {
//       const response = await fetch("/api/groups");
//       const body = await response.json();
//       setLoading(false);
//       setGroups(body);
//     };
//     componentDidMount();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div className="App-intro">
//           <h2> Java User Group List</h2>
//           {groups.map((g) => (
//             <div key={g.id}> {g.name} </div>
//           ))}
//         </div>
//       </header>
//     </div>
//   );
// };

// class App extends Component {
//   state = {
//     isLoading: true,
//     groups: [],
//   };
//   async componentDidMount() {
//     const response = await fetch("/api/groups");
//     const body = await response.json();
//     this.setState({ groups: body, isLoading: false });
//   }

//   render() {
//     const { groups, isLoading } = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <div className="App-intro">
//             <h2> Java User Group List</h2>
//             {groups.map((g) => (
//               <div key={g.id}> {g.name} </div>
//             ))}
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
