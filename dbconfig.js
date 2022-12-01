const config = {
    user : 'userNode',
    password : 'user',
    server : 'localhost',
    port : 1433,
    database: 'DBMeca',
    options:{
        trustServerCertificate: true,
        trustedConnection: true,
        enableArithAbort: true,
        instancename : 'SQLEXPRESS'
    },
}

module.exports = config;