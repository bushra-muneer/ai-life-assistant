import AssistantFlow from './AssistantFlow';
import { jobFreelanceTemplates } from '../data/jobFreelanceTemplates';

export default function JobFreelanceFlow() {
  return (
    <AssistantFlow
      choicesLabel="Job and Freelance Coach choices"
      description="Pick a career task, add rough details, and preview a simple output structure. This keeps the MVP useful for students, job seekers, and beginner freelancers before adding real AI calls."
      eyebrow="Day 5 build"
      guideLabel="Coach structure"
      inputId="job-freelance-input"
      inputLabel="What career task do you need help with?"
      sectionId="job-freelance-flow"
      templates={jobFreelanceTemplates}
      title="Job and Freelance Coach flow."
    />
  );
}
