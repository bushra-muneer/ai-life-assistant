export const mealBudgetTemplates = [
  {
    id: 'cook-today',
    title: 'What to cook today',
    helper: 'Suggest a simple meal from ingredients at home.',
    placeholder: 'List ingredients you have, for example: rice, eggs, potatoes, yogurt...',
    emptyPreview: 'Example: Make a quick rice bowl with eggs, potatoes, and yogurt on the side. Keep it simple, filling, and low waste.',
    previewTitle: 'Meal idea:',
    output: 'Pick one filling base, add one protein or main ingredient, use one quick side, and keep the recipe easy enough for today.',
    contextLabel: 'Available ingredients',
    templateSteps: [
      'Use ingredients already available first.',
      'Choose one simple main meal, not many options.',
      'Prefer low-waste ideas that do not need extra shopping.'
    ]
  },
  {
    id: 'budget-meals',
    title: 'Budget meal plan',
    helper: 'Plan simple meals around a small weekly budget.',
    placeholder: 'Write your budget, number of people, and days to plan for...',
    emptyPreview: 'Example: Use rice, lentils, eggs, potatoes, seasonal vegetables, and yogurt across the week to keep meals affordable and flexible.',
    previewTitle: 'Budget plan:',
    output: 'Start with cheap staple ingredients, repeat them in different ways, and plan meals that can share the same groceries.',
    contextLabel: 'Budget details',
    templateSteps: [
      'Start with the budget and number of people.',
      'Use staple ingredients across multiple meals.',
      'Keep snacks and extras separate from main meals.'
    ]
  },
  {
    id: 'grocery-list',
    title: 'Grocery list',
    helper: 'Turn meal ideas into a clean shopping list.',
    placeholder: 'Write meals you want to cook or items you already have...',
    emptyPreview: 'Example: Buy rice, eggs, potatoes, onions, tomatoes, lentils, yogurt, and seasonal fruit. Check oil and spices before buying more.',
    previewTitle: 'Shopping list draft:',
    output: 'Group the list by staples, fresh items, protein, and extras. Check what is already at home before adding duplicates.',
    contextLabel: 'Meal or pantry notes',
    templateSteps: [
      'Separate must-buy items from optional items.',
      'Group groceries by category.',
      'Check pantry items before shopping.'
    ]
  }
];
