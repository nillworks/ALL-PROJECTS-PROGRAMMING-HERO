// Get All Element ||
const getAllSectionElement = document.getElementById('allSection');
const getInterviewSectionElement = document.getElementById('interviewSection');
const getRejectsSectionElement = document.getElementById('rejectedSection');
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

  // toggle Section

  const sections = [
    getAllSectionElement,
    getInterviewSectionElement,
    getRejectsSectionElement,
  ];

  for (const section of sections) {
    section.classList.add('hidden');
  }

  if (tab === 'allAvailableJobButton') {
    getAllSectionElement.classList.remove('hidden');
  } else if (tab === 'interviewAvailableButton') {
    getInterviewSectionElement.classList.remove('hidden');
  } else {
    getRejectsSectionElement.classList.remove('hidden');
  }
}

switchTab(currentTab);
