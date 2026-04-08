document.addEventListener('DOMContentLoaded', () => {
    const skillInput = document.getElementById('skillInput');
    const addSkillBtn = document.getElementById('addSkillBtn');
    const skillsList = document.getElementById('skillsList');
    
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
});
