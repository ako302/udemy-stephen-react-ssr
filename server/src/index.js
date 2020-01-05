import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";
import proxy from 'express-http-proxy';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts){
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => {
    if(promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      })
    }
  });

  Promise.all(promises)
    .then(() => {
      const context = {};
      const content = renderer(req, store, context);

      if(context.url) {
        return res.redirect(301, context.url);
      }

      if(context.notFound) {
        console.log("not found status 404");
        res.status(404);
      }
      
      res.send(content);
    })
    .catch(function(exception) {
      console.log(exception);
      res.send("exception found");
    });
});

app.listen(3000, () => {
  console.log("Server ready at http://localhost:3000");
});
