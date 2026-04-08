document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const skillInput = document.getElementById('skillInput');
    const addSkillBtn = document.getElementById('addSkillBtn');
    const skillsList = document.getElementById('skillsList');
    const printBtn = document.getElementById('printBtn');
    
    // Theme toggling
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
        }
    });
    
    // Add Skill functionality
    const addSkill = () => {
        const skillValue = skillInput.value.trim();
        if (skillValue) {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.innerHTML = `${skillValue} <i class="fa-solid fa-xmark remove-skill"></i>`;
            skillsList.appendChild(span);
            skillInput.value = '';
        }
    };
    
    addSkillBtn.addEventListener('click', addSkill);
    skillInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addSkill();
    });
    
    // Remove skill functionality
    skillsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-skill')) {
            e.target.parentElement.remove();
        }
    });
    
    // Print functionality
    printBtn.addEventListener('click', () => {
        window.print();
    });
});
