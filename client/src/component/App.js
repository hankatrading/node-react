const React = require("react");
const { BrowserRouter, Route } = require("react-router-dom");
const Header = require("./Header").default;
const Dashboard = require("./Dashboard").default;
const Landing = require("./Landing").default;
const SurveyNew = require("./SurveyNew").default;

let App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact={true} path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
