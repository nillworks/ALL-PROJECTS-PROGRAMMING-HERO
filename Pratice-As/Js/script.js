const currentTab = 'allAvailableJobButton';
const activeTab = ['btn', 'bg-primaryColor', 'text-white'];
const inActiveTab = ['btn', 'text-grayColor'];

function switchTab(tab) {
  const tabs = [
    'allAvailableJobButton',
    'interviewAvailableButton',
    'rejectedAvailableJobs',
  ];

  // Jobs  Button
  for (const id of tabs) {
    const tabName = document.getElementById(id);
    console.log(tabName);
    if (id === tab) {
      tabName.classList.remove(...inActiveTab);
      tabName.classList.add(...activeTab);
    } else {
      tabName.classList.remove(...activeTab);
      tabName.classList.add(...inActiveTab);
    }
  }
}

switchTab(currentTab);
