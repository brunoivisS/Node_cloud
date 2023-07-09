import routes from './routes/routes'
import Express from 'express';
const app = Express();
app.use(routes);
app.listen(3000);