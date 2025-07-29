"use strict";

// Error Handling in JavaScript

async function getAirQuality(lat, long) {
  try {
    const response = await fetch(
      `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${long}&hourly=birch_pollen,grass_pollen`
    );
    if (!response.ok) throw new Error("Invalid Response!");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getAirQuality(52.52, 13.41);

// try/catch/finally:

try {
  const file = openFile("data.txt");
  processFile(file);
} catch (error) {
  console.log("File processing failed:", error.message);
} finally {
  console.log("Cleanup operations"); // Always executes
}
