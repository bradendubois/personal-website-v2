
import linkData from "./json/lookup.json";

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
    let headshot = "/sunglasses_rabbit_1.jpg";

    // TODO - Find some generic, default for unknown lookups
    let unknown = "";

    switch (name) {
        case "github":
            return github;
        case "github-dark":
            return githubdark;
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
    }

    return unknown;
}

export function urlLookup(name: string) : string {

    switch (name) {
        case ("github"):
            return linkData.github;
        case ("linkedin"):
            return linkData.linkedin;
        case ("email"):
            return linkData.email;
        case ("usask"):
            return linkData.usask;
        case "competitive-programming":
            return linkData.github + "/competitive-programming";
        case "kattis":
            return linkData.kattis;
        case "reading-list-page":
            return "reading";
        case "resume":
            return "/resume.pdf"

    }

    return "";
}