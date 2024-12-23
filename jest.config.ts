module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './',
  testRegex: 'test/.*\.spec\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', {tsconfig: 'tsconfig.spec.json'}],
  },
  collectCoverage: true,
  moduleNameMapper: {'@standardkit/caas': '<rootDir>/src'},
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: './.coverage',
  coverageReporters: ["lcov", "text"]
};
