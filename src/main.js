"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Mock Data */
var users = [
    {
        id: 123,
        username: "arslonbekXX",
    },
    {
        id: 11,
        username: "kent",
    },
    {
        id: 8,
        username: "mark",
    },
];
var repositories = [
    {
        id: "abc123",
        name: "pdp-g-10",
        ownerUsername: "arslonbekXX",
    },
    {
        id: "cc120",
        name: "pdp-g-7",
        ownerUsername: "arslonbekXX",
    },
    {
        id: "bb11",
        name: "pdp-g-8",
        ownerUsername: "arslonbekXX",
    },
];
var branches = [
    {
        id: "b22",
        name: "lesson-22",
        repoId: "abc123",
    },
    {
        id: "b33",
        name: "lesson-33",
        repoId: "abc123",
    },
    {
        id: "b11",
        name: "lesson-11",
        repoId: "bb11",
    },
];
var commits = [
    {
        id: "1",
        message: "lesson-22 start-codes",
        branchId: "b22",
        createdAt: "12.05.23",
    },
    {
        id: "2",
        message: "lesson-22 finish-codes",
        branchId: "b22",
        createdAt: "13.08.23",
    },
    {
        id: "3",
        message: "lesson-22 for challenge",
        branchId: "b22",
        createdAt: "03.05.23",
    },
];
var time = 2000;
/** Backend Functions */
function getUsers() {
    return new Promise(function (resolve) {
        console.log("[USERS] Waiting...");
        setTimeout(function () { return resolve(users); }, time);
    });
}
function getRepositories(username) {
    return new Promise(function (resolve) {
        console.log("[REPOSITORIES] Waiting...");
        setTimeout(function () { return resolve(repositories.filter(function (r) { return r.ownerUsername === username; })); }, time);
    });
}
function getBranches(repoID) {
    return new Promise(function (resolve) {
        console.log("[BRANCHES] Waiting...");
        setTimeout(function () { return resolve(branches.filter(function (b) { return b.repoId === repoID; })); }, time);
    });
}
function getCommits(branchID) {
    return new Promise(function (resolve) {
        console.log("[COMMITS] Waiting...");
        setTimeout(function () { return resolve(commits.filter(function (c) { return c.branchId === branchID; })); }, time);
    });
}
/** Start Function */
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, fetchedUsers, fetchedRepositories, _b, fetchedBranches, fetchedCommits, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, Promise.all([
                            getUsers(),
                            getRepositories(users[0].username),
                        ])];
                case 1:
                    _a = _c.sent(), fetchedUsers = _a[0], fetchedRepositories = _a[1];
                    console.log("users =", fetchedUsers);
                    console.log("repositories =", fetchedRepositories);
                    return [4 /*yield*/, Promise.all([
                            getBranches(fetchedRepositories[0].id),
                            getCommits(branches[0].id),
                        ])];
                case 2:
                    _b = _c.sent(), fetchedBranches = _b[0], fetchedCommits = _b[1];
                    console.log("branches =", fetchedBranches);
                    console.log("commits =", fetchedCommits);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    console.error("Error:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function app() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, main()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
app();
