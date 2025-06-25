    const languageSelect = document.getElementById('language-select');

    languageSelect.addEventListener('change', function() {
      const selectedLanguage = this.value;
      if (selectedLanguage === 'en') {
        window.location.href = '/'; // Redirect to English homepage
      } else if (selectedLanguage === 'es') {
        window.location.href = '/es'; // Redirect to Spanish homepage
      } else if (selectedLanguage === 'fr') {
          window.location.href = '/fr'; //Redirect to French homepage
      }
    });