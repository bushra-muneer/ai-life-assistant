import AssistantFlow from './AssistantFlow';
import { mealBudgetTemplates } from '../data/mealBudgetTemplates';

export default function MealBudgetFlow() {
  return (
    <AssistantFlow
      choicesLabel="Meal and Budget Planner choices"
      description="Choose a meal-planning task, add your ingredients or budget details, and preview a simple planning structure. This keeps the MVP practical for students, families, and busy home planners."
      eyebrow="Day 6 build"
      guideLabel="Planner structure"
      inputId="meal-budget-input"
      inputLabel="What meal or budget problem do you need help with?"
      sectionId="meal-budget-flow"
      templates={mealBudgetTemplates}
      title="Meal and Budget Planner flow."
    />
  );
}
