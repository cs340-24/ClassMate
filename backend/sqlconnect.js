import sql from 'mssql';


const config_local = {
    user: process.env.AZURE_SQL_USER, // better stored in an app setting such as process.env.DB_USER
    password: process.env.AZURE_SQL_PASSWORD, // better stored in an app setting such as process.env.DB_PASSWORD
    server: process.env.AZURE_SQL_SERVER, // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: process.env.AZURE_SQL_DATABASE, // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

const config_server = {
    user: process.env.AZURE_SQL_USER, // better stored in an app setting such as process.env.DB_USER
    password: process.env.AZURE_SQL_PASSWORD, // better stored in an app setting such as process.env.DB_PASSWORD
    server: process.env.AZURE_SQL_SERVER, // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: process.env.AZURE_SQL_DATABASE, // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

// close connection only when we're certain application is finished

//Connect to the database -> returns a pool connection
export async function connect(local = false) {
    try {
        if(local) {
            console.log("Connecting to database locally.");
            let poolConnection = await sql.connect(config_local);
            return poolConnection;
        }
        else {
            console.log("Connecting to database on server.");
            let poolConnection = await sql.connect(config_server);
            return poolConnection;
        }
    } catch (err) {
        console.error(err.message);
        console.log("Error connecting")
    }
}

// Function to reopen the connection after inactivity
export async function reopenConnection(poolConnection) {
    try {
        if (poolConnection && !poolConnection.connected) {
            console.log("Reconnecting to database");
            await poolConnection.connect();
        }
    } catch (err) {
        console.error(err.message);
        console.log("Error reconnecting");
    }
}


//Test query function -> inputs a pool connection and returns a record set
export async function testQuery(poolConnection) {
    try {
        console.log("Reading rows from the Table...");
        let resultSet = await poolConnection.request().query(`SELECT * FROM [dbo].[University]`);

        console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        let columns = "";
        for (let column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log("%s   %s", row.UniID, row.UniName);
        });

        return resultSet.recordset;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

//Close the connection
export async function closeConnection(poolConnection) {
    try {
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}