<h2>List of Machine Coding Questions with Test cases using Vitest and Playwright for automated test cases</h2>
<h3>Practice</h3>
<ol>
<li>Progress Bar</li> 
<li>File Explorer (Test Cases Pending...)</li>
<li>OTP input using UseRef (Test Cases Pending...)</li>
<li>To do list (Pending...)</li>
<li>Tabs (Pending...) </li>
<li>Dynamic Pagination (Pending...) </li>
<li>AutoComplete Search Bar (Pending...) </li>
<li>Drag and Drop (Pending...) </li>
<li>Nested Comments and Reply (Pending...) </li>
</ol>

<h3>Deployed Features in Client Projects</h3>
<ol>
<li>React virtualization for large data in Table and operations like selecting multiple on basis of conditions (Pending...) </li>
<li>Generating pdf through buffer data and rendering in book style (Pending...) </li>
<li>Build a resume AI assistant (Pending...) </li>
</ol>

#

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve progressbar
```

or
Install nx globally and

```sh
nx run progressbar:dev
```

To create a production bundle:

```sh
npx nx build progressbar
```

To see all available targets to run for a project, run:

```sh
npx nx show project progressbar
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new project using react and inside apps folder not at root

```sh
npx nx g @nx/react:app ./apps/fileexplorer
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib libs/ui
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
