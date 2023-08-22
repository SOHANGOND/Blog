{/* <Router>
      <Navbar />
      <Switch>
      <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
          <Route path="/post" component={Single} />
          <Route path="/write" component={Write} />
          <Route path="/setting" component={Setting} />

        </Switch>
      </Router>  */}




      <Router>      
      <Navbar />
      <div>
      {componentToRender}
      </div>
      
    </Router>