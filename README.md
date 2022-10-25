<h1>Webpack</h1>
<p>Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.</p>

<h2>Install</h2>
<p dir="auto">Install with npm: Follow the below steps to install Bootstrap and Jquery Dependencies</p>

<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>npm i --save-dev webpack webpack-cli webpack-dev-server</pre>
</div>

<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>npm i --save bootstrap @popperjs/core</pre>
</div>

<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader</pre>
</div>

<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>npm install --save jquery</pre>
</div>

<blockquote>
    <p dir="auto">
        <span class="color-fg-accent">
            <svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path>
            </svg>Note
        </span>
    </p>
    <p dir="auto">
        <em>Once Above given four commands are added, then need to start the project with NPM Scripts</em>
    </p>
</blockquote>

<h2>With NPM Scripts</h2>
<p>NPM package.json scripts are a convenient and useful means to run locally installed binaries without having to be concerned about their full paths. Simply Already define a script in Package.json file</p>

<p>Run the Below Command to Start the project, this command will watch your file whatever you make the changes and it will save the changes in output folder</p>
<br/>

<p>To Run the Project</p>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>npm run watch</pre>
</div>

<p>To Make the Project as Production</p>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>npm run production</pre>
</div>

<p>To Make the Project as Build, as Optimization file</p>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>npm run build</pre>
</div>
