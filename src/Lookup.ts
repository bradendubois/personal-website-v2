
export function iconLookup(name: string) : string {

    // TODO - Image lookups should maybe support a light/dark mode check

    let github = "/GitHub-Mark-Light-64px.png";
    let githubdark = "/GitHub-Mark-64px.png";
    let linkedin = "/linkedin_alt_final.png";
    let linkedinlight = "/linkedin-light.png";
    let email = "/email_final.png";
    let usask = "/usask.jpg";
    let pdf = "/pdf-dark.png";
    let pdflight = "/pdf-light.png";
    let docx = "/docx-light.png";
    let headshot = "/me.jpg";
    let delta = "/delta_dark.png";

    let terminal = "/terminal.png";
    let website = "/globe_dark.png";

    // TODO - Find some generic, default for unknown lookups
    let unknown = "";


    switch (name) {
        case "github":
            return githubdark;
        case "github-dark":
            return githubdark;
        case "github-light":
            return github;
        case "linkedin":
            return linkedin;
        case "linkedin-light":
            return linkedinlight;
        case "email":
            return email;
        case "usask":
            return usask;
        case "pdf":
            return pdf;
        case "pdf-light":
            return pdflight;
        case "docx":
            return docx;
        case "headshot":
            return headshot;
        case "delta":
            return delta;
        case "terminal":
            return terminal;
        case "website":
            return website;
    }

    return unknown;
}

export const profileNames = {
    github: "bradendubois",
    linkedin: "bradendubois",
    kattis: "bradendubois"
};

export const links = {
    github: "https://www.github.com/" + profileNames.github,
    linkedin: "https://www.linkedin.com/in/" + profileNames.linkedin,
    email: "mailto:braden.dubois@usask.ca",
    usask: "https://www.usask.ca",
    kattis: "https://open.kattis.com/users/" + profileNames.kattis,
    competitiveProgramming: "https://www.github.com/" + profileNames.github + "/competitive-programming",
    resumePDF: "/resume.pdf",
    neufeld: "https://www.cs.usask.ca/faculty/eric/",
    adventOfCode: "https://adventofcode.com/",
    aur: "https://aur.archlinux.org/",
    baylor: "https://icpc.baylor.edu/",
    csss: "http://csss.usask.ca/"
};

export const githubRepo = (repoName: string): string => links.github + "/" + repoName;
