export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  stars?: number;
  isGithub?: boolean;
}

export const playwrightResources: Resource[] = [
  {
    id: "1",
    title: "Playwright Official Docs",
    description: "The official Playwright documentation with comprehensive guides, API reference, and best practices for end-to-end testing.",
    url: "https://playwright.dev/",
    category: "Documentation",
    tags: ["official", "docs", "api", "guides"],
  },
  {
    id: "2",
    title: "Playwright Testing Framework",
    description: "The main Playwright repository containing the testing framework for modern web applications.",
    url: "https://github.com/microsoft/playwright",
    category: "Core Tools",
    tags: ["framework", "testing", "microsoft"],
    stars: 65000,
    isGithub: true,
  },
  {
    id: "3",
    title: "Playwright Test Generator",
    description: "Generate Playwright tests by recording user interactions in your browser. Built into Playwright's codegen feature.",
    url: "https://playwright.dev/docs/codegen",
    category: "Tools",
    tags: ["codegen", "recording", "automation"],
  },
  {
    id: "4",
    title: "Playwright Trace Viewer",
    description: "A powerful tool for debugging tests with timeline, screenshots, network logs, and source code inspection.",
    url: "https://playwright.dev/docs/trace-viewer",
    category: "Debugging",
    tags: ["debugging", "trace", "timeline", "screenshots"],
  },
  {
    id: "5",
    title: "Playwright UI Mode",
    description: "Interactive test runner with live execution, time travel debugging, and detailed error reporting.",
    url: "https://playwright.dev/docs/test-ui-mode",
    category: "Tools",
    tags: ["ui", "interactive", "debugging", "runner"],
  },
  {
    id: "6",
    title: "Playwright Docker Images",
    description: "Official Docker images for running Playwright tests in containerized environments with all browsers pre-installed.",
    url: "https://playwright.dev/docs/docker",
    category: "DevOps",
    tags: ["docker", "containers", "ci-cd", "browsers"],
  },
  {
    id: "7",
    title: "Playwright GitHub Actions",
    description: "Official GitHub Action for setting up Playwright in your CI/CD pipeline with caching and parallel execution.",
    url: "https://github.com/microsoft/playwright-github-action",
    category: "CI/CD",
    tags: ["github-actions", "ci", "automation"],
    stars: 300,
    isGithub: true,
  },
  {
    id: "8",
    title: "Playwright Test Results Reporter",
    description: "Beautiful HTML reports for Playwright test results with screenshots, videos, and detailed execution traces.",
    url: "https://playwright.dev/docs/test-reporters",
    category: "Reporting",
    tags: ["reports", "html", "screenshots", "videos"],
  },
  {
    id: "9",
    title: "Playwright Best Practices Guide",
    description: "Community-driven collection of best practices, patterns, and tips for writing maintainable Playwright tests.",
    url: "https://playwright.dev/docs/best-practices",
    category: "Learning",
    tags: ["best-practices", "patterns", "maintainability"],
  },
  {
    id: "10",
    title: "Playwright Community Discord",
    description: "Join the official Playwright Discord server to connect with other developers, get help, and share experiences.",
    url: "https://aka.ms/playwright/discord",
    category: "Community",
    tags: ["discord", "community", "support", "chat"],
  },
  {
    id: "11",
    title: "Playwright VS Code Extension",
    description: "Official VS Code extension for Playwright with test running, debugging, and IntelliSense support.",
    url: "https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright",
    category: "Tools",
    tags: ["vscode", "extension", "ide", "debugging"],
  },
  {
    id: "12",
    title: "Playwright Inspector",
    description: "Interactive tool for developing and debugging Playwright scripts with step-by-step execution and element inspection.",
    url: "https://playwright.dev/docs/debug#playwright-inspector",
    category: "Debugging",
    tags: ["inspector", "debugging", "development", "step-by-step"],
  },
];

export const categories = [
  "All",
  "Documentation",
  "Core Tools", 
  "Tools",
  "Debugging",
  "DevOps",
  "CI/CD",
  "Reporting",
  "Learning",
  "Community",
];