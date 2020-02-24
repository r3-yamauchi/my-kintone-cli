export default {
    authValidator: (params) => {
        if (!params['appName']) {
            return 'App name missing';
        }
        return false;
    }
};
//# sourceMappingURL=validator.js.map