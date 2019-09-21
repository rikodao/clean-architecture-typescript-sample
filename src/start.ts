import app from 'src/express/Server';
import { logger } from '@shared';

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
