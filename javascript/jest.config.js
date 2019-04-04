module.exports = {
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "globals": {
        "ts-jest": {
            "tsConfigFile": "tsconfig.json"
        }
    },
    "collectCoverage": true,
    "coverageReporters": [
        "text-summary",
        "lcov"
    ],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
}