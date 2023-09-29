
import { descriptions } from "./descriptions";
import {titles} from './titles';
import { github_links, linkedin_links } from "./links";

//images
const numOfProjects = 7;

for (let i = 0; i < numOfProjects; i++) {

}

//object for each project
export const projectsInfo = titles.map((t, i) => {
    return {
        title: t,
        desc: descriptions[i],
        image: `/public/images/image (${i}).png`,
        github: github_links[i],
        linkedin: linkedin_links[i]
    }
});
