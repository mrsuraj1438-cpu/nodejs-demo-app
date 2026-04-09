export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs"
        },
        rules: {
            // Basic best practices
            "no-unused-vars": "warn",
            "no-console": "off",
            "no-undef": "error",

            // Code style (optional but useful)
            semi: ["error", "always"],
            quotes: ["error", "double"]
        }
    }
];