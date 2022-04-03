export const updateThemeFromLocalStorage = `
	(function () {
		// Change these if you use something different in your hook.
		var storageKey = "theme";

		function updateThemeDataset(theme) {
			document.body.dataset.theme = theme;
			if (theme === 'light')
				document.documentElement.classList.remove('dark')
				else document.documentElement.classList.add('dark')
		}

		var preferDarkQuery = "(prefers-color-scheme: dark)";
		var mql = window.matchMedia(preferDarkQuery);
		var supportsColorSchemeQuery = mql.media === preferDarkQuery;
		var localStorageTheme = null;
		try {
			localStorageTheme = localStorage.getItem(storageKey);
		} catch (err) {}
		var localStorageExists = localStorageTheme !== null;

		if (localStorageExists) {
			updateThemeDataset(localStorageTheme);
		} else if (supportsColorSchemeQuery) {
			var systemTheme = mql.matches ? "dark" : "light";
			updateThemeDataset(systemTheme);
			localStorage.setItem(storageKey, systemTheme);
		} else {
			var themeFromDataset = document.body.dataset.theme;
			localStorage.setItem(storageKey, themeFromDataset);
		}
	})();
`;
