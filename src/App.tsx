import React, { lazy } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './routerHistory'

import GlobalStyle from './style/Global'
import PageLoader from './components/PageLoader'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import Web3ReactManager from 'components/Web3ReactManager'
import MainLayout from 'components/layout/MainLayout'
import { StaticRoutesEnum } from 'utils/enums'
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = lazy(() => import('./views/Home'))
const Community = lazy(() => import('./views/Community'))
const WalletConnect = lazy(() => import('./views/WalletConnect'))
const Collections = lazy(() => import('./views/Collections'))
const AboutUs = lazy(() => import('./views/About'))
const HowToWork = lazy(() => import('./views/HowToWork'))
const ProductDetails = lazy(() => import('./views/ProductDetails'))
const ShopingCart = lazy(() => import('./views/Cart'))
const CartInformation = lazy(() => import('./views/Information'))

const App: React.FC = () => {

  return (
    <Router history={history}>
      <GlobalStyle />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Web3ReactManager>
        <MainLayout>
              <Switch>
                <Route path={StaticRoutesEnum.HOME} exact component = {Home} />
                <Route path={StaticRoutesEnum.COLLECTION} exact component = {Collections} />
                <Route path={StaticRoutesEnum.ABOUT_US} exact component = {AboutUs} />
                <Route path={StaticRoutesEnum.COMMUNTIY} exact component = {Community} />
                <Route path={StaticRoutesEnum.WALLET} exact component = {WalletConnect} />
                <Route path={StaticRoutesEnum.WORK} exact component = {HowToWork} />
                <Route path={StaticRoutesEnum.PRODUCT_DETAIL} exact component = {ProductDetails} />
                <Route path={StaticRoutesEnum.CART} exact component = {ShopingCart} />
                <Route path={StaticRoutesEnum.CART_INFORMATION} exact component = {CartInformation} />

                <Redirect from="*" to="/" />
  
              </Switch>
            </MainLayout>
        </Web3ReactManager>
      </SuspenseWithChunkError>

    </Router>
  );
}

export default App;
