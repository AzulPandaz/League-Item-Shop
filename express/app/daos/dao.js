const daoCommon = require('./common/daoCommon')

const skateboardDao={
    ...daoCommon,
    ...require('./api/skateboardDao')

}

const longboardDao ={ ...daoCommon, ...require('./api/longboardDao')}
const streetboardDao ={ ...daoCommon, ...require('./api/streetboardDao')}
const cruiserboardDao ={ ...daoCommon, ...require('./api/cruiserboardDao')}
const pennyboardDao ={ ...daoCommon, ...require('./api/pennyboardDao')}

module.exports ={
    skateboardDao,
    longboardDao,
    streetboardDao,
    cruiserboardDao,
    pennyboardDao
}