import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IEvent {
  name: string,
  category: string,
  duration: [Date, Date],
  location: string,
  image: IGatsbyImageData
  icon: string
}

export function validateEvent(page: any): IEvent | void {
  if (page && page.title && page.properties && page.image && page.iconEmoji) {
    const { title, properties, image, iconEmoji } = page;
    const { Category, Date: _Date, Location } = properties;
    if (Category && _Date && _Date.start && _Date.end && Location && image.childImageSharp) {
      return {
        name: title,
        category: Category,
        duration: [new Date(_Date.start), new Date(_Date.end)],
        location: Location,
        image: image.childImageSharp.gatsbyImageData,
        icon: iconEmoji
      };
    }
  }
}

interface Category {
  slug: string,
  name: string,
  description: string
}

export const title = "MIT Film Makers Association";

const options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'} as const;
export const formatDatetime = (d: Date) => d.toLocaleString('en-US', options);
export const formatDate = (d: Date) => d.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
export const formatTime = (d: Date) => d.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});

export const formatDuration = (d1: Date, d2: Date) => `${formatDatetime(d1)} - ${d1.toDateString === d2.toDateString ? formatTime(d2) : formatDatetime(d2)}`;

const summary: Category[] = [
  {slug: "", name: "Home", description: ""},
  {slug: "people", name: "People", description: ""},
  {slug: "portfolio", name: "Portfolio", description: ""},
  {slug: "events", name: "Events", description: ""},
  {slug: "hackathon", name: "Hackathon", description: ""},
  {slug: "join", name: "Join us", description: ""},
]

export default summary;
