import { CB, User, Repository, Branch, Commit } from "./types";

/** Mock Data */
const users: User[] = [
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

const repositories: Repository[] = [
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
const branches: Branch[] = [
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

const commits: Commit[] = [
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

const time = 2000;

/** Backend Functions */
function getUsers(): Promise<User[]> {
    console.log("[USERS] Waiting...");
    return new Promise((resolve) => setTimeout(() => resolve(users), time));
}

function getRepositories(username: string): Promise<Repository[]> {
    console.log("[REPOSITORIES] Waiting...");
    return new Promise((resolve) => setTimeout(() => resolve(repositories.filter((r) => r.ownerUsername === username)), time));
}

function getBranches(repoID: string): Promise<Branch[]> {
    console.log("[BRANCHES] Waiting...");
    return new Promise((resolve) => setTimeout(() => resolve(branches.filter((b) => b.repoId === repoID)), time));
}

function getCommits(branchID: string): Promise<Commit[]> {
    console.log("[COMMITS] Waiting...");
    return new Promise((resolve) => setTimeout(() => resolve(commits.filter((c) => c.branchId === branchID)), time));
}

/** Start Function */
async function main() {
    try {
        const fetchedUsers = await getUsers();
        console.log("users =", fetchedUsers);

        const fetchedRepositories = await getRepositories(fetchedUsers[0].username);
        console.log("repositories =", fetchedRepositories);

        const fetchedBranches = await getBranches(fetchedRepositories[0].id);
        console.log("branches =", fetchedBranches);

        const fetchedCommits = await getCommits(fetchedBranches[0].id);
        console.log("commits =", fetchedCommits);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function app() {
    await main();
}

app();
