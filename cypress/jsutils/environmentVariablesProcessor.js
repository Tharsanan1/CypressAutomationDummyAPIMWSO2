const IDENTIFIER_OPEN = "$:";
const IDENTIFIER_CLOSE = ":$";
const IDENTIFIER_OPEN_CHARACTORS_LENGTH = IDENTIFIER_OPEN.length;
const IDENTIFIER_CLOSE_CHARACTORS_LENGTH = IDENTIFIER_CLOSE.length;

function replaceWithEnvironmentVariables(text) {
    if (text.startsWith(IDENTIFIER_OPEN) && text.endsWith(IDENTIFIER_CLOSE)) {

        let envVar = Cypress.env(text.substring(IDENTIFIER_OPEN_CHARACTORS_LENGTH, text.length - IDENTIFIER_CLOSE_CHARACTORS_LENGTH));
        if (envVar) {
            return envVar;
        }
        return "";
    } else return text;
}

module.exports = { replaceWithEnvironmentVariables };