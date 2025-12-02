# Jotagep Portfolio

This repository contains the source code for **Jotagep**'s personal portfolio.

## Description

A minimalist portfolio template built with **Astro** and **TailwindCSS**, designed to be fast, accessible, and easy to customize.

The website includes the following sections:

- **Posts**: Articles and publications about development and technology.
- **Projects**: A showcase of completed projects.
- **Jobs**: Work history and professional experience.
- **Contact**: Ways to get in touch with the developer.

## Technologies

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jotagep/jotagep.com.git
   cd jotagep.com
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

## Data Management

The portfolio's content is managed through specific files in the `src` directory. Here's how to update each section:

### Configuration (`src/data/config.ts`)

Global site configuration, including:

- **Site Metadata**: Title, description, URL.
- **Social Links**: GitHub, LinkedIn, X (Twitter), etc.
- **Contact Info**: Email address.

### Posts (`src/content/posts`)

Blog posts are written in Markdown/MDX and located in `src/content/posts`.

- **Structure**: Organized by language (e.g., `es/`, `en/`).
- **Frontmatter**:
  ```yaml
  ---
  title: 'Post Title'
  publishedAt: 2023-10-27
  description: 'Brief description of the post.'
  isPublish: true
  tags: ['web-dev', 'astro']
  ---
  ```

### Tags (`src/data/tags.ts`)

Manage the tags used in blog posts.

- **Adding a Tag**: Add a new object to the `TAGS` array.
  ```ts
  { label: 'New Tag', slug: 'new-tag', color: 'blue' }
  ```
- **Colors**: Available colors are defined in `ColorBadge` (e.g., white, orange, green, yellow, red, sky).

### Projects (`src/data/projects.ts`)

Showcase your projects.

- **Adding a Project**: Add a new object to the `projects` array.
  ```ts
  {
    title: 'Project Name',
    description: 'Description of the project.',
    techs: ['React', 'TypeScript'], // Technologies used
    link: 'https://github.com/your/project',
    prize: 'Optional prize info'
  }
  ```

### Jobs (`src/data/jobs.ts`)

Update your work history.

- **Adding a Job**: Add a new object to the `jobs` array.
  ```ts
  {
    title: 'Job Title',
    company: 'Company Name',
    status: 'full-time', // or 'contractor'
    logo: logoImage, // Import the image first
    url: 'https://company.com',
    from: new Date('2023-01-01'),
    to: new Date('2023-12-31'), // Optional if current
    active: true // Show in the "Work" section
  }
  ```
