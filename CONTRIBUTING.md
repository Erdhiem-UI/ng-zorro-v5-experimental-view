# Contributing to Erdhiem-UI

We would love for you to contribute to Erdhiem-UI and help make it even better than it is
today! As a contributor, here are the guidelines we would like you to follow:

-   [Code of Conduct](#coc)
-   [Issues and Bugs](#issue)
-   [Feature Requests](#feature)
-   [Submission Guidelines](#submit)
-   [Coding Rules](#rules)
-   [Commit Message Guidelines](#commit)

## <a name="coc"></a> Code of Conduct

Help us keep Erdhiem-UI open and inclusive. Please read and follow our [Code of Conduct][coc].

## <a name="issue"></a> Found a Bug?

If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository][github]. Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?

You can _request_ a new feature by [submitting an issue](#submit-issue) to our GitHub
Repository. If you would like to _implement_ a new feature, please submit an issue with
a for your work first, to be sure that we can use it.
Please consider what kind of change it is:

-   For a **Major Feature**, first open an issue and outline your proposal so that it can be
    discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
    and help you to craft the change so that it is successfully accepted into the project.
-   **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

We will be insisting on a minimal reproduce scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal plunk. We understand that sometimes it might be hard to extract essentials bits of code from a larger code-base but we really need to isolate the problem before we can fix it.

Unfortunately we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that don't have enough info to be reproduced.

You can file new issues by filling out our [new issue form](https://github.com/Erdhiem-UI/ng-zorro-v5-experimental-view/issues/new).

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

-   Search [GitHub](https://github.com/Erdhiem-UI/ng-zorro-v5-experimental-view/pulls) for an open or closed PR
    that relates to your submission. You don't want to duplicate effort.
-   Make your changes in a new git branch:

    ```shell
    git checkout -b my-fix-branch master
    ```

-   Create your patch, **including appropriate test cases**.
-   Follow our [Coding Rules](#rules).
-   Commit your changes using a descriptive commit message that follows our
    [commit message conventions](#commit). Adherence to these conventions
    is necessary because release notes are automatically generated from these messages.

    ```shell
    git commit -a
    ```

    Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

-   Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

-   In GitHub, send a pull request to `ng-zorro-v5-experimental-view:master`.
-   If we suggest changes then:

    -   Make the required updates.
    -   Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

        ```shell
        git rebase master -i
        git push -f
        ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

-   Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

-   Check out the master branch:

    ```shell
    git checkout master -f
    ```

-   Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

-   Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

-   All features or bug fixes **must be tested** by one or more specs (unit-tests).
-   All public API methods **must be documented**.

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the Erdhiem-UI change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

```
docs(changelog): update change log to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

-   **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
-   **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
-   **docs**: Documentation only changes
-   **feat**: A new feature
-   **fix**: A bug fix
-   **perf**: A code change that improves performance
-   **refactor**: A code change that neither fixes a bug nor adds a feature
-   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
-   **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the module affected (folder name or other meaningful words), and should prefix with _module:_ (as perceived by person reading changelog generated from commit messages.

The following are some examples:

-   **module:alert**
-   **module:badge**
-   **module:breadcrumb**
-   **module:OTHER_COMPONENT_NAME**

There are currently a few exceptions to the "use module name" rule:

-   **packaging**: used for changes that change the npm package layout, e.g. public path changes, package.json changes, d.ts file/format changes, changes to bundles, etc.
-   **changelog**: used for updating the release notes in CHANGELOG.md
-   **showcase**: used for docs-app (ng.ant.design) related changes within the /showcase directory of the repo
-   none/empty string: useful for `style`, `test` and `refactor` changes that are done across all packages (e.g. `style: add missing semicolons`)

### Subject

The subject contains succinct description of the change:

-   use the imperative, present tense: "change" not "changed" nor "changes"
-   don't capitalize first letter
-   no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

[coc]: https://github.com/Erdhiem-UI/ng-zorro-v5-experimental-view/blob/master/CODE_OF_CONDUCT.md
[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
[github]: https://github.com/Erdhiem-UI/ng-zorro-v5-experimental-view
