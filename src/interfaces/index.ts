import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";

export interface jobType {
  id: number;
  image: StaticImageData;
  workType: string;
  title: string;
  company: string;
  company_id?: number | null,
  location: string;
  description?: string | null;
  tags: string[];
}

export interface categoryType {
  id: number;
  icon: IconDefinition;
  title: string;
  jobs_count: number;
}

export interface companyType {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  tags: string[];
  vacancies_count: number;
  company_website: string;
}

export interface specialistType{
  id: number,
  name: string,
  description: string,
  socials: {
    instagram: string,
    linkedin: string,
  },
  job: string,
  image: StaticImageData,
}

export interface perkType{
  id: number,
  image: StaticImageData,
  title: string,
  description: string,
}