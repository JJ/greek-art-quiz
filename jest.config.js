/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',          // Χρήση του ts-jest
  testEnvironment: 'node',     // Node περιβάλλον για τα tests
  testMatch: [                 // Πού βρίσκονται τα test αρχεία
    "**/tests/**/*.test.ts"
  ],
  moduleFileExtensions: [      // Επεκτάσεις αρχείων
    "ts",
    "js",
    "json"
  ],
  moduleDirectories: [         // Βολεύει στην ανεύρεση imports
    "node_modules",
    "src"
  ]
};
