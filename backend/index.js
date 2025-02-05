const express = require('express');
const videoRoutes = require('./routes/videoRoutes');

const app = express();

app.use('/videos', videoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
