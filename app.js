(() => {
  const clock = document.querySelector('#clock');

  if (clock) {
    const updateClock = () => {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    };

    updateClock();
    setInterval(updateClock, 1000);
  }

  const creatorList = document.querySelector('#creator-list');
  if (creatorList && Array.isArray(window.HSC_CREATORS)) {
    creatorList.innerHTML = window.HSC_CREATORS.map((creator, index) => {
      const name = creator.name || `Creator ${index + 1}`;
      const role = creator.role || 'CREATOR';
      return `
        <div class="creator-entry">
          <span>${role}</span>
          <strong>${name}</strong>
        </div>
      `;
    }).join('');
  }
})();
