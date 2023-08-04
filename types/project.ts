
export type Project = {
    descriere: string;
    _id: string;
    _createdAt: Date;
    nume: string;
    image: string;
};

export type About = { 
    imagine: string;
    _id: string;
    descriere: string;
    _createdAt: Date;
}

export type typeSkills = {
    _id:string;
    image:string;
    procent:number;
}

export type Experience = {
    _id:string;
    image:string;
    titulatura:string;
    firma:string;
    tech:Array<string>;
    dataE:string;
    dataS:string;
    points:Array<string>;
}