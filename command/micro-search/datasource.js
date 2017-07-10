import elasticsearch from 'elasticsearch'
import searchConfig from './config/elasticConfig'

const searchClient = new elasticsearch.Client({
    host: searchConfig.url,
    log: 'trace'
});

export default searchClient;