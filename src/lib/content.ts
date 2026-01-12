import fs from 'fs';
import path from 'path';

export function getBioContent(): string {
  const filePath = path.join(process.cwd(), 'content', 'bio.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return fileContents;
}

export function getClips() {
  const filePath = path.join(process.cwd(), 'content', 'clips.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getAppearances() {
  const filePath = path.join(process.cwd(), 'content', 'appearances.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getAiXLaborContent(): string {
  const filePath = path.join(process.cwd(), 'content', 'ai-x-labor.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return fileContents;
}

export function getAiXLaborArticles() {
  // AI x Labor articles matching the original site
  return [
    {
      title: "How thousands of 'overworked, underpaid' humans train Google's AI to seem smart",
      displayTitle: "How thousands of 'overworked, underpaid' humans train Google's AI to seem smart",
      publication: "The Guardian",
      url: "https://www.theguardian.com/technology/2025/sep/11/google-gemini-ai-training-humans",
      date: "2025-09-11",
      imagePath: "/images/ai-labor/Google-AI-Workers.webp"
    },
    {
      title: "This delivery app takes away health insurance when workers don't meet quotas",
      displayTitle: "This delivery app takes away health insurance when workers don't meet quotas",
      publication: "Rest of World",
      url: "https://restofworld.org/2024/swiggy-health-insurance-quotas/",
      date: "2024-03-10",
      imagePath: "/images/ai-labor/swiggy-health-insurance.webp"
    },
    {
      title: "Meet the AI workers who tell their friends and family to stay away from AI",
      displayTitle: "Meet the AI workers who tell their friends and family to stay away from AI",
      publication: "The Guardian",
      url: "https://www.theguardian.com/technology/2025/nov/22/ai-workers-tell-family-stay-away",
      date: "2025-11-22",
      imagePath: "/images/ai-labor/ai-workers-stay-away.avif"
    },
    {
      title: "Gig Workers Are Being Stabbed, Stoned, and Abused in India",
      displayTitle: "Gig Workers Are Being Stabbed, Stoned, and Abused in India",
      publication: "WIRED",
      url: "https://www.wired.co.uk/article/india-gig-workers-violence-deadly-attacks",
      date: "2023-07-20",
      imagePath: "/images/ai-labor/gig-workers-violence.webp"
    },
    {
      title: "Hundreds of Google AI Workers Were Fired Amid Fight Over Working Conditions",
      displayTitle: "Hundreds of Google AI Workers Were Fired Amid Fight Over Working Conditions",
      publication: "WIRED",
      url: "https://www.wired.com/story/hundreds-of-google-ai-workers-were-fired-amid-fight-over-working-conditions/",
      date: "2024-01-15",
      imagePath: "/images/ai-labor/Hundreds-Google-AI-Workers-Fired-Amid-Row-Over-Working-Conditions-Business-2226698932.webp"
    },
    {
      title: "Meet the most powerful Uber driver in India",
      displayTitle: "Meet the most powerful Uber driver in India",
      publication: "Rest of World",
      url: "https://restofworld.org/2023/india-powerful-uber-driver/",
      date: "2023-01-01",
      imagePath: "/images/ai-labor/powerful-uber-driver.webp"
    }
  ];
}

