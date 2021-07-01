import { NavBar } from './components/NavBar';
import { Dashboard, MoviesList } from './components/Dashboard';
import { Movies } from './components/Movies';
import { RandomMovie } from './components/RandomMovie';
import { StyledContainer } from './styles';
import './i18n/config';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <StyledContainer maxWidth={false}>
        <h1>{t('title')}</h1>
        <Switch>
          <Route path="/" component={NavBar} />
        </Switch>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/movies" component={Movies} />
          <Route path="/random movie/" component={RandomMovie} />
        </Switch>
        <Switch>
          <Route path="/dashboard/:list" exact component={MoviesList} />
        </Switch>
      </StyledContainer>
    </Router>
  );
};

export default App;
