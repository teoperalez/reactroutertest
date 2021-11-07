import React from "react"
import { Route, Switch } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Home from "./components/Home"
import Listen from "./components/Listen"
import WhiskeyLullabies from "./components/WhiskeyLullabies"
import Calendar from "./components/Calendar"
import Shop from "./components/Shop"
import Error from "./components/Error"
import MyNavbar from "./components/BootNavbar"
import Bottbar from "./components/Bottbar"
import Photos from "./components/Photos"
import Contact from "./components/Contact"

function App() {
    
    return (
        <main>
            <MyNavbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={Photos} />
                <Route path="/listen" component={Listen} exact />
                <Route path="/listen/whiskey_lullabies" component={WhiskeyLullabies} />
                <Route path="/listen/rain" component={Listen} />
                <Route path="/listen/por_deseo" component={Listen} />
                <Route path="/listen/songs_from_the_road" component={Listen} />
                <Route path="/listen/revolution" component={Listen} />
                <Route path="/listen/live_on_88.9krfc" component={Listen} />
                <Route path="/listen/done_gone_folk" component={Listen} />
                <Route path="/listen/the_smell_of_burning_leaves" component={Listen} />
                <Route path="/listen/road_of_isolation" component={Listen} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/photos" component={Photos} />
                <Route path="/shop" component={Shop} />
                <Route path="/contact" component={Contact} /> 
                <Route component={Error} />
            </Switch>
            <Bottbar />
            
        </main>
    )
}

export default App;
