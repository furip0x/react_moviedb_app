import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import SingleMovie from './components/SingleMovie/SingleMovie'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <main className='app-content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/' component={Home} />
            <Route path='/movie/:id' children={<SingleMovie />}></Route>
            <Route path='/about' component={About} />
            {/* <Route path='*'>
              <NotFound />
            </Route> */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
