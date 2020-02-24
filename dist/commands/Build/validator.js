import { existsSync } from "fs";
export default {
    buildValidator: (params) => {
        if (!params['appName']) {
            return 'App name missing';
        }
        if (!existsSync(params['appName'])) {
            return 'App not existed';
        }
        return false;
    }
};
//# sourceMappingURL=validator.js.map