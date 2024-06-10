const React = require("react");
const { BrowserRouter, Route } = require("react-router-dom");

let Header = () => <h2>Header</h2>;
let Dashboard = () => <h2>Dashboard</h2>;
let SurveyNew = () => <h2>SurveyNew</h2>;
let Landing = () => <h2>Landing</h2>;

let App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact={true} path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
};

export default App;
