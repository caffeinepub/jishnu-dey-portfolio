import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Project {
    title: string;
    githubLink: string;
    description: string;
}
export interface Contact {
    linkedIn: string;
    email: string;
    github: string;
}
export interface backendInterface {
    addProject(title: string, description: string, githubLink: string): Promise<void>;
    getAllProjects(): Promise<Array<Project>>;
    getContactInfo(): Promise<Contact>;
    getProject(title: string): Promise<Project>;
    removeProject(title: string): Promise<void>;
    updateProject(title: string, description: string, githubLink: string): Promise<void>;
}
