import express from 'express';
import itemsRouter from './routes/items';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/items', itemsRouter);

app.get('/', (_req, res) => {
  res.send('🎉 API is working! Go to /items');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
