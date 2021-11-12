import React from 'react';
import { HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';
import Product from '../components/products';
import ProductItems from '../components/total';
import Navigation from './navigation';
import Search from '../components/search';
function routerConfig(){
    return(
        <div>
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/product" component={Product} />
                    <Route path="/total/:id" component={ProductItems} />
                    <Route path="/search/:id1" component={Search} />
                    
                    <Route path="*" component={()=><div>page not found</div>} />
                </Switch>
            </Router>
        </div>
    )
}
export default routerConfig;

