module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "epileptic-patients-warning-application",
  },
    plugins: [
        {
            resolve: `gatsby-source-mysql`,
            options: {
                connectionDetails: {
                    host: 'localhost',
                    user: 'root',
                    password: '',
                    database: 'epilepticpatientwarningdb'
                },
                queries: [
                    {
                        statement: 'SELECT * FROM sysuser',
                        idFieldName: 'id',
                        name: 'sysuser'
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-create-client-paths`,
            options: { prefixes: [`/app/*`] },
        },
    ],

};
