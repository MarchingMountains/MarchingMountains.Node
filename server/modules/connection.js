var connectionString = '';

if(process.env.DATABASE_URL !== undefined) {
  connectionString = process.env.DATABASE_URL + "?ssl=true";
} else {
  connectionString = 'postgres://postgres:Juniper1@localhost:5432/marchingmountains';
}

module.exports = connectionString;
