// Importación de módulos
const cors = require('cors');
const express = require(express);
const morgan = require('morgan');
const app = express();

app.use('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());