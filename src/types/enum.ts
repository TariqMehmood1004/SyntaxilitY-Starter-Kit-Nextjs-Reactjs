// enum for job types
export enum JobType {
  FULL_TIME = "Full-time",
  PART_TIME = "Part-time",
  CONTRACT = "Contract",
  INTERN = "Intern",
  FREELANCE = "Freelance",
  TEMPORARY = "Temporary",
  VOLUNTEER = "Volunteer",
  OTHER = "Other",
}

// array of job types for dropdowns or selection inputs
export const JobTypeArray: string[] = [
  JobType.FULL_TIME,
  JobType.PART_TIME,
  JobType.CONTRACT,
  JobType.INTERN,
  JobType.FREELANCE,
  JobType.TEMPORARY,
  JobType.VOLUNTEER,
  JobType.OTHER,
];