export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  height?: number;
  weight?: number;
  targetWeight?: number;
  activityLevel?: 'sedentary' | 'light' | 'moderate' | 'very' | 'extra';
  dietaryPreferences?: string[];
  restrictions?: string[];
  createdAt: Date;
  updatedAt: Date;
}
