const fs = require('fs').promises; // Use the promise-based version of fs
const conn = require("../config/db.config"); // Assuming this now uses mysql2/promise

async function install() {
  const queryFile = __dirname + '/sql/initial-queries.sql';

  try {
    const fileContent = await fs.readFile(queryFile, 'utf-8');
    const queries = fileContent.split(/;\s*$/m); // Split by semicolon and handle multiple lines

    for (let query of queries) {
      query = query.trim();
      if (!query) continue; // Skip empty queries resulting from split
      console.log(`Executing query: ${query}`);
       await conn.query(query);
    }

    console.log("All tables are created successfully");
    return { message: "All tables are created", status: 200 };
  } catch (err) {
    console.error("Error during table creation:", err);
    return { message: "Not all tables are created", status: 500 };
  }
}

module.exports = { install };
