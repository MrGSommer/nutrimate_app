import neo4j, { Driver } from 'neo4j-driver';

let driver: Driver;

export function getNeo4jDriver() {
  if (!driver) {
    driver = neo4j.driver(
      process.env.NEO4J_URI!,
      neo4j.auth.basic(
        process.env.NEO4J_USERNAME!,
        process.env.NEO4J_PASSWORD!
      )
    );
  }
  return driver;
}

export async function query(cypher: string, params = {}) {
  const session = getNeo4jDriver().session();
  try {
    const result = await session.run(cypher, params);
    return result.records;
  } finally {
    await session.close();
  }
}
