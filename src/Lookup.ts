
import linkData from "./data/lookup.json";

export function iconLookup(name: string) : string {

    // TODO - Image lookups should maybe support a light/dark mode check

    let github = "/GitHub-Mark-Light-64px/png";
    let linkedin = "/linkedin_alt_final.png";
    let email = "/email_final.png";
    let usask = "/usask.jpg";

    // TODO - Find some generic, default for unknown lookups
    let unknown = "";

    switch (name) {
        case "github":
            return github;
        case "linkedin":
            return linkedin;
        case "email":
            return email;
        case "usask":
            return usask;
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

    }

    return "";
}