module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    testMatch: ['**/test/**/*.test.ts'],
    testTimeout: 30000, // Aumentar para 30 segundos
    globalSetup: '<rootDir>/src/test/globalSetup.ts',
    globalTeardown: '<rootDir>/src/test/globalTeardown.ts',
    collectCoverage: true, // Habilita a coleta de cobertura de código
    collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/*.d.ts'], // Arquivos para coletar cobertura
    coverageDirectory: 'coverage', // Diretório para salvar o relatório de cobertura    
  };
