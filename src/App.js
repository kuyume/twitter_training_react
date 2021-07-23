import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import PostArchive from './component/PostArchive'
import PostDetail from './component/PostDetail'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <h1>TOP</h1>
        </Route>
        <Route exact path="/post">
          <PostArchive />
        </Route>
        <Route
          exact
          path="/post/:id"
        >
          <PostDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
