interface EducationProgramJSON {
    id: string;
    program: string;
    concentration: string;
    institution: string;
    institutionLogo: {
        image: string;
        alt: string;
        institutionURL: string;
    };
    startYear: number;
    endYear: number;
    location: string;
    courseSets: {
        program: string;
        courseGroups: {
            status: string;
            courses: {
                name: string;
                courseID: string;
                description: string;
            }[];
        }[];
    }[],
    detailSection: {
        sectionTitle: string;
        entry: {
            entryTitle: string;
            points: string[];
        }[];
    }[];
}

export default EducationProgramJSON;