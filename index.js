import App from "./src/modules/app";
import { mockDonates } from './src/db/donates';
import './index.css';

const app = new App(mockDonates);
app.run();
