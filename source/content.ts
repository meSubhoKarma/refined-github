import select, {SelectDom} from 'select-dom';
import 'webext-dynamic-content-scripts';

import './features/useful-not-found-page';
import './features/trending-menu-item';
import './features/hide-useless-newsfeed-events';
import './features/more-dropdown';
import './features/releases-tab';
import './features/remove-projects-tab';
import './features/focus-confirmation-buttons';
import './features/comment-fields-keyboard-shortcuts';
import './features/hide-navigation-hover-highlight';
import './features/monospace-textareas';
import './features/selection-in-new-tab';
import './features/hide-comments-faster';
import './features/mark-unread';
import './features/open-all-notifications';
import './features/copy-on-y';
import './features/profile-hotkey';
import './features/make-discussion-sidebar-sticky';
import './features/close-out-of-view-modals';
import './features/improve-shortcut-help';
import './features/upload-button';
import './features/move-marketplace-link-to-profile-dropdown';
import './features/copy-file';
import './features/hide-own-stars';
import './features/infinite-scroll';
import './features/hide-empty-meta';
import './features/remove-upload-files-button';
import './features/emojis-title';
import './features/shorten-links';
import './features/linkify-urls-in-code';
import './features/download-folder-button';
import './features/linkify-branch-refs';
import './features/batch-open-issues';
import './features/hide-useless-comments';
import './features/navigate-pages-with-arrow-keys';
import './features/make-headers-sticky';
import './features/yours-menu-item';
import './features/commented-menu-item';
import './features/sort-issues-by-update-time'; // Must be after add-yours-menu-item + add-commented-menu-item
import './features/hide-readme-header';
import './features/branch-buttons';
import './features/diff-view-without-whitespace-option';
import './features/ci-link';
import './features/sort-milestones-by-closest-due-date';
import './features/star-repo-hotkey';
import './features/toggle-files-button';
import './features/scroll-to-top-on-collapse';
import './features/delete-fork-link';
import './features/fix-squash-and-merge-title';
import './features/fix-squash-and-merge-message';
import './features/open-ci-details-in-new-tab';
import './features/wait-for-build';
import './features/hide-inactive-deployments';
import './features/pull-request-hotkey';
import './features/quick-review-buttons';
import './features/linkify-issues-in-titles';
import './features/embed-gist-inline';
import './features/extend-status-labels';
import './features/highlight-closing-prs-in-open-issues';
import './features/comments-time-machine-links';
import './features/jump-to-bottom-link';
import './features/filter-comments-by-you';
import './features/hide-issue-list-autocomplete';
import './features/exclude-filter-shortcut';
import './features/show-recently-pushed-branches-on-more-pages';
import './features/create-release-shortcut';
import './features/patch-diff-links';
import './features/swap-branches-on-compare';
import './features/reactions-avatars';
import './features/show-names';
import './features/mark-merge-commits-in-list';
import './features/prev-next-commit-buttons';
import './features/preserve-whitespace-option-in-nav';
import './features/extend-diff-expander';
import './features/profile-gists-link';
import './features/show-followers-you-know';
import './features/show-user-top-repositories';
import './features/set-default-repositories-type-to-sources';
import './features/user-profile-follower-badge';
import './features/pr-branches';
import './features/mark-private-orgs';
import './features/linkify-commit-sha';
import './features/bypass-checks';
import './features/add-co-authored-by';
import './features/warn-pr-from-master';
import './features/split-issue-pr-search-results';
import './features/preview-hidden-comments';

// Add global for easier debugging
declare global {
	interface Window {
		select: SelectDom;
	}
}

window.select = select;