## [MIN-: Brief title](https://mindfulchef.atlassian.net/browse/MIN-)

### Changes

- Brief description of the changes introduced

### Design Decisions

- If not intuitive, briefly explain design / architecture decisions
- If adding a new npm package, explain why it is necessary

### Checklist

#### General

- [ ] Follows [12 Factor App](https://12factor.net/) methodologies
- [ ] Follows [semantic versioning](https://semver.org/)
- [ ] Handles and all possible errors and exceptions
- [ ] Has **100%** test coverage
- [ ] Contains a [well-formatted](https://keepachangelog.com/en/1.0.0/) entry in `CHANGELOG.md`

#### Git

- [ ] Commit messages start with a capital letter and [describe changes in the imperative mood](https://git.kernel.org/pub/scm/git/git.git/tree/Documentation/SubmittingPatches?id=HEAD#n135)
- [ ] Commit messages start with a Jira issue reference (`[MIN-nnnn]`)
- [ ] Commit messages tell the truth about what changed
- [ ] Commits are [signed](https://help.github.com/en/github/authenticating-to-github/signing-commits)
- [ ] Commits [don't fix problems or reviews introduced in earlier commits](https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/#situation-3-i-need-to-add-remove-or-combine-commits) in this branch. [Rewrite history](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)
- [ ] This branch is rebased against the `main` branch
- [ ] This branch contains the user's initials and the Jira issue reference e.g. `ws/min-1234-add-some-feature`
