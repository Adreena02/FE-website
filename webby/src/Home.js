import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

  function Home() {
    return (
        <div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>

                <Route path="/projects">
                    <Projects />
                </Route>

                <Route path="/resume">
                    <Resume />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

            </Switch>
        </div>
    )
}

export default Home
