(function () {
  var STORAGE_KEY = "theme";
  var DARK_THEME_COLOR = "#14181f";
  var LIGHT_THEME_COLOR = "#ffffff";

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Ignore storage errors in restricted environments
    }
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    var metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "dark" ? DARK_THEME_COLOR : LIGHT_THEME_COLOR
      );
    }

    var toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      var isDark = theme === "dark";
      toggleBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
      toggleBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
      toggleBtn.setAttribute(
        "title",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var currentTheme =
      document.documentElement.getAttribute("data-theme") ||
      getStoredTheme() ||
      getSystemTheme();

    applyTheme(currentTheme);

    var toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var active = document.documentElement.getAttribute("data-theme") || "light";
        var next = active === "dark" ? "light" : "dark";
        setStoredTheme(next);
        applyTheme(next);
      });
    }

    if (window.matchMedia) {
      var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      var handleChange = function (event) {
        if (!getStoredTheme()) {
          applyTheme(event.matches ? "dark" : "light");
        }
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleChange);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleChange);
      }
    }
  });
})();
