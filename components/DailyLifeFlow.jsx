import AssistantFlow from './AssistantFlow';
import { dailyLifePromptTemplates } from '../data/dailyLifePromptTemplates';

export default function DailyLifeFlow() {
  return (
    <AssistantFlow
      choicesLabel="Daily Life prompt choices"
      description="Choose a reusable template, add your rough text, and preview how the assistant should structure useful daily help. The templates stay local for now and can later connect to the server-side AI route."
      eyebrow="Day 4 build"
      guideLabel="Template structure"
      inputId="daily-life-input"
      inputLabel="What do you need help with?"
      sectionId="daily-life-flow"
      templates={dailyLifePromptTemplates}
      title="Daily Life prompt templates."
    />
  );
}
